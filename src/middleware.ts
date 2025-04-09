import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const NEXT_PUBLIC_JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

async function verifyToken(token: string) {
	try {
		// Decode and verify token
		const { payload } = await jwtVerify(token, new TextEncoder().encode(NEXT_PUBLIC_JWT_SECRET));
		return { valid: true, payload };
	} catch {
		return { valid: false };
	}
}

// Middleware function
export async function middleware(request: NextRequest) {
	const token = request.cookies.get("auth-token")?.value;

	if (!token) {
		// Redirect if token is missing
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	const { valid } = await verifyToken(token);

	if (!valid) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	// Allow request to continue
	return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
	matcher: [
		"/dashboard/:path*",
		"/admin/:path*",
		"/events-selection/:path*",
		"/team-details/:path*",
	],
};
