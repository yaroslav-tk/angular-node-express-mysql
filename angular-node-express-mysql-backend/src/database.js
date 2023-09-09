// const mysql = require('mysql');
const mysql = require('mysql2')

let connection;

const db = {
    connect: () => {
        connection = mysql.createConnection(process.env.DATABASE_URL)
        // connection = mysql.createConnection({
        //     host: process.env.DB_HOST,
        //     user: process.env.DB_USER,
        //     password: process.env.DB_PASS,
        //     database: process.env.DB_NAME,
        //     socketPath: process.env.DB_SOCKET,
        // });
        console.log('Connected to PlanetScale!')
        connection.connect();
    },
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}

module.exports = db;