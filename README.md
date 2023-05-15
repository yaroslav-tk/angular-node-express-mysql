It is a Full-stack app with Angular on frontend, node.js/express on backend and MySQL database.

You need to create MySQL database for this app.
You can use templateDB folder to import default data in MySQL database (Server - Data Import in Workbench).

To install backend follow next steps:
- npm install from angular-node-express-mysql-backend folder
- create .env file and connect to your MySQL DB. .env file should contain next fields:

    DB_USER=userName
    
    DB_PASS=userPassword
    
    DB_NAME=databaseName
    
    DB_HOST=localhost

    JWT_SECRET=secretKey
- npm start

To install frontend follow next steps:
- npm install from angular-node-express-mysql-frontend folder
- npm start
