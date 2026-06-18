export const runtime = "edge";

export async function GET(request: Request) {
  return Response.json({
    hasCloudflareEnv:
      typeof (request as any).cf !== "undefined",
  });
}