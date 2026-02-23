require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const deploymentRoutes = require('./src/routes/deployments.routes');
app.use('/api/deployments', deploymentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/coins', require('./src/routes/coins.routes'));
app.use('/api/bots', require('./src/routes/bots.routes'));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
