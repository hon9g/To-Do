import { TodoListRepository } from "../infrastructure/repository/TodoList"

export const getNextMidnight = (today) => {
  today.setHours(24, 0, 0, 0)
  return today
}

export enum TodoItemProps {
	ID = 'id',
	DESCRIPTION = 'description',
	IS_DONE = 'isDone',
	CATEGORY = 'category',
	TAGS = 'tags',
  DEADLINE = 'deadline'
}

enum TodoItemCategory {
	default = 'general',
}

export interface TodoItem {
    [TodoItemProps.ID]: Date // Unique string of the TO-DO Item.
    [TodoItemProps.DESCRIPTION]: string // Description of the TO-DO Item.
    [TodoItemProps.IS_DONE]: boolean // About the TO-DO Item completed or not.
    [TodoItemProps.CATEGORY]: string // Category of the TO-DO Item.
    [TodoItemProps.TAGS]: Array<string> // Tags of the TO-DO Item.
    [TodoItemProps.DEADLINE]: Date
}

interface UpdateTodoItem extends Pick<TodoItem, TodoItemProps.ID> {
    property: Exclude<TodoItemProps, TodoItemProps.ID> // Name of the property you want to change.
    newValue: string | boolean // New value of the property.
    tagName?: string // Name of the tag you want to change, if you want to change one of the tags.
}

interface DeleteTodoItemTag extends Pick<TodoItem, TodoItemProps.ID> {
    tagName: string // Name of the tag, if you want to change one tag.
}

class TodoList {
    private list: Map<TodoItem[TodoItemProps.ID], TodoItem>
	private repository: TodoListRepository

	constructor( repository: TodoListRepository ) {
		this.list = new Map()
		this.repository = repository

		const intialData = repository.load()
		for (const item of intialData) {
			this.create({
				[TodoItemProps.DESCRIPTION]: item[TodoItemProps.DESCRIPTION],
				[TodoItemProps.CATEGORY]: item[TodoItemProps.CATEGORY],
				[TodoItemProps.IS_DONE]: item[TodoItemProps.IS_DONE],
				[TodoItemProps.TAGS]: item[TodoItemProps.TAGS],
			})
		}
	}

	private save(todoItem: TodoItem) {
		this.list.set(todoItem.id, todoItem)
		this.repository.save(this.readAll())
	}

	public create({ description, isDone, category, tags, deadline }: Pick<TodoItem, TodoItemProps.DESCRIPTION> & Partial<TodoItem>) {
		const id = new Date()
		const todoItem: TodoItem = {
			id,
			description: description,
			isDone: isDone ?? false,
			category: category ?? TodoItemCategory.default,
			tags: tags ?? [],
      deadline: deadline ?? getNextMidnight( new Date()),
		}
		this.save(todoItem)
	}

	public read({ id }: Pick<TodoItem, TodoItemProps.ID>): TodoItem | void {
		if (!this.list.has(id)) {
			throw new Error(`invild id to read Todo Item: ${id}`)
		}
		return this.list.get(id)
	}

	public readAll(): Array<TodoItem> {
		return [...this.list.values()]
	}

	public update({ id, property, newValue, tagName}: UpdateTodoItem): TodoItem | void {
        const todoItem: TodoItem | undefined = this.list.get(id)
        if (!todoItem) {
            throw new Error(`No Todo Item with id: ${id}`)
        }
		switch(property) {
			case TodoItemProps.TAGS:
				if (typeof newValue === 'string') {
					const nextTags = todoItem[TodoItemProps.TAGS].filter(tag => tag !== tagName)
					nextTags.push(newValue)
					todoItem[TodoItemProps.TAGS] = nextTags
				}
				break
			case TodoItemProps.IS_DONE:
				if (typeof newValue === 'boolean') {
					todoItem[TodoItemProps.IS_DONE] = newValue
				}
				break
			case TodoItemProps.CATEGORY || TodoItemProps.DESCRIPTION:
				if (typeof newValue === 'string') {
					todoItem[property] = newValue
				}
				break
			default:
				throw new Error(`Invaild property to update Todo Item: ${property}`)
		}
		return this.list.get(id)
	}
 
	public delete({ id }: Pick<TodoItem, TodoItemProps.ID>) {
		this.list.delete(id)
    this.repository.save(this.readAll())
	}

	public deleteAll() {
		this.list.clear()
	}

	public deleteTag({id, tagName}: DeleteTodoItemTag) {
		const todoItem: TodoItem | undefined = this.list.get(id)
		if (!todoItem) {
			throw Error(`No Todo Item with id: ${id}`)
		}
		const nextTags = todoItem[TodoItemProps.TAGS].filter(tag => tag !== tagName)
		todoItem[TodoItemProps.TAGS] = nextTags
	}

	public deleteAllTag({ id }: Pick<TodoItem, TodoItemProps.ID>) {
		const todoItem: TodoItem | undefined = this.list.get(id)
		if (!todoItem) {
			throw Error(`No Todo Item with id: ${id}`)
		}
		todoItem[TodoItemProps.TAGS] = []
	}

  public getDefaultDeadline() {
    return getNextMidnight(new Date())
  }

  public static isOutdated(deadline: Date) {
    const now = new Date()
    return deadline < now
  }
}

export default TodoList
