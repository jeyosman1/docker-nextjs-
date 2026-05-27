import 'dotenv/config';
import express from 'express';
import { db } from './db';
import { usersTable } from './db/schema';

const app = express();
app.use(express.json());

// GET all users
app.get('/users', async (req, res) => {
  const users = await db.select().from(usersTable);
  res.json(users);
});

// POST create a user
app.post('/users', async (req, res) => {
  const { name, age, email } = req.body;
  const newUser = await db.insert(usersTable).values({ name, age, email }).returning();
  res.json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});