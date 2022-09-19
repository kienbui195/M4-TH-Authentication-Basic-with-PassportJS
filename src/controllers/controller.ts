import { Response, Request } from "express";
import passport from "passport";
import { User } from "../schemas/user.model";


class Controller {

    showFormLogin(req: Request, res: Response) {
        res.render('login');
    }

    getDataLogin(req: Request, res: Response, next: any) {
        passport.authenticate('local', (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send("Wrong email or password");
            } else {
                req.login(user, () => {
                    res.send('You are authenticated')
                })
            }
        }) (req, res, next)
    }
 }

export default Controller;