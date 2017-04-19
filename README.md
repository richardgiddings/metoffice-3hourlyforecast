# README

A React app that gets a 3 hourly forecast for a specified location from http://www.metoffice.gov.uk/datapoint/.

How it works:
- Gets available locations from the Metoffice data API.
- Uses https://github.com/bvaughn/react-virtualized-select to provide an autocomplete select box to choose a location.
- Once a location has been selected the weather is returned for that location.

To compile:
- Run **npm build** or **npm start** depending on requirements.

To run:
- Include the bundle.js on your HTML page.

To do:
- Display weather data in a friendly way.
- Obscure the API key.