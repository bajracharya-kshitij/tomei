To run app: `npm start`
For development: `npm run dev`

To setup database:

- mysql -u root -p
- create user '<username>'@'localhost' identified by '<password>'; (use username and password from .env file)
- create database <databasename>; (use databasename from .env file)
- grant all privileges on `<databasename>`.* to '<username>'@'localhost';