"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabase = void 0;
const mongodb_1 = require("mongodb");
const database_1 = __importDefault(require("../../config/database"));
const client = new mongodb_1.MongoClient(database_1.default.localURI);
function createDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to MongoDB
            yield client.connect();
            // Check if the database exists
            const adminDb = client.db('admin');
            const databaseList = yield adminDb.admin().listDatabases();
            const databaseExists = databaseList.databases.some((db) => db.name === database_1.default.name);
            if (!databaseExists) {
                // Create the new database with username and password
                const admin = client.db('admin');
                const result = yield admin.command({
                    createUser: database_1.default.username,
                    pwd: database_1.default.password,
                    roles: [
                        { role: 'readWrite', db: database_1.default.name },
                    ],
                });
                console.log('Database created successfully with username and password.');
            }
        }
        catch (error) {
            console.error('Error creating database:', error);
        }
        finally {
            yield client.close();
        }
    });
}
exports.createDatabase = createDatabase;
