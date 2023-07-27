import WrapperInput from './WrapperInput'

function Header(props) {
    const { title, query, mode } = props.data
    const { updateItems, setSearchQuery } = props.actions

    return (
        <div>
            <h1 className='header'>{title.toUpperCase()}</h1>
            <WrapperInput
                mode={mode}
                updateItems={updateItems}
                query={query}
                setSearchQuery={setSearchQuery}
            />
        </div>
    )
}

export default Header
