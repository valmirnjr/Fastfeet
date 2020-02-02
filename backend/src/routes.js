import { Router } from "express";

import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import DeliveryManController from "./app/controllers/DeliveryManController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", SessionController.store);

routes.use(authMiddleware);

routes.post("/recipients", RecipientController.store);
routes.put("/recipients/:id", RecipientController.update);

routes.get("/deliverymen", DeliveryManController.index);
routes.post("/deliverymen", DeliveryManController.store);
routes.put("/deliverymen/:id", DeliveryManController.update);
routes.delete("/deliverymen/:id", DeliveryManController.delete);

export default routes;
