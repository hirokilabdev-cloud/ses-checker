"use client";

import { useState } from "react";

export default function Home() {
  const [targetPrice, setTargetPrice] = useState("");
  const [remoteLevel, setRemoteLevel] = useState("週3以上");
  const [commuteTime, setCommuteTime] = useState("");
  const [homeArea, setHomeArea] = useState("豊川");
  const [preferredLocation, setPreferredLocation] = useState("名古屋駅");
  const [language, setLanguage] = useState("Java");

  const [projectPrice, setProjectPrice] = useState("");
  const [projectRemoteLevel, setProjectRemoteLevel] = useState("週3以上");
  const [projectLanguage, setProjectLanguage] = useState("Java");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectCommuteTime, setProjectCommuteTime] = useState("");
  const [projectProcess, setProjectProcess] = useState("基本設計〜製造");
  const [projectMemo, setProjectMemo] = useState("");

  const targetPriceNumber = Number(targetPrice);
  const projectPriceNumber = Number(projectPrice);
  const commuteTimeNumber = Number(commuteTime);
  const projectCommuteTimeNumber = Number(projectCommuteTime);

  const priceScore =
    targetPriceNumber > 0 && projectPriceNumber > 0
      ? projectPriceNumber >= targetPriceNumber
        ? 25
        : projectPriceNumber >= targetPriceNumber * 0.9
          ? 20
          : projectPriceNumber >= targetPriceNumber * 0.8
            ? 15
            : 8
      : 0;

  const remoteRank: Record<string, number> = {
    フルリモート: 4,
    週3以上: 3,
    "週1〜2": 2,
    出社中心: 1,
  };

  const remoteScore =
    remoteRank[projectRemoteLevel] >= remoteRank[remoteLevel]
      ? 25
      : remoteRank[projectRemoteLevel] === remoteRank[remoteLevel] - 1
        ? 18
        : remoteRank[projectRemoteLevel] === remoteRank[remoteLevel] - 2
          ? 10
          : 5;

  const languageScore = language === projectLanguage ? 25 : 10;

  const commuteScore =
    commuteTimeNumber > 0 && projectCommuteTimeNumber > 0
      ? projectCommuteTimeNumber <= commuteTimeNumber
        ? 25
        : projectCommuteTimeNumber <= commuteTimeNumber + 20
          ? 15
          : 5
      : 0;

  const totalScore = priceScore + remoteScore + languageScore + commuteScore;
  let rank = "D";

  if (totalScore >= 90) {
    rank = "S";
  } else if (totalScore >= 80) {
    rank = "A";
  } else if (totalScore >= 70) {
    rank = "B";
  } else if (totalScore >= 60) {
    rank = "C";
  }

  let stars = "★☆☆☆☆";

  if (totalScore >= 90) {
    stars = "★★★★★";
  } else if (totalScore >= 80) {
    stars = "★★★★☆";
  } else if (totalScore >= 70) {
    stars = "★★★☆☆";
  } else if (totalScore >= 60) {
    stars = "★★☆☆☆";
  }

  const resultComment =
  totalScore >= 90
    ? "かなり理想に近い案件です。優先的に面談候補へ入れてよさそうです。"
    : totalScore >= 80
      ? "希望条件との相性が高い案件です。前向きに検討できそうです。"
      : totalScore >= 70
        ? "悪くない案件です。詳細条件を確認して判断しましょう。"
        : totalScore >= 60
          ? "条件次第ではありですが、気になる点があります。"
          : "慎重に見た方がよさそうです。希望条件とのギャップがあります。";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-4 text-sm font-semibold text-sky-400">
          SES案件比較ツール Ver0.5
        </p>

        <h1 className="mb-6 text-4xl font-bold">SES案件チェッカー</h1>

        <p className="mb-8 text-slate-300">
          希望条件と案件情報を入力して、案件のおすすめ度をざっくり数値化します。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">希望条件</h2>

            <div>
              <label className="mb-2 block font-semibold">希望単価（万円）</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：70"
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
              <label className="mb-2 block font-semibold">自宅・最寄りエリア</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：豊川"
                value={homeArea}
                onChange={(e) => setHomeArea(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">希望勤務地</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：名古屋駅 / 東三河 / フルリモート"
                value={preferredLocation}
                onChange={(e) => setPreferredLocation(e.target.value)}
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
              <label className="mb-2 block font-semibold">案件単価（万円）</label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：75"
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
              <label className="mb-2 block font-semibold">
                想定通勤時間（片道・分）
              </label>
              <input
                className="w-full rounded-lg bg-slate-800 p-3 text-white"
                placeholder="例：75"
                value={projectCommuteTime}
                onChange={(e) => setProjectCommuteTime(e.target.value)}
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
          <h2 className="mb-4 text-2xl font-bold">おすすめ度</h2>
          <div className="mb-4">
            <p className="text-2xl text-yellow-400">
              {stars}
            </p>

            <p className="mt-2 text-lg text-slate-300">
              総合評価：
              <span className="ml-2 text-3xl font-bold text-sky-400">
                {rank}
              </span>
            </p>
          </div>

          <div className="mb-4 text-5xl font-bold text-sky-400">
            {totalScore}点
            <span className="ml-2 text-lg text-slate-300">/ 100点</span>
          </div>

          <div className="mb-4 grid gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">単価</p>
              <p className="text-2xl font-bold">{priceScore}/25</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">リモート</p>
              <p className="text-2xl font-bold">{remoteScore}/25</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">言語</p>
              <p className="text-2xl font-bold">{languageScore}/25</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">通勤</p>
              <p className="text-2xl font-bold">{commuteScore}/25</p>
            </div>
          </div>

          <p className="rounded-xl bg-slate-800 p-4 text-slate-200">
            {resultComment}
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">入力内容プレビュー</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              <p className="mb-2 font-semibold text-white">希望条件</p>
              <p>希望単価：{targetPrice || "未入力"}</p>
              <p>リモート：{remoteLevel}</p>
              <p>通勤許容：{commuteTime || "未入力"} 分</p>
              <p>自宅・最寄り：{homeArea || "未入力"}</p>
              <p>希望勤務地：{preferredLocation || "未入力"}</p>
              <p>希望言語：{language}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              <p className="mb-2 font-semibold text-white">案件情報</p>
              <p>案件単価：{projectPrice || "未入力"}</p>
              <p>リモート：{projectRemoteLevel}</p>
              <p>使用言語：{projectLanguage}</p>
              <p>勤務地：{projectLocation || "未入力"}</p>
              <p>想定通勤：{projectCommuteTime || "未入力"} 分</p>
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