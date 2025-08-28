-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "discounted_price" DECIMAL,
    "stock" INTEGER NOT NULL,
    "url_image" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_specs_smartphone" INTEGER,
    CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_id_specs_smartphone_fkey" FOREIGN KEY ("id_specs_smartphone") REFERENCES "smartphone_specs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "smartphone_specs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "screen_size" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "total_cores" TEXT NOT NULL,
    "main_camera" TEXT NOT NULL,
    "front_camera" TEXT NOT NULL,
    "battery" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "colors_product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hex_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id_product" INTEGER NOT NULL,
    CONSTRAINT "colors_product_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "storage_options" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id_product" INTEGER NOT NULL,
    CONSTRAINT "storage_options_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "url_image_user" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id_product" INTEGER NOT NULL,
    CONSTRAINT "reviews_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_specs_smartphone_key" ON "products"("id_specs_smartphone");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "colors_product_id_product_key" ON "colors_product"("id_product");

-- CreateIndex
CREATE UNIQUE INDEX "storage_options_id_product_key" ON "storage_options"("id_product");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_id_product_key" ON "reviews"("id_product");
