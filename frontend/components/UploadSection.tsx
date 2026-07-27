"use client";

import { useRef, useState } from "react";
import { UploadCloud, FileSpreadsheet, Loader2 } from "lucide-react";
import api from "@/lib/api";

export default function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please select a dataset first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await api.post("/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      alert(
        `Analysis completed!\n\nRows Processed: ${res.data.rows_processed}`
      );

      // Refresh dashboard
      window.location.reload();

    } catch (err: any) {
      console.error(err);

      const message =
        err.response?.data?.detail ??
        "Failed to analyze dataset.";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

      <div className="flex items-center gap-3 mb-6">

        <UploadCloud className="text-blue-600" size={30} />

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Upload Dataset
          </h2>

          <p className="text-slate-500">
            Upload your CSV or Excel dataset for AI-powered issue analysis.
          </p>

        </div>

      </div>

      <div
        className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:border-blue-500 transition cursor-pointer"
        onClick={handleBrowse}
      >

        <FileSpreadsheet
          className="mx-auto text-blue-600 mb-4"
          size={55}
        />

        <h3 className="text-lg font-semibold">
          Drag & Drop Dataset
        </h3>

        <p className="text-slate-500 mt-2">
          or click to browse your files
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          className="hidden"
          onChange={handleFileChange}
        />

      </div>

      {selectedFile && (

        <div className="mt-6 bg-slate-100 rounded-xl p-4 flex items-center justify-between">

          <div>

            <p className="font-semibold text-slate-700">
              Selected File
            </p>

            <p className="text-slate-500 text-sm">
              {selectedFile.name}
            </p>

          </div>

          <span className="text-sm text-slate-500">
            {(selectedFile.size / 1024).toFixed(2)} KB
          </span>

        </div>

      )}

      <div className="mt-8 flex justify-end">

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-3 rounded-xl font-semibold transition flex items-center gap-3"
        >

          {loading ? (
            <>
              <Loader2
                className="animate-spin"
                size={20}
              />
              Analyzing...
            </>
          ) : (
            <>
              <UploadCloud size={20} />
              Analyze Dataset
            </>
          )}

        </button>

      </div>

    </section>
  );
}