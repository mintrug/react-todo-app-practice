import { includeString } from '../util/common'

export const FILTER_ALL = 'all'
export const FILTER_ACTIVE = 'active'
export const FILTER_COMPLETED = 'completed'

export const filterItems = {
    [FILTER_ALL]: 'All',
    [FILTER_ACTIVE]: 'Active',
    [FILTER_COMPLETED]: 'Completed',
}

/**
 * Create a filtered list
 * @param {Array} list
 * @param {String} filter
 * @return {Array}
 */
export const applyFilter = (list, filter) => {
    switch (filter) {
        case FILTER_ACTIVE:
            return list.filter((item) => item.completed === false)
        case FILTER_COMPLETED:
            return list.filter((item) => item.completed === true)
        default:
            return list
    }
}

export const search = (list, searchValue) => {
    return list.filter(({ text }) => includeString(text, searchValue))
}
