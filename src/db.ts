import { createPool } from 'mysql2/promise';

export async function connect() {
    try {
        const connection = await createPool({
            database: 'examples',
            host: 'localhost',
            user: 'root',
            password: '',
        });
        return connection;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error; // Rethrow the error for proper error handling at a higher level
    }
}

