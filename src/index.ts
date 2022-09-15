enum TodoItemProps {
	ID = 'id',
	DESCRIPTION = 'description',
	IS_DONE = 'isDone',
	CATEGORY = 'category',
	TAGS = 'tags'
}

enum TodoItemCategory {
	default = 'general',
}

interface TodoItem {
    [TodoItemProps.ID]: number // Unique number of the TO-DO Item.
    [TodoItemProps.DESCRIPTION]: string // Description of the TO-DO Item.
    [TodoItemProps.IS_DONE]: boolean // About the TO-DO Item completed or not.
    [TodoItemProps.CATEGORY]: string // Category of the TO-DO Item.
    [TodoItemProps.TAGS]: Array<string> // Tags of the TO-DO Item.
}

interface UpdateTodoItem extends Pick<TodoItem, TodoItemProps.ID> {
    property: Exclude<TodoItemProps, TodoItemProps.ID> // Name of the property you want to change.
    newValue: string | boolean // New value of the property.
    tagName?: string // Name of the tag you want to change, if you want to change one of the tags.
}

interface DeleteTodoItem extends Pick<TodoItem, TodoItemProps.ID> {
    isTag?: boolean // Whether you want to delete one or all of the tags?
    tagName?: string // Name of the tag, if you want to change one tag.
}

class Todo {
    list: Map<number, TodoItem>

	constructor() {
		/** @type {Map<number:TodoItem>} */
		this.list = new Map()
	}

	 create({ id, description, isDone, category, tags }: TodoItem) {
		if (!this.list.has(id)) {
			this.list.set(id, { 
				id,
				description: description ?? '',
				isDone: isDone ?? false,
				category: category ?? TodoItemCategory.default,
				tags: tags ?? [],
			})
		}
	 }

	 read({ id }: Pick<TodoItem, TodoItemProps.ID> | any = {}): TodoItem | Array<TodoItem> {
		if (id) {
			return this.list.get(id)
		}
		return [...this.list.values()]
	 }

	 update({ id, property, newValue, tagName}: UpdateTodoItem): TodoItem {
		switch(property) {
			case TodoItemProps.TAGS:
				if (typeof newValue === 'string') {
					const nextTags = this.list.get(id)[TodoItemProps.TAGS].filter(tag => tag !== tagName)
					nextTags.push(newValue)
					this.list.get(id)[TodoItemProps.TAGS] = nextTags
				}
				break
			case TodoItemProps.IS_DONE:
				if (typeof newValue === 'boolean') {
					this.list.get(id)[TodoItemProps.IS_DONE] = newValue
				}
				break
			case TodoItemProps.CATEGORY || TodoItemProps.DESCRIPTION:
				if (typeof newValue === 'string') {
					this.list.get(id)[property] = newValue
				}
				break
			default:
				throw new Error(`Invaild property to update Todo Item: ${property}`)
		}
		return this.list.get(id)
	 }
 
	 delete({id, isTag, tagName}: DeleteTodoItem | any = {}) {
		if (isTag && tagName) {
			const nextTags = this.list.get(id)['tags'].filter(tag => tag !== tagName)
			this.list.get(id)['tags'] = nextTags
			return
		}
		if (isTag) {
			this.list.get(id)['tags'] = []
		}
		if (id) {
			this.list.delete(id)
			return
		}
		this.list.clear()
	 }
}

// Test
const todo = new Todo();
console.log(todo)
todo.create({
	id: 1,
	description: 'dd',
	isDone: false,
	category: 'A',
	tags: ['a', 'b', 'c']
})
todo.create({
	id: 2,
	description: 'dd2',
	isDone: false,
	category: 'A2',
	tags: ['a2', 'b2', 'c2']
})

console.log(todo.read())

todo.update({
	id: 1,
	property: TodoItemProps.TAGS,
	newValue: 'd',
	tagName: 'a',
})
todo.update({
	id: 1,
	property: TodoItemProps.IS_DONE,
	newValue: true,
})

console.log(todo.read({ id: 1 }))

todo.delete({
	id: 1,
	isTag: true,
	tagName: 'b',
})
console.log(todo.read())

todo.delete({ id: 1 })

todo.create({
	id: 3,
	description: 'dd3',
	isDone: false,
	category: 'A3',
	tags: ['a3', 'b3', 'c3']
})

console.log(todo.read())

todo.delete()

console.log(todo.read())
