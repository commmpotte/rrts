"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoReducer = void 0;
var todo_1 = require("../../types/todo");
var initialState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
};
var todoReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case todo_1.TodoActionsTypes.FETCH_TODOS:
            return __assign(__assign({}, state), { loading: true });
        case todo_1.TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, todos: action.payload });
        case todo_1.TodoActionsTypes.FETCH_TODOS_ERROR:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case todo_1.TodoActionsTypes.SET_TODO_PAGE:
            return __assign(__assign({}, state), { page: action.payload });
        default:
            return state;
    }
};
exports.todoReducer = todoReducer;
