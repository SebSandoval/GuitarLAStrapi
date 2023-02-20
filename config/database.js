module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfjf4i1mbjsn9efp0f60-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_dxg5'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '96g3Bp3NlT6JEvD2uQGol6Lx2g3rlNeo'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
