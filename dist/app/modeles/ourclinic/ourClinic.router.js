"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ourClinicRouter = void 0;
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const ourClinic_controller_1 = require("./ourClinic.controller");
const router = express_1.default.Router();
// for taks parpous i made only fetch clinic and nedded all functions like create, update,delete etc.
router.get('/', (0, Auth_1.default)(), ourClinic_controller_1.ourclinicControllers.getAllOurClinic);
exports.ourClinicRouter = router;
