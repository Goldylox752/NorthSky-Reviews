import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("email, name, created_at")
    .order("created_at", { ascending: false });

  // Build CSV
  const headers = ["Email", "Name", "Date Subscribed"];
  const rows = subscribers.map((s) => [
    s.email,
    s.name || "",
    new Date(s.created_at).toLocaleDateString(),
  ]);
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="subscribers.csv"',
    },
  });
}