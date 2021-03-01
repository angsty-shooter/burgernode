import BaseController from "../utils/BaseController";
import { FakeDb } from "../db/FakeDb";

export class BurgerController extends BaseController{

    constructor(){
        super("api/burgers")
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }

    async getAll(_, res, next){
        try {
            return res.send([FakeDb.burgers]);
        } catch (error) {
            next (error)
        }
    }

    async create(req, res, next){
        try {
            res.send(req.body)
        } catch (error) {
            next (error)
        }
    }
}