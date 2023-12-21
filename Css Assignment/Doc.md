First i had read the requirement

Started wtih making a main-container <-- centered it by using margin top-0, l-r: auto;

created a header as container of my first content
first container <-- header given a height not with cause i want it to auto shriked to full page width

second-container <-- content ( stored 3 divs) 

flex-container = content

flex-items = div1 , div2 , div3 named with classes accordingly

Main-axis : Space-Between to flex items

Y-axis : Centered using align-items

Text: centerd using text-aligned

div2 = main-text <--- flex-basis as it was a flexitem so definitely worked

last container <--- footer = given a height and an individual color , loooks good tho

and overall , one thing i liked is i didn't given a height vh to the main-container

cause i have to give a border solid to main container so ,it should give a feel of container
and if am giving a fixed height like viewport to my main-container, the footer is overlapping
but i can fix it ,by reducing the footer width, but the thing is i want to make the
container scalable it means whenever i will add more divs after and after in the main-container

it should not over lapping the height and thats why i didnt given a height to the main-container.
