# nopain

Slideshow for devcon1 about parallelism and concurrency

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start the slideshow with leiningen

    lein run

Inside the repl write the next commands:
    user=> (use 'nopain.handler)
    user=> (use 'nopain.slides)
    user=> (use 'nopain.gui)
    user=> (require '[nopain.slides.data :as d])
    user=> (require '[nopain.slides.par :as p])
    user=> (run-server)
The url to connect to the slide-show is:
    http://localhost:3000
To show concurrency slides:
    user=> (remote d/slides)
To show parallelism slides:
    user=> (remote p/slides)

If you are using Light-Table ide you can connect to the project and open file
    src/nopain/slides/presentation.clj
The push ctrl/cmd intro on (run-server) and then on any slide present. 

## License

Copyright © 2012 FIXME
