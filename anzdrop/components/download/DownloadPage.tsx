"use client";

type DownloadPageProps = {
  shareId: string;
};

export default function DownloadPage({
  shareId,
}: DownloadPageProps) {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        ダウンロード
      </h1>

      <p className="mt-4">
        Share ID: {shareId}
      </p>
    </div>
  );
}