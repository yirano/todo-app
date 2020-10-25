module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./database/dbMigrations.db3"
		},
		migrations: {
			directory: "./database/migrations",
			tableName: "dbMigrations"
		},
		seeds: {
			directory: "./database/seeds"
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done)
			}
		}
	},
	testing: {
		client: "sqlite3",
		connection: { filename: "./database/test.db3" },
		useNullAsDefault: true,
		migrations: {
			directory: "./database/migrations",
			tableName: "dbMigrations"
		},
		seeds: { directory: "./database/seeds" },
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys=ON", done)
			}
		}
	},
	production: {
		client: "postgresql",
		connection: "process.env.DATABASE_URL",
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./database/migrations"
		},
		seeds: {
			directory: "./database/seeds"
		}
	}
}