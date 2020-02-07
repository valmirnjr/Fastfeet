import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import DeliveryManController from "./app/controllers/DeliveryManController";
import FileController from "./app/controllers/FileController";
import DeliveryController from "./app/controllers/DeliveryController";
import TransportController from "./app/controllers/TransportController";

import validateStartDate from "./app/validators/DateCheck";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", SessionController.store);

routes.get(
  "/deliveryman/:id/deliveries",
  validateStartDate,
  TransportController.index
);
routes.put(
  "/deliveryman/:deliverymanId/deliveries/:deliveryId",
  TransportController.update
);

routes.post(
  "/deliveryman/:deliverymanId/deliveries/:deliveryId/signature",
  upload.single("file"),
  TransportController.store
);

routes.use(authMiddleware);

routes.get("/recipients", RecipientController.index);
routes.post("/recipients", RecipientController.store);
routes.put("/recipients/:id", RecipientController.update);

routes.get("/deliverymen", DeliveryManController.index);
routes.post("/deliverymen", DeliveryManController.store);
routes.put("/deliverymen/:id", DeliveryManController.update);
routes.delete("/deliverymen/:id", DeliveryManController.delete);

routes.post("/files", upload.single("file"), FileController.store);

routes.get("/deliveries", DeliveryController.index);
routes.post("/deliveries", DeliveryController.store);
routes.put("/deliveries/:id", DeliveryController.update);
routes.delete("/deliveries/:id", DeliveryController.delete);

export default routes;
