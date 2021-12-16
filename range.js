module.exports =(req, res,next) => {
    res.header('Content-Range','details 0-30/30' )
    next()
}