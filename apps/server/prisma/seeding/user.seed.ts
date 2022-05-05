import { generateSeeds, prismaSeedClient } from './main'

import faker from '@faker-js/faker'

export async function seedUser() {
  await prismaSeedClient.user.deleteMany()
  generateSeeds('User', () =>
    prismaSeedClient.user.create({
      data: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber('###-###-####'),
      },
    })
  )
}
