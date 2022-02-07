const jwt = require('jsonwebtoken')


module.exports = function auth(req, res, next) {
    //const token = req.header('auth-token');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZkZjY4ZDAzMGIwZTRjYTg1N2I3M2QiLCJpYXQiOjE2NDQwOTUzMzR9.wQpDslJN6rFDXPx1hebkTZvuzADTAPaIrl9oXUhfTq0";
    if(!token) return res.status(401).send('Access Denied')
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    }
    catch(err){
        res.status(400).send('Token Invalid')
    }
}