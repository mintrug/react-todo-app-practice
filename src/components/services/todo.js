export const ITEMS_DEFAULT = [
    {
        id: 1,
        text: 'Learn Javascript',
        completed: false,
    },
    {
        id: 2,
        text: 'Learn React',
        completed: false,
    },
    {
        id: 3,
        text: 'Build a React App',
        completed: false,
    },
]

/**
 * Add a new item into the list and return the new update list
 * @param {Array} list
 * @param {String} text
 * @return {Array}
 */
export const addItem = (list, text) => {
    const nextId = list.length + 1
    const newItem = {
        id: nextId,
        text,
        completed: false,
    }
    return [...list, newItem]
}

/**
 * Update status for completed property in the item
 * @param {Array} items
 * @param {Number} id
 * @param {Boolean} isChecked
 * @return {Array}
 */
export const updateStatus = (items, id, isChecked) => {
    const newList = items.map((item) => ({
        ...item,
        completed: item.id === id ? isChecked : item.completed,
    }))
    return newList
}
