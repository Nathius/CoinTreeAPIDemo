# CoinTreeAPIDemo
Simple application for retrieving and displaying data from the CoinTree API

<h2>Descirption</h2>
<p>
This application uses a single web api based project which contains all the required code.
It is expected that a fully fledged application would have several projects each handling different domains.
For example a seperate project for each of the domains of; database access, bussiness logic, public facing api, 
and a seperate project containing the 'front end' application / client in whatever front end framework seemed appropiate.
</p>
<p>
The backend of this application consists of a single useful api endpoint for retrieving data from the public coinTree api. 
As the application grows it is assumed that further api endpoints would be added, along with things like authentication 
and standard Create Read Update Delete operations to stored data.
As it stands the applications backend is largly a wrapper for the only api call it makes. But demonstraites c# style api development.
The backend api definition can be seen and tested using the swagger auto generated documentation.
</p>
<p>
The front end is a simple html and javascript powered web page. 
The front end manages the storage of previous session data in cookies, which it retrieves on load.
It also manages the calling of the backend to retrieve the current price data.
The front end handels the display of the data, rolling over of old prices, calculating percentage changes and compairing the watch price.
</p>
<p>
Currently there isnt much error handeling, no error logs, no 'designed' messages to let the user know something isn't working as expected.
</p>

<h2>Running the solution</h2>
<p>
To run the application clone the repository and run the project with visual studio. 
It should open a webpage and begin running without much trouble.
</p>

<h3>Things that may go wrong:</h3>
<p>
Front end expects to find the backend at http://localhost/CoinTreeDemoApp <br />
Which requires setting the project->properties->web->servers to local iis with the above url and creating the virtual directory <br />
(As shown in the 'ReadMeExtras' folder in a screen shot. <br />
Alternativly you could update the url in the front end ajax call in scripts->PriceDisplay.js->getPrice() <br />
</p>

<p>
New readme section, for testing purposes, using pull requests
</p>

