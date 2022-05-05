-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "phoneNumber" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'Active'
);
INSERT INTO "new_User" ("email", "id", "name", "phoneNumber") SELECT "email", "id", "name", "phoneNumber" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
