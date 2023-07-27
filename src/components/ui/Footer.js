import Filter from './Filter'
import WrapperFunctionBtn from './WrapperFunctionBtn'

function Footer(props) {
    const { countContent, filter, mode } = props.data
    const { changeFilter, changeMode } = props.actions

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
                <WrapperFunctionBtn changeMode={changeMode} mode={mode} />
            </div>
            <div className='count-content'>{`${countContent} items left`}</div>
            <div className='filter'>
                <Filter filter={filter} changeFilter={changeFilter} />
            </div>
        </div>
    )
}

export default Footer
