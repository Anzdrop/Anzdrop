type PageProps = {
  params: Promise<{
    shareId: string;
  }>;
};

export default async function DownloadPage({
  params,
}: PageProps) {
  const { shareId } = await params;

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        ダウンロード
      </h1>

      <p className="mt-4">
        Share ID: {shareId}
      </p>
    </main>
  );
}