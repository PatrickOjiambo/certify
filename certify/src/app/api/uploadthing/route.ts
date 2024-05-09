import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const {POST, GET} = createRouteHandler({
  router: ourFileRouter,
});