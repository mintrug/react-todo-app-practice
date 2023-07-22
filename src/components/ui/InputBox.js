import { KEY_RETURN } from 'keycode-js'
import { useState } from 'react'

function InputBox(props) {
    const { updateItems } = props
    const [value, setValue] = useState('')

    const handleKeyDownEvent = (e) => {
        if (e.keyCode === KEY_RETURN) {
            updateItems(e.target.value)
            setValue('')
        }
    }

    const handleChangeEvent = (e) => {
        setValue(e.target.value)
    }

    return (
        <input
            value={value}
            className='form-control add'
            placeholder='Add new'
            autoFocus
            onKeyDown={handleKeyDownEvent}
            onChange={handleChangeEvent}
        />
    )
}

export default InputBox
