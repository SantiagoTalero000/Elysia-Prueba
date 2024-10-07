import { Elysia, t } from 'elysia'
import { createUserController, loginController } from '../server/dependences.js'
import { createUserDTO, loginUserDTO } from './domain/userDTO.js'

export const userRouter = new Elysia({ prefix: '/users' })
    .get('/', () => 'Users')
    .post(
        '/register',
        createUserController.run.bind(createUserController),
        createUserDTO
    )
    .post('/login', loginController.run.bind(loginController), loginUserDTO)
