import { Children, cloneElement, useEffect } from 'react'

import { getNextMode } from '../services/mode'

function KeyStrokeHandler(props) {
    const { mode } = props.data
    const { changeMode } = props.actions
    const handleKeyDown = (e) => {
        const nextMode = getNextMode(mode, e.keyCode)
        if (mode !== nextMode) {
            e.preventDefault()
            changeMode(nextMode)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    const { children, ...newProps } = props
    const newChildren = Children.map(children, (child) =>
        cloneElement(child, newProps)
    )
    return <div>{newChildren}</div>
}

export default KeyStrokeHandler
