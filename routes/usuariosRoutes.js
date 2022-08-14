import express  from "express";
const router = express.Router();
import {

    obtenerUsuarios,

} from "../controllers/clienteController.js";

router.
    route('/')
    .get(obtenerUsuarios)

export default router;