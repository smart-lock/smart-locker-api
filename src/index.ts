import { IComponents, system } from './system'
import { IAccount } from '~/auth/account';

const main = async () => {
  const components: IComponents = await system.start()
  console.log('System is up')

  const adminToken = await components.token.encode({
    "id": "cjmb433w700730a20y54bmzhd",
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
