'use client'

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RiskPage() {

  const router = useRouter();
  const { data: session } = useSession();

  // ================= STATE =================
  const [form, setForm] = useState({
    income: "",
    loan: "",
    creditScore: "",
    existingLoan: "no"
  });

  const [result, setResult] = useState<any>(null);

  // ================= HANDLERS =================
  const handleChange = (e: any) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fillExample = () => {
    setForm({
      income: "50000",
      loan: "200000",
      creditScore: "700",
      existingLoan: "no"
    });
  };

  // ================= OPTIMIZED RISK =================
  const calculateRisk = () => {

    const income = Number(form.income);
    const loan = Number(form.loan);
    const creditScore = Number(form.creditScore);

    if (income <= 0 || loan <= 0 || creditScore <= 0) {
      alert("Enter valid values");
      return;
    }

    // 🔥 CONTINUOUS SCORING

    const creditNorm = (850 - creditScore) / 550;
    const loanRatio = loan / income;
    const loanNorm = Math.min(loanRatio / 10, 1);
    const incomeNorm = income > 100000 ? 0 : (100000 - income) / 100000;
    const existingNorm = form.existingLoan === "yes" ? 0.1 : 0;

    const totalScore = Math.round(
      (creditNorm * 0.4 +
        loanNorm * 0.3 +
        incomeNorm * 0.2 +
        existingNorm * 0.1) * 100
    );

    let level =
      totalScore < 30 ? "Low" :
      totalScore < 60 ? "Medium" : "High";

    let status =
      level === "Low" ? "Approved" :
      level === "Medium" ? "Caution" : "Rejected";

    setResult({
      score: totalScore,
      level,
      status,
      income,
      loan,
      creditScore
    });
  };

  // ================= UI =================
  return (
    <div className="min-h-screen bg-[#07090f] text-white">

      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">

          {/* Logo */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
              CI
            </div>
            <span className="font-bold text-lg">
              Credit<span className="text-purple-400">Insight</span>
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-500">Logged in as</p>
              <p className="text-sm font-semibold">
                {session?.user?.name || "User"}
              </p>
            </div>

            <div
              onClick={() => router.push("/profile")}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center cursor-pointer"
            >
              👤
            </div>
          </div>

        </div>
      </div>

      {/* ================= HEADER SECTION ================= */}
      <div className="pt-28 pb-10 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Credit Risk Analyzer
        </motion.h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Evaluate your financial stability instantly using our AI-inspired
          credit risk engine.
        </p>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ================= LEFT PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        >

          {/* Example Section */}
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
            <p className="text-purple-300 font-semibold mb-2">Example</p>
            <p className="text-sm text-gray-400">Income: 50,000</p>
            <p className="text-sm text-gray-400">Loan: 200,000</p>
            <p className="text-sm text-gray-400">Credit Score: 700</p>
          </div>

          <button
            onClick={fillExample}
            className="mb-6 text-sm text-purple-400 underline"
          >
            Try Example
          </button>

          {/* Inputs */}
          <label className="text-sm text-gray-400">Income</label>
          <input
            name="income"
            value={form.income}
            onChange={handleChange}
            placeholder="e.g. 50000"
            className="w-full mb-3 p-2 rounded bg-black border border-white/20"
          />

          <label className="text-sm text-gray-400">Loan</label>
          <input
            name="loan"
            value={form.loan}
            onChange={handleChange}
            placeholder="e.g. 200000"
            className="w-full mb-3 p-2 rounded bg-black border border-white/20"
          />

          <label className="text-sm text-gray-400">Credit Score</label>
          <input
            name="creditScore"
            value={form.creditScore}
            onChange={handleChange}
            placeholder="e.g. 700"
            className="w-full mb-3 p-2 rounded bg-black border border-white/20"
          />

          <select
            name="existingLoan"
            value={form.existingLoan}
            onChange={handleChange}
            className="w-full mb-4 p-2 rounded bg-black border border-white/20"
          >
            <option value="no">No Loan</option>
            <option value="yes">Existing Loan</option>
          </select>

          <button
            onClick={calculateRisk}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
          >
            Analyze Risk
          </button>

        </motion.div>

        {/* ================= RIGHT PANEL ================= */}
        {result && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            {/* Result Cards */}
            <div className="grid grid-cols-3 gap-4">

              <div className="p-4 bg-white/5 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Score</p>
                <h2 className="text-xl text-purple-400">{result.score}</h2>
              </div>

              <div className="p-4 bg-white/5 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Risk</p>
                <h2 className={
                  result.level === "Low" ? "text-green-400" :
                  result.level === "Medium" ? "text-yellow-400" :
                  "text-red-400"
                }>
                  {result.level}
                </h2>
              </div>

              <div className="p-4 bg-white/5 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Status</p>
                <h2>{result.status}</h2>
              </div>

            </div>

            {/* Graph */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl h-[250px]">
              <ResponsiveContainer>
                <BarChart data={[
                  { name: "Income", value: result.income },
                  { name: "Loan", value: result.loan },
                  { name: "Score", value: result.creditScore }
                ]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
}