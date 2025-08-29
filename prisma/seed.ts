import {PrismaClient} from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {

  await prisma.review.deleteMany({});
  await prisma.storageOption.deleteMany({});
  await prisma.colorProduct.deleteMany({});
  await prisma.smartphoneSpec.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='categories';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='products';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='smartphone_specs';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='colors_product';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='storage_options';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='reviews';`;
  console.log('✅ Reset IDs.');

  const phonesCategory = await prisma.category.create({
    data: {
      name: 'Phones',
      description: 'The latest and greatest smartphones'
    }
  });

  const watchesCategory = await prisma.category.create({
    data: {
      name: 'Smart Watches',
      description: 'Stay connected on the go.',
    },
  });

  const headphonesCategory = await prisma.category.create({
    data: {
      name: 'Headphones',
      description: 'Immersive audio experience.',
    },
  });

  const camerasCategory = await prisma.category.create({
    data: { name: 'Cameras', description: 'Digital cameras and photography equipment.' },
  });
  const computersCategory = await prisma.category.create({
    data: { name: 'Computers', description: 'Laptops, desktops and computer accessories.' },
  });
  const gamingCategory = await prisma.category.create({
    data: { name: 'Gaming', description: 'Gaming consoles and accessories.' },
  });

  console.log('📦 Categories created.');

  await prisma.product.createMany({
    data: [
      { name: 'Apple iPhone 15 Pro', description: 'The ultimate iPhone experience.', brand: 'Apple', price: 999.00, stock: 50, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699234', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'Samsung Galaxy S24 Ultra', description: 'Galaxy AI is here.', brand: 'Samsung', price: 1199.00, discounted_price: 1099.00, stock: 30, url_image: 'https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-ultra-sm-s928-483232-sm-s928bztqzto-539313214?$650_519_PNG$', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Xiaomi 14', description: 'Lens to legend.', brand: 'Xiaomi', price: 799.00, stock: 60, url_image: 'https://i02.appmifile.com/i/s/m/p/prod/eng/xiaomi-14-ultra/specs_black.png', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'Google Pixel 8 Pro', description: 'The best of Google, built around you.', brand: 'Google', price: 899.00, stock: 40, url_image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/H_Pixel_8_Pro_Obsidian_2.width-1300.format-webp.webp', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'Apple iPhone 14 Pro', description: 'A magical new way to interact with iPhone.', brand: 'Apple', price: 899.00, discounted_price: 449.50, stock: 25, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703891083', tag: 'discount_up_to_50', categoryId: phonesCategory.id },
      { name: 'Apple Watch Ultra 2', description: 'Next-level adventure.', brand: 'Apple', price: 799.00, stock: 45, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT623ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR_WF_CO?wid=752&hei=720&bg=p-Eixo,0,0,0,0&trim=1&fmt=p-jpg&qlt=80&.v=1694507270905', tag: 'new_arrival', categoryId: watchesCategory.id },
      { name: 'Samsung Galaxy Watch6', description: 'Start your everyday wellness journey.', brand: 'Samsung', price: 299.00, stock: 70, url_image: 'https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-r940-sm-r940nzepzto-537330283?$650_519_PNG$', tag: 'bestseller', categoryId: watchesCategory.id },
      { name: 'Sony WH-1000XM5', description: 'The best noise canceling headphones.', brand: 'Sony', price: 399.00, stock: 80, url_image: 'https://www.sony.com/image/5d02da5df55283e2e8b93441fb8a7dfa?fmt=png-alpha&wid=480', tag: 'featured_product', categoryId: headphonesCategory.id },
      { name: 'Apple AirPods Max', description: 'A perfect balance of high-fidelity audio.', brand: 'Apple', price: 549.00, discounted_price: 499.00, stock: 35, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000', tag: 'discount_up_to_50', categoryId: headphonesCategory.id },
      { name: 'Bose QuietComfort Ultra', description: 'World-class noise cancellation.', brand: 'Bose', price: 429.00, stock: 55, url_image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/qc-ultra-headphones-black-Silo-01-full.png/jcr:content/renditions/cq5dam.web.1280.1280.png', tag: 'bestseller', categoryId: headphonesCategory.id },
      { name: 'Canon EOS R5', description: 'A professional mirrorless camera.', brand: 'Canon', price: 3899.00, stock: 15, url_image: 'https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c2049825244b38996e127688234479?$prod-gallery-1by1-s-jpg$', tag: 'featured_product', categoryId: camerasCategory.id },
      { name: 'Sony Alpha 7 IV', description: 'Beyond basic. A new standard for full-frame.', brand: 'Sony', price: 2499.00, stock: 20, url_image: 'https://www.sony.com/image/24855535b804342b4d8328571e22b3c1?fmt=png-alpha&wid=480', tag: 'bestseller', categoryId: camerasCategory.id },
      { name: 'MacBook Pro 14"', description: 'Mind-blowing performance with M3 Pro chip.', brand: 'Apple', price: 1999.00, stock: 25, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200', tag: 'new_arrival', categoryId: computersCategory.id },
      { name: 'Dell XPS 15', description: 'Stunning display, powerful performance.', brand: 'Dell', price: 1799.00, discounted_price: 1599.00, stock: 30, url_image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-platinum-silver/notebook-xps-15-9530-t-platinum-silver-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=573&qlt=100,0&resMode=sharp2&size=573,402', tag: 'discount_up_to_50', categoryId: computersCategory.id },
      { name: 'PlayStation 5', description: 'Play Has No Limits.', brand: 'Sony', price: 499.00, stock: 100, url_image: 'https://www.sony.com/image/48f0382f63343330a8427144e1a0b382?fmt=png-alpha&wid=480', tag: 'bestseller', categoryId: gamingCategory.id },
    ],
  });
  console.log('📱 Products created.');

  const iphone15 = await prisma.product.findFirst({ where: { name: 'Apple iPhone 15 Pro' } });
  if (iphone15) {
    await prisma.smartphoneSpec.create({ data: { screen_size: '6.1 inches', cpu: 'A17 Pro chip', total_cores: '6-core CPU', main_camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto', front_camera: '12MP TrueDepth', battery: 'Up to 23 hours video playback', product: { connect: { id: iphone15.id } } } });
    await prisma.colorProduct.createMany({ data: [{ name: 'Natural Titanium', hex_code: '#8B8681', productId: iphone15.id }, { name: 'Blue Titanium', hex_code: '#2A3D52', productId: iphone15.id }] });
    await prisma.storageOption.createMany({ data: [{ size: '128GB', productId: iphone15.id }, { size: '256GB', productId: iphone15.id }, { size: '512GB', productId: iphone15.id }] });
    await prisma.review.create({ data: { rating: 5, message: 'Absolutely fantastic device! The camera is a game-changer.', name_user: 'Jane Doe', url_image_user: 'https://randomuser.me/api/portraits/women/44.jpg', productId: iphone15.id } });
  }

  const galaxyS24 = await prisma.product.findFirst({ where: { name: 'Samsung Galaxy S24 Ultra' } });
  if (galaxyS24) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.8 inches',
        cpu: 'Snapdragon 8 Gen 3 for Galaxy',
        total_cores: '8-core CPU',
        main_camera: '200MP Wide + 12MP Ultra Wide + 10MP Telephoto',
        front_camera: '12MP',
        battery: '5000mAh',
        product: { connect: { id: galaxyS24.id } },
      },
    });

    await prisma.review.create({
      data: {
        rating: 4,
        message: 'Great phone, amazing screen and features. Battery could be a bit better.',
        name_user: 'John Smith',
        url_image_user: 'https://randomuser.me/api/portraits/men/32.jpg',
        productId: galaxyS24.id,
      },
    });
  }

  const ps5 = await prisma.product.findFirst({ where: { name: 'PlayStation 5' } });
  if (ps5) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Best console ever! The DualSense controller is incredible.', name_user: 'GamerGirl92', url_image_user: 'https://randomuser.me/api/portraits/women/50.jpg', productId: ps5.id },
        { rating: 5, message: 'Loading times are a thing of the past. Amazing!', name_user: 'Alex R.', url_image_user: 'https://randomuser.me/api/portraits/men/50.jpg', productId: ps5.id },
      ],
    });
  }

  const sonyHeadphones = await prisma.product.findFirst({ where: { name: 'Sony WH-1000XM5' } });
  if (sonyHeadphones) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'The noise cancellation is pure magic. Worth every penny.', name_user: 'AudioPhile', url_image_user: 'https://randomuser.me/api/portraits/men/60.jpg', productId: sonyHeadphones.id },
        { rating: 4, message: 'Very comfortable for long sessions, but the price is a bit steep.', name_user: 'Commuter Chris', url_image_user: 'https://randomuser.me/api/portraits/men/61.jpg', productId: sonyHeadphones.id },
        { rating: 3, message: 'Good sound, but I expected more bass. The app is a bit clunky.', name_user: 'Mike P.', url_image_user: 'https://randomuser.me/api/portraits/men/62.jpg', productId: sonyHeadphones.id },
        { rating: 5, message: 'I can finally work in peace at the coffee shop. A must-have for focus!', name_user: 'Digital Nomad', url_image_user: 'https://randomuser.me/api/portraits/women/60.jpg', productId: sonyHeadphones.id },
        { rating: 2, message: 'The microphone for calls is not great. People complain they can\'t hear me well.', name_user: 'Remote Worker', url_image_user: 'https://randomuser.me/api/portraits/women/61.jpg', productId: sonyHeadphones.id },
      ],
    });
  }

  console.log('✨ Related data created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🌱 Database populated successfully!');
  });