"use client";

import { useState } from "react";

export default function Home() {
  const [targetPrice, setTargetPrice] = useState("");
  const [remoteLevel, setRemoteLevel] = useState("週3以上");
  const [commuteTime, setCommuteTime] = useState("");
  const [homeArea, setHomeArea] = useState("豊川");
  const [preferredLocation, setPreferredLocation] = useState("名古屋駅");
  const [language, setLanguage] = useState("Java");
  const [preferredProcess, setPreferredProcess] = useState("基本設計〜製造");
  const [avoidProcess, setAvoidProcess] = useState("テスト中心");

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
      ? 20
      : projectPriceNumber >= targetPriceNumber * 0.9
        ? 16
        : projectPriceNumber >= targetPriceNumber * 0.8
          ? 12
          : 6
    : 0;

  const remoteRank: Record<string, number> = {
    フルリモート: 4,
    週3以上: 3,
    "週1〜2": 2,
    出社中心: 1,
  };

  const remoteScore =
  remoteRank[projectRemoteLevel] >= remoteRank[remoteLevel]
    ? 20
    : remoteRank[projectRemoteLevel] === remoteRank[remoteLevel] - 1
      ? 14
      : remoteRank[projectRemoteLevel] === remoteRank[remoteLevel] - 2
        ? 8
        : 4;

  const languageScore = language === projectLanguage ? 20 : 8;

  const commuteScore =
  commuteTimeNumber > 0 && projectCommuteTimeNumber > 0
    ? projectCommuteTimeNumber <= commuteTimeNumber
      ? 20
      : projectCommuteTimeNumber <= commuteTimeNumber + 20
        ? 12
        : 4
    : 0;

  const processScore =
  projectProcess === avoidProcess
    ? 3
    : projectProcess === preferredProcess
      ? 20
      : 12;

  const totalScore =
  priceScore + remoteScore + languageScore + commuteScore + processScore;

  let rank = "D";
  if (totalScore >= 90) rank = "S";
  else if (totalScore >= 80) rank = "A";
  else if (totalScore >= 70) rank = "B";
  else if (totalScore >= 60) rank = "C";

  let stars = "★☆☆☆☆";
  if (totalScore >= 90) stars = "★★★★★";
  else if (totalScore >= 80) stars = "★★★★☆";
  else if (totalScore >= 70) stars = "★★★☆☆";
  else if (totalScore >= 60) stars = "★★☆☆☆";

  const goodPoints = [
    priceScore >= 20 ? "単価が希望条件に近い、または希望以上です。" : "",
    remoteScore >= 20 ? "リモート条件が希望にかなり近いです。" : "",
    languageScore === 20 ? "希望言語と案件言語が一致しています。" : "",
    commuteScore >= 20 ? "通勤負担は許容範囲に収まりそうです。" : "",
    processScore >= 16 ? "案件工程が希望工程に近いです。" : "",
  ].filter(Boolean);

  const cautionPoints = [
    priceScore < 20 ? "単価が希望より低い可能性があります。" : "",
    remoteScore < 20 ? "リモート頻度は希望より少ない可能性があります。" : "",
    languageScore < 20 ? "希望言語と案件言語が一致していません。" : "",
    commuteScore < 20 ? "通勤時間が負担になる可能性があります。" : "",
    projectProcess === avoidProcess ? "避けたい工程に該当している可能性があります。" : "",
    processScore < 12 ? "工程面で希望とのズレがありそうです。" : "",
  ].filter(Boolean);

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
  
  const summaryComment =
  totalScore >= 90
    ? "総合的にかなり相性の良い案件です。\n" + "単価・働き方・スキル面のバランスが良く、優先的に面談候補へ入れてよさそうです。"
    : totalScore >= 80
      ? "希望条件との相性が高い案件です。\n" + "細かい条件を確認しながら、前向きに検討できそうです。"
      : totalScore >= 70
        ? "悪くない案件です。\n" + "いくつか確認ポイントはありますが、面談で詳細を聞いて判断する価値はありそうです。"
        : totalScore >= 60
          ? "条件次第ではありですが、いくつか気になる点があります。\n" + "単価・通勤・リモート頻度など、負担になりやすい条件は事前確認がおすすめです。"
          : "慎重に見た方がよさそうです。\n" + "希望条件とのギャップが大きい可能性があるため、他案件との比較もおすすめです。";


  let recommendedActions: string[] = [];

  if (totalScore >= 80) {
    recommendedActions = [
      "面談候補として優先的に検討しましょう。",
      "参画条件や現場の雰囲気を確認しましょう。",
      "募集終了前に早めの応募がおすすめです。",
    ];
  } else if (totalScore >= 60) {
    recommendedActions = [
      "面談で不足条件を確認しましょう。",
      "他案件とも比較して判断しましょう。",
      "単価や働き方の交渉余地があるか確認しましょう。",
    ];
  } else {
    recommendedActions = [
      "他案件も含めて比較検討しましょう。",
      "希望条件の優先順位を整理しましょう。",
      "無理に応募せず条件の良い案件を待つ選択肢もあります。",
    ];
  }
  return (
    <main className="min-h-screen bg-slate-200 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="mb-4 text-sm font-semibold text-sky-400">
            SES案件比較ツール Ver0.8
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            SES案件チェッカー
          </h1>
          <p className="text-slate-600">
            希望条件と案件情報を入力して、案件のおすすめ度をざっくり数値化します。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">希望条件</h2>

            <Input label="希望単価（万円）" value={targetPrice} setValue={setTargetPrice} placeholder="例：80" />
            <Select label="希望リモート頻度" value={remoteLevel} setValue={setRemoteLevel} options={["フルリモート", "週3以上", "週1〜2", "出社中心"]} />
            <Input label="通勤許容時間（片道・分）" value={commuteTime} setValue={setCommuteTime} placeholder="例：60" />
            <Input label="自宅・最寄りエリア" value={homeArea} setValue={setHomeArea} placeholder="例：豊川" />
            <Input label="希望勤務地" value={preferredLocation} setValue={setPreferredLocation} placeholder="例：名古屋駅 / 東三河" />
            <Select label="希望言語" value={language} setValue={setLanguage} options={["Java", "JavaScript", "TypeScript", "Python", "PHP", "その他"]} />
            <Select
              label="やりたい工程"
              value={preferredProcess}
              setValue={setPreferredProcess}
              options={[
                "要件定義〜基本設計",
                "基本設計〜製造",
                "製造〜単体テスト",
                "テスト中心",
                "保守・運用",
                "PMO・調整中心",
              ]}
            />
            <Select
              label="避けたい工程"
              value={avoidProcess}
              setValue={setAvoidProcess}
              options={[
                "要件定義〜基本設計",
                "基本設計〜製造",
                "製造〜単体テスト",
                "テスト中心",
                "保守・運用",
                "PMO・調整中心",
              ]}
            />
          </section>

          <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">案件情報</h2>

            <Input label="案件単価（万円）" value={projectPrice} setValue={setProjectPrice} placeholder="例：75" />
            <Select label="案件リモート頻度" value={projectRemoteLevel} setValue={setProjectRemoteLevel} options={["フルリモート", "週3以上", "週1〜2", "出社中心"]} />
            <Select label="案件使用言語" value={projectLanguage} setValue={setProjectLanguage} options={["Java", "JavaScript", "TypeScript", "Python", "PHP", "その他"]} />
            <Input label="勤務地" value={projectLocation} setValue={setProjectLocation} placeholder="例：名古屋駅" />
            <Input label="想定通勤時間（片道・分）" value={projectCommuteTime} setValue={setProjectCommuteTime} placeholder="例：75" />
            <Select label="工程" value={projectProcess} setValue={setProjectProcess} options={["要件定義〜基本設計", "基本設計〜製造", "製造〜単体テスト", "テスト中心", "保守・運用", "PMO・調整中心"]} />
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-sky-200 bg-slate-50 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">診断結果</h2>

          <p className="text-3xl text-yellow-400">{stars}</p>
          <p className="mt-3 text-slate-300">
            総合評価：
            <span className="ml-2 text-4xl font-bold text-sky-400">{rank}</span>
          </p>

          <div className="my-6 text-6xl font-bold text-sky-400">
            {totalScore}点
            <span className="ml-2 text-lg text-slate-300">/ 100点</span>
          </div>

          <div className="mb-6 grid gap-3 md:grid-cols-4">
            <ScoreCard title="単価" score={priceScore} />
            <ScoreCard title="リモート" score={remoteScore} />
            <ScoreCard title="言語" score={languageScore} />
            <ScoreCard title="通勤" score={commuteScore} />
            <ScoreCard title="工程" score={processScore} />
          </div>

          <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-blue-800">
          <div className="mb-2 font-bold">
            ⓘ 総評
          </div>

            <p className="leading-8 whitespace-pre-line">
              {summaryComment}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <PointList title="良い点" points={goodPoints} emptyText="まだ良い点を判定できる入力が足りません。" />
            <PointList title="注意点" points={cautionPoints} emptyText="大きな注意点はまだ見つかっていません。" />
          </div>
          <div className="mb-6 grid gap-6 md:grid-cols-2"></div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <h3 className="mb-3 text-lg font-bold text-sky-900">
              🚀 おすすめアクション
            </h3>

            <ul className="space-y-2 text-sky-800">
              {recommendedActions.map((action, index) => (
                <li key={index}>
                  • {action}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <label className="mb-2 block font-semibold">案件メモ</label>
          <textarea
            className="min-h-32 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900"
            placeholder="案件文をコピペしておくメモ欄。今後AI解析やスキル抽出に使う想定。"
            value={projectMemo}
            onChange={(e) => setProjectMemo(e.target.value)}
          />
        </section>
      </div>
    </main>
  );
}

function Input({
  label,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold">{label}</label>
      <input
        className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none ring-sky-500 focus:ring-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold">{label}</label>
      <select
        className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none ring-sky-500 focus:ring-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function ScoreCard({ title, score }: { title: string; score: number }) {
  const percentage = Math.round((score / 20) * 100);

  let barColor = "bg-red-400";
  if (percentage >= 80) {
    barColor = "bg-emerald-500";
  } else if (percentage >= 60) {
    barColor = "bg-sky-500";
  } else if (percentage >= 40) {
    barColor = "bg-amber-400";
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600">{title}</p>
        <p className="text-sm font-bold text-slate-900">{score}/20</p>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-500">{percentage}%</p>
    </div>
  );
}

function PointList({
  title,
  points,
  emptyText,
}: {
  title: string;
  points: string[];
  emptyText: string;
}) {
  const isGood = title === "良い点";

  return (
    <div
      className={
        isGood
          ? "rounded-xl border border-emerald-200 bg-emerald-50 p-4"
          : "rounded-xl border border-orange-200 bg-orange-50 p-4"
      }
    >
      <p
        className={
          isGood
            ? "mb-3 font-bold text-emerald-800"
            : "mb-3 font-bold text-orange-800"
        }
      >
        <span className="mr-2">{isGood ? "✓" : "⚠"}</span>
        {title}
      </p>

      {points.length > 0 ? (
        <ul
          className={
            isGood
              ? "list-disc space-y-2 pl-5 text-emerald-900"
              : "list-disc space-y-2 pl-5 text-orange-900"
          }
        >
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className={isGood ? "text-emerald-700" : "text-orange-700"}>
          {emptyText}
        </p>
      )}
    </div>
  );
}