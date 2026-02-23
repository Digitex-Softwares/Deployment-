const db = require('../config/database');

exports.getAll = async () => {
  const [rows] = await db.query(
    "SELECT id,name,slug,description,coins_required FROM bots WHERE is_active=1"
  );
  return rows;
};

exports.getBySlug = async (slug) => {
  const [rows] = await db.query(
    "SELECT * FROM bots WHERE slug=?",
    [slug]
  );
  return rows[0];
};
