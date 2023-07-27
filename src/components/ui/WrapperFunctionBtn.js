import searchIcon from '../../assets/images/icons-search.svg'
import plusIcon from '../../assets/images/icons-plus.svg'
import { MODE_CREATE, MODE_SEARCH, MODE_NONE } from '../services/mode'

function WrapperFunctionBtn(props) {
    const { changeMode, mode } = props
    const isAddBtn = () => mode === MODE_CREATE
    const isSearchBtn = () => mode === MODE_SEARCH

    return (
        <>
            <span
                title='Add new'
                className={`plus-icon ${isAddBtn() ? 'function-active' : ''}`}
                onClick={() => changeMode(isAddBtn() ? MODE_NONE : MODE_CREATE)}
            >
                <img src={plusIcon} alt='Add new'></img>
            </span>
            <span
                title='Search'
                className={`search-icon ${
                    isSearchBtn() ? 'function-active' : ''
                }`}
                onClick={() =>
                    changeMode(isSearchBtn() ? MODE_NONE : MODE_SEARCH)
                }
            >
                <img src={searchIcon} alt='Search'></img>
            </span>
        </>
    )
}

export default WrapperFunctionBtn
