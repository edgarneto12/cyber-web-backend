import {PrismaClient} from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {

  await prisma.review.deleteMany({});
  await prisma.colorProduct.deleteMany({});
  await prisma.smartphoneSpec.deleteMany({});

  await prisma.product.deleteMany({});
  await prisma.storageOption.deleteMany({});
  await prisma.category.deleteMany({});


  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='categories';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='products';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='smartphone_specs';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='colors_product';`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='StorageOption';`;
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

      { name: 'Apple iPhone 14 Pro', description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras ', brand: 'Apple', price: 1499.00, discounted_price: 1399, stock: 25, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_726811-MLM51559388195_092022-F.webp', tag: 'discount_up_to_50', categoryId: phonesCategory.id },
      { name: 'Apple iPhone 15 Pro', description: 'The ultimate iPhone experience.', brand: 'Apple', price: 999.00, stock: 50, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699234', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'OnePlus 12', description: 'Fast and smooth with flagship performance.', brand: 'OnePlus', price: 699.00, stock: 45, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_746948-MLA74551247139_022024-F.webp', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'Redmi Note 13 Pro', description: 'Powerful mid-range with 200MP camera.', brand: 'Redmi', price: 399.00, stock: 60, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_940349-MLA77263586307_062024-F.webp', tag: 'discount_up_to_50', categoryId: phonesCategory.id },
      { name: 'Nothing Phone (2)', description: 'Pure instinct. Glyph Interface illuminated.', brand: 'Nothing', price: 599.00, stock: 50, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_671382-MLB80116521160_112024-F-celular-nothing-phone-1-5g-8gb256gb-black-120hz.webp', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'OPPO Find X7 Ultra', description: 'Master portrait photography with Hasselblad.', brand: 'OPPO', price: 849.00, stock: 35, url_image: 'https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8-pro/white-apac/assets/images-color-konka-b-1.png', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'MacBook Pro 14', description: 'Mind-blowing performance with M3 Pro chip.', brand: 'Apple', price: 1999.00, stock: 25, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_732996-MLA74328205367_012024-F.webp', tag: 'new_arrival', categoryId: computersCategory.id },
      { name: 'Dell XPS 15', description: 'Stunning display, powerful performance.', brand: 'Dell', price: 1799.00, discounted_price: 1599.00, stock: 30, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_701295-MLB89096839712_082025-F.webp', tag: 'discount_up_to_50', categoryId: computersCategory.id },
      { name: 'ThinkPad X1 Carbon Gen 11', description: 'Ultra-lightweight business laptop.', brand: 'Lenovo', price: 1899.00, stock: 20, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_704772-MLB88854957746_082025-F.webp', tag: 'bestseller', categoryId: computersCategory.id },
      { name: 'ASUS ROG Zephyrus G16', description: 'Gaming laptop with style and performance.', brand: 'ASUS', price: 2299.00, stock: 18, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_882518-MLU78104048064_082024-F.webp', tag: 'new_arrival', categoryId: computersCategory.id },
      { name: 'Samsung Galaxy S24 Ultra', description: 'Galaxy AI is here.', brand: 'Samsung', price: 1199.00, discounted_price: 1099.00, stock: 30, url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6jxwGQ7NRnzLx28HpD9Tv62eqv4DczJiXA&s', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Xiaomi 14', description: 'Lens to legend.', brand: 'Xiaomi', price: 799.00, stock: 60, url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrYujiWuMblH9dRE1u38CsQo7-c6xFiL0TA&s', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'Google Pixel 8 Pro', description: 'The best of Google, built around you.', brand: 'Google', price: 899.00, stock: 40, url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCsIF1qT74MG8hCDOJYWMFJ5uWYwJLPlC8w&s', tag: 'new_arrival', categoryId: phonesCategory.id },

      { name: 'Motorola Edge 50 Pro', description: 'Flagship performance with stunning display.', brand: 'Motorola', price: 649.00, stock: 40, url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wExWylNtf6OqcA2hpn4K4BTnYEZ5N_xJjQ&s', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Huawei P60 Pro', description: 'Ultra Lighting Camera with XMAGE technology.', brand: 'Huawei', price: 899.00, stock: 35, url_image: 'https://down-br.img.susercontent.com/file/cn-11134207-7ras8-md4boy332whsdf.webp', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'Vivo X100 Pro', description: 'Professional portrait photography redefined.', brand: 'Vivo', price: 749.00, stock: 40, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_937260-CBT90146952941_082025-F-capa-de-metal-fosco-para-vivo-x100x100-pro.webp', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Google Pixel 7a', description: 'Affordable Pixel with flagship camera.', brand: 'Google', price: 499.00, stock: 55, url_image: 'https://t2.tudocdn.net/668354?w=146&h=304', tag: 'discount_up_to_50', categoryId: phonesCategory.id },

      { name: 'Apple Watch Ultra 2', description: 'Next-level adventure.', brand: 'Apple', price: 799.00, stock: 45, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_920283-MLA79324426317_092024-F.webp', tag: 'new_arrival', categoryId: watchesCategory.id },
      { name: 'Samsung Galaxy Watch6', description: 'Start your everyday wellness journey.', brand: 'Samsung', price: 299.00, stock: 70, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_933129-MLA83356899866_042025-F.webp', tag: 'bestseller', categoryId: watchesCategory.id },
      { name: 'Huawei Watch GT 4', description: 'Smart health and fitness companion.', brand: 'Huawei', price: 249.00, stock: 60, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_936222-MLA88066097922_072025-F.webp', tag: 'featured_product', categoryId: watchesCategory.id },
      { name: 'Xiaomi Watch S3', description: 'Premium design meets smart functionality.', brand: 'Xiaomi', price: 199.00, stock: 80, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_763982-MLB90740603591_082025-F-xiaomi-watch-s3-resistente-agua-gps-prata.webp', tag: 'discount_up_to_50', categoryId: watchesCategory.id },

      { name: 'Sony WH-1000XM5', description: 'The best noise canceling headphones.', brand: 'Sony', price: 399.00, stock: 80, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_886761-MLU78248415334_082024-F.webp', tag: 'featured_product', categoryId: headphonesCategory.id },
      { name: 'Apple AirPods Max', description: 'A perfect balance of high-fidelity audio.', brand: 'Apple', price: 549.00, discounted_price: 499.00, stock: 35, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000', tag: 'discount_up_to_50', categoryId: headphonesCategory.id },
      { name: 'Bose QuietComfort Ultra', description: 'World-class noise cancellation.', brand: 'Bose', price: 429.00, stock: 55, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_925352-MLU77144327918_062024-F.webp', tag: 'bestseller', categoryId: headphonesCategory.id },
      { name: 'Sennheiser Momentum 4', description: 'Exceptional sound meets intelligent adaptive noise cancellation.', brand: 'Sennheiser', price: 349.00, stock: 45, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_915486-CBT79045236925_092024-F.webp', tag: 'new_arrival', categoryId: headphonesCategory.id },
      { name: 'Audio-Technica ATH-M50xBT2', description: 'Professional studio quality with wireless freedom.', brand: 'Audio-Technica', price: 199.00, stock: 70, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_775923-MLU77330942319_062024-F.webp', tag: 'bestseller', categoryId: headphonesCategory.id },

      { name: 'Canon EOS R5', description: 'A professional mirrorless camera.', brand: 'Canon', price: 3899.00, stock: 15, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_671122-MLA79770987687_102024-F.webp', tag: 'featured_product', categoryId: camerasCategory.id },
      { name: 'Sony Alpha 7 IV', description: 'Beyond basic. A new standard for full-frame.', brand: 'Sony', price: 2499.00, stock: 20, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_954080-MLA51716406745_092022-F.webp', tag: 'bestseller', categoryId: camerasCategory.id },
      { name: 'Nikon Z9', description: 'No compromise mirrorless flagship.', brand: 'Nikon', price: 5499.00, stock: 12, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_969159-MLB77859076863_072024-F-nikon-z9-mirrorless-camera-42k-avst.webp', tag: 'new_arrival', categoryId: camerasCategory.id },
      { name: 'Fujifilm X-T5', description: 'Classic design with modern performance.', brand: 'Fujifilm', price: 1699.00, stock: 25, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_718377-MLU70013387283_062023-F.webp', tag: 'featured_product', categoryId: camerasCategory.id },

      { name: 'PlayStation 5', description: 'Play Has No Limits.', brand: 'Sony', price: 499.00, stock: 100, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_610989-MLA80823022081_112024-F.webp', tag: 'bestseller', categoryId: gamingCategory.id },
      { name: 'Xbox Series X', description: 'The fastest, most powerful Xbox ever.', brand: 'Microsoft', price: 499.00, stock: 80, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_675844-MLA80617260308_112024-F.webp', tag: 'new_arrival', categoryId: gamingCategory.id },
      { name: 'Nintendo Switch OLED', description: 'Vivid colors and crisp contrast in handheld mode.', brand: 'Nintendo', price: 349.00, stock: 120, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_841241-MEC48197690250_112021-F.webp', tag: 'featured_product', categoryId: gamingCategory.id },
      { name: 'Steam Deck OLED', description: 'Portable PC gaming with OLED display.', brand: 'Valve', price: 649.00, stock: 40, url_image: 'https://http2.mlstatic.com/D_NQ_NP_2X_984473-MLU75721678297_042024-F.webp', tag: 'new_arrival', categoryId: gamingCategory.id },
    ],
  });
  console.log('📱 Products created.');

  await prisma.storageOption.createMany({
    data: [
      { size: '16GB' },
      { size: '64GB' },
      { size: '128GB' },
      { size: '256GB' },
      { size: '512GB' },
      { size: '1TB' },
      { size: '2TB' },
    ],
  });
  console.log('💾 Unique storage options created.');

  const storageOptions = await prisma.storageOption.findMany();
  const storageMap = storageOptions.reduce((acc, option) => {
    acc[option.size] = option.id;
    return acc;
  }, {} as Record<string, number>);


  const iphone15 = await prisma.product.findFirst({ where: { name: 'Apple iPhone 15 Pro' } });
  if (iphone15) {
    await prisma.smartphoneSpec.create({ data: { screen_size: '6.1 inches', cpu: 'A17 Pro chip', total_cores: '6-core CPU', main_camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto', front_camera: '12MP TrueDepth', battery: 'Up to 23 hours video playback', product: { connect: { id: iphone15.id } } } });
    await prisma.colorProduct.createMany({ data: [{ name: 'Natural Titanium', hex_code: '#8B8681', productId: iphone15.id }, { name: 'Blue Titanium', hex_code: '#2A3D52', productId: iphone15.id }] });
    await prisma.product.update({
      where: { id: iphone15.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['128GB'] },
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Absolutely fantastic device! The camera is a game-changer.', name_user: 'Jane Doe', url_image_user: 'https://randomuser.me/api/portraits/women/44.jpg', productId: iphone15.id },
        { rating: 4, message: 'Very fast and responsive, but battery life could be a little better under heavy use.', name_user: 'TechGuru', url_image_user: 'https://randomuser.me/api/portraits/men/45.jpg', productId: iphone15.id },
        { rating: 5, message: 'The Action mode for video is incredible. Super smooth footage!', name_user: 'VideoCreator', url_image_user: 'https://randomuser.me/api/portraits/women/46.jpg', productId: iphone15.id },
        { rating: 3, message: 'A great phone, but not a huge leap from the 14 Pro. The USB-C port is a welcome change.', name_user: 'PragmaticUser', url_image_user: 'https://randomuser.me/api/portraits/men/47.jpg', productId: iphone15.id },
        { rating: 5, message: 'Titanium build feels premium and surprisingly light. Best iPhone yet!', name_user: 'AppleFan', url_image_user: 'https://randomuser.me/api/portraits/women/48.jpg', productId: iphone15.id },
        { rating: 4, message: 'Performance is top-tier, but it gets a bit warm when gaming.', name_user: 'GamerX', url_image_user: 'https://randomuser.me/api/portraits/men/49.jpg', productId: iphone15.id }
      ]
    });
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

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Titanium Black', hex_code: '#2C2C2C', productId: galaxyS24.id }, 
        { name: 'Titanium Gray', hex_code: '#8A8A8A', productId: galaxyS24.id },
        { name: 'Titanium Violet', hex_code: '#6B4E8D', productId: galaxyS24.id }
      ] 
    });

    await prisma.product.update({
      where: { id: galaxyS24.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 4, message: 'Great phone, amazing screen and features. Battery could be a bit better.', name_user: 'John Smith', url_image_user: 'https://randomuser.me/api/portraits/men/32.jpg', productId: galaxyS24.id },
        { rating: 5, message: 'The S Pen is a productivity powerhouse. The flat screen is a huge improvement!', name_user: 'ProductivityPro', url_image_user: 'https://randomuser.me/api/portraits/women/33.jpg', productId: galaxyS24.id },
        { rating: 5, message: 'Galaxy AI features are surprisingly useful, especially Circle to Search.', name_user: 'AI_Explorer', url_image_user: 'https://randomuser.me/api/portraits/men/34.jpg', productId: galaxyS24.id },
        { rating: 4, message: 'The camera zoom is insane! You can capture incredible detail from far away.', name_user: 'Shutterbug', url_image_user: 'https://randomuser.me/api/portraits/women/35.jpg', productId: galaxyS24.id },
        { rating: 3, message: 'It\'s a fantastic phone, but it feels a bit too large and heavy for one-handed use.', name_user: 'SmallHands', url_image_user: 'https://randomuser.me/api/portraits/men/36.jpg', productId: galaxyS24.id },
        { rating: 5, message: 'Best Android phone on the market, period.', name_user: 'AndroidLoyalist', url_image_user: 'https://randomuser.me/api/portraits/women/37.jpg', productId: galaxyS24.id }
      ]
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
    await prisma.colorProduct.createMany({
      data: [{ name: 'White', hex_code: '#FFFFFF', productId: ps5.id }]
    });
    await prisma.product.update({
      where: { id: ps5.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['1TB'] }],
        },
      },
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
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: sonyHeadphones.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: sonyHeadphones.id }
      ]
    });
  }

  
  const onePlus12 = await prisma.product.findFirst({ where: { name: 'OnePlus 12' } });
  if (onePlus12) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.82 inches',
        cpu: 'Snapdragon 8 Gen 3',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 64MP Periscope Telephoto + 48MP Ultra Wide',
        front_camera: '32MP',
        battery: '5400mAh',
        product: { connect: { id: onePlus12.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Silky Black', hex_code: '#1C1C1C', productId: onePlus12.id }, 
        { name: 'Flowy Emerald', hex_code: '#2F5F3F', productId: onePlus12.id },
        { name: 'White', hex_code: '#F5F5F5', productId: onePlus12.id }
      ] 
    });

    await prisma.product.update({
      where: { id: onePlus12.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Blazing fast performance and amazing display quality!', name_user: 'SpeedDemon', url_image_user: 'https://randomuser.me/api/portraits/men/65.jpg', productId: onePlus12.id },
        { rating: 4, message: 'Great value flagship, but camera could be better in low light.', name_user: 'TechReviewer22', url_image_user: 'https://randomuser.me/api/portraits/women/65.jpg', productId: onePlus12.id },
        { rating: 5, message: 'OxygenOS is clean and fast. Love the charging speed!', name_user: 'AndroidFan', url_image_user: 'https://randomuser.me/api/portraits/men/66.jpg', productId: onePlus12.id },
        { rating: 3, message: 'Good phone, but battery life could be better for heavy usage.', name_user: 'PowerUser99', url_image_user: 'https://randomuser.me/api/portraits/women/66.jpg', productId: onePlus12.id },
        { rating: 4, message: 'Solid build quality and premium feel. Recommended!', name_user: 'GadgetGuru', url_image_user: 'https://randomuser.me/api/portraits/men/67.jpg', productId: onePlus12.id },
      ],
    });
  }

  
  const motorolaEdge = await prisma.product.findFirst({ where: { name: 'Motorola Edge 50 Pro' } });
  if (motorolaEdge) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.7 inches',
        cpu: 'Snapdragon 7 Gen 3',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 13MP Ultra Wide + 10MP Telephoto',
        front_camera: '50MP',
        battery: '4500mAh',
        product: { connect: { id: motorolaEdge.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Moonlight Pearl', hex_code: '#E8E8E8', productId: motorolaEdge.id }, 
        { name: 'Luxe Lavender', hex_code: '#B19CD9', productId: motorolaEdge.id },
        { name: 'Black Beauty', hex_code: '#1A1A1A', productId: motorolaEdge.id }
      ] 
    });

    await prisma.product.update({
      where: { id: motorolaEdge.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Excellent curved display and smooth performance throughout.', name_user: 'DisplayLover', url_image_user: 'https://randomuser.me/api/portraits/women/67.jpg', productId: motorolaEdge.id },
        { rating: 4, message: 'Clean Android experience with useful Moto gestures.', name_user: 'MotoFan2024', url_image_user: 'https://randomuser.me/api/portraits/men/68.jpg', productId: motorolaEdge.id },
        { rating: 5, message: 'Best Motorola phone in years! Great camera and battery life.', name_user: 'PhoneCollector', url_image_user: 'https://randomuser.me/api/portraits/women/68.jpg', productId: motorolaEdge.id },
        { rating: 3, message: 'Good overall, but software updates could be more frequent.', name_user: 'UpdateWatcher', url_image_user: 'https://randomuser.me/api/portraits/men/69.jpg', productId: motorolaEdge.id },
        { rating: 4, message: 'Fast charging and all-day battery. Very satisfied!', name_user: 'BatteryTester', url_image_user: 'https://randomuser.me/api/portraits/women/69.jpg', productId: motorolaEdge.id },
      ],
    });
  }

 
  const huaweiP60 = await prisma.product.findFirst({ where: { name: 'Huawei P60 Pro' } });
  if (huaweiP60) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.67 inches',
        cpu: 'Snapdragon 8+ Gen 1',
        total_cores: '8-core CPU',
        main_camera: '48MP Main + 13MP Ultra Wide + 48MP Telephoto',
        front_camera: '13MP',
        battery: '4815mAh',
        product: { connect: { id: huaweiP60.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Pearl White', hex_code: '#F0F0F0', productId: huaweiP60.id }, 
        { name: 'Rococo Pearl', hex_code: '#E6D8CC', productId: huaweiP60.id },
        { name: 'Emerald Green', hex_code: '#2D5A3D', productId: huaweiP60.id }
      ] 
    });

    await prisma.product.update({
      where: { id: huaweiP60.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Camera quality is absolutely stunning, especially in night mode.', name_user: 'PhotoPro', url_image_user: 'https://randomuser.me/api/portraits/men/70.jpg', productId: huaweiP60.id },
        { rating: 4, message: 'Beautiful design and build quality, but missing Google services.', name_user: 'DesignEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/women/70.jpg', productId: huaweiP60.id },
        { rating: 5, message: 'XMAGE camera system is revolutionary for mobile photography.', name_user: 'CameraExpert', url_image_user: 'https://randomuser.me/api/portraits/men/71.jpg', productId: huaweiP60.id },
        { rating: 3, message: 'Great hardware, but app ecosystem limitations are frustrating.', name_user: 'AppLover', url_image_user: 'https://randomuser.me/api/portraits/women/71.jpg', productId: huaweiP60.id },
        { rating: 4, message: 'Performance is top-notch and battery lasts all day easily.', name_user: 'PowerUser2024', url_image_user: 'https://randomuser.me/api/portraits/men/72.jpg', productId: huaweiP60.id },
      ],
    });
  }

  
  const redmiNote = await prisma.product.findFirst({ where: { name: 'Redmi Note 13 Pro' } });
  if (redmiNote) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.67 inches',
        cpu: 'Snapdragon 7s Gen 2',
        total_cores: '8-core CPU',
        main_camera: '200MP Main + 8MP Ultra Wide + 2MP Macro',
        front_camera: '16MP',
        battery: '5100mAh',
        product: { connect: { id: redmiNote.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Aurora Purple', hex_code: '#8B5A9F', productId: redmiNote.id }, 
        { name: 'Midnight Black', hex_code: '#0D0D0D', productId: redmiNote.id },
        { name: 'Ocean Teal', hex_code: '#4A9B9B', productId: redmiNote.id }
      ] 
    });

    await prisma.product.update({
      where: { id: redmiNote.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['128GB'] },
            { id: storageMap['256GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Amazing value for money! 200MP camera takes incredible photos.', name_user: 'BudgetHunter', url_image_user: 'https://randomuser.me/api/portraits/women/72.jpg', productId: redmiNote.id },
        { rating: 4, message: 'Great performance for the price, but MIUI has too many ads.', name_user: 'ValueSeeker', url_image_user: 'https://randomuser.me/api/portraits/men/73.jpg', productId: redmiNote.id },
        { rating: 5, message: 'Perfect mid-range phone with flagship-level camera quality.', name_user: 'MidRangeKing', url_image_user: 'https://randomuser.me/api/portraits/women/73.jpg', productId: redmiNote.id },
        { rating: 3, message: 'Good phone overall, but build quality feels a bit plasticky.', name_user: 'BuildCritic', url_image_user: 'https://randomuser.me/api/portraits/men/74.jpg', productId: redmiNote.id },
        { rating: 4, message: 'Fast charging and excellent screen quality for this price range.', name_user: 'ScreenLover', url_image_user: 'https://randomuser.me/api/portraits/women/74.jpg', productId: redmiNote.id },
      ],
    });
  }

 
  const nothingPhone = await prisma.product.findFirst({ where: { name: 'Nothing Phone (2)' } });
  if (nothingPhone) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.7 inches',
        cpu: 'Snapdragon 8+ Gen 1',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 50MP Ultra Wide',
        front_camera: '32MP',
        battery: '4700mAh',
        product: { connect: { id: nothingPhone.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'White', hex_code: '#FFFFFF', productId: nothingPhone.id }, 
        { name: 'Dark Gray', hex_code: '#3A3A3A', productId: nothingPhone.id }
      ] 
    });

    await prisma.product.update({
      where: { id: nothingPhone.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['128GB'] },
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'The Glyph Interface is so cool and functional! Unique design.', name_user: 'GlyphFan', url_image_user: 'https://randomuser.me/api/portraits/men/75.jpg', productId: nothingPhone.id },
        { rating: 4, message: 'Clean Nothing OS and great performance, but camera is average.', name_user: 'OSClean', url_image_user: 'https://randomuser.me/api/portraits/women/75.jpg', productId: nothingPhone.id },
        { rating: 5, message: 'Finally, a phone that stands out! Love the transparent design.', name_user: 'DesignRebel', url_image_user: 'https://randomuser.me/api/portraits/men/76.jpg', productId: nothingPhone.id },
        { rating: 3, message: 'Interesting concept, but battery life could be improved.', name_user: 'BatteryWatcher', url_image_user: 'https://randomuser.me/api/portraits/women/76.jpg', productId: nothingPhone.id },
        { rating: 4, message: 'Great alternative to mainstream brands. Smooth performance!', name_user: 'AlternativeSeeker', url_image_user: 'https://randomuser.me/api/portraits/men/77.jpg', productId: nothingPhone.id },
      ],
    });
  }

 
  const oppoFind = await prisma.product.findFirst({ where: { name: 'OPPO Find X7 Ultra' } });
  if (oppoFind) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.82 inches',
        cpu: 'Snapdragon 8 Gen 3',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 50MP Ultra Wide + 50MP Periscope + 50MP Telephoto',
        front_camera: '32MP',
        battery: '5000mAh',
        product: { connect: { id: oppoFind.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Ocean Blue', hex_code: '#1E4A72', productId: oppoFind.id }, 
        { name: 'Sepia Brown', hex_code: '#8B6F47', productId: oppoFind.id },
        { name: 'Tailored Black', hex_code: '#0F0F0F', productId: oppoFind.id }
      ] 
    });

    await prisma.product.update({
      where: { id: oppoFind.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Hasselblad camera partnership delivers exceptional portrait photos.', name_user: 'PortraitPro', url_image_user: 'https://randomuser.me/api/portraits/women/77.jpg', productId: oppoFind.id },
        { rating: 4, message: 'Premium build and fast performance, but ColorOS needs improvement.', name_user: 'PremiumUser', url_image_user: 'https://randomuser.me/api/portraits/men/78.jpg', productId: oppoFind.id },
        { rating: 5, message: 'Best camera phone I have ever used. Colors are incredibly accurate.', name_user: 'ColorAccuracy', url_image_user: 'https://randomuser.me/api/portraits/women/78.jpg', productId: oppoFind.id },
        { rating: 3, message: 'Great hardware, but software experience is not as polished.', name_user: 'SoftwareCritic', url_image_user: 'https://randomuser.me/api/portraits/men/79.jpg', productId: oppoFind.id },
        { rating: 4, message: 'Excellent display quality and super fast charging speeds.', name_user: 'ChargingSpeed', url_image_user: 'https://randomuser.me/api/portraits/women/79.jpg', productId: oppoFind.id },
      ],
    });
  }

  
  const vivoX100 = await prisma.product.findFirst({ where: { name: 'Vivo X100 Pro' } });
  if (vivoX100) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.78 inches',
        cpu: 'MediaTek Dimensity 9300',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 50MP Ultra Wide + 50MP Telephoto',
        front_camera: '32MP',
        battery: '5400mAh',
        product: { connect: { id: vivoX100.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Asteroid Black', hex_code: '#1A1A1A', productId: vivoX100.id }, 
        { name: 'Sunset Orange', hex_code: '#FF7F50', productId: vivoX100.id },
        { name: 'Glacier Blue', hex_code: '#5F9FDB', productId: vivoX100.id }
      ] 
    });

    await prisma.product.update({
      where: { id: vivoX100.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Portrait photography is redefined with this phone. Simply amazing!', name_user: 'PortraitMaster', url_image_user: 'https://randomuser.me/api/portraits/men/80.jpg', productId: vivoX100.id },
        { rating: 4, message: 'Great camera and performance, but Funtouch OS has a learning curve.', name_user: 'OSLearner', url_image_user: 'https://randomuser.me/api/portraits/women/80.jpg', productId: vivoX100.id },
        { rating: 5, message: 'Best in class camera with professional-grade features.', name_user: 'ProPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/81.jpg', productId: vivoX100.id },
        { rating: 3, message: 'Good overall package, but brand recognition is lacking.', name_user: 'BrandConscious', url_image_user: 'https://randomuser.me/api/portraits/women/81.jpg', productId: vivoX100.id },
        { rating: 4, message: 'Impressive build quality and very smooth performance.', name_user: 'SmoothOperator', url_image_user: 'https://randomuser.me/api/portraits/men/82.jpg', productId: vivoX100.id },
      ],
    });
  }

  
  const pixel7a = await prisma.product.findFirst({ where: { name: 'Google Pixel 7a' } });
  if (pixel7a) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.1 inches',
        cpu: 'Google Tensor G2',
        total_cores: '8-core CPU',
        main_camera: '64MP Main + 13MP Ultra Wide',
        front_camera: '13MP',
        battery: '4385mAh',
        product: { connect: { id: pixel7a.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Charcoal', hex_code: '#36454F', productId: pixel7a.id }, 
        { name: 'Sea', hex_code: '#5F8A8B', productId: pixel7a.id },
        { name: 'Snow', hex_code: '#F8F8FF', productId: pixel7a.id },
        { name: 'Coral', hex_code: '#FF7F7F', productId: pixel7a.id }
      ] 
    });

    await prisma.product.update({
      where: { id: pixel7a.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['128GB'] }],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Best camera in this price range. Pure Android experience is amazing!', name_user: 'PixelPerfect', url_image_user: 'https://randomuser.me/api/portraits/women/82.jpg', productId: pixel7a.id },
        { rating: 4, message: 'Clean Android and great camera, but battery life could be better.', name_user: 'AndroidPurist', url_image_user: 'https://randomuser.me/api/portraits/men/83.jpg', productId: pixel7a.id },
        { rating: 5, message: 'Computational photography at its finest. Google magic is real!', name_user: 'ComputationalFan', url_image_user: 'https://randomuser.me/api/portraits/women/83.jpg', productId: pixel7a.id },
        { rating: 3, message: 'Good value, but performance can lag with heavy multitasking.', name_user: 'Multitasker', url_image_user: 'https://randomuser.me/api/portraits/men/84.jpg', productId: pixel7a.id },
        { rating: 4, message: 'Great mid-range option with flagship camera capabilities.', name_user: 'MidRangePro', url_image_user: 'https://randomuser.me/api/portraits/women/84.jpg', productId: pixel7a.id },
      ],
    });
  }

  const huaweiWatch = await prisma.product.findFirst({ where: { name: 'Huawei Watch GT 4' } });
  if (huaweiWatch) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Excellent fitness tracking and amazing battery life!', name_user: 'FitnessFan', url_image_user: 'https://randomuser.me/api/portraits/men/85.jpg', productId: huaweiWatch.id },
        { rating: 4, message: 'Beautiful design and accurate health monitoring features.', name_user: 'HealthTracker', url_image_user: 'https://randomuser.me/api/portraits/women/85.jpg', productId: huaweiWatch.id },
        { rating: 5, message: 'Best value smartwatch with premium build quality.', name_user: 'WatchCollector', url_image_user: 'https://randomuser.me/api/portraits/men/86.jpg', productId: huaweiWatch.id },
        { rating: 3, message: 'Good watch, but app ecosystem is limited compared to others.', name_user: 'AppEcosystem', url_image_user: 'https://randomuser.me/api/portraits/women/86.jpg', productId: huaweiWatch.id },
        { rating: 4, message: 'Comfortable to wear and great for outdoor activities.', name_user: 'OutdoorEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/men/87.jpg', productId: huaweiWatch.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: huaweiWatch.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: huaweiWatch.id }
      ]
    });
  }

  
  const xiaomiWatch = await prisma.product.findFirst({ where: { name: 'Xiaomi Watch S3' } });
  if (xiaomiWatch) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Incredible value! Premium features at an affordable price.', name_user: 'ValueChampion', url_image_user: 'https://randomuser.me/api/portraits/women/87.jpg', productId: xiaomiWatch.id },
        { rating: 4, message: 'Great design and functionality, but could use more watch faces.', name_user: 'WatchFaceFan', url_image_user: 'https://randomuser.me/api/portraits/men/88.jpg', productId: xiaomiWatch.id },
        { rating: 5, message: 'Perfect smartwatch for everyday use. Comfortable and feature-rich.', name_user: 'EverydayUser', url_image_user: 'https://randomuser.me/api/portraits/women/88.jpg', productId: xiaomiWatch.id },
        { rating: 3, message: 'Good watch, but third-party app support is lacking.', name_user: 'AppDeveloper', url_image_user: 'https://randomuser.me/api/portraits/men/89.jpg', productId: xiaomiWatch.id },
        { rating: 4, message: 'Solid build and accurate sensors for fitness tracking.', name_user: 'SensorAccuracy', url_image_user: 'https://randomuser.me/api/portraits/women/89.jpg', productId: xiaomiWatch.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Silver', hex_code: '#C0C0C0', productId: xiaomiWatch.id },
        { name: 'Black', hex_code: '#000000', productId: xiaomiWatch.id }
      ]
    });
  }

  
  const sennheiserMomentum = await prisma.product.findFirst({ where: { name: 'Sennheiser Momentum 4' } });
  if (sennheiserMomentum) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Audiophile-grade sound quality with excellent noise cancellation.', name_user: 'AudiophileElite', url_image_user: 'https://randomuser.me/api/portraits/men/90.jpg', productId: sennheiserMomentum.id },
        { rating: 4, message: 'Premium build and amazing sound, but could be more comfortable.', name_user: 'ComfortSeeker', url_image_user: 'https://randomuser.me/api/portraits/women/90.jpg', productId: sennheiserMomentum.id },
        { rating: 5, message: 'Best headphones for music production and critical listening.', name_user: 'MusicProducer', url_image_user: 'https://randomuser.me/api/portraits/men/91.jpg', productId: sennheiserMomentum.id },
        { rating: 3, message: 'Great sound, but the app interface could be more intuitive.', name_user: 'AppUIDesigner', url_image_user: 'https://randomuser.me/api/portraits/women/91.jpg', productId: sennheiserMomentum.id },
        { rating: 4, message: 'Excellent for long listening sessions with fatigue-free sound.', name_user: 'LongListener', url_image_user: 'https://randomuser.me/api/portraits/men/92.jpg', productId: sennheiserMomentum.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: sennheiserMomentum.id },
        { name: 'White', hex_code: '#FFFFFF', productId: sennheiserMomentum.id }
      ]
    });
  }

  
  const audioTechnica = await prisma.product.findFirst({ where: { name: 'Audio-Technica ATH-M50xBT2' } });
  if (audioTechnica) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Professional studio quality with wireless convenience. Perfect!', name_user: 'StudioPro', url_image_user: 'https://randomuser.me/api/portraits/women/92.jpg', productId: audioTechnica.id },
        { rating: 4, message: 'Great for monitoring and mixing, but bass can be overwhelming.', name_user: 'SoundEngineer', url_image_user: 'https://randomuser.me/api/portraits/men/93.jpg', productId: audioTechnica.id },
        { rating: 5, message: 'Best value professional headphones with excellent build quality.', name_user: 'BudgetPro', url_image_user: 'https://randomuser.me/api/portraits/women/93.jpg', productId: audioTechnica.id },
        { rating: 3, message: 'Good sound, but comfort could be improved for long sessions.', name_user: 'ComfortFirst', url_image_user: 'https://randomuser.me/api/portraits/men/94.jpg', productId: audioTechnica.id },
        { rating: 4, message: 'Reliable headphones that deliver consistent professional results.', name_user: 'ConsistencyKing', url_image_user: 'https://randomuser.me/api/portraits/women/94.jpg', productId: audioTechnica.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: audioTechnica.id },
        { name: 'Blue', hex_code: '#1E3A8A', productId: audioTechnica.id }
      ]
    });
  }

  
  const nikonZ9 = await prisma.product.findFirst({ where: { name: 'Nikon Z9' } });
  if (nikonZ9) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Professional flagship that competes with the best. Incredible autofocus!', name_user: 'ProPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/95.jpg', productId: nikonZ9.id },
        { rating: 4, message: 'Amazing image quality and performance, but the price is steep.', name_user: 'QualityHunter', url_image_user: 'https://randomuser.me/api/portraits/women/95.jpg', productId: nikonZ9.id },
        { rating: 5, message: 'Best mirrorless camera for sports and wildlife photography.', name_user: 'WildlifeShooter', url_image_user: 'https://randomuser.me/api/portraits/men/96.jpg', productId: nikonZ9.id },
        { rating: 3, message: 'Great camera, but the learning curve is significant for beginners.', name_user: 'BeginnerPhotog', url_image_user: 'https://randomuser.me/api/portraits/women/96.jpg', productId: nikonZ9.id },
        { rating: 4, message: 'Excellent build quality and weather sealing for outdoor shooting.', name_user: 'OutdoorPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/97.jpg', productId: nikonZ9.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: nikonZ9.id }]
    });
  }


  const fujiXT5 = await prisma.product.findFirst({ where: { name: 'Fujifilm X-T5' } });
  if (fujiXT5) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Perfect blend of classic design and modern performance!', name_user: 'VintageModern', url_image_user: 'https://randomuser.me/api/portraits/women/97.jpg', productId: fujiXT5.id },
        { rating: 4, message: 'Excellent image quality and film simulations, but battery life is short.', name_user: 'FilmSimFan', url_image_user: 'https://randomuser.me/api/portraits/men/98.jpg', productId: fujiXT5.id },
        { rating: 5, message: 'Best APS-C camera with incredible detail and color science.', name_user: 'ColorScientist', url_image_user: 'https://randomuser.me/api/portraits/women/98.jpg', productId: fujiXT5.id },
        { rating: 3, message: 'Great image quality, but menu system can be confusing.', name_user: 'MenuNavigator', url_image_user: 'https://randomuser.me/api/portraits/men/99.jpg', productId: fujiXT5.id },
        { rating: 4, message: 'Perfect size for travel photography with professional results.', name_user: 'TravelPhotographer', url_image_user: 'https://randomuser.me/api/portraits/women/99.jpg', productId: fujiXT5.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: fujiXT5.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: fujiXT5.id }
      ]
    });
  }

 
  const thinkpadX1 = await prisma.product.findFirst({ where: { name: 'ThinkPad X1 Carbon Gen 11' } });
  if (thinkpadX1) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Business laptop perfection! Lightweight yet incredibly durable.', name_user: 'BusinessExec', url_image_user: 'https://randomuser.me/api/portraits/men/100.jpg', productId: thinkpadX1.id },
        { rating: 4, message: 'Excellent keyboard and build quality, but display could be brighter.', name_user: 'KeyboardEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/women/100.jpg', productId: thinkpadX1.id },
        { rating: 5, message: 'Most reliable laptop I have ever owned. Perfect for productivity.', name_user: 'ProductivityPro', url_image_user: 'https://randomuser.me/api/portraits/men/12.jpg', productId: thinkpadX1.id },
        { rating: 3, message: 'Good laptop, but premium price for business-focused features.', name_user: 'BudgetBusiness', url_image_user: 'https://randomuser.me/api/portraits/women/12.jpg', productId: thinkpadX1.id },
        { rating: 4, message: 'Exceptional battery life and performance for demanding workloads.', name_user: 'WorkloadMaster', url_image_user: 'https://randomuser.me/api/portraits/men/13.jpg', productId: thinkpadX1.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: thinkpadX1.id }]
    });
    await prisma.product.update({
      where: { id: thinkpadX1.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });
  }

  const asusROG = await prisma.product.findFirst({ where: { name: 'ASUS ROG Zephyrus G16' } });
  if (asusROG) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Gaming powerhouse with sleek design. Runs everything at max settings!', name_user: 'GamingBeast', url_image_user: 'https://randomuser.me/api/portraits/women/23.jpg', productId: asusROG.id },
        { rating: 4, message: 'Great performance and display, but fans can get loud during gaming.', name_user: 'SilentGamer', url_image_user: 'https://randomuser.me/api/portraits/men/25.jpg', productId: asusROG.id },
        { rating: 5, message: 'Perfect balance of gaming performance and professional aesthetics.', name_user: 'GameDevPro', url_image_user: 'https://randomuser.me/api/portraits/women/21.jpg', productId: asusROG.id },
        { rating: 3, message: 'Powerful machine, but battery life during gaming is disappointing.', name_user: 'BatteryGamer', url_image_user: 'https://randomuser.me/api/portraits/men/21.jpg', productId: asusROG.id },
        { rating: 4, message: 'Excellent build quality and RGB lighting system is amazing.', name_user: 'RGBMaster', url_image_user: 'https://randomuser.me/api/portraits/women/4.jpg', productId: asusROG.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Eclipse Gray', hex_code: '#3A3A3A', productId: asusROG.id },
        { name: 'White', hex_code: '#FFFFFF', productId: asusROG.id }
      ]
    });
    await prisma.product.update({
      where: { id: asusROG.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
            { id: storageMap['2TB'] },
          ],
        },
      },
    });
  }

  const xboxSeriesX = await prisma.product.findFirst({ where: { name: 'Xbox Series X' } });
  if (xboxSeriesX) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'True 4K gaming with lightning-fast loading times. Xbox Game Pass is amazing!', name_user: 'XboxFanatic', url_image_user: 'https://randomuser.me/api/portraits/men/77.jpg', productId: xboxSeriesX.id },
        { rating: 4, message: 'Powerful console with great backwards compatibility, but exclusive games are limited.', name_user: 'GameLibrarian', url_image_user: 'https://randomuser.me/api/portraits/women/65.jpg', productId: xboxSeriesX.id },
        { rating: 5, message: 'Best value in gaming with Game Pass subscription. Highly recommended!', name_user: 'ValueGamer', url_image_user: 'https://randomuser.me/api/portraits/men/65.jpg', productId: xboxSeriesX.id },
        { rating: 3, message: 'Good console, but design is too large for my entertainment center.', name_user: 'SpaceSaver', url_image_user: 'https://randomuser.me/api/portraits/women/61.jpg', productId: xboxSeriesX.id },
        { rating: 4, message: 'Excellent performance and quiet operation during gameplay.', name_user: 'QuietGamer', url_image_user: 'https://randomuser.me/api/portraits/men/13.jpg', productId: xboxSeriesX.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: xboxSeriesX.id }]
    });
    await prisma.product.update({
      where: { id: xboxSeriesX.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['1TB'] }],
        },
      },
    });
  }

  const switchOLED = await prisma.product.findFirst({ where: { name: 'Nintendo Switch OLED' } });
  if (switchOLED) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'OLED screen is gorgeous! Perfect for portable and docked gaming.', name_user: 'PortableGamer', url_image_user: 'https://randomuser.me/api/portraits/women/88.jpg', productId: switchOLED.id },
        { rating: 4, message: 'Great upgrade from original Switch, but performance is still limited.', name_user: 'SwitchUpgrader', url_image_user: 'https://randomuser.me/api/portraits/men/66.jpg', productId: switchOLED.id },
        { rating: 5, message: 'Nintendo exclusives are unmatched. Joy-Con controllers work perfectly!', name_user: 'NintendoNinja', url_image_user: 'https://randomuser.me/api/portraits/women/33.jpg', productId: switchOLED.id },
        { rating: 3, message: 'Good console, but Joy-Con drift is still an issue after all these years.', name_user: 'DriftVictim', url_image_user: 'https://randomuser.me/api/portraits/men/22.jpg', productId: switchOLED.id },
        { rating: 4, message: 'Perfect family gaming console with something for everyone.', name_user: 'FamilyGamer', url_image_user: 'https://randomuser.me/api/portraits/women/11.jpg', productId: switchOLED.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'White', hex_code: '#FFFFFF', productId: switchOLED.id }]
    });
    await prisma.product.update({
      where: { id: switchOLED.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['64GB'] }],
        },
      },
    });
  }

  const steamDeck = await prisma.product.findFirst({ where: { name: 'Steam Deck OLED' } });
  if (steamDeck) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'PC gaming on the go is finally perfect! OLED screen is beautiful.', name_user: 'PCGamingNomad', url_image_user: 'https://randomuser.me/api/portraits/men/1.jpg', productId: steamDeck.id },
        { rating: 4, message: 'Amazing device for Steam library, but battery life could be better.', name_user: 'SteamLibrarian', url_image_user: 'https://randomuser.me/api/portraits/women/34.jpg', productId: steamDeck.id },
        { rating: 5, message: 'Desktop PC experience in a handheld. Revolutionary gaming device!', name_user: 'HandheldRevolutionary', url_image_user: 'https://randomuser.me/api/portraits/men/34.jpg', productId: steamDeck.id },
        { rating: 3, message: 'Great concept, but some games require tweaking to run properly.', name_user: 'TinkererGamer', url_image_user: 'https://randomuser.me/api/portraits/women/33.jpg', productId: steamDeck.id },
        { rating: 4, message: 'Perfect for indie games and older AAA titles. Love the versatility!', name_user: 'IndieGamer', url_image_user: 'https://randomuser.me/api/portraits/men/36.jpg', productId: steamDeck.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: steamDeck.id }]
    });
    await prisma.product.update({
      where: { id: steamDeck.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });
  }

  
  const xiaomi14 = await prisma.product.findFirst({ where: { name: 'Xiaomi 14' } });
  if (xiaomi14) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.36 inches',
        cpu: 'Snapdragon 8 Gen 3',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 50MP Ultra Wide + 50MP Telephoto',
        front_camera: '32MP',
        battery: '4610mAh',
        product: { connect: { id: xiaomi14.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Black', hex_code: '#000000', productId: xiaomi14.id }, 
        { name: 'White', hex_code: '#FFFFFF', productId: xiaomi14.id },
        { name: 'Green', hex_code: '#228B22', productId: xiaomi14.id },
        { name: 'Pink', hex_code: '#FFB6C1', productId: xiaomi14.id }
      ] 
    });

    await prisma.product.update({
      where: { id: xiaomi14.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Incredible camera quality with Leica partnership. Flagship performance!', name_user: 'XiaomiFan', url_image_user: 'https://randomuser.me/api/portraits/men/43.jpg', productId: xiaomi14.id },
        { rating: 4, message: 'Great value flagship, but MIUI can be overwhelming for some users.', name_user: 'MIUIUser', url_image_user: 'https://randomuser.me/api/portraits/women/43.jpg', productId: xiaomi14.id },
        { rating: 5, message: 'Best price-to-performance ratio in the flagship segment.', name_user: 'ValueHunter2024', url_image_user: 'https://randomuser.me/api/portraits/men/42.jpg', productId: xiaomi14.id },
        { rating: 3, message: 'Good phone, but software update schedule could be more consistent.', name_user: 'UpdateTracker', url_image_user: 'https://randomuser.me/api/portraits/women/41.jpg', productId: xiaomi14.id },
        { rating: 4, message: 'Excellent build quality and display. Fast charging is amazing!', name_user: 'ChargingEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/men/48.jpg', productId: xiaomi14.id },
      ],
    });
  }

  
  const pixel8Pro = await prisma.product.findFirst({ where: { name: 'Google Pixel 8 Pro' } });
  if (pixel8Pro) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.7 inches',
        cpu: 'Google Tensor G3',
        total_cores: '8-core CPU',
        main_camera: '50MP Main + 48MP Ultra Wide + 48MP Telephoto',
        front_camera: '10.5MP',
        battery: '5050mAh',
        product: { connect: { id: pixel8Pro.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Obsidian', hex_code: '#3C3C3C', productId: pixel8Pro.id }, 
        { name: 'Porcelain', hex_code: '#F5F5DC', productId: pixel8Pro.id },
        { name: 'Bay', hex_code: '#87CEEB', productId: pixel8Pro.id }
      ] 
    });

    await prisma.product.update({
      where: { id: pixel8Pro.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['128GB'] },
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'AI features are revolutionary! Magic Eraser and Call Screen are game-changers.', name_user: 'AIEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/women/83.jpg', productId: pixel8Pro.id },
        { rating: 4, message: 'Pure Android experience with best-in-class camera computational photography.', name_user: 'AndroidPurist', url_image_user: 'https://randomuser.me/api/portraits/men/32.jpg', productId: pixel8Pro.id },
        { rating: 5, message: 'Night Sight and Portrait modes are absolutely incredible!', name_user: 'NightPhotographer', url_image_user: 'https://randomuser.me/api/portraits/women/11.jpg', productId: pixel8Pro.id },
        { rating: 3, message: 'Great camera, but battery life could be improved for heavy usage.', name_user: 'HeavyUser', url_image_user: 'https://randomuser.me/api/portraits/men/11.jpg', productId: pixel8Pro.id },
        { rating: 4, message: 'Regular updates and security patches make this phone future-proof.', name_user: 'SecurityFirst', url_image_user: 'https://randomuser.me/api/portraits/women/16.jpg', productId: pixel8Pro.id },
      ],
    });
  }

  
  const iphone14Pro = await prisma.product.findFirst({ where: { name: 'Apple iPhone 14 Pro' } });
  if (iphone14Pro) {
    await prisma.smartphoneSpec.create({
      data: {
        screen_size: '6.7"',
        cpu: 'Apple A16 Bionic',
        total_cores: '6',
        main_camera: '48-12 -12 MP',
        front_camera: '12 MP',
        battery: '4323 mAh',
        product: { connect: { id: iphone14Pro.id } },
      },
    });

    await prisma.colorProduct.createMany({ 
      data: [
        { name: 'Black', hex_code: '#000000', productId: iphone14Pro.id },
        { name: 'Purple', hex_code: '#781DBC', productId: iphone14Pro.id },
        { name: 'Red', hex_code: '#E10000', productId: iphone14Pro.id },
        { name: 'Gold', hex_code: '#E1B000', productId: iphone14Pro.id },
        { name: 'Silver', hex_code: '#E8E8E8', productId: iphone14Pro.id }
      ] 
    });

    await prisma.product.update({
      where: { id: iphone14Pro.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['128GB'] },
            { id: storageMap['256GB'] },
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });

    await prisma.review.createMany({
      data: [

        { rating: 5, message: 'Dynamic Island is innovative! 48MP camera takes stunning photos.', name_user: 'DynamicIslandFan', url_image_user: 'https://randomuser.me/api/portraits/men/90.jpg', productId: iphone14Pro.id },
        { rating: 4, message: 'Great phone with excellent build quality, but the price is steep.', name_user: 'PremiumBuyer', url_image_user: 'https://randomuser.me/api/portraits/women/90.jpg', productId: iphone14Pro.id },
        { rating: 5, message: 'iOS ecosystem integration is seamless. Perfect for productivity!', name_user: 'iOSEcosystem', url_image_user: 'https://randomuser.me/api/portraits/men/99.jpg', productId: iphone14Pro.id },
        { rating: 3, message: 'Good phone, but not a huge upgrade from iPhone 13 Pro.', name_user: 'UpgradeSkipper', url_image_user: 'https://randomuser.me/api/portraits/women/99.jpg', productId: iphone14Pro.id },
        { rating: 4, message: 'Camera quality is outstanding, especially in ProRAW mode.', name_user: 'ProRAWShooter', url_image_user: 'https://randomuser.me/api/portraits/men/98.jpg', productId: iphone14Pro.id },
      ],
    });
  }

  
  const appleWatchUltra = await prisma.product.findFirst({ where: { name: 'Apple Watch Ultra 2' } });
  if (appleWatchUltra) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Perfect for extreme sports and outdoor adventures. Built like a tank!', name_user: 'ExtremeAthlete', url_image_user: 'https://randomuser.me/api/portraits/women/31.jpg', productId: appleWatchUltra.id },
        { rating: 4, message: 'Amazing battery life and rugged design, but quite expensive.', name_user: 'RuggedTester', url_image_user: 'https://randomuser.me/api/portraits/men/38.jpg', productId: appleWatchUltra.id },
        { rating: 5, message: 'Best smartwatch for serious athletes and outdoor enthusiasts.', name_user: 'OutdoorPro', url_image_user: 'https://randomuser.me/api/portraits/women/38.jpg', productId: appleWatchUltra.id },
        { rating: 3, message: 'Great watch, but too bulky for everyday casual wear.', name_user: 'CasualWearer', url_image_user: 'https://randomuser.me/api/portraits/men/39.jpg', productId: appleWatchUltra.id },
        { rating: 4, message: 'Precision GPS and diving features are incredibly accurate.', name_user: 'DivingInstructor', url_image_user: 'https://randomuser.me/api/portraits/women/39.jpg', productId: appleWatchUltra.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Titanium', hex_code: '#B0B0B0', productId: appleWatchUltra.id }]
    });
    await prisma.product.update({
      where: { id: appleWatchUltra.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['64GB'] }],
        },
      },
    });
  }

  
  const galaxyWatch6 = await prisma.product.findFirst({ where: { name: 'Samsung Galaxy Watch6' } });
  if (galaxyWatch6) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Excellent health tracking with body composition analysis!', name_user: 'HealthMonitor', url_image_user: 'https://randomuser.me/api/portraits/men/40.jpg', productId: galaxyWatch6.id },
        { rating: 4, message: 'Great integration with Samsung phones, but battery could be better.', name_user: 'SamsungEcosystem', url_image_user: 'https://randomuser.me/api/portraits/women/40.jpg', productId: galaxyWatch6.id },
        { rating: 5, message: 'Wear OS 4 is smooth and responsive. Love the customization options!', name_user: 'WearOSFan', url_image_user: 'https://randomuser.me/api/portraits/men/41.jpg', productId: galaxyWatch6.id },
        { rating: 3, message: 'Good smartwatch, but rotating bezel from older models was better.', name_user: 'BezelMisser', url_image_user: 'https://randomuser.me/api/portraits/women/41.jpg', productId: galaxyWatch6.id },
        { rating: 4, message: 'Sleep tracking and heart rate monitoring are very accurate.', name_user: 'SleepTracker', url_image_user: 'https://randomuser.me/api/portraits/men/85.jpg', productId: galaxyWatch6.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Graphite', hex_code: '#2F2F2F', productId: galaxyWatch6.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: galaxyWatch6.id }
      ]
    });
    await prisma.product.update({
      where: { id: galaxyWatch6.id },
      data: {
        storage_options: {
          connect: [{ id: storageMap['16GB'] }],
        },
      },
    });
  }

  
  const airpodsMax = await prisma.product.findFirst({ where: { name: 'Apple AirPods Max' } });
  if (airpodsMax) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Premium build quality with exceptional sound and noise cancellation.', name_user: 'PremiumAudio', url_image_user: 'https://randomuser.me/api/portraits/women/61.jpg', productId: airpodsMax.id },
        { rating: 4, message: 'Amazing sound quality, but the weight can be uncomfortable for long use.', name_user: 'WeightWatcher', url_image_user: 'https://randomuser.me/api/portraits/men/61.jpg', productId: airpodsMax.id },
        { rating: 5, message: 'Spatial Audio is mind-blowing for movies and music!', name_user: 'SpatialAudioFan', url_image_user: 'https://randomuser.me/api/portraits/women/62.jpg', productId: airpodsMax.id },
        { rating: 3, message: 'Great headphones, but the case design is impractical and weird.', name_user: 'CaseDesignCritic', url_image_user: 'https://randomuser.me/api/portraits/men/62.jpg', productId: airpodsMax.id },
        { rating: 4, message: 'Seamless integration with Apple devices makes them worth it.', name_user: 'AppleEcosystem', url_image_user: 'https://randomuser.me/api/portraits/women/63.jpg', productId: airpodsMax.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Space Gray', hex_code: '#A2AAAD', productId: airpodsMax.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: airpodsMax.id }
      ]
    });
  }

  const boseQC = await prisma.product.findFirst({ where: { name: 'Bose QuietComfort Ultra' } });
  if (boseQC) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Best noise cancellation in the market! Perfect for travel.', name_user: 'FrequentFlyer', url_image_user: 'https://randomuser.me/api/portraits/men/64.jpg', productId: boseQC.id },
        { rating: 4, message: 'Incredible comfort and noise cancellation, but lacks some smart features.', name_user: 'ComfortLover', url_image_user: 'https://randomuser.me/api/portraits/women/64.jpg', productId: boseQC.id },
        { rating: 5, message: 'Immersive Audio feature creates an amazing listening experience.', name_user: 'ImmersiveListener', url_image_user: 'https://randomuser.me/api/portraits/men/65.jpg', productId: boseQC.id },
        { rating: 3, message: 'Great headphones, but the app could be more user-friendly.', name_user: 'AppCritic', url_image_user: 'https://randomuser.me/api/portraits/women/8.jpg', productId: boseQC.id },
        { rating: 4, message: 'Long battery life and quick charge feature are very convenient.', name_user: 'BatteryLife', url_image_user: 'https://randomuser.me/api/portraits/men/8.jpg', productId: boseQC.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Black', hex_code: '#000000', productId: boseQC.id },
        { name: 'White', hex_code: '#FFFFFF', productId: boseQC.id }
      ]
    });
  }

  const canonR5 = await prisma.product.findFirst({ where: { name: 'Canon EOS R5' } });
  if (canonR5) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Professional-grade camera with incredible 8K video capabilities!', name_user: 'VideoProducer', url_image_user: 'https://randomuser.me/api/portraits/women/3.jpg', productId: canonR5.id },
        { rating: 4, message: 'Amazing image quality and autofocus, but overheating can be an issue.', name_user: 'OverheatWatcher', url_image_user: 'https://randomuser.me/api/portraits/men/3.jpg', productId: canonR5.id },
        { rating: 5, message: 'Best mirrorless camera for wedding and portrait photography.', name_user: 'WeddingPhotographer', url_image_user: 'https://randomuser.me/api/portraits/women/4.jpg', productId: canonR5.id },
        { rating: 3, message: 'Excellent camera, but the price point is quite high for hobbyists.', name_user: 'HobbyistPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/56.jpg', productId: canonR5.id },
        { rating: 4, message: 'In-body image stabilization works perfectly with RF lenses.', name_user: 'StabilizationTester', url_image_user: 'https://randomuser.me/api/portraits/women/6.jpg', productId: canonR5.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: canonR5.id }]
    });
  }

  const sonyA7IV = await prisma.product.findFirst({ where: { name: 'Sony Alpha 7 IV' } });
  if (sonyA7IV) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Perfect all-around camera for both photo and video work!', name_user: 'HybridShooter', url_image_user: 'https://randomuser.me/api/portraits/men/6.jpg', productId: sonyA7IV.id },
        { rating: 4, message: 'Great image quality and features, but menu system is complex.', name_user: 'MenuNavigatorPro', url_image_user: 'https://randomuser.me/api/portraits/women/7.jpg', productId: sonyA7IV.id },
        { rating: 5, message: 'Excellent low-light performance and dynamic range.', name_user: 'LowLightSpecialist', url_image_user: 'https://randomuser.me/api/portraits/men/8.jpg', productId: sonyA7IV.id },
        { rating: 3, message: 'Good camera, but battery life could definitely be improved.', name_user: 'BatteryLifeWatcher', url_image_user: 'https://randomuser.me/api/portraits/women/9.jpg', productId: sonyA7IV.id },
        { rating: 4, message: 'Real-time tracking autofocus is incredibly accurate for moving subjects.', name_user: 'ActionPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/3.jpg', productId: sonyA7IV.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [{ name: 'Black', hex_code: '#000000', productId: sonyA7IV.id }]
    });
  }

  const macbookPro14 = await prisma.product.findFirst({ where: { name: 'MacBook Pro 14' } });
  if (macbookPro14) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'M3 Pro chip delivers incredible performance for video editing and development!', name_user: 'VideoEditor', url_image_user: 'https://randomuser.me/api/portraits/women/1.jpg', productId: macbookPro14.id },
        { rating: 4, message: 'Amazing display and performance, but the price is quite premium.', name_user: 'PremiumLaptopBuyer', url_image_user: 'https://randomuser.me/api/portraits/men/11.jpg', productId: macbookPro14.id },
        { rating: 5, message: 'Perfect laptop for creative professionals. Battery life is outstanding!', name_user: 'CreativeProfessional', url_image_user: 'https://randomuser.me/api/portraits/women/16.jpg', productId: macbookPro14.id },
        { rating: 3, message: 'Great laptop, but limited port selection still requires dongles.', name_user: 'DongleHater', url_image_user: 'https://randomuser.me/api/portraits/men/17.jpg', productId: macbookPro14.id },
        { rating: 4, message: 'Silent operation and cool running even under heavy workloads.', name_user: 'SilentWorker', url_image_user: 'https://randomuser.me/api/portraits/women/17.jpg', productId: macbookPro14.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Space Gray', hex_code: '#4A4A4A', productId: macbookPro14.id },
        { name: 'Silver', hex_code: '#C0C0C0', productId: macbookPro14.id }
      ]
    });
    await prisma.product.update({
      where: { id: macbookPro14.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
    });
  }

  const dellXPS15 = await prisma.product.findFirst({ where: { name: 'Dell XPS 15' } });
  if (dellXPS15) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Stunning 4K display and powerful performance for content creation!', name_user: 'ContentCreator', url_image_user: 'https://randomuser.me/api/portraits/men/13.jpg', productId: dellXPS15.id },
        { rating: 4, message: 'Great build quality and display, but trackpad could be more responsive.', name_user: 'TrackpadCritic', url_image_user: 'https://randomuser.me/api/portraits/women/13.jpg', productId: dellXPS15.id },
        { rating: 5, message: 'Best Windows laptop for developers and creative professionals.', name_user: 'WindowsDeveloper', url_image_user: 'https://randomuser.me/api/portraits/men/14.jpg', productId: dellXPS15.id },
        { rating: 3, message: 'Good laptop, but thermal management could be better under load.', name_user: 'ThermalTester', url_image_user: 'https://randomuser.me/api/portraits/women/14.jpg', productId: dellXPS15.id },
        { rating: 4, message: 'Excellent keyboard and premium materials throughout.', name_user: 'MaterialExpert', url_image_user: 'https://randomuser.me/api/portraits/men/19.jpg', productId: dellXPS15.id },
      ],
    });
    await prisma.colorProduct.createMany({
      data: [
        { name: 'Silver', hex_code: '#C0C0C0', productId: dellXPS15.id },
        { name: 'Graphite', hex_code: '#2F2F2F', productId: dellXPS15.id }
      ]
    });
    await prisma.product.update({
      where: { id: dellXPS15.id },
      data: {
        storage_options: {
          connect: [
            { id: storageMap['512GB'] },
            { id: storageMap['1TB'] },
          ],
        },
      },
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