/** @typedef {'description'} PROPERTY_DESCRIPTION */
/** @typedef {'isDone'} PROPERTY_ISDONE */
/** @typedef {'category'} PROPERTY_CATEGORY */
/** @typedef {'tags'} PROPERTY_TAGS */
/** @typedef {PROPERTY_DESCRIPTION | PROPERTY_DESCRIPTION | PROPERTY_CATEGORY | PROPERTY_TAGS} Property */
/** @typedef {'general'} DEFAULT_CATEGORY */

/** @type {PROPERTY_DESCRIPTION} */
const PROPERTY_DESCRIPTION = 'description'

/** @type {PROPERTY_ISDONE} */
const PROPERTY_ISDONE = 'isDone'

/** @type {PROPERTY_CATEGORY} */
const PROPERTY_CATEGORY = 'category'

/** @type {PROPERTY_TAGS} */
const PROPERTY_TAGS = 'tags'

/** @type {DEFAULT_CATEGORY} */
const DEFAULT_CATEGORY = 'general'

interface TodoItem {
    id: number // Unique number of the TO-DO Item.
    description: string // Description of the TO-DO Item.
    isDone: boolean // About the TO-DO Item completed or not.
    category: string // Category of the TO-DO Item.
    tags: Array<string> // Tags of the TO-DO Item.
}

interface UpdateTodoItem extends Pick<TodoItem, 'id'> {
    property: string // Name of the property you want to change.
    newValue: string | boolean // New value of the property.
    tagName?: string // Name of the tag you want to change, if you want to change one of the tags.
}

interface DeleteTodoItem extends Pick<TodoItem, 'id'> {
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
				category: category ?? DEFAULT_CATEGORY,
				tags: tags ?? [],
			})
		}
	 }

	 read({ id }: Pick<TodoItem, 'id'> | any = {}): TodoItem | Array<TodoItem> {
		if (id) {
			return this.list.get(id)
		}
		return [...this.list.values()]
	 }

	 update({ id, property, newValue, tagName}: UpdateTodoItem): TodoItem {
		if ([PROPERTY_DESCRIPTION, PROPERTY_DESCRIPTION, PROPERTY_CATEGORY, PROPERTY_TAGS].includes(property)) {
			throw new Error(`Invaild property: ${property}`)
		}
		if (PROPERTY_TAGS === property && typeof newValue === 'string') {
			const nextTags = this.list.get(id)[PROPERTY_TAGS].filter(tag => tag !== tagName)
			nextTags.push(newValue)
			this.list.get(id)[PROPERTY_TAGS] = nextTags
		} else {
			this.list.get(id)[property] = newValue
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
	property: 'tags',
	newValue: 'd',
	tagName: 'a',
})
todo.update({
	id: 1,
	property: 'isDone',
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
