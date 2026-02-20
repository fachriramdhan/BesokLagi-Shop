import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuration for MAMP MySQL connection
// Default MAMP port is often 8889, but standard MySQL is 3306.
// Check your MAMP preferences -> Ports to confirm.
export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'besoklagi',
  port: Number(process.env.DB_PORT) || 8889, // Default MAMP port
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create the connection pool
export const pool = mysql.createPool(dbConfig);

// Helper function to test connection
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to MySQL database via MAMP!');
    connection.release();
    return true;
  } catch (error: any) {
    if (error.code === 'ECONNREFUSED') {
      console.warn('---------------------------------------------------------');
      console.warn('MySQL Connection Failed (ECONNREFUSED)');
      console.warn('This is expected in the cloud preview environment.');
      console.warn('The app will continue to run in offline/demo mode.');
      console.warn('To connect locally, ensure MAMP is running on port ' + dbConfig.port);
      console.warn('---------------------------------------------------------');
    } else {
      console.error('Error connecting to MySQL database:', error);
    }
    return false;
  }
}
