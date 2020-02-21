import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import DeliveryManController from "./app/controllers/DeliveryManController";
import FileController from "./app/controllers/FileController";
import DeliveryController from "./app/controllers/DeliveryController";
import TransportController from "./app/controllers/TransportController";
import DeliveryProblemController from "./app/controllers/DeliveryProblemController";

import validateStartDate from "./app/validators/DateCheck";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", SessionController.store);

routes.get("/deliveryman/:id/deliveries", TransportController.index);

// Deliveryman is taking a new delivery to make
routes.post(
  "/deliveryman/:deliverymanId/deliveries/:deliveryId",
  validateStartDate,
  TransportController.store
);

routes.put(
  "/deliveryman/:deliverymanId/deliveries/:deliveryId/signature",
  upload.single("file"),
  TransportController.update
);

routes.post("/delivery/:deliveryId/problems", DeliveryProblemController.store);

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

routes.get("/delivery/problems", DeliveryProblemController.index);
routes.get("/delivery/:deliveryId/problems", DeliveryProblemController.index);
routes.delete(
  "/delivery/:problemId/problems",
  DeliveryProblemController.delete
);
export default routes;
