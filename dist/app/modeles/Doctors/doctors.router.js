"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorsRouter = void 0;
const express_1 = __importDefault(require("express"));
const doctors_controller_1 = require("./doctors.controller");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const router = express_1.default.Router();
// for taks parpous i made only fetch doctos and  nedded all functions like create, update,delete etc.
router.get('/', (0, Auth_1.default)(), doctors_controller_1.doctorsControllers.getAllDoctors);
exports.doctorsRouter = router;
