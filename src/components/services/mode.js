import { KEY_ESCAPE, KEY_SLASH, KEY_N } from 'keycode-js'

export const MODE_CREATE = 'create'
export const MODE_SEARCH = 'search'
export const MODE_NONE = 'none'

export const getNextMode = (current, keyPress) => {
    switch (current) {
        case MODE_NONE:
            if (keyPress === KEY_SLASH) {
                return MODE_SEARCH
            }
            if (keyPress === KEY_N) {
                return MODE_CREATE
            }
            break
        default:
            if (keyPress === KEY_ESCAPE) {
                return MODE_NONE
            }
    }
    return current
}
