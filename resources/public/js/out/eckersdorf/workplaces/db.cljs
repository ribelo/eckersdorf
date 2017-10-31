(ns eckersdorf.workplaces.db)

(def workplaces-state
  {
   :workplace/workplaces     nil
   :workplace/show-dialog    false
   :workplace/workplace-form {:workplace/name          nil
                              :workplace/type          "dc"
                              :workplace/email-address nil
                              :workplace/address       {:address/street-name   nil
                                                        :address/street-number nil
                                                        :address/house-number  nil
                                                        :address/zip-code      nil
                                                        :address/city          nil}}
   })