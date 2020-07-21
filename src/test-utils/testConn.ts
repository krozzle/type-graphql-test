import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kbrownie',
    password: 'postgres',
    database: 'virtual-dojo-vienna-test',
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + '../entity/*.*'],
  });
};
