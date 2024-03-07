"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const class_validator_1 = require("class-validator");
const userValidator_1 = require("../../domain/validation/userValidator");
class LoginUserUseCase {
    constructor(userInterface) {
        this.userInterface = userInterface;
    }
    run(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            //validator-class
            let post = new userValidator_1.ValidateLogin(email, password);
            const validation = yield (0, class_validator_1.validate)(post);
            if (validation.length > 0) {
                throw new Error(JSON.stringify(validation));
            }
            try {
                const userLogin = yield this.userInterface.loginUser(email, password);
                return userLogin;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.LoginUserUseCase = LoginUserUseCase;