const isTokenPresent = (req) => {
    return req.headers.authorization && req.headers.authorization.startsWith('Bearer')
}

const getAccessTokenFromHeader = (req) => {
    const accessToken = req.headers.authorization.split(' ')[1]
    return accessToken
}

const sendToken = (user, statuscode, res) => {
    const token = user.generateJwt();
    return res.status(statuscode).json({
        success: true,
        token
    })
}


module.exports = { sendToken, getAccessTokenFromHeader, isTokenPresent }