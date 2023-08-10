print('Start init mongo script...');

var dbName = process.env.DB_NAME || 'realtime_chat';
var dbUser = process.env.DB_USERNAME || 'root';
var dbPassword = process.env.DB_PASSWORD || 'secret';

db = db.getSiblingDB(dbName);

db.createUser({
  user: dbUser,
  pwd: dbPassword,
  roles: [{ role: 'readWrite', db: dbName }],
});

print('End init mongo script...');
