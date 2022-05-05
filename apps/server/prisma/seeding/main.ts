import { PrismaClient } from '@prisma/client'
import { seedUser } from './user.seed'

export const prismaSeedClient = new PrismaClient()

export async function generateSeeds<T>(
  type: string,
  callback: () => Promise<T>
) {
  for (let i = 1; i <= 25; i++) {
    await callback().then(() => console.log(`${type} seed ${i} completed`))
  }
}

async function seed() {
  await seedUser()
}

seed()
  .catch((e) => {
    console.log('Seeding Error:\n\t', e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaSeedClient.$disconnect()
  })
