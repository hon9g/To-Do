/**
 * Represents a Todo App.
 * @class
 */
class Todo {
	/** Add a TO-DO Item.
	 * @param {number} obj.id Unique number of the TO-DO Item. (required)
	 * @param {string} obj.description Description of the TO-DO Item. (optional)
	 * @param {boolean} obj.isDone About the TO-DO Item completed or not. (optional)
	 * @param {string} obj.category Category of the TO-DO Item. (optional)
	 * @param {Array.<string>} obj.tags Tags of the TO-DO Item. (optional)
	 * @return {boolean} About the creation was successful or not.
	 */
	 create({ id, description, isDone, category, tags }) {}

	 /** Read All of the TO-DO Items.
	 */
	 read() {}

	/** Change the tag content of the TO-DO Item.
	*/
	 update() {}
 
	 /** Remove one or all of the TO-DO items. 
	  * Also remove one tag or all of the tags of the TO-DO Item.
	 */
	 delete() {}
}
