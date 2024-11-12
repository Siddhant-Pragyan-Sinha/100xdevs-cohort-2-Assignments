const express = require('express');
const bodyParser = require('body-parser');
const { swaggerUi, swaggerSpec } = require('./swagger');
const app = express();
require('dotenv').config();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Serve Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routers
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api-docs`);
});
