import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function seedCategories() {
  try {
    
    await prisma.category.deleteMany();

    //exemplo de categorias
    const categories = await prisma.category.createMany({
      data: [
        {
          name: 'Phones',
          description: 'Smartphones and mobile devices'
        },
        {
          name: 'Smart Watches',
          description: 'Wearable smart watches and fitness trackers'
        },
        {
          name: 'Cameras',
          description: 'Digital cameras and photography equipment'
        },
        {
          name: 'HeadPhones',
          description: 'Audio devices and headphones'
        },
        {
          name: 'Computers',
          description: 'Laptops, desktops and computer accessories'
        },
        {
          name: 'Gaming',
          description: 'Gaming consoles and accessories'
        }
      ]
    });

    console.log('✅ Categories seeded successfully!');
    console.log(`📊 Created ${categories.count} categories`);

    // lista
    const allCategories = await prisma.category.findMany();
    console.log('\n📋 Categories in database:');
    allCategories.forEach(cat => console.log(`- ${cat.name}`));

  } catch (error) {
    console.error('❌ Error seeding categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCategories();
