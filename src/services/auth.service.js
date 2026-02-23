const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async ({ email, password }) => {
  const hash = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (email,password_hash) VALUES (?,?)",
    [email, hash]
  );

  return { message: "Registered successfully" };
};

exports.login = async ({ email, password }) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  if (!rows.length) throw new Error("User not found");

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "SECRET_KEY",
    { expiresIn: "7d" }
  );

  return { token };
};
