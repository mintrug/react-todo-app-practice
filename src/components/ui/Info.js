import {
    INFO_SHORTCUT_KEYS,
    INFO_CANCEL_SHORTCUT_KEY,
} from '../services/text_US'
import { MODE_NONE } from '../services/mode'

function Info(props) {
    const { mode } = props.data
    return (
        <p className='info'>{`${
            mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY
        }`}</p>
    )
}

export default Info
