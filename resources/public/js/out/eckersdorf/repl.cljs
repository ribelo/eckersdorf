(ns eckersdorf.repl
  (:require [re-frame.core :as rf]
            [re-frame.db :refer [app-db]]))

@app-db

(rf/dispatch [:workplaces/request-list])
(rf/subscribe [:workplaces/list])
