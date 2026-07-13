import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const path = req.nextUrl.pathname;
        // Guardrail: if they try to go to /admin but their role isnt't, boot them to dashboard
        if (path.startsWith("/admin") && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/dashboard", req.url))
        }
    },
    {
        callbacks: {
            // Ensures the middleware only runs if the user is authenticated (has a token)
            authorized: ({token}) => !!token,
        },
    }
);
// tells Next.js exactly which folders require a login to see
export const config = {
    matcher: ["/dashboard/path*", "/admin/path*"]
}