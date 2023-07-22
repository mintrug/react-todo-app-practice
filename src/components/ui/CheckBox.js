import { useState } from 'react'

function CheckBox(props) {
    const { id, defaultChecked, changeStatus } = props
    const [isChecked, setIsChecked] = useState(defaultChecked)

    const handleChangeChecked = (e) => {
        setIsChecked(e.target.checked)
        changeStatus(id, e.target.checked)
    }

    return (
        <input
            type='checkbox'
            checked={isChecked}
            id={id}
            onChange={handleChangeChecked}
        />
    )
}

export default CheckBox
