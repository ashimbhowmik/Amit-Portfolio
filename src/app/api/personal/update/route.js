import connectToDB from "@/database";
import About from "@/models/About";
import Personal from "@/models/Personal";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const {
      _id,
      name,
      age,
      nationality,
      work,
      adress,
      phone,
      email,
      github,
      linkdn,
      language,
    } = extractData;

    const updateData = await Personal.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        name,
        age,
        nationality,
        work,
        adress,
        phone,
        email,
        github,
        linkdn,
        language,
      },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong !Please try again",
    });
  }
}
