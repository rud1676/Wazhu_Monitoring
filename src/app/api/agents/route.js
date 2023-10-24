import { NextResponse } from "next/server";

import axiosInstance, { Auth } from "../axiosInstance";

export async function GET(req) {
  try {
    await Auth();
    const res = await axiosInstance.get("/agents");
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json(err);
  }
}
