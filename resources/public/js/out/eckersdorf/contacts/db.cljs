(ns eckersdorf.contacts.db)

(def empty-contact {:contact/first-name    nil
                    :contact/last-name     nil
                    :contact/email-address nil
                    :contact/phone-number  nil
                    :contact/company       nil
                    :contact/title         nil
                    :contact/description   nil})

(def contacts-state
  {
   :contacts/contacts         nil
   :contacts/show-dialog?     false
   :contacts/concat-form      empty-contact
   :contacts/search-form      nil
   :contacts/temp-search-form nil
   :contacts/search-timeout   nil
   })