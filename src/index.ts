import { IComponents, system } from './system'

const main = async () => {
  const components: IComponents = await system.start()
  console.log('System is up')

  const adminToken = await components.token.encode({
    id: '1',
    scopes: ['admin'],
  })
}

main()
.catch((err) => {
  console.log(err)
  process.exit(1)
})
