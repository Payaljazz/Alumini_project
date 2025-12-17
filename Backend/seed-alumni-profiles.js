import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "./models/User.js";
import AlumniProfile from "./models/AlumniProfile.js";
import { faker } from "@faker-js/faker";

const seedAlumniProfiles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await AlumniProfile.deleteMany();

    const alumniUsers = await User.find({ role: "alumni" });

    for (const user of alumniUsers) {
      await AlumniProfile.create({
        user: user._id,
        graduationYear: faker.number.int({ min: 2015, max: 2024 }),
        branch: faker.helpers.arrayElement(["CSE", "ECE", "ME", "CE", "EE"]),
        currentCompany: faker.company.name(),
        designation: faker.person.jobTitle(),
        skills: faker.helpers.arrayElements(
          ["Java", "React", "Node.js", "MongoDB", "AWS", "Python"],
          3
        ),
        bio: faker.lorem.sentences(2)
      });
    }

    
    console.log(`✅ Alumni profiles created: ${alumniUsers.length}`);
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error seeding alumni profiles:", error);
    process.exit(1);
  }
};

seedAlumniProfiles();