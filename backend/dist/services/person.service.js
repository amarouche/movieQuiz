"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PersonService = void 0;
const axios = require('axios');
const dotenv = __importStar(require("dotenv"));
const movie_service_1 = require("./movie.service");
dotenv.config();
const url = process.env.MOVIESDB;
const movieService = new movie_service_1.MovieService();
class PersonService {
    constructor() {
        this.getPerson = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios.get(url + 'person/' + id + '?api_key=' + process.env.API_KEY + '&language=en-FR')
                    .then((resp) => {
                    return resp;
                })
                    .catch((error) => {
                    return error;
                });
                if (res.status === 200) {
                    return res.data;
                }
                return res.response.data;
            }
            catch (error) {
                return error;
            }
        });
        this.getRandomPerson = () => __awaiter(this, void 0, void 0, function* () {
            const id = movieService.between(1, 1000);
            try {
                let data = yield this.getPerson(id);
                if (!data.success && data.status_code === 34) {
                    data = yield this.getRandomPerson();
                }
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map