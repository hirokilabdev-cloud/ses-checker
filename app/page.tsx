"use client";

import { useState } from "react";

export default function Home() {
  const [targetPrice, setTargetPrice] = useState("");
  const [remoteLevel, setRemoteLevel] = useState("週3以上");
  const [commuteTime, setCommuteTime] = useState("");
  const [language, setLanguage] = useState("Java");

  const [projectPrice, setProjectPrice] = useState("");
  const [projectRemoteLevel, setProjectRemoteLevel] = useState("週3以上");
  const [projectLanguage, setProjectLanguage] = useState("Java");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectProcess, setProjectProcess] = useState("基本設計〜製造");
  const [projectMemo, setProjectMemo] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-4 text-sm font-semibold text-sky-400">
          SES案件比較ツール Ver0.3
        </p>

        <h1 className="mb-6 text-4xl font-bold">SES案件チェッカー</h1>

        <p className="mb-8 text-slate-300">
          希望条件と案件情報を入力して、案件比較の土台を作ります。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">希望条件</h2>

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
              <label className="mb-2 block font-semibold">
                通勤許容時間（片道・分）
              </label>
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
          </section>

          <section className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">案件情報</h2>

            <div>
              <label className="mb-2 block font-semibold">案件単価</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：750000"
                value={projectPrice}
                onChange={(e) => setProjectPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">案件リモート頻度</label>
              <select
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                value={projectRemoteLevel}
                onChange={(e) => setProjectRemoteLevel(e.target.value)}
              >
                <option>フルリモート</option>
                <option>週3以上</option>
                <option>週1〜2</option>
                <option>出社中心</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">案件使用言語</label>
              <select
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                value={projectLanguage}
                onChange={(e) => setProjectLanguage(e.target.value)}
              >
                <option>Java</option>
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Python</option>
                <option>PHP</option>
                <option>その他</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">勤務地</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：名古屋駅"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">工程</label>
              <select
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                value={projectProcess}
                onChange={(e) => setProjectProcess(e.target.value)}
              >
                <option>要件定義〜基本設計</option>
                <option>基本設計〜製造</option>
                <option>製造〜単体テスト</option>
                <option>テスト中心</option>
                <option>保守・運用</option>
                <option>PMO・調整中心</option>
              </select>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">入力内容プレビュー</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              <p className="mb-2 font-semibold text-white">希望条件</p>
              <p>希望単価：{targetPrice || "未入力"}</p>
              <p>リモート：{remoteLevel}</p>
              <p>通勤許容：{commuteTime || "未入力"} 分</p>
              <p>希望言語：{language}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              <p className="mb-2 font-semibold text-white">案件情報</p>
              <p>案件単価：{projectPrice || "未入力"}</p>
              <p>リモート：{projectRemoteLevel}</p>
              <p>使用言語：{projectLanguage}</p>
              <p>勤務地：{projectLocation || "未入力"}</p>
              <p>工程：{projectProcess}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <label className="mb-2 block font-semibold">案件メモ</label>
          <textarea
            className="min-h-32 w-full rounded-lg bg-slate-800 p-3 text-white"
            placeholder="案件文をコピペしておくメモ欄。今後AI解析やスキル抽出に使う想定。"
            value={projectMemo}
            onChange={(e) => setProjectMemo(e.target.value)}
          />
        </section>
      </div>
    </main>
  );
}