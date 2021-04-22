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
exports.MovieService = void 0;
const axios = require('axios');
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const url = process.env.MOVIESDB;
class MovieService {
    constructor() {
        // GET movie by id
        this.getMovie = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios.get(url + 'movie/' + id + '?api_key=' + process.env.API_KEY + '&language=en-FR');
                if (res.status === 200) {
                    return res.data;
                }
                return res.response.data;
            }
            catch (error) {
                return error;
            }
        });
        // GET credits by movie id
        this.getCreditsBYMovie = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios.get(url + 'movie/' + id + '/credits?api_key=' + process.env.API_KEY + '&language=en-FR');
                if (response.status === 200) {
                    return response.data;
                }
                return false;
            }
            catch (err) {
                console.error(err);
                return false;
            }
        });
        // GET random movie
        this.getRandomMovie = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = this.between(1, 1000);
            try {
                let data = yield this.getMovie(id);
                if (((_a = data === null || data === void 0 ? void 0 : data.response) === null || _a === void 0 ? void 0 : _a.status) && data.response.status === 404) {
                    data = yield this.getRandomMovie();
                }
                return data;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
        // GET random acting of movie
        this.getRandomActingMovie = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getCreditsBYMovie(id);
            return this.randomProperty(data.cast);
        });
        this.randomProperty = (obj) => {
            return obj[Math.floor(Math.random() * obj.length)];
        };
    }
    between(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map