function SearchBox(props) {
    const { query, setSearchQuery } = props
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <input
            autoFocus
            value={query}
            className='form-control search'
            placeholder='Search'
            onChange={handleSearch}
        />
    )
}

export default SearchBox
