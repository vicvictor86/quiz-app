import ensureAuthenticate from "@modules/users/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";
import AlternativesController from "../controllers/AlternativesController";

const alternativesRouter = Router();
const alternativesController = new AlternativesController();

alternativesRouter.post('/', ensureAuthenticate, alternativesController.create);
alternativesRouter.put('/', ensureAuthenticate, alternativesController.update);
alternativesRouter.get('/', alternativesController.show);
alternativesRouter.get('/:id', alternativesController.index);
alternativesRouter.delete('/:id', ensureAuthenticate, alternativesController.delete);

export default alternativesRouter;
