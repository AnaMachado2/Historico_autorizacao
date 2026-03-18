import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello TypeScript!' });
});

app.listen(3333, () => {
    console.log('🚀 Server started on http://localhost:3333');
});