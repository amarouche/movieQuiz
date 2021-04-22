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
exports.getRandomPerson = exports.getPerson = void 0;
const person_service_1 = require("../services/person.service");
const personService = new person_service_1.PersonService();
const getPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield personService.getPerson(id);
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
exports.getPerson = getPerson;
const getRandomPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(movieService.between(2, 1000))
    try {
        const response = yield personService.getRandomPerson();
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
exports.getRandomPerson = getRandomPerson;
//# sourceMappingURL=person.controller.js.map