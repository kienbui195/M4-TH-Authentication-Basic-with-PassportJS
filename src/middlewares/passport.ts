import passport from "passport";
import { User } from "../schemas/user.model";
import { Strategy as LocalStratery } from "passport-local";

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use('local', new LocalStratery(async (username: string, password: string, done: any) => {
    const user = await User.findOne({ username: username });
    if (!user) {
        return done(null, false);
    } else {
        if (user.password === password) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }
}))

export default passport;