import { NextResponse } from "next/server";

export async function GET() {
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

    if (!API_KEY || !PLACE_ID) {
        return NextResponse.json(
            { error: "Google API settings missing" },
            { status: 500 }
        );
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}&language=it`;

        const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours
        const data = await response.json();

        if (data.status !== "OK") {
            throw new Error(data.error_message || "Failed to fetch from Google");
        }

        return NextResponse.json(data.result);
    } catch (error: any) {
        console.error("Reviews API Error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
