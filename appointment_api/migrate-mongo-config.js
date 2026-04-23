const config = {
  mongodb: {

    url: "mongodb://localhost:27017",

    databaseName: "DATABASENAME",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   connectTimeoutMS: 3600000,
      //   socketTimeoutMS: 3600000,
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  lockCollectionName: "changelog_lock",

  lockTtl: 0,

  migrationFileExtension: ".js",
  
  useFileHash: false,

  moduleSystem: 'commonjs',
};

module.exports = config;
