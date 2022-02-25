import { accepted as defaultMessage } from '../messages'
import { parseMessage } from '../utils'

export default accepted = (value, { message }) => {
    const validValues = ['yes', 'on', 1, true]
    const isValid = validValues.includes(value)

    if (isValid) {
        return true
    }

    return parseMessage(message, defaultMessage)
}

export const tests = () => {

}