export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-12">
        <p className="mb-4 text-sm font-semibold text-sky-400">
          SES案件比較ツール Ver0.1
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          SES案件チェッカー
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-300">
          単価・リモート頻度・通勤負担・スキル相性をもとに、
          案件のおすすめ度をざっくり数値化するツールです
        </p>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">
            まずはここから
          </h2>

          <p className="mb-6 text-slate-300">
            希望条件と案件情報を入力して、あなたに合う案件かどうかをチェックします。
          </p>

          <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400">
            診断をはじめる
          </button>
        </div>
      </div>
    </main>
  );
}