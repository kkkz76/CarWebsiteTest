import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Parse the request body to get email and password
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "Missing email or password",
    });
  }

  // Find user by email
  const userObj = await prisma.user.findUnique({
    where: { email },
  });

  if (!userObj || userObj.password !== password) {
    return NextResponse.json({
      success: false,
      message: "Invalid email or password",
    });
  }

  return NextResponse.json({ success: true, message: "Login successful" });
}
