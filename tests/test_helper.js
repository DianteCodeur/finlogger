// Import mongoose and MongoMemoryServer
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;
// Set up in-memory MongoDB before tests
before(async () => {
  mongoServer = await MongoMemoryServer.create({
    binary: {
        version: "6.0.5"
      }
  });
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  console.log('MongoDB connection established.');
});

// Clear collections before each test
beforeEach(async () => {
 const collections = mongoose.connection.collections;
 for (const key in collections) {
    await collections[key].deleteMany({});
 }
});

// Clean up after all tests
after(async () => {
 await mongoose.disconnect();
 if (mongoServer) {
 await mongoServer.stop();
  console.log('MongoDB instance released.');
  }
});
