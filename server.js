require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const deploymentRoutes = require('./src/routes/deployments.routes');
app.use('/api/deployments', deploymentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
