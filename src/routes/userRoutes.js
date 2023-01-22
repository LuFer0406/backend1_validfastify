import userCtrl from "../controllers/userController.js";
import { userValidSchema } from "../validSchemas/userValid.js";

const userRoutes = (fastify, opts, done) => {
  fastify.get("/", userCtrl.getData);
  fastify.get("/:id", userCtrl.getDataById);
  fastify.post(
    "/",
    {
      schema: userValidSchema,
    },
    userCtrl.saveData
  );

  // ¿Todo está hecho? continúe
  done();
};

export default userRoutes;
