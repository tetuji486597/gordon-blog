import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        {id: 1,
        title: "What I learned this Sunday 9/15/24",
        description: "Check it out!",
        imgSrc: "/Jesus.jpg",
        href: "/Jesus.tsx",
        },
    ];

    return NextResponse.json(posts);
}