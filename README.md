# Setup guide

## Server setup

### .env file

DB_URI: URI to mongoDB of your choice.
NODE_ENV: put in 'development' if deployed. Helps track all process.env variables

## Client side setup

### .env file

BASE_URL: The server base URL that the app will make XHR calls to.

## Testing:

Server side testing is available for POST/GET. Although express-restify-mongoose already handles the CRUD logic, the tests help sure that connection and data model are setup correctly

