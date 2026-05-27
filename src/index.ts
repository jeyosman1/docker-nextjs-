import 'dotenv/config';
import express, { Request, Response } from 'express';
import { db } from './db/index.js';
import { usersTable } from './db/schema.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, '../views'));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// GET - Render HTML page
app.get('/', async (_req: Request, res: Response) => {
  const users = await db.select().from(usersTable);
  res.render('index', { users });
});

// GET - API JSON endpoint
app.get('/users', async (_req: Request, res: Response) => {
  const users = await db.select().from(usersTable);
  res.json(users);
});

// POST - Create user
app.post('/users', async (req: Request, res: Response) => {
  const { name, age, email } = req.body;
  await db.insert(usersTable).values({ name, age, email });
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});