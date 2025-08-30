import {PrismaClient} from '../generated/prisma';

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
      
      { name: 'OnePlus 12', description: 'Fast and smooth with flagship performance.', brand: 'OnePlus', price: 699.00, stock: 45, url_image: 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/products/oneplus-12/specs/kv-1440.jpg', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'Motorola Edge 50 Pro', description: 'Flagship performance with stunning display.', brand: 'Motorola', price: 649.00, stock: 40, url_image: 'https://motorolaus.vtexassets.com/arquivos/ids/163053-800-auto?v=638488964393430000&width=800&height=auto&aspect=true', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Huawei P60 Pro', description: 'Ultra Lighting Camera with XMAGE technology.', brand: 'Huawei', price: 899.00, stock: 35, url_image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p60-pro/images/p60-pro-kv.png', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'Redmi Note 13 Pro', description: 'Powerful mid-range with 200MP camera.', brand: 'Redmi', price: 399.00, stock: 60, url_image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-13-pro/specs-header.png', tag: 'discount_up_to_50', categoryId: phonesCategory.id },
      { name: 'Nothing Phone (2)', description: 'Pure instinct. Glyph Interface illuminated.', brand: 'Nothing', price: 599.00, stock: 50, url_image: 'https://nothing.tech/cdn/shop/files/Phone2_PDP_Gallery_Glyph_Desktop_1600x.jpg?v=1689159123', tag: 'new_arrival', categoryId: phonesCategory.id },
      { name: 'OPPO Find X7 Ultra', description: 'Master portrait photography with Hasselblad.', brand: 'OPPO', price: 849.00, stock: 35, url_image: 'https://image01.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x7-ultra-new/pc/find-x7-ultra-brown-kv-pc.png', tag: 'featured_product', categoryId: phonesCategory.id },
      { name: 'Vivo X100 Pro', description: 'Professional portrait photography redefined.', brand: 'Vivo', price: 749.00, stock: 40, url_image: 'https://www.vivo.com/content/dam/vivo/en/products/x100-pro/img/kv-img.png', tag: 'bestseller', categoryId: phonesCategory.id },
      { name: 'Google Pixel 7a', description: 'Affordable Pixel with flagship camera.', brand: 'Google', price: 499.00, stock: 55, url_image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_7a_Obsidian.width-1300.format-webp.webp', tag: 'discount_up_to_50', categoryId: phonesCategory.id },
      
      
      { name: 'Apple Watch Ultra 2', description: 'Next-level adventure.', brand: 'Apple', price: 799.00, stock: 45, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT623ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR_WF_CO?wid=752&hei=720&bg=p-Eixo,0,0,0,0&trim=1&fmt=p-jpg&qlt=80&.v=1694507270905', tag: 'new_arrival', categoryId: watchesCategory.id },
      { name: 'Samsung Galaxy Watch6', description: 'Start your everyday wellness journey.', brand: 'Samsung', price: 299.00, stock: 70, url_image: 'https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-r940-sm-r940nzepzto-537330283?$650_519_PNG$', tag: 'bestseller', categoryId: watchesCategory.id },
      { name: 'Huawei Watch GT 4', description: 'Smart health and fitness companion.', brand: 'Huawei', price: 249.00, stock: 60, url_image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/images/watch-gt4-kv.png', tag: 'featured_product', categoryId: watchesCategory.id },
      { name: 'Xiaomi Watch S3', description: 'Premium design meets smart functionality.', brand: 'Xiaomi', price: 199.00, stock: 80, url_image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-watch-s3/specs-kv.png', tag: 'discount_up_to_50', categoryId: watchesCategory.id },
      
      
      { name: 'Sony WH-1000XM5', description: 'The best noise canceling headphones.', brand: 'Sony', price: 399.00, stock: 80, url_image: 'https://www.sony.com/image/5d02da5df55283e2e8b93441fb8a7dfa?fmt=png-alpha&wid=480', tag: 'featured_product', categoryId: headphonesCategory.id },
      { name: 'Apple AirPods Max', description: 'A perfect balance of high-fidelity audio.', brand: 'Apple', price: 549.00, discounted_price: 499.00, stock: 35, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000', tag: 'discount_up_to_50', categoryId: headphonesCategory.id },
      { name: 'Bose QuietComfort Ultra', description: 'World-class noise cancellation.', brand: 'Bose', price: 429.00, stock: 55, url_image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/qc-ultra-headphones-black-Silo-01-full.png/jcr:content/renditions/cq5dam.web.1280.1280.png', tag: 'bestseller', categoryId: headphonesCategory.id },
      { name: 'Sennheiser Momentum 4', description: 'Exceptional sound meets intelligent adaptive noise cancellation.', brand: 'Sennheiser', price: 349.00, stock: 45, url_image: 'https://assets.sennheiser.com/img/18026/square_louped_01_sq_momentum_4_wireless_black_sennheiser.png', tag: 'new_arrival', categoryId: headphonesCategory.id },
      { name: 'Audio-Technica ATH-M50xBT2', description: 'Professional studio quality with wireless freedom.', brand: 'Audio-Technica', price: 199.00, stock: 70, url_image: 'https://www.audio-technica.com/cms/resource_library/product_images/7cc6c4cd7c49c56e/application_image_file_14321_large.jpg', tag: 'bestseller', categoryId: headphonesCategory.id },
      
      
      { name: 'Canon EOS R5', description: 'A professional mirrorless camera.', brand: 'Canon', price: 3899.00, stock: 15, url_image: 'https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c2049825244b38996e127688234479?$prod-gallery-1by1-s-jpg$', tag: 'featured_product', categoryId: camerasCategory.id },
      { name: 'Sony Alpha 7 IV', description: 'Beyond basic. A new standard for full-frame.', brand: 'Sony', price: 2499.00, stock: 20, url_image: 'https://www.sony.com/image/24855535b804342b4d8328571e22b3c1?fmt=png-alpha&wid=480', tag: 'bestseller', categoryId: camerasCategory.id },
      { name: 'Nikon Z9', description: 'No compromise mirrorless flagship.', brand: 'Nikon', price: 5499.00, stock: 12, url_image: 'https://www.nikon.com/content/dam/nikon/global/products/cameras/mirrorless/fx/z-9/product/img/sample_01.jpg', tag: 'new_arrival', categoryId: camerasCategory.id },
      { name: 'Fujifilm X-T5', description: 'Classic design with modern performance.', brand: 'Fujifilm', price: 1699.00, stock: 25, url_image: 'https://fujifilm-x.com/wp-content/uploads/2022/11/X-T5_BlackSilver_Front_XF18-55mm.png', tag: 'featured_product', categoryId: camerasCategory.id },
      
   
      { name: 'MacBook Pro 14"', description: 'Mind-blowing performance with M3 Pro chip.', brand: 'Apple', price: 1999.00, stock: 25, url_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200', tag: 'new_arrival', categoryId: computersCategory.id },
      { name: 'Dell XPS 15', description: 'Stunning display, powerful performance.', brand: 'Dell', price: 1799.00, discounted_price: 1599.00, stock: 30, url_image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-platinum-silver/notebook-xps-15-9530-t-platinum-silver-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=573&qlt=100,0&resMode=sharp2&size=573,402', tag: 'discount_up_to_50', categoryId: computersCategory.id },
      { name: 'ThinkPad X1 Carbon Gen 11', description: 'Ultra-lightweight business laptop.', brand: 'Lenovo', price: 1899.00, stock: 20, url_image: 'https://p1-ofp.static.pub/fes/cms/2023/02/07/8o2j2v8vxkj8wnjm5xk0qcyrs4i80v451866.png', tag: 'bestseller', categoryId: computersCategory.id },
      { name: 'ASUS ROG Zephyrus G16', description: 'Gaming laptop with style and performance.', brand: 'ASUS', price: 2299.00, stock: 18, url_image: 'https://dlcdnwebimgs.asus.com/gain/A8B0CC23-6467-4B09-AB6D-D867F93F7B9E/w800', tag: 'new_arrival', categoryId: computersCategory.id },
      
      
      { name: 'PlayStation 5', description: 'Play Has No Limits.', brand: 'Sony', price: 499.00, stock: 100, url_image: 'https://www.sony.com/image/48f0382f63343330a8427144e1a0b382?fmt=png-alpha&wid=480', tag: 'bestseller', categoryId: gamingCategory.id },
      { name: 'Xbox Series X', description: 'The fastest, most powerful Xbox ever.', brand: 'Microsoft', price: 499.00, stock: 80, url_image: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb61-5c9e-4a8f-9036-dcf75ec55796.png?n=642227_Hero-Gallery-0_1083x609_02.png', tag: 'new_arrival', categoryId: gamingCategory.id },
      { name: 'Nintendo Switch OLED', description: 'Vivid colors and crisp contrast in handheld mode.', brand: 'Nintendo', price: 349.00, stock: 120, url_image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch-oled-model/hero', tag: 'featured_product', categoryId: gamingCategory.id },
      { name: 'Steam Deck OLED', description: 'Portable PC gaming with OLED display.', brand: 'Valve', price: 649.00, stock: 40, url_image: 'https://cdn.cloudflare.steamstatic.com/steamdeck/images/steamdeck_buy_final.png', tag: 'new_arrival', categoryId: gamingCategory.id },
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

  
  const onePlus12 = await prisma.product.findFirst({ where: { name: 'OnePlus 12' } });
  if (onePlus12) {
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
  }

 
  const thinkpadX1 = await prisma.product.findFirst({ where: { name: 'ThinkPad X1 Carbon Gen 11' } });
  if (thinkpadX1) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Business laptop perfection! Lightweight yet incredibly durable.', name_user: 'BusinessExec', url_image_user: 'https://randomuser.me/api/portraits/men/100.jpg', productId: thinkpadX1.id },
        { rating: 4, message: 'Excellent keyboard and build quality, but display could be brighter.', name_user: 'KeyboardEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/women/100.jpg', productId: thinkpadX1.id },
        { rating: 5, message: 'Most reliable laptop I have ever owned. Perfect for productivity.', name_user: 'ProductivityPro', url_image_user: 'https://randomuser.me/api/portraits/men/101.jpg', productId: thinkpadX1.id },
        { rating: 3, message: 'Good laptop, but premium price for business-focused features.', name_user: 'BudgetBusiness', url_image_user: 'https://randomuser.me/api/portraits/women/101.jpg', productId: thinkpadX1.id },
        { rating: 4, message: 'Exceptional battery life and performance for demanding workloads.', name_user: 'WorkloadMaster', url_image_user: 'https://randomuser.me/api/portraits/men/102.jpg', productId: thinkpadX1.id },
      ],
    });
  }

  const asusROG = await prisma.product.findFirst({ where: { name: 'ASUS ROG Zephyrus G16' } });
  if (asusROG) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Gaming powerhouse with sleek design. Runs everything at max settings!', name_user: 'GamingBeast', url_image_user: 'https://randomuser.me/api/portraits/women/102.jpg', productId: asusROG.id },
        { rating: 4, message: 'Great performance and display, but fans can get loud during gaming.', name_user: 'SilentGamer', url_image_user: 'https://randomuser.me/api/portraits/men/103.jpg', productId: asusROG.id },
        { rating: 5, message: 'Perfect balance of gaming performance and professional aesthetics.', name_user: 'GameDevPro', url_image_user: 'https://randomuser.me/api/portraits/women/103.jpg', productId: asusROG.id },
        { rating: 3, message: 'Powerful machine, but battery life during gaming is disappointing.', name_user: 'BatteryGamer', url_image_user: 'https://randomuser.me/api/portraits/men/104.jpg', productId: asusROG.id },
        { rating: 4, message: 'Excellent build quality and RGB lighting system is amazing.', name_user: 'RGBMaster', url_image_user: 'https://randomuser.me/api/portraits/women/104.jpg', productId: asusROG.id },
      ],
    });
  }

  const xboxSeriesX = await prisma.product.findFirst({ where: { name: 'Xbox Series X' } });
  if (xboxSeriesX) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'True 4K gaming with lightning-fast loading times. Xbox Game Pass is amazing!', name_user: 'XboxFanatic', url_image_user: 'https://randomuser.me/api/portraits/men/105.jpg', productId: xboxSeriesX.id },
        { rating: 4, message: 'Powerful console with great backwards compatibility, but exclusive games are limited.', name_user: 'GameLibrarian', url_image_user: 'https://randomuser.me/api/portraits/women/105.jpg', productId: xboxSeriesX.id },
        { rating: 5, message: 'Best value in gaming with Game Pass subscription. Highly recommended!', name_user: 'ValueGamer', url_image_user: 'https://randomuser.me/api/portraits/men/106.jpg', productId: xboxSeriesX.id },
        { rating: 3, message: 'Good console, but design is too large for my entertainment center.', name_user: 'SpaceSaver', url_image_user: 'https://randomuser.me/api/portraits/women/106.jpg', productId: xboxSeriesX.id },
        { rating: 4, message: 'Excellent performance and quiet operation during gameplay.', name_user: 'QuietGamer', url_image_user: 'https://randomuser.me/api/portraits/men/107.jpg', productId: xboxSeriesX.id },
      ],
    });
  }

  const switchOLED = await prisma.product.findFirst({ where: { name: 'Nintendo Switch OLED' } });
  if (switchOLED) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'OLED screen is gorgeous! Perfect for portable and docked gaming.', name_user: 'PortableGamer', url_image_user: 'https://randomuser.me/api/portraits/women/107.jpg', productId: switchOLED.id },
        { rating: 4, message: 'Great upgrade from original Switch, but performance is still limited.', name_user: 'SwitchUpgrader', url_image_user: 'https://randomuser.me/api/portraits/men/108.jpg', productId: switchOLED.id },
        { rating: 5, message: 'Nintendo exclusives are unmatched. Joy-Con controllers work perfectly!', name_user: 'NintendoNinja', url_image_user: 'https://randomuser.me/api/portraits/women/108.jpg', productId: switchOLED.id },
        { rating: 3, message: 'Good console, but Joy-Con drift is still an issue after all these years.', name_user: 'DriftVictim', url_image_user: 'https://randomuser.me/api/portraits/men/109.jpg', productId: switchOLED.id },
        { rating: 4, message: 'Perfect family gaming console with something for everyone.', name_user: 'FamilyGamer', url_image_user: 'https://randomuser.me/api/portraits/women/109.jpg', productId: switchOLED.id },
      ],
    });
  }

  const steamDeck = await prisma.product.findFirst({ where: { name: 'Steam Deck OLED' } });
  if (steamDeck) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'PC gaming on the go is finally perfect! OLED screen is beautiful.', name_user: 'PCGamingNomad', url_image_user: 'https://randomuser.me/api/portraits/men/110.jpg', productId: steamDeck.id },
        { rating: 4, message: 'Amazing device for Steam library, but battery life could be better.', name_user: 'SteamLibrarian', url_image_user: 'https://randomuser.me/api/portraits/women/110.jpg', productId: steamDeck.id },
        { rating: 5, message: 'Desktop PC experience in a handheld. Revolutionary gaming device!', name_user: 'HandheldRevolutionary', url_image_user: 'https://randomuser.me/api/portraits/men/111.jpg', productId: steamDeck.id },
        { rating: 3, message: 'Great concept, but some games require tweaking to run properly.', name_user: 'TinkererGamer', url_image_user: 'https://randomuser.me/api/portraits/women/111.jpg', productId: steamDeck.id },
        { rating: 4, message: 'Perfect for indie games and older AAA titles. Love the versatility!', name_user: 'IndieGamer', url_image_user: 'https://randomuser.me/api/portraits/men/112.jpg', productId: steamDeck.id },
      ],
    });
  }

  
  const xiaomi14 = await prisma.product.findFirst({ where: { name: 'Xiaomi 14' } });
  if (xiaomi14) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Incredible camera quality with Leica partnership. Flagship performance!', name_user: 'XiaomiFan', url_image_user: 'https://randomuser.me/api/portraits/men/113.jpg', productId: xiaomi14.id },
        { rating: 4, message: 'Great value flagship, but MIUI can be overwhelming for some users.', name_user: 'MIUIUser', url_image_user: 'https://randomuser.me/api/portraits/women/113.jpg', productId: xiaomi14.id },
        { rating: 5, message: 'Best price-to-performance ratio in the flagship segment.', name_user: 'ValueHunter2024', url_image_user: 'https://randomuser.me/api/portraits/men/114.jpg', productId: xiaomi14.id },
        { rating: 3, message: 'Good phone, but software update schedule could be more consistent.', name_user: 'UpdateTracker', url_image_user: 'https://randomuser.me/api/portraits/women/114.jpg', productId: xiaomi14.id },
        { rating: 4, message: 'Excellent build quality and display. Fast charging is amazing!', name_user: 'ChargingEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/men/115.jpg', productId: xiaomi14.id },
      ],
    });
  }

  
  const pixel8Pro = await prisma.product.findFirst({ where: { name: 'Google Pixel 8 Pro' } });
  if (pixel8Pro) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'AI features are revolutionary! Magic Eraser and Call Screen are game-changers.', name_user: 'AIEnthusiast', url_image_user: 'https://randomuser.me/api/portraits/women/115.jpg', productId: pixel8Pro.id },
        { rating: 4, message: 'Pure Android experience with best-in-class camera computational photography.', name_user: 'AndroidPurist', url_image_user: 'https://randomuser.me/api/portraits/men/116.jpg', productId: pixel8Pro.id },
        { rating: 5, message: 'Night Sight and Portrait modes are absolutely incredible!', name_user: 'NightPhotographer', url_image_user: 'https://randomuser.me/api/portraits/women/116.jpg', productId: pixel8Pro.id },
        { rating: 3, message: 'Great camera, but battery life could be improved for heavy usage.', name_user: 'HeavyUser', url_image_user: 'https://randomuser.me/api/portraits/men/117.jpg', productId: pixel8Pro.id },
        { rating: 4, message: 'Regular updates and security patches make this phone future-proof.', name_user: 'SecurityFirst', url_image_user: 'https://randomuser.me/api/portraits/women/117.jpg', productId: pixel8Pro.id },
      ],
    });
  }

  
  const iphone14Pro = await prisma.product.findFirst({ where: { name: 'Apple iPhone 14 Pro' } });
  if (iphone14Pro) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Dynamic Island is innovative! 48MP camera takes stunning photos.', name_user: 'DynamicIslandFan', url_image_user: 'https://randomuser.me/api/portraits/men/118.jpg', productId: iphone14Pro.id },
        { rating: 4, message: 'Great phone with excellent build quality, but the price is steep.', name_user: 'PremiumBuyer', url_image_user: 'https://randomuser.me/api/portraits/women/118.jpg', productId: iphone14Pro.id },
        { rating: 5, message: 'iOS ecosystem integration is seamless. Perfect for productivity!', name_user: 'iOSEcosystem', url_image_user: 'https://randomuser.me/api/portraits/men/119.jpg', productId: iphone14Pro.id },
        { rating: 3, message: 'Good phone, but not a huge upgrade from iPhone 13 Pro.', name_user: 'UpgradeSkipper', url_image_user: 'https://randomuser.me/api/portraits/women/119.jpg', productId: iphone14Pro.id },
        { rating: 4, message: 'Camera quality is outstanding, especially in ProRAW mode.', name_user: 'ProRAWShooter', url_image_user: 'https://randomuser.me/api/portraits/men/120.jpg', productId: iphone14Pro.id },
      ],
    });
  }

  
  const appleWatchUltra = await prisma.product.findFirst({ where: { name: 'Apple Watch Ultra 2' } });
  if (appleWatchUltra) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Perfect for extreme sports and outdoor adventures. Built like a tank!', name_user: 'ExtremeAthlete', url_image_user: 'https://randomuser.me/api/portraits/women/120.jpg', productId: appleWatchUltra.id },
        { rating: 4, message: 'Amazing battery life and rugged design, but quite expensive.', name_user: 'RuggedTester', url_image_user: 'https://randomuser.me/api/portraits/men/121.jpg', productId: appleWatchUltra.id },
        { rating: 5, message: 'Best smartwatch for serious athletes and outdoor enthusiasts.', name_user: 'OutdoorPro', url_image_user: 'https://randomuser.me/api/portraits/women/121.jpg', productId: appleWatchUltra.id },
        { rating: 3, message: 'Great watch, but too bulky for everyday casual wear.', name_user: 'CasualWearer', url_image_user: 'https://randomuser.me/api/portraits/men/122.jpg', productId: appleWatchUltra.id },
        { rating: 4, message: 'Precision GPS and diving features are incredibly accurate.', name_user: 'DivingInstructor', url_image_user: 'https://randomuser.me/api/portraits/women/122.jpg', productId: appleWatchUltra.id },
      ],
    });
  }

  
  const galaxyWatch6 = await prisma.product.findFirst({ where: { name: 'Samsung Galaxy Watch6' } });
  if (galaxyWatch6) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Excellent health tracking with body composition analysis!', name_user: 'HealthMonitor', url_image_user: 'https://randomuser.me/api/portraits/men/123.jpg', productId: galaxyWatch6.id },
        { rating: 4, message: 'Great integration with Samsung phones, but battery could be better.', name_user: 'SamsungEcosystem', url_image_user: 'https://randomuser.me/api/portraits/women/123.jpg', productId: galaxyWatch6.id },
        { rating: 5, message: 'Wear OS 4 is smooth and responsive. Love the customization options!', name_user: 'WearOSFan', url_image_user: 'https://randomuser.me/api/portraits/men/124.jpg', productId: galaxyWatch6.id },
        { rating: 3, message: 'Good smartwatch, but rotating bezel from older models was better.', name_user: 'BezelMisser', url_image_user: 'https://randomuser.me/api/portraits/women/124.jpg', productId: galaxyWatch6.id },
        { rating: 4, message: 'Sleep tracking and heart rate monitoring are very accurate.', name_user: 'SleepTracker', url_image_user: 'https://randomuser.me/api/portraits/men/125.jpg', productId: galaxyWatch6.id },
      ],
    });
  }

  
  const airpodsMax = await prisma.product.findFirst({ where: { name: 'Apple AirPods Max' } });
  if (airpodsMax) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Premium build quality with exceptional sound and noise cancellation.', name_user: 'PremiumAudio', url_image_user: 'https://randomuser.me/api/portraits/women/125.jpg', productId: airpodsMax.id },
        { rating: 4, message: 'Amazing sound quality, but the weight can be uncomfortable for long use.', name_user: 'WeightWatcher', url_image_user: 'https://randomuser.me/api/portraits/men/126.jpg', productId: airpodsMax.id },
        { rating: 5, message: 'Spatial Audio is mind-blowing for movies and music!', name_user: 'SpatialAudioFan', url_image_user: 'https://randomuser.me/api/portraits/women/126.jpg', productId: airpodsMax.id },
        { rating: 3, message: 'Great headphones, but the case design is impractical and weird.', name_user: 'CaseDesignCritic', url_image_user: 'https://randomuser.me/api/portraits/men/127.jpg', productId: airpodsMax.id },
        { rating: 4, message: 'Seamless integration with Apple devices makes them worth it.', name_user: 'AppleEcosystem', url_image_user: 'https://randomuser.me/api/portraits/women/127.jpg', productId: airpodsMax.id },
      ],
    });
  }

  const boseQC = await prisma.product.findFirst({ where: { name: 'Bose QuietComfort Ultra' } });
  if (boseQC) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Best noise cancellation in the market! Perfect for travel.', name_user: 'FrequentFlyer', url_image_user: 'https://randomuser.me/api/portraits/men/128.jpg', productId: boseQC.id },
        { rating: 4, message: 'Incredible comfort and noise cancellation, but lacks some smart features.', name_user: 'ComfortLover', url_image_user: 'https://randomuser.me/api/portraits/women/128.jpg', productId: boseQC.id },
        { rating: 5, message: 'Immersive Audio feature creates an amazing listening experience.', name_user: 'ImmersiveListener', url_image_user: 'https://randomuser.me/api/portraits/men/129.jpg', productId: boseQC.id },
        { rating: 3, message: 'Great headphones, but the app could be more user-friendly.', name_user: 'AppCritic', url_image_user: 'https://randomuser.me/api/portraits/women/129.jpg', productId: boseQC.id },
        { rating: 4, message: 'Long battery life and quick charge feature are very convenient.', name_user: 'BatteryLife', url_image_user: 'https://randomuser.me/api/portraits/men/130.jpg', productId: boseQC.id },
      ],
    });
  }

  const canonR5 = await prisma.product.findFirst({ where: { name: 'Canon EOS R5' } });
  if (canonR5) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Professional-grade camera with incredible 8K video capabilities!', name_user: 'VideoProducer', url_image_user: 'https://randomuser.me/api/portraits/women/130.jpg', productId: canonR5.id },
        { rating: 4, message: 'Amazing image quality and autofocus, but overheating can be an issue.', name_user: 'OverheatWatcher', url_image_user: 'https://randomuser.me/api/portraits/men/131.jpg', productId: canonR5.id },
        { rating: 5, message: 'Best mirrorless camera for wedding and portrait photography.', name_user: 'WeddingPhotographer', url_image_user: 'https://randomuser.me/api/portraits/women/131.jpg', productId: canonR5.id },
        { rating: 3, message: 'Excellent camera, but the price point is quite high for hobbyists.', name_user: 'HobbyistPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/132.jpg', productId: canonR5.id },
        { rating: 4, message: 'In-body image stabilization works perfectly with RF lenses.', name_user: 'StabilizationTester', url_image_user: 'https://randomuser.me/api/portraits/women/132.jpg', productId: canonR5.id },
      ],
    });
  }

  const sonyA7IV = await prisma.product.findFirst({ where: { name: 'Sony Alpha 7 IV' } });
  if (sonyA7IV) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Perfect all-around camera for both photo and video work!', name_user: 'HybridShooter', url_image_user: 'https://randomuser.me/api/portraits/men/133.jpg', productId: sonyA7IV.id },
        { rating: 4, message: 'Great image quality and features, but menu system is complex.', name_user: 'MenuNavigatorPro', url_image_user: 'https://randomuser.me/api/portraits/women/133.jpg', productId: sonyA7IV.id },
        { rating: 5, message: 'Excellent low-light performance and dynamic range.', name_user: 'LowLightSpecialist', url_image_user: 'https://randomuser.me/api/portraits/men/134.jpg', productId: sonyA7IV.id },
        { rating: 3, message: 'Good camera, but battery life could definitely be improved.', name_user: 'BatteryLifeWatcher', url_image_user: 'https://randomuser.me/api/portraits/women/134.jpg', productId: sonyA7IV.id },
        { rating: 4, message: 'Real-time tracking autofocus is incredibly accurate for moving subjects.', name_user: 'ActionPhotographer', url_image_user: 'https://randomuser.me/api/portraits/men/135.jpg', productId: sonyA7IV.id },
      ],
    });
  }

  const macbookPro14 = await prisma.product.findFirst({ where: { name: 'MacBook Pro 14"' } });
  if (macbookPro14) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'M3 Pro chip delivers incredible performance for video editing and development!', name_user: 'VideoEditor', url_image_user: 'https://randomuser.me/api/portraits/women/135.jpg', productId: macbookPro14.id },
        { rating: 4, message: 'Amazing display and performance, but the price is quite premium.', name_user: 'PremiumLaptopBuyer', url_image_user: 'https://randomuser.me/api/portraits/men/136.jpg', productId: macbookPro14.id },
        { rating: 5, message: 'Perfect laptop for creative professionals. Battery life is outstanding!', name_user: 'CreativeProfessional', url_image_user: 'https://randomuser.me/api/portraits/women/136.jpg', productId: macbookPro14.id },
        { rating: 3, message: 'Great laptop, but limited port selection still requires dongles.', name_user: 'DongleHater', url_image_user: 'https://randomuser.me/api/portraits/men/137.jpg', productId: macbookPro14.id },
        { rating: 4, message: 'Silent operation and cool running even under heavy workloads.', name_user: 'SilentWorker', url_image_user: 'https://randomuser.me/api/portraits/women/137.jpg', productId: macbookPro14.id },
      ],
    });
  }

  const dellXPS15 = await prisma.product.findFirst({ where: { name: 'Dell XPS 15' } });
  if (dellXPS15) {
    await prisma.review.createMany({
      data: [
        { rating: 5, message: 'Stunning 4K display and powerful performance for content creation!', name_user: 'ContentCreator', url_image_user: 'https://randomuser.me/api/portraits/men/138.jpg', productId: dellXPS15.id },
        { rating: 4, message: 'Great build quality and display, but trackpad could be more responsive.', name_user: 'TrackpadCritic', url_image_user: 'https://randomuser.me/api/portraits/women/138.jpg', productId: dellXPS15.id },
        { rating: 5, message: 'Best Windows laptop for developers and creative professionals.', name_user: 'WindowsDeveloper', url_image_user: 'https://randomuser.me/api/portraits/men/139.jpg', productId: dellXPS15.id },
        { rating: 3, message: 'Good laptop, but thermal management could be better under load.', name_user: 'ThermalTester', url_image_user: 'https://randomuser.me/api/portraits/women/139.jpg', productId: dellXPS15.id },
        { rating: 4, message: 'Excellent keyboard and premium materials throughout.', name_user: 'MaterialExpert', url_image_user: 'https://randomuser.me/api/portraits/men/140.jpg', productId: dellXPS15.id },
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