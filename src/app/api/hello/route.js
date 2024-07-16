// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { pool } from "src/config/db";

export async function GET(req) {
	try {
		const results = await pool.query("SELECT NOW()");
		return NextResponse.json({ result: results[0]["NOW()"] });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "An error occurred" }, { status: 500 });
	}
}
