import { google } from "googleapis";
import { Env } from "./env";

export default async function getSheetData() {
    // create auth client
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: Env.GOOGLE_SHEET_CLIENT_EMAIL,
            private_key: Env.GOOGLE_SHEET_PRIVATE_KEY,
        },
        scopes: [
            "https://www.googleapis.com/auth/spreadsheets", // to read and write spreadsheets
            "https://www.googleapis.com/auth/drive", // to create a new spreadsheet
        ],
    });

    // create client instance
    const client = await auth.getClient();

    // create google sheet instance
    const sheetInstance = google.sheets({ version: "v4", auth: client as any }); // TODO: replace any with proper type

    // get all data in range
    const { data } = await sheetInstance.spreadsheets.values.get({
        spreadsheetId: Env.GOOGLE_SHEET_ID,
        range: "sheet1", // this is sheet name
    });

    return data.values;
}
