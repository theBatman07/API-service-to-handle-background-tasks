import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const connectionURL = 'postgres://postgres:postgres@localhost:5432/api';
const db = pgp(connectionURL);

// Attempt to connect to the database
db.connect()
  .then(obj => {
    console.log(`Connected to the database using ${connectionURL}`);
    obj.done(); 
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

export default db;
