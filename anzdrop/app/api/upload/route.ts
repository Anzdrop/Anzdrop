import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json({
        success: false,
        error: "file not found",
      });
    }

    return Response.json({
      success: true,
      name: file.name,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}