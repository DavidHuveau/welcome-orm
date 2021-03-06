module.exports = {
  development: {
    storage: "db.sqlite",
    dialect: "sqlite"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};
