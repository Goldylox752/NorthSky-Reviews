import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, name } = await request.json();
    const supabase = await createClient();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Get IP (for tracking spam)
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Insert subscriber
    const { error } = await supabase
      .from("subscribers")
      .insert({ email, name, ip_address: ip });

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already subscribed." },
          { status: 400 }
        );
      }
      console.error("Subscription error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're subscribed! 🎉",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}