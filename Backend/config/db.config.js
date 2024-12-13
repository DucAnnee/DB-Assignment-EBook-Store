import OracleDB from "oracledb";

const config = {
  user: 'c##dbuser',
  password: '1234',
  connectString: 'localhost:1521/xe'
}

let dbconnection;

async function initializeDBConnection() {
  try {
    // Establish the connection
    dbconnection = await OracleDB.getConnection(config);
    console.log('Oracle DB connected!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

// You can call this function at the start of your application
initializeDBConnection();

export default dbconnection;