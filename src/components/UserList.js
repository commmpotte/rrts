"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var UserList = function () {
    var _a = (0, useTypedSelector_1.useTypedSelector)(function (state) { return state.user; }), users = _a.users, error = _a.error, loading = _a.loading;
    var fetchUsers = (0, useActions_1.useActions)().fetchUsers;
    (0, react_1.useEffect)(function () {
        fetchUsers();
    }, []);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("h1", { children: "Loading..." });
    }
    if (error) {
        return (0, jsx_runtime_1.jsx)("h1", { children: error });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "User List" }), (0, jsx_runtime_1.jsx)("ul", { className: "list-group text-left", children: users.map(function (user) { return ((0, jsx_runtime_1.jsx)("li", { className: "list-group-item mb-2", children: user.name }, user.id)); }) })] }));
};
exports.default = UserList;
