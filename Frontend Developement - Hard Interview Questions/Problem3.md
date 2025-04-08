<h1> How Do the <script>, <script async> , and <script defer>
tags differ, and what are their practical implications in 
web development, including example implementations ?


Plain <script>

Standard <script> tags without async or 
defer attributes pause HTML parsing to fetch and execute
the script immediately. This can slow down page rendering if
the script is large on relies on a slow network

Example Implmentation ;

<script src="script.js"></script>



<script async></script>

The Async attribute allows a script

to be fetched in parrallel to HTML parsing and 
executed as soon as it is available, which might be before HTML
parsing completes. This attribute is ideal for independent 
scripts like analytics, as the order of script execution isn't guranteed.


Exampled implementation:

<script async src="analytics.js"></script>



<script defer> </script>

Using defer, the script is fetched along with 
HTML parsing but executed only after the entire
doucment is parsed, just before the DOMContentLoaded 
event. Scripts with defer are executed in the order they appear in the document, making them suitable for scripts that
depend on the fully parsed DOM or other scripts.


Example implementation:

<script defer src="main.js"></script>


. Use async for scripts that are independent and not critical
for initial page rendering

. Use defer for scripts that need the entire DOM or are dependent
on other scripts.

. Both async and defer are ignored if the script lacks src attribute.

. Scripts with async or defer that use document.write() will be ignored.


