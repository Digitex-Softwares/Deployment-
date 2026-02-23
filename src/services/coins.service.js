const db = require('../config/database');

exports.getBalance = async (userId) => {
  const [rows] = await db.query(
    "SELECT coins FROM users WHERE id=?",
    [userId]
  );
  return rows[0];
};

exports.getPackages = async () => {
  const [rows] = await db.query(
    "SELECT * FROM coin_packages WHERE is_active=1"
  );
  return rows;
};

exports.getHistory = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM coin_ledger WHERE user_id=? ORDER BY id DESC",
    [userId]
  );
  return rows;
};
