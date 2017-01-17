import { ServerConfig } from 'okapiframework';

export default <ServerConfig> {
    port: 3000,
    database: {
        client: 'pg',
        connection: {
            host: '',
            user: '',
            password: '',
            database: ''
        },
        migrations: {
            tableName: 'migrations'
        }
    }
}
