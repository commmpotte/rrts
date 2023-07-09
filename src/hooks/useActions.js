"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActions = void 0;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var action_creators_1 = __importDefault(require("../store/action-creators"));
var useActions = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    // console.log(ActonCreators)
    return (0, redux_1.bindActionCreators)(action_creators_1.default, dispatch);
};
exports.useActions = useActions;
