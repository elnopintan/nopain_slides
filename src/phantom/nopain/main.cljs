(ns nopain.main)

(defn map->js [m]
  (let [out (js-obj)]
    (doseq [[k v] m]
      (aset out (name k) v))
    out))

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
other ClojureScript colls into JavaScript arrays, and ClojureScript
keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
                                 (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))



(def p (.create (js/require "webpage")))
(.log js/console (str "Iniciando..." p))
(set! (.-viewportSize p) (clj->js { "width" 800, "height"  2000 }))
(.log js/console (.-width (.-viewportSize p)))
(.open p "http://localhost:3000" 
       #(do
          (if (not= % "success")
           (.log js/console "fallo")	

          (do
            (.log js/console "exito")
            (.setTimeout js/window 
             (fn [] (.render p "prueba.pdf")(.render p "prueba.jpg")
                    ;(.exit js/phantom)
               )
             20000)))))

