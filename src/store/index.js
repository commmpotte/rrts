"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducer_1 = require("./reducer");
exports.store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
