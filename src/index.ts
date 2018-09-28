import { IComponents, system } from './system'
import { IAccount } from '~/auth/account';

const main = async () => {
  console.log('Starting system...')
  const components: IComponents = await system.start()
  console.log('System OK!')

  const adminToken = await components.token.encode({
    "id": "cjmm6cv5e000u0a128v4mvycf",
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
