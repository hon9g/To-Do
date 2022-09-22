import TodoModel from "./domain/TodoList"
import TodoView from "./presentation/index"

TodoView({ model: new TodoModel() })
