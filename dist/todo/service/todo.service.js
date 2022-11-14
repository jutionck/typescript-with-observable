"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const rxjs_1 = require("rxjs");
class TodoService {
    constructor() {
        this.todos = [];
        this.todoNotifier = new rxjs_1.Subject();
    }
    add(todo) {
        return new rxjs_1.Observable((observer) => {
            setTimeout(() => {
                todo.id = this.todos.length + 1;
                this.todos.push(todo);
                this.todoNotifier.next(true);
                observer.next(todo);
            }, 1000);
        });
    }
    list() {
        return (0, rxjs_1.of)(this.todos);
    }
    notify() {
        return this.todoNotifier.asObservable();
    }
}
exports.TodoService = TodoService;
