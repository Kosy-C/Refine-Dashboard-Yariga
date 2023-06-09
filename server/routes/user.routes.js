import express from "express";

import { getAllUsers, getUserInfoById, createUser} from "../controllers/user.controller.js";

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserInfoById);
router.route('/').post(createUser);

export default router;