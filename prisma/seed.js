const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'a.sivakumar898@gmail.com';
  const plainPassword = '123456789';

  // Hash the password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // Create or update the admin user
  const user = await prisma.adminUser.upsert({
    where: { email: email },
    update: {
      password: hashedPassword,
    },
    create: {
      email: email,
      password: hashedPassword,
    },
  });

  console.log(`Admin user ${user.email} has been created/updated.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
