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
exports.getRandomMovie = exports.getCreditsBYMovie = exports.getMovie = void 0;
const movie_service_1 = require("../services/movie.service");
const movieService = new movie_service_1.MovieService();
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield movieService.getMovie(id);
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
exports.getMovie = getMovie;
const getCreditsBYMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params.id;
        const response = yield movieService.getCreditsBYMovie(2);
        res.status(200).json(response);
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
exports.getCreditsBYMovie = getCreditsBYMovie;
const getRandomMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield movieService.getRandomMovie();
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
exports.getRandomMovie = getRandomMovie;
//# sourceMappingURL=movie.controller.js.map