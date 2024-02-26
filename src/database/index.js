import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://docPortal:Xe37pGLblQBewU0Z@cluster0.mvrzlyk.mongodb.net/amit-portfolio"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
