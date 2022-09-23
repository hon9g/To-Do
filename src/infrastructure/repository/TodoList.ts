import { TodoItem, TodoItemProps } from "../../domain/TodoList"
import LocalStorage from "../infrastructure/localstorage"

const KEY_TODO_DATA = "MY_TODO_LIST" as const

export abstract class TodoListRepository {
    load(): Array<TodoItem> {
        return []
    }
    save(todoList: Array<TodoItem>) {}
}

const isTodoList = (data: Object): data is Array<TodoItem> => {
    if (!Array.isArray(data)) {
        return false
    }
    return data.reduce((result: boolean, item: any) => {
        if (typeof item[TodoItemProps.DESCRIPTION] !== "string") {
            return false
        }
        if (typeof item[TodoItemProps.CATEGORY] !== "string") {
            return false
        }
        if (typeof item[TodoItemProps.IS_DONE] !== "boolean") {
            return false
        }
        if (!Array.isArray(item[TodoItemProps.TAGS])) {
            return false
        }
        if (!item[TodoItemProps.TAGS].reduce((result: boolean, tag: any) => result && typeof tag === "string", true)) {
            return false
        }
        return result && true
    }, true)
}

export class TodoListLocalRepository extends TodoListRepository {
    load(): Array<TodoItem> {
        const todoList = LocalStorage.get(KEY_TODO_DATA)
        if (!isTodoList(todoList)) {
            LocalStorage.remove(KEY_TODO_DATA)
            return []
        }
        return todoList
    }
    save(todoList: Array<TodoItem>) {
        LocalStorage.set(KEY_TODO_DATA, todoList)
    }
}
