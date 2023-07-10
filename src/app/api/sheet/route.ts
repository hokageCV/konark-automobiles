import { Product } from "@/app/types";
import getSheetData from "@/helpers/google";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // fix for 'working in dev not in prod'

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const productId = searchParams.get("productId");
        if (!productId || productId.trim() === "") {
            return NextResponse.json({
                error: "Product ID not provided",
                status: 400,
                success: false,
            });
        }

        const sheetResponse = await getSheetData();
        if (!sheetResponse) {
            return NextResponse.json({ error: "No data found", status: 404, success: false });
        }

        const data = sheetResponse.slice(1); // first row is headers

        const filteredData: Product[] = data
            .filter((row) => row[0] === productId)
            .map((row) => ({
                productId: row[0],
                imgLink: row[1],
                name: row[2],
                mrp: parseFloat(row[4]),
                cars: row[3],
            }));

        if (filteredData.length === 0) {
            return NextResponse.json({
                error: "Not found",
                status: 404,
                success: false,
            });
        }

        const response = NextResponse.json({
            msg: "data found",
            data: filteredData,
            success: true,
        });
        response.headers.set("Access-Control-Allow-Origin", "*");

        return response;
    } catch (err: any) {
        return NextResponse.json({ error: err.message, status: 500, success: false });
    }
}
