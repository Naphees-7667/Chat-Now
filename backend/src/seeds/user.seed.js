import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "aarushi.sharma@example.com",
    fullName: "Aarushi Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "isha.verma@example.com",
    fullName: "Isha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "priya.singh@example.com",
    fullName: "Priya Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ananya.mishra@example.com",
    fullName: "Ananya Mishra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "kriti.kapoor@example.com",
    fullName: "Kriti Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "sanya.rao@example.com",
    fullName: "Sanya Rao",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "nikita.banerjee@example.com",
    fullName: "Nikita Banerjee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "megha.nair@example.com",
    fullName: "Megha Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "arjun.malhotra@example.com",
    fullName: "Arjun Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.iyer@example.com",
    fullName: "Rahul Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "siddharth.kumar@example.com",
    fullName: "Siddharth Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "aditya.sen@example.com",
    fullName: "Aditya Sen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "vihaan.patel@example.com",
    fullName: "Vihaan Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "rohan.bhatt@example.com",
    fullName: "Rohan Bhatt",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "ayush.chowdhury@example.com",
    fullName: "Ayush Chowdhury",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];


export const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();