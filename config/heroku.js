module.exports = {
  headers: {
    Authorization: `Bearer ${process.env.HEROKU_API_KEY}`,
    Accept: "application/vnd.heroku+json; version=3",
    "Content-Type": "application/json"
  }
};
