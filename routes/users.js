router.get('/', (req, res)=>{
    res.render('users/list', {users:users});
});

router.get('/new', (req, res)=>{
    res.send('New User Form');
});

router.post('/', (req, res)=>{
    const firstName = req.body.firstName;
    const isValid = firstName !== ""; //Check if they are there, added
    if(isValid)
    {
        console.log(`Adding user: ${firstName}`);
        users.push({name:firstName});
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    }
    else{
        console.log("Error adding user!");
        res.render("users/new", {firstName:firstName});
    }
});

// router.get('/:id', (req, res)=>{
//     res.send(`Getting User data: ${req.params.id}`);
// });
router.route('/:id').get((req, res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req, res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});

const users =[ {name:"George"},{name:"Justyna"} ];

router.param("id", (req, res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;
