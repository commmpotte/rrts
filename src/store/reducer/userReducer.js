"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
var users_1 = require("../../types/users");
var initialState = {
    users: [],
    loading: false,
    error: null,
};
var userReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case users_1.UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case users_1.UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };
        case users_1.UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] };
        default:
            return state;
    }
};
exports.userReducer = userReducer;
