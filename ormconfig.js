module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [process.env.NODE_ENV === "production"
      ? "./dist/modules/**/infra/typeorm/entities/*.js"
      : "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    migrations: [process.env.NODE_ENV === "production"
      ? "./dist/shared/infra/typeorm/migrations/*.js"
      : "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    cli: {migrationsDir: process.env.NODE_ENV === "production"
      ? "./dist/shared/infra/typeorm/migrations"
      : "./src/shared/infra/typeorm/migrations"
    }
  }
