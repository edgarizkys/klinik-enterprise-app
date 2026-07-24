const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const { initSchema } = require('./models/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Mount Enterprise API Routes
app.use('/api', apiRoutes);

// Root Fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Initialize Database & Start Server
initSchema().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 World-Class Enterprise Platform 'Klinik Enterprise' active on port ${PORT}`);
    });
});

module.exports = app;
