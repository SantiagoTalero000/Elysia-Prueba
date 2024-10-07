import { LoginUser } from '../../application/login.js'

export class LoginController {
    constructor(private loginUser: LoginUser) {}

    async run({ body }: any) {
        try {
            const user = await this.loginUser.run(body.email, body.password)
            return {
                code: 200,
                user,
                message: 'Usuario logueado',
            }
        } catch (e) {
            const error = e as Error
            return {
                code: 400,
                message: error.message,
            }
        }
    }
}
