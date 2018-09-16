import { IComponents, system } from './system'
import { IAccount } from '~/auth/account';

const main = async () => {
  const components: IComponents = await system.start()
  console.log('System is up')

  const adminToken = await components.token.encode({
    id: '1',
    email: 'rafael.correia.poli@gmail.com',
    scopes: ['admin'],
  } as IAccount)
  console.log(adminToken)
}

main()
.catch((err) => {
  console.log(err)
  process.exit(1)
})
