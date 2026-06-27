import { getCloudflareContext } from "@opennextjs/cloudflare";

type RouteContext = {
  params: Promise<{
    shareId: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { env } = getCloudflareContext();

    const { shareId } = await context.params;

    return Response.json({
      success: true,
      shareId,
      hasDB: !!env.DB,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}