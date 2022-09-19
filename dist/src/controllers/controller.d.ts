import { Response, Request } from "express";
declare class Controller {
    showFormLogin(req: Request, res: Response): void;
    getDataLogin(req: Request, res: Response, next: any): void;
}
export default Controller;
