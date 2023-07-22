import CheckBox from './CheckBox'
function ListTodoItem(props) {
    const { data, changeStatus } = props

    return (
        <div className='list-item'>
            <CheckBox
                id={data.id}
                defaultChecked={data.completed}
                changeStatus={changeStatus}
            />
            <label htmlFor={data.id}>{data.text}</label>
        </div>
    )
}

export default ListTodoItem
