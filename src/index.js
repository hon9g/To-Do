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

	 /** Read one or all of the TO-DO Items.
	  * @param {number} obj.id Unique number of the TO-DO Item. (optional)
	  * @return {boolean} About the reading was successful or not.
	 */
	 read({ id }) {}

	/** Change one of property of the TO-DO item.
	 * Also can change one tag item of the TO-DO item.
	 * @param {number} obj.id Unique number of the TO-DO Item. (required)
	 * @param {string} obj.property Name of the property you want to change. (required)
	 * @param {string | boolean} obj.newValue New value of the property. (required)
	 * @param {string} obj.tagName Name of the tag you want to change, if you want to change one of the tags. (optional)
	 * @return {boolean} About the updating was successful or not.
	*/
	 update({ id, property, newValue, tagName}) {}
 
	 /** Remove one or all of the TO-DO items. 
	  * Also remove one tag or all of the tags of the TO-DO Item.
	  * @param {number} obj.id Unique number of the TO-DO Item. (required)
	  * @param {boolean} obj.isTag Whether you want to delete one or all of the tags? (optional)
	  * @param {string} obj.tagName Name of the tag, if you want to change one tag. (optional)
	  * @return {boolean} About the delete operation was successful or not.
	 */
	 delete({id, isTag, tagName}) {}
}
