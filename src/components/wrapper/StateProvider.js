import { useState, Children, cloneElement } from 'react'

import { ITEMS_DEFAULT, addItem, updateStatus } from '../services/todo'
import { FILTER_ALL, applyFilter, search } from '../services/filter'

function StateProvider({ children }) {
    const [items, setItems] = useState(ITEMS_DEFAULT)
    const [filter, setFilter] = useState(FILTER_ALL)
    const [query, setQuery] = useState('')
    const title = 'Things to do'

    const updateItems = (value) => {
        setItems(addItem(items, value))
    }

    const changeFilter = (value) => {
        setFilter(value)
    }

    const changeStatus = (id, isChecked) => {
        setItems(updateStatus(items, id, isChecked))
    }

    const setSearchQuery = (value) => {
        setQuery(value)
    }

    const filteredList = search(applyFilter(items, filter), query)
    const countContent = filteredList.length

    const props = {
        data: { items, filter, title, filteredList, countContent, query },
        actions: {
            updateItems,
            changeFilter,
            changeStatus,
            setSearchQuery,
        },
    }

    const newChildren = Children.map(children, (child) =>
        cloneElement(child, props)
    )

    return <div>{newChildren}</div>
}

export default StateProvider
