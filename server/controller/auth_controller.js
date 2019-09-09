





const login = async (req, res) => {
    // body info 
    const {username, password, } = req.body;
    // db instance
    const db = req.app.get('db');
    // find user with email
    const foundUser = await db.find_user([email]);
    // check to see length of users
    if(!foundUser[0]){
        return res.status(403).send('Invalid credentials, please try again!')
    }
    // see if user is authed
    const authedPassword = bcrypt.compareSync(password, foundUser[0].password);
    // get user account
    const userAccount = await db.get_user_account([foundUser[0].id]);
    // check to see if pin is correct
    const authPin = bcrypt.compareSync(pin, userAccount[0].pin);
    // check to see if authed
    if(authedPassword && authPin){
        // remove pass
        delete foundUser[0].password;
        // store user onto session
        req.session.user = foundUser[0];
        // create account obj
        const accountInfo = {
            savings: userAccount[0].savings,
            checking: userAccount[0].checking,
            user_id: foundUser[0].id
        };
        // send user account info back
        res.status(200).send(accountInfo);
    } else {
        // send error message
        res.status(401).send('Invalid Pin or Password!');
    }
};