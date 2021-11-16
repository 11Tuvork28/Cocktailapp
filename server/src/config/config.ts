// Config file mit den wichtigsten Daten
//MongoDB config
const MONGO_OPTIONS = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	socketTimeoutMS: 30000,
	keepAlive: true,
	poolSize: 50,
	autoIndex: false,
	retryWrites: true,
	useFindAndModify: false,
};

const MONGO_USERNAME = 'dbuser';
const MONGO_PASSWORD = '9050c75b5e9dc5a2b56f5791f9c056853c5d8b3f6bc30c';
const MONGO_HOST = `xamh.de:27017/cocktails`;

const MONGO = {
	host: MONGO_HOST,
	password: MONGO_PASSWORD,
	username: MONGO_USERNAME,
	options: MONGO_OPTIONS,
	url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
};

//Server config
const SERVER_HOSTNAME = 'localhost';
const SERVER_PORT = 5000;
const SERVER_TOKEN_EXPIRETIME_ACCESS = 60; // In Sekunden
const SERVER_TOKEN_EXPIRETIME_REFRESH = 3600; // In Sekunden
const SERVER_TOKEN_ISSUER =
	'f8532dd4dc1c04c63eae3c0f10470fceb0d288ac81e3519fbe15273daac9c278d6cae6e079bd1ede4c23abd60c63f248efd390dac455d651c675dfce39a601b2f62efe003a338a8f7b4b66178f3aef8a7c2932dfa57a2211a7228f75f3d9b7e37fb4a0826d5c8e06fd5b6b6a658859a9fde2968b7670c8e6610fc37dca931e71';
const SERVER_TOKEN_SECRET =
	'88f9bd2a13c9a6b225876c8943ca164b6661e560d69bdc901d93f9640fc43e9b62a577403c21d42f6148e85f2a1c6486f7cc0c4ca09e0241c38ec86d4e77951d2ada059b4490db9be4574ed73f15bf2dbac321044c5f47c30e53b61c7e385132a77a3562c73aa90a6d153cc254a2deaabd1f31b11c476fe2424882f0145c2a20';

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
	token: {
		expireTimeAccess: SERVER_TOKEN_EXPIRETIME_ACCESS,
		expireTimeRefresh: SERVER_TOKEN_EXPIRETIME_REFRESH,
		issuer: SERVER_TOKEN_ISSUER,
		secret: SERVER_TOKEN_SECRET,
	},
};
//Urls
const STATIC_URL = '';
const config = {
	mongo: MONGO,
	server: SERVER,
	static: STATIC_URL,
};

export default config;
