const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(logger);

app.use('/users', userRouter);
app.use('/posts',postRouter);

app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index",
        {user:"George",});
});

app.get('/new', (req, res)=>{
    res.render('users/new', {firstName:""})
});

app.listen(3030);

function logger(req, res, next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}
