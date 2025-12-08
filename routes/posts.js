const express = require('express');

const router = express.Router();

const posts = [
    { title: "First Post", content: "This is a sample post." },
    { title: "Second Post", content: "Another example post." }
];

router.get('/', (req, res)=>{
    res.render('posts/list', {posts:posts});
});

router.get('/new', (req, res)=>{
    res.render('posts/new');
});

router.post('/', (req, res)=>{
    const title = req.body.title;
    const content = req.body.content;

    if (title && content) {
        posts.push({ title: title, content: content });
        res.redirect('/posts');
    } else {
        res.render('posts/new', {error: "Both fields required"});
    }
});

module.exports = router;
