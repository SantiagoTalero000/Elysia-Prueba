import { Elysia } from 'elysia'
import { userRouter } from '../user/userRouter.js'
import swagger from '@elysiajs/swagger'

export class Server {
    private app: Elysia

    constructor() {
        this.app = new Elysia()
        this.app.use(swagger())
        this.app.derive(({ headers }) => {
            const auth = headers['authorization']

            return {
                token: auth?.startsWith('Bearer ') ? auth.slice(7) : null,
            }
        })
        this.app.group('/api', (app) => app.use(userRouter))
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log('Server running: port 3000')
        })
    }
}
