import express  from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
} from "../controllers/category";

const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", getDetail);
router.post("/categories",  create);
router.put("/categories/:id",  update);
router.delete("/categories/:id",  remove);

export default router;
