import TodoModel from "./domain/TodoList"
import TodoView from "./presentation/index"
import { TodoListLocalRepository } from "./infrastructure/repository/TodoList"

TodoView({ model: new TodoModel( new TodoListLocalRepository() ) })
