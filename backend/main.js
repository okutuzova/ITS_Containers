import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend' });

})

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`);
})