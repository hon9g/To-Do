import TodoModel from "./domain/TodoList"
import view from "./presentation/index"

const todoList = new TodoModel()
todoList.create({
	description: "첫번째 할 일",
})
todoList.create({
	description: "두번째 할 일",
})
todoList.create({
	description: "세번째 할 일",
	isDone: true,
})

view({ model: todoList })