"use client";

import { useState } from "react";

export default function UploadForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      return;
    }

    setFiles(Array.from(event.target.files));
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Anzdrop
      </h1>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />

      <div className="mt-6">
        <h2 className="font-semibold mb-2">
          選択されたファイル
        </h2>

        {files.length === 0 ? (
          <p>ファイルが選択されていません。</p>
        ) : (
          <ul className="list-disc ml-6">
            {files.map((file) => (
              <li key={`${file.name}-${file.lastModified}`}>
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}