const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/api/posts', (req, res) => {
        const posts = [
            {id: 1,
            title: "What I learned this Sunday 9/15/24",
            description: "Check it out!",
            imgSrc: "/Jesus.jpg",
            href: "/Jesus.tsx",
            },
        ];
        res.json(posts);
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server running on http://localhost:3000');
    });
});