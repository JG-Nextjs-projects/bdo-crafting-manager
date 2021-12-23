-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "gathering" INTEGER NOT NULL,
    "fishing" INTEGER NOT NULL,
    "hunting" INTEGER NOT NULL,
    "cooking" INTEGER NOT NULL,
    "alchemy" INTEGER NOT NULL,
    "processing" INTEGER NOT NULL,
    "training" INTEGER NOT NULL,
    "trade" INTEGER NOT NULL,
    "farming" INTEGER NOT NULL,
    "sailing" INTEGER NOT NULL,
    "barter" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
