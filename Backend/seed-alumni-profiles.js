import mongoose from "mongoose";
import User from "./models/User.js";
import AlumniProfile from "./models/AlumniProfile.js";
import { faker } from "@faker-js/faker";

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const seedAlumniProfiles = async () => {
  try {
    // Remove old profiles
    await AlumniProfile.deleteMany();

    // Fetch all alumni users
    const alumniUsers = await User.find({ role: "alumni" });

    for (let user of alumniUsers) {
      await AlumniProfile.create({
        user: user._id,
        graduationYear: faker.number.int({ min: 2015, max: 2025 }),
        branch: faker.helpers.arrayElement(["CSE", "ECE", "ME", "CE", "EE"]),
        currentCompany: faker.company.name(),
        designation: faker.name.jobTitle(),
        skills: [
          faker.hacker.noun(),
          faker.hacker.verb(),
          faker.hacker.adjective()
        ],
        bio: faker.lorem.sentence()
      });
    }
     console.log(`✅ Alumni profiles created: ${alumniUsers.length}`);
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error:", err);
  }
};

seedAlumniProfiles();
