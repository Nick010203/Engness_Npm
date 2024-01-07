"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodUserLoginSchema = exports.zodUserCreationSchema = exports.zodPassword = exports.zodCity = exports.zodBirthday = exports.zodEmail = exports.zodGender = exports.zodUserName = void 0;
const zod_1 = require("zod");
const userNameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^[a-zA-Z0-9-_]+$/;
exports.zodUserName = zod_1.z.string().max(7).regex(userNameRegex);
// Genderで出来ないかな...
exports.zodGender = zod_1.z.enum(["male", "female", "middle"]);
exports.zodEmail = zod_1.z.string().email();
exports.zodBirthday = zod_1.z.string();
exports.zodCity = zod_1.z.string();
exports.zodPassword = zod_1.z.string().min(8).max(32).regex(passwordRegex);
exports.zodUserCreationSchema = zod_1.z.object({
    userName: exports.zodUserName,
    gender: exports.zodGender,
    email: exports.zodEmail,
    birthYear: exports.zodBirthday,
    city: exports.zodCity,
    password: exports.zodPassword
});
exports.zodUserLoginSchema = zod_1.z.object({
    email: exports.zodEmail,
    password: exports.zodPassword
});
//# sourceMappingURL=user.js.map