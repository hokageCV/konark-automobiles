import { Product } from "@/app/types";
import getSheetData from "@/helpers/google";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // fix for 'working in dev not in prod'

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const productId = searchParams.get("productId");
        if (!productId || productId.trim() === "") {
            return NextResponse.json({ error: "Product ID not provided", status: 400 });
        }

        const response = await getSheetData();
        if (!response) {
            return NextResponse.json({ error: "No data found", status: 404 });
        }

        const data = response.slice(1); // first row is headers

        const filteredData: Product[] = data
            .filter((row) => row[0] === productId)
            .map((row) => ({
                productId: row[0],
                imgLink: row[1],
                name: row[2],
                mrp: parseFloat(row[4]),
                cars: row[3],
            }));

        return NextResponse.json({ msg: "data found", data: filteredData });
    } catch (err: any) {
        return NextResponse.json({ error: err.message, status: 500 });
    }
}
