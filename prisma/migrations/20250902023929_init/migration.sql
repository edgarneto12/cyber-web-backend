/*
  Warnings:

  - You are about to drop the `storage_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `created_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `id_category` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `id_specs_smartphone` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `discounted_price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_product` to the `smartphone_specs` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "storage_options";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "StorageOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToStorageOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProductToStorageOption_A_fkey" FOREIGN KEY ("A") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToStorageOption_B_fkey" FOREIGN KEY ("B") REFERENCES "StorageOption" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "discounted_price" REAL,
    "stock" INTEGER NOT NULL,
    "url_image" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("brand", "description", "discounted_price", "id", "name", "price", "stock", "tag", "url_image") SELECT "brand", "description", "discounted_price", "id", "name", "price", "stock", "tag", "url_image" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE TABLE "new_smartphone_specs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "screen_size" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "total_cores" TEXT NOT NULL,
    "main_camera" TEXT NOT NULL,
    "front_camera" TEXT NOT NULL,
    "battery" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id_product" INTEGER NOT NULL,
    CONSTRAINT "smartphone_specs_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_smartphone_specs" ("battery", "cpu", "created_at", "front_camera", "id", "main_camera", "screen_size", "total_cores", "updated_at") SELECT "battery", "cpu", "created_at", "front_camera", "id", "main_camera", "screen_size", "total_cores", "updated_at" FROM "smartphone_specs";
DROP TABLE "smartphone_specs";
ALTER TABLE "new_smartphone_specs" RENAME TO "smartphone_specs";
CREATE UNIQUE INDEX "smartphone_specs_id_product_key" ON "smartphone_specs"("id_product");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "StorageOption_size_key" ON "StorageOption"("size");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToStorageOption_AB_unique" ON "_ProductToStorageOption"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToStorageOption_B_index" ON "_ProductToStorageOption"("B");
