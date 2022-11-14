"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const todo_service_1 = require("./todo/service/todo.service");
const todoService = new todo_service_1.TodoService();
(0, rxjs_1.combineLatest)([
    todoService.add({ name: 'Makan', isCompleted: true }),
    todoService.add({ name: 'Tidur', isCompleted: false }),
    todoService.add({ name: 'Bangun', isCompleted: true }),
    todoService.add({ name: 'Mandi', isCompleted: false }),
    todoService.add({ name: 'Jalan-jalan', isCompleted: false }),
    todoService.add({ name: 'Bootcamp', isCompleted: true }),
    todoService.add({ name: 'Livecode', isCompleted: true }),
]).subscribe((todos) => {
    console.log(`${todos.length} kegiatan sudah ditambahkan`);
});
todoService.notify().subscribe((isUpdated) => {
    if (isUpdated) {
        todoService.list().pipe((0, rxjs_1.map)((list) => {
            return list.map((todo) => {
                return `Todo ${todo.name} ${(todo.isCompleted ? 'sudah selesai' : 'belum selesai')}`;
            });
        })).subscribe((todos) => {
            console.log(todos);
        });
    }
});
