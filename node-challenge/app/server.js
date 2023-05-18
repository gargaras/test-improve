const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

// Setting Port
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes.js'));

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
    sequelize.authenticate()
        .then(() => {
            console.log('We are connected!!')
        })
});