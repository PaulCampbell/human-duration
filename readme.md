Human Duration
==============

Write a function that takes a number of seconds as an integer, and returns a string representing the duration in a human readable form.

* should break the duration down into seconds, minutes, hours, days, weeks and years
* should omit a unit if there are none of that unit. i.e. if there are no years, then omit the years unit. if there are no seconds (i.e. if it is a round number of minutes) then omit the seconds.
* should show each unit separated by a comma except for the last one which is separated from the others by "and".
* should show each unit in singular or plural form as appropriate

Some examples
-------------

3600 -> "1 hour"
7200 -> "2 hours"
77777777 -> "2 years, 24 weeks, 2 days, 4 hours, 56 minutes, 17 seconds"
