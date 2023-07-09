"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var UserList_1 = __importDefault(require("./components/UserList"));
var TodoList_1 = __importDefault(require("./components/TodoList"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "row align-items-md-stretch", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-md-6", children: (0, jsx_runtime_1.jsx)(UserList_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "col-md-6", children: (0, jsx_runtime_1.jsx)(TodoList_1.default, {}) })] }) }) }));
}
exports.default = App;
