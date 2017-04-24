# README

A React app that gets a UK 3 hourly forecast for a specified location from http://www.metoffice.gov.uk/datapoint/.

Currently I am displaying Temperature, 'feels like' temperature, UV Index and precipitation probablity in a table for each day of the five day forecast. 

![Alt text](image.png?raw=true "Result")

How it works:
- Gets available locations from the Metoffice data API.
- Uses https://github.com/bvaughn/react-virtualized-select to provide an autocomplete select box to choose a location.
- Once a location has been selected the weather is returned for that location.

To compile:
- Run **npm run build** or **npm start** depending on requirements.

To run:
- Include the bundle.js on your HTML page.

Problems:
- The API key is out in the open for anyone to read. For anything other than a personal application the calls should probably be made server-side.