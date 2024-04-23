// pages/api/signin.js

import connectDB from '../route/db.mjs';
import User from '../route/User.mjs';

connectDB();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Here you can create a session or JWT token for the user
    res.status(200).json({ message: 'Signin successful' });
  } catch (error) {
    console.error('Signin failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
