Stack Used:<br/>
    - Javascript, Typescript<br/>
    - NodeJS, NextJS, ExpressJS<br/>
    - Database: MySQL<br/>

To run the server,

`cd server`<br/>
`npm start`

To run the client,

`cd client`<br/>
`npm run dev`

Server running at http://localhost:3000<br/>
Client running at http://localhost:4000

Database setup<br/>
    - Driver: mysql<br/>
    - Username: tomei<br/>
    - Password: tomei<br/>
    - Database Name: tomeidb

In server side, we need a .env file at the root with the following properties:

NODE_ENV=development<br/>
SERVER_HOST=http://localhost<br/>
SERVER_PORT=3000<br/>
DB_HOST=localhost<br/>
DB_USER=tomei<br/>
DB_PASSWORD=tomei<br/>
DB_NAME=tomeidb<br/>
DB_DRIVER=mysql
<br/><br/>
ACCESS_TOKEN_SECRET=3b2fe2b1e1ceffbaa5cd003166b50fb63f21441e4998672693d726d985d18498703a232c8509d5436ea2ba50f9c356a585658be249acff568cef18d2a90854b7

In client, side, we need a .env file at the root with the following properties:<br/>
PORT=4000<br/>
API_HOST=http://localhost:3000/


`migration-metadata.json` contains an array of migrations that have been run which is initially empty.
`seeder-metadata.json` contains an array of seeders that have been run which is initially empty.

For start over with a fresh db, replace the contents of `migration-metadata.json` and `seeder-metadata.json` with empty arrays (like []) in order to run the necessary migrations and create initial data on first run.
