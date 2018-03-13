(ns alchemy.prod
  (:require [alchemy.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
