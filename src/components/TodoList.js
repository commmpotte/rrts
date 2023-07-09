"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var TodoList = function () {
    var _a = (0, useTypedSelector_1.useTypedSelector)(function (state) { return state.todo; }), page = _a.page, error = _a.error, loading = _a.loading, todos = _a.todos, limit = _a.limit;
    var _b = (0, useActions_1.useActions)(), fetchTodos = _b.fetchTodos, setTodoPage = _b.setTodoPage;
    var pages = [1, 2, 3, 4, 5];
    (0, react_1.useEffect)(function () {
        fetchTodos(page, limit);
    }, [page]);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("h1", { children: "Loading..." });
    }
    if (error) {
        return (0, jsx_runtime_1.jsx)("h1", { children: error });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Todo List" }), (0, jsx_runtime_1.jsx)("ul", { className: "list-group text-left", children: todos.map(function (todo) { return ((0, jsx_runtime_1.jsxs)("li", { className: "list-group-item m-0", children: [todo.id, " - ", todo.title] }, todo.id)); }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex' }, className: "d-flex", children: pages.map(function (p) { return ((0, jsx_runtime_1.jsx)("li", { className: "list-group-item p-2 m-2", onClick: function () { return setTodoPage(p); }, style: {
                        cursor: 'pointer',
                        background: p === page ? 'blue' : 'green',
                        color: 'white',
                    }, children: p }, p)); }) })] }));
};
exports.default = TodoList;
