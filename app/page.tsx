"use client";
import { useState } from "react";
import { generateSummonHtml } from "@/lib/generateSummonHtml";
export default function GenerateSummonPdf() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    address: "",
    section: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    setLoading(true);

    const html = generateSummonHtml(form); // ⬅️ HTML build function

    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");

    setLoading(false);
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold">সমন ফর্ম</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="নাম"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="fatherName"
        value={form.fatherName}
        onChange={handleChange}
        placeholder="পিতার নাম"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="ঠিকানা"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="section"
        value={form.section}
        onChange={handleChange}
        placeholder="অভিযোগ ধারা"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="তারিখ (dd-mm-yyyy)"
        className="border border-gray-300 p-2 w-full rounded"
      />

      <button
        onClick={handleGenerate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? "PDF তৈরি হচ্ছে..." : "Print Summon PDF"}
      </button>
    </div>
  );
}





