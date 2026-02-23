const db = require('../config/database');
const heroku = require('./heroku.service');

function generateAppName(userId) {
  return `digitex-u${userId}-${Date.now()}`;
}

exports.deployBot = async (userId, data) => {

  const { repo_tarball_url, env } = data;

  if (!repo_tarball_url) throw new Error("Repo required");

  const appName = generateAppName(userId);

  // 1. Create app
  const app = await heroku.createApp(appName);

  // 2. Set env
  if (env) {
    await heroku.setConfigVars(appName, env);
  }

  // 3. Trigger build
  const build = await heroku.triggerBuild(appName, repo_tarball_url);

  // 4. Save in DB
  await db.query(
    "INSERT INTO deployments (user_id, app_name, heroku_app_id, build_id, status) VALUES (?,?,?,?,?)",
    [userId, appName, app.id, build.id, 'building']
  );

  return {
    message: "Deployment started",
    appName,
    buildId: build.id
  };
};

exports.listDeployments = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM deployments WHERE user_id=? ORDER BY id DESC",
    [userId]
  );
  return rows;
};

exports.getDeployment = async (userId, id) => {
  const [rows] = await db.query(
    "SELECT * FROM deployments WHERE id=? AND user_id=?",
    [id, userId]
  );
  return rows[0];
};

exports.restart = async (userId, id) => {
  const [rows] = await db.query(
    "SELECT app_name FROM deployments WHERE id=? AND user_id=?",
    [id, userId]
  );
  if (!rows.length) throw new Error("Not found");

  await heroku.restartDynos(rows[0].app_name);
};

exports.delete = async (userId, id) => {
  const [rows] = await db.query(
    "SELECT app_name FROM deployments WHERE id=? AND user_id=?",
    [id, userId]
  );
  if (!rows.length) throw new Error("Not found");

  await heroku.deleteApp(rows[0].app_name);

  await db.query(
    "UPDATE deployments SET status='deleted' WHERE id=?",
    [id]
  );
};
