const jwt = require('jwt-simple');
const passportJwt = require('passport-jwt');

const ExtractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;
const AnonymousStrategy = require('passport-anonymous').Strategy;

const SECRET = 'EXPCRIATIVABSI2021';
const ISSUER = "PUCPR";

const params = {
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true,
    issuer: ISSUER
}

function clockTimestamp(date = new Date()) {
    return Math.floor(date.getTime() / 1000);
}

module.exports.createToken = (user) => {
    const DAYS = 10;

    let exp = new Date();
    exp.setDate(exp.getDate() + DAYS);

    const payload = {
        iss: ISSUER,
        iat: clockTimestamp(),
        exp,
        user: { userId: user.userId, admin: user.admin}
    };
    return jwt.encode(payload, SECRET);
}

module.exports.strategy = {}

module.exports.strategy.jwt = new Strategy(params, (payload, done) => {
    payload.user.userId = parseInt(payload.user.userId);
    done(null, payload.user);
});

module.exports.strategy.none = new AnonymousStrategy();