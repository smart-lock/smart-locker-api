import { IComponents, system } from './system'
import { IAccount } from '~/auth/account';

const main = async () => {
  console.log('Starting system...')
  const components: IComponents = await system.start()
  console.log('System OK!')

  const adminToken = await components.token.encode({
    "id": "cjmdts33e00130a58nm8cbk8s",
    "name": "Rafael Ribeiro Correia",
    "email": "rafael@rafael.com",
    scopes: ['admin'],
  } as IAccount)
  console.log(adminToken)
}

main()
.catch((err) => {
  console.log(err)
  process.exit(1)
})
