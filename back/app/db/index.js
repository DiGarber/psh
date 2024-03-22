import { Sequelize } from "sequelize";

const db = new Sequelize("psh", "psh", "psh", {
  host: "localhost",
  port: 6000,
  dialect: "mysql",
});

(async () => {
  try {
    await db.sync({ force: false });
    console.log("DB synced.");
  } catch (error) {
    console.error("Error syncing DB:", error);
  }
})();

db.authenticate()
  .then(() => {
    console.log("DB successfully connected.");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

export default db;
