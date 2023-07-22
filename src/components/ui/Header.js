import InputBox from './InputBox'
import SearchBox from './SearchBox'

function Header(props) {
    const { title, query } = props.data
    const { updateItems, setSearchQuery } = props.actions

    return (
        <div>
            <h1 className='header'>{title.toUpperCase()}</h1>
            <InputBox updateItems={updateItems} />
            <SearchBox query={query} setSearchQuery={setSearchQuery} />
        </div>
    )
}

export default Header
