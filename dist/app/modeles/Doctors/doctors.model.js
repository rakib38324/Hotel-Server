"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const mongoose_1 = require("mongoose");
const doctorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    specialist: { type: String, required: true },
    like: { type: String, required: true },
    experience: { type: Number, required: true },
    img: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Doctor = (0, mongoose_1.model)('Doctor', doctorSchema);
