import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
    cache: true;
}

getConnectionOptions().then((options) => {
    const newOptions = options as IOptions;
    newOptions.host = process.env.DATABASE_NAME;
    createConnection({
        ...options,
    });
});
