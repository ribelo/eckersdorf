(ns eckersdorf.workers.db)

(def empty-worker {:worker/first-name    nil
                   :worker/last-name     nil
                   :worker/position      nil
                   :worker/email-address nil
                   :worker/phone-number  nil
                   :worker/birth-date    nil
                   :worker/working-hours 8
                   :worker/workplace     nil
                   :worker/address       nil})

(def workers-state
  {
   :workers/workers      nil
   :workers/show-dialog? nil
   :workers/worker-form  empty-worker
   })