// this is a comment
import { Main } from './app/Main'
import { emphasizeString } from './typed/language'

var message = 'Hello Typscript'
console.log(message)

new Main().render()

var emphasizedMessage = emphasizeString(message, 3)
console.log(emphasizedMessage)
