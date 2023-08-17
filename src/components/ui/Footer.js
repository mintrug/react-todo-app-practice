import Filter from './Filter'
import WrapperFunctionBtn from './WrapperFunctionBtn'

function Footer(props) {
    const { countContent, filter, mode } = props.data
    const { changeFilter, changeMode } = props.actions

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
