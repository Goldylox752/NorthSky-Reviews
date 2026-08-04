import Link from "next/link";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title: "AI Software Comparisons (2026) | Compare the Best Tools | NorthSky Reviews",
  description:
    "Compare AI tools, VPNs, business software, and productivity apps with detailed side-by-side reviews from NorthSky Reviews.",
};

export default function ComparisonsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-6">
        Software Comparisons
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        Honest side-by-side comparisons to help you choose the best software.
      </p>

      <div className="grid gap-8 md:grid-cols-2">

        {comparisons.map((comparison) => (

          <Link
            key={comparison.slug}
            href={`/comparisons/${comparison.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-semibold">
              {comparison.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {comparison.description}
            </p>

            <span className="inline-block mt-6 text-blue-600 font-semibold">
              Read Comparison →
            </span>

          </Link>

        ))}

      </div>

    </main>
  );
}