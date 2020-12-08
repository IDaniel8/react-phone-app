import { v4 as uuidv4 } from 'uuid'

function generateNewID() {
  return uuidv4()
}

export { generateNewID }
