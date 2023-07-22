import ListTodoItem from './ListTodoItem'

function ListTodo(props) {
    const { filteredList } = props.data
    const { changeStatus } = props.actions

    return (
        <div className='list-todo'>
            {filteredList.length !== 0 ? (
                filteredList.map((item) => (
                    <ListTodoItem
                        key={item.id}
                        data={item}
                        changeStatus={changeStatus}
                    />
                ))
            ) : (
                <div className='alert'>There are no items.</div>
            )}
        </div>
    )
}

export default ListTodo
