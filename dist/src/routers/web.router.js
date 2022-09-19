"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const controller_1 = __importDefault(require("../controllers/controller"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)();
const controller = new controller_1.default();
router.get('/login', (req, res) => {
    controller.showFormLogin(req, res);
});
router.post('/login', upload.none(), (req, res, next) => {
    controller.getDataLogin(req, res, next);
});
exports.default = router;
//# sourceMappingURL=web.router.js.map