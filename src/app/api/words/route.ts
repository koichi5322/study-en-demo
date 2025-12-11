// app/api/words/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const profileId = searchParams.get("profileId");
    const limit = parseInt(searchParams.get("limit") || "30");
    const offset = parseInt(searchParams.get("offset") || "0");

    // profileIdは必須
    if (!profileId) {
      return NextResponse.json(
        { error: "profileId is required" },
        { status: 400 }
      );
    }

    const words = await prisma.word.findMany({
      where: {
        profileId,
      },
      take: limit,
      skip: offset,
      orderBy: {
        name: "asc",
      },
    });

    // 総数も返す（ページネーション用）
    const total = await prisma.word.count({
      where: { profileId },
    });

    return NextResponse.json({
      words,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Failed to fetch words:", error);
    return NextResponse.json(
      { error: "Failed to fetch words" },
      { status: 500 }
    );
  }
}
