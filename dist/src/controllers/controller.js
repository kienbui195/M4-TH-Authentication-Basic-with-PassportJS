"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
class Controller {
    showFormLogin(req, res) {
        res.render('login');
    }
    getDataLogin(req, res, next) {
        passport_1.default.authenticate('local', (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send("Wrong email or password");
            }
            else {
                req.login(user, () => {
                    res.send('You are authenticated');
                });
            }
        })(req, res, next);
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map