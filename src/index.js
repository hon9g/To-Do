// @ts-check

/** TO-DO Item.
 * @typedef {Object} TodoItem
 * @property {number} id Unique number of the TO-DO Item.
 * @property {string} description Description of the TO-DO Item.
 * @property {boolean} isDone About the TO-DO Item completed or not.
 * @property {string} category Category of the TO-DO Item.
 * @property {Array.<string>} tags Tags of the TO-DO Item.
*/

/**
 * Represents a Todo App.
 * @class
 */
class Todo {
	constructor() {
		/** @type {Map<number:TodoItem>} */
		this.list = new Map()
	}

	/** Add a TO-DO Item.
	 * @param {TodoItem}
	 */
	 create({ id, description, isDone, category, tags }) {
		if (!this.list.has(id)) {
			this.list.set(id, { id, description, isDone, category, tags })
		}
	 }

	 /** Read one or all of the TO-DO Items.
	  * @param {number} obj.id Unique number of the TO-DO Item. (optional)
	  * @return {TodoItem | Array.<TodoItem>} One or all of TO-DO items to read.
	 */
	 read({ id } = {}) {
		if (id) {
			return this.list.get(id)
		}
		return [...this.list.values()]
	 }

	/** Change one of property of the TO-DO item.
	 * Also can change one tag item of the TO-DO item.
	 * @param {number} obj.id Unique number of the TO-DO Item. (required)
	 * @param {string} obj.property Name of the property you want to change. (required)
	 * @param {string | boolean} obj.newValue New value of the property. (required)
	 * @param {string} obj.tagName Name of the tag you want to change, if you want to change one of the tags. (optional)
	 * @return {TodoItem} Updated TO-DO item.
	*/
	 update({ id, property, newValue, tagName}) {
		if (property === 'tags') {
			const nextTags = this.list.get(id)['tags'].filter(tag => tag !== tagName)
			nextTags.push(newValue)
			this.list.get(id)['tags'] = nextTags
		} else {
			this.list.get(id)[property] = newValue
		}
		return this.list.get(id)
	 }
 
	 /** Remove one or all of the TO-DO items. 
	  * Also remove one tag or all of the tags of the TO-DO Item.
	  * @param {number} obj.id Unique number of the TO-DO Item. (required)
	  * @param {boolean} obj.isTag Whether you want to delete one or all of the tags? (optional)
	  * @param {string} obj.tagName Name of the tag, if you want to change one tag. (optional)
	 */
	 delete({id, isTag, tagName}) {}
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
