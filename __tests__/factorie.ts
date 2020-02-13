import faker from 'faker'
import factory from 'factory-girl'

import User from '../src/app/models/User'

factory.define('User', User, {
  usrName: faker.name.findName(),
  usrEmail: faker.internet.email(),
  usrPassword: faker.internet.password()
})

export default factory
