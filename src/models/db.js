// Turso SQLite Cloud Client Model Init
const { createClient } = require('@libsql/client');

const dbUrl = process.env.TURSO_DATABASE_URL || 'libsql://edgartech-db-edgarizkys.aws-ap-northeast-1.turso.io';
const dbAuthToken = process.env.TURSO_AUTH_TOKEN || '';

const db = createClient({
    url: dbUrl,
    authToken: dbAuthToken
});

async function initSchema() {
    try {
        await db.execute(`
            CREATE TABLE IF NOT EXISTS records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                category TEXT NOT NULL,
                amount REAL NOT NULL,
                status TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✓ Turso Database Schema Initialized for Klinik Enterprise');
    } catch (e) {
        console.log('Database init notice:', e.message);
    }
}

module.exports = { db, initSchema };
