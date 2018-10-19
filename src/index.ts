import { IAccount } from '~/auth/account'
import { IComponents, system } from './system'

const main = async () => {
  console.log('Starting system...')
  const components: IComponents = await system.start()
  console.log('System started!')

  const adminToken = await components.token.encode({
    id: 'cjmm6cv5e000u0a128v4mvycf',
    name: 'Rafael Ribeiro Correia',
    email: 'rafael@rafael.com',
    scopes: ['admin'],
  } as IAccount)
  console.log('admin token:')
  console.log(adminToken)
  console.log(`http://localhost:${components.config.getRequiredValue(['service', 'port'])}/graphql`)
}

main()
.catch((err) => {
  console.log(err)
  process.exit(1)
})
