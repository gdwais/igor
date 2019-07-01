
const config = {
    local: {
        postgres: 'postgres://localhost:5432/igor-db'
    },
    test: {
        postgres: 'postgres://localhost:5432/igor-db-test'
    }
}
const env = process.env["NODE_ENV"];
const configuration = env ? config[env] : config.local;
export default configuration;