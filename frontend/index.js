// frontend/index.js
import fetch from 'node-fetch'; // Используем import вместо require
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));
// Отдельный API-эндпоинт для получения данных с backend
app.get('/data', async (req, res) => {
    try {
        const response = await fetch('http://backend:3000/api/hello');
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data from backend' });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});