import jwt from 'jsonwebtoken'

const token = jwt.sign({}, process.env.REACT_APP_JWT_SECRET, {
  algorithm: 'HS256',
})

export { token }
