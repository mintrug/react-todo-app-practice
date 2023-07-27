import InputBox from './InputBox'
import SearchBox from './SearchBox'
import { MODE_CREATE, MODE_SEARCH } from '../services/mode'

function WrapperInput(props) {
    const { mode, updateItems, query, setSearchQuery } = props
    switch (mode) {
        case MODE_CREATE:
            return <InputBox updateItems={updateItems} />
        case MODE_SEARCH:
            return <SearchBox query={query} setSearchQuery={setSearchQuery} />
        default:
            return null
    }
}

export default WrapperInput
