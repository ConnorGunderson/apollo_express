/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "phoneNumber" BIGINT,
    "status" TEXT NOT NULL DEFAULT 'Active'
);
INSERT INTO "new_User" ("email", "id", "name", "phoneNumber", "status") SELECT "email", "id", "name", "phoneNumber", "status" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
