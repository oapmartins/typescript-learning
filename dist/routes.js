"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateCouseService_1 = __importDefault(require("./CreateCouseService"));
function CreateCourse(request, response) {
    CreateCouseService_1.default.execute({
        name: 'Typescript',
        // duration: 10, 
        educator: 'Octávio',
    });
    CreateCouseService_1.default.execute({
        name: 'React',
        duration: 10,
        educator: 'Pedro',
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
