.6) Why is it optimal to place CSS <link>s in the <head>
and JavaScript <script><script> just before the closing
    </body> <body> tag, and how is this implemented in HTML ?




Positioning CSS <link>s in the <head> and Javascript <scripts>s just before </body> enhnaces page rendering speed and overall performance.

Placing <link>s in <head>:

Css <link> s are placed in the <head> to allow for simultaneous parsing of HTML and CSS. This ensures that stylesheets are loaded are ready when the browser starts rendering the page, facilating a quiker "first maningful paint",
this curcial for progressive rendering , a key performance metric.


Placing css at the bottom can lead to issues like unstyled content flashes (FOUC) or even bloack rending i some browsers







Placking the <script></script> before </body> :

Javascript <script></script> when placed at the bottom, allow 
the HTML to be parsed and displayed first, as scripts block HTML parsing during downloaded and execution. This improves perceived load time. For scripts that need to interact with DOM elements, this placement ensure that the DOM is fully built before script execution using defer in the <head> can also cheive this effect by delayig script execution until after HTML parsing