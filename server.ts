import express from 'express';
import { createServer as createViteServer } from 'vite';
import { testConnection } from './src/db.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Test Database Connection on startup
  // This will log an error if MAMP is not running, but won't crash the server completely
  testConnection().catch(() => {
    console.log('Continuing without database connection...');
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Example API route to get products from DB
  // app.get('/api/products', async (req, res) => {
  //   try {
  //     const [rows] = await pool.query('SELECT * FROM products');
  //     res.json(rows);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Database error' });
  //   }
  // });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files (setup would be different)
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
