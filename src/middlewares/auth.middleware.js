const authMiddleware = (req, res, next, err) => {
    if(!req.session.username || !req.session.password){
        res.status(403).json({
            success: false,
            message: 'User not logged in'
        })
    }
    next();
}

module.exports = authMiddleware;