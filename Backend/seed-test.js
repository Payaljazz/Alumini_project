
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "./models/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const seedTestUsers = async () => {
  try {
    await User.deleteMany();

    for (let i = 0; i < 10; i++) {
      await User.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "password123",
        role: i < 5 ? "ALUMNI" : "STUDENT",
        isVerified: true
      });
    }

    console.log("✅ 10 users inserted successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedTestUsers();