"use client";

import { useState } from "react";

export default function Home() {
  const [targetPrice, setTargetPrice] = useState("");
  const [remoteLevel, setRemoteLevel] = useState("週3以上");
  const [commuteTime, setCommuteTime] = useState("");
  const [language, setLanguage] = useState("Java");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <p className="mb-4 text-sm font-semibold text-sky-400">
          SES案件比較ツール Ver0.2
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          SES案件チェッカー
        </h1>

        <p className="mb-8 text-slate-300">
          希望条件を入力して、案件比較の土台を作ります。
        </p>

        <div className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <div>
            <label className="mb-2 block font-semibold">希望単価</label>
            <input
              className="w-full rounded-lg bg-slate-800 p-3 text-white"
              placeholder="例：700000"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">希望リモート頻度</label>
            <select
              className="w-full rounded-lg bg-slate-800 p-3 text-white"
              value={remoteLevel}
              onChange={(e) => setRemoteLevel(e.target.value)}
            >
              <option>フルリモート</option>
              <option>週3以上</option>
              <option>週1〜2</option>
              <option>出社中心</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">通勤許容時間（片道・分）</label>
            <input
              className="w-full rounded-lg bg-slate-800 p-3 text-white"
              placeholder="例：60"
              value={commuteTime}
              onChange={(e) => setCommuteTime(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">希望言語</label>
            <select
              className="w-full rounded-lg bg-slate-800 p-3 text-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Java</option>
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Python</option>
              <option>PHP</option>
              <option>その他</option>
            </select>
          </div>

          <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
            <p className="font-semibold text-white">入力内容プレビュー</p>
            <p>希望単価：{targetPrice || "未入力"}</p>
            <p>リモート：{remoteLevel}</p>
            <p>通勤許容：{commuteTime || "未入力"} 分</p>
            <p>希望言語：{language}</p>
          </div>
        </div>
      </div>
    </main>
  );
}