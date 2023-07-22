import Filter from './Filter'
import searchIcon from '../../assets/images/icons-search.svg'
import plusIcon from '../../assets/images/icons-plus.svg'

function Footer(props) {
    const { countContent, filter } = props.data
    const { changeFilter } = props.actions
    const functionItems = [
        {
            title: 'Add new',
            className: 'plus-icon',
            icon: plusIcon,
        },
        {
            title: 'Search',
            className: 'search-icon',
            icon: searchIcon,
        },
    ]

    // // Update function button effect
    // const handleFunction = (e) => {
    //     const functionItems = Array.from(document.querySelectorAll('span'))
    //     const functionItemClasslist = e.currentTarget.classList

    //     if (Array.from(functionItemClasslist).includes('function-active')) {
    //         document.querySelector('.search-input').classList.add('hidden')
    //         functionItemClasslist.remove('function-active')
    //     } else {
    //         document.querySelector('.search-input').classList.remove('hidden')
    //         functionItems.map((functionItem) =>
    //             functionItem.classList.remove('function-active')
    //         )
    //         functionItemClasslist.add('function-active')
    //     }

    //     document.querySelector('.search-input').placeholder =
    //         e.currentTarget.title
    //     document.querySelector('.search-input').focus()
    // }

    return (
        <div className='footer-wrapper'>
            <div className='function'>
                {functionItems.map((functionItem) => (
                    <span
                        title={functionItem.title}
                        key={functionItem.title}
                        className={`${functionItem.className} ${
                            functionItem.className === 'plus-icon'
                                ? 'function-active'
                                : ''
                        }`}
                        // onClick={handleFunction}
                    >
                        <img
                            src={functionItem.icon}
                            alt={functionItem.title}
                        ></img>
                    </span>
                ))}
            </div>
            <div className='count-content'>{`${countContent} items left`}</div>
            <div className='filter'>
                <Filter filter={filter} changeFilter={changeFilter} />
            </div>
        </div>
    )
}

export default Footer
