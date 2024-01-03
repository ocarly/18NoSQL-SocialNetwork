const router = require("express").Router();
import userRoutes from "./usersRoute";
import thoughtRoutes from "./thoughtsRoute";

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

export default router;