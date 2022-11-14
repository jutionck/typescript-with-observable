import { combineLatest, map } from "rxjs";
import { Todo } from "./todo/model/todo";
import { TodoService } from "./todo/service/todo.service";

const todoService: TodoService = new TodoService();
combineLatest([
  todoService.add({ name: 'Makan', isCompleted: true }),
  todoService.add({ name: 'Tidur', isCompleted: false }),
  todoService.add({ name: 'Bangun', isCompleted: true }),
  todoService.add({ name: 'Mandi', isCompleted: false }),
  todoService.add({ name: 'Jalan-jalan', isCompleted: false }),
  todoService.add({ name: 'Bootcamp', isCompleted: true }),
  todoService.add({ name: 'Livecode', isCompleted: true }),
]).subscribe((todos: Todo[]) => {
  console.log(`${todos.length} kegiatan sudah ditambahkan`);
});

todoService.notify().subscribe((isUpdated) => {
  if (isUpdated) {
    todoService.list().pipe(
      map((list: Todo[]) => {
        return list.map((todo: Todo) => {
          return `Todo ${todo.name} ${(todo.isCompleted ? 'sudah selesai' : 'belum selesai')}`
        })
      })
    ).subscribe((todos) => {
      console.log(todos);

    })
  }
})
