"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var userReducer_1 = require("./userReducer");
var todoReducer_1 = require("./todoReducer");
exports.rootReducer = (0, redux_1.combineReducers)({ user: userReducer_1.userReducer, todo: todoReducer_1.todoReducer });
