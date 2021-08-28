Stack Used:
    - Javascript, Typescript
    - NodeJS, NextJS, ExpressJS
    - Database: MySQL

To run the server,

`
    cd server
    npm start
`

To run the client,

`
    cd client
    npm run dev
`

Server running at http://localhost:3000
Client running at http://localhost:4000

Database setup
    - Driver: mysql
    - Username: tomei
    - Password: tomei
    - Database Name: tomeidb

In server side, we need a .env file at the root with the following properties:

NODE_ENV=development
SERVER_HOST=http://localhost
SERVER_PORT=3000
DB_HOST=localhost
DB_USER=tomei
DB_PASSWORD=tomei
DB_NAME=tomeidb
DB_DRIVER=mysql

ACCESS_TOKEN_SECRET=3b2fe2b1e1ceffbaa5cd003166b50fb63f21441e4998672693d726d985d18498703a232c8509d5436ea2ba50f9c356a585658be249acff568cef18d2a90854b7

In client, side, we need a .env file at the root with the following properties:
PORT=4000
API_HOST=http://localhost:3000/


`migration-metadata.json` contains an array of migrations that have been run which is initially empty.
`seeder-metadata.json` contains an array of seeders that have been run which is initially empty.

For start over with a fresh db, replace the contents of `migration-metadata.json` and `seeder-metadata.json` with empty arrays (like []) in order to run the necessary migrations and create initial data on first run.
