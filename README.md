Airport chooser:

##a) No external 3rd party component used, only REACT
##b) The actual JSON is directly fetched through a GET call, the link used in the demo is from the below link. If some other json needs to be tested, the AirportChooser.js needs ##to be updated with the JSON
##c) Run npm install and npm start to start the UI
##d) Note this is barebones at the moment which changes just sticking to the below ask. If needed, some things that can definetly added are a Autocomplete search Input, ability to Filter, sort and other things, but im just implementing this as an initial version


Implement a React component "AirportChooser" which is a button used to select one of many airports. The button when clicked should show a dropdown with list of all available airports. Each airport should display its name, city/country, and airport code. Display a loading state in case list of airports is not ready initially. Ensure the component can effectively support a large number of airports (40,000+). Include CSS styles for the component as well as a usage example. Do not use any 3rd party components for this project, only React itself. The actual list of airports should not be hardcoded in the component, but uploaded from a file. This list of airports may be useful for testing: https://gist.github.com/tdreyno/4278655

## Available Scripts

In the project directory, you can run:

### `npm install`
Install all node dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
