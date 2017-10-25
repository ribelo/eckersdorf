// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.db');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
eckersdorf.work_schedule.db.work_schedule_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),null,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),cljs_time.core.first_day_of_the_month.call(null,cljs_time.core.now.call(null)),new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),(function (){var now = cljs_time.core.now.call(null);
return cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,now),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,now),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
})(),new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),false,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=db.js.map?rel=1508957869443
