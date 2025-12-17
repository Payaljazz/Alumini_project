import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
import User from "./models/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const seedUsers = async () => {
  try {
    await User.deleteMany();

    const TOTAL_USERS = 200;
    const hashedPassword = await bcrypt.hash("password123", 10);

    for (let i = 0; i < TOTAL_USERS; i++) {
      await User.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: i < 100 ? "alumni" : "student",
        contact: faker.phone.number("##########"),
      });
    }

    console.log(`✅ ${TOTAL_USERS} users inserted with hashed passwords`);
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Seeding error:", error);
  }
};

seedUsers();
