import { filterItems } from '../services/filter'

function Filter(props) {
    const { filter, changeFilter } = props

    return (
        <>
            {Object.keys(filterItems).map((key) => (
                <div
                    className={`filter-item ${
                        key === filter ? 'filter-item-active' : ''
                    }`}
                    onClick={() => changeFilter(key)}
                    key={key}
                >
                    {filterItems[key]}
                </div>
            ))}
        </>
    )
}

export default Filter
