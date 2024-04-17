import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
publicRoutes: ["/api/webhooks/clerk"],
ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[\w]+$)", "/api/webhooks/clerk"]
})

// Stop Middleware running on static files
export const config = {
matcher: ['/((?!.+\.[\w]+$|_next).)', '/', '/(api|trpc)(.)'],
};