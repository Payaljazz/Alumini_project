import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "./models/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const seedUsers = async () => {
  try {
    // Remove old users (optional for testing)
    await User.deleteMany();

    const TOTAL_USERS = 200;

    for (let i = 0; i < TOTAL_USERS; i++) {
      await User.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "password123",
        role: i < 100 ? "alumni" : "student",  // first 100 alumni, rest students
        contact: faker.phone.number('##########')
      });
    }

    console.log(`✅ STEP 3 DONE: ${TOTAL_USERS} users inserted`);
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ STEP 3 ERROR:", error);
  }
};

seedUsers();
