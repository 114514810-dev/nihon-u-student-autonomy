import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Issues() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">日大 学生自治復活</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">ホーム</Link>
            <Link href="/history" className="text-slate-700 hover:text-slate-900 font-medium">問題の経緯</Link>
            <Link href="/issues" className="text-slate-700 hover:text-slate-900 font-medium">現状の課題</Link>
            <Link href="/finance" className="text-slate-700 hover:text-slate-900 font-medium">財務情報</Link>
            <Link href="/roadmap" className="text-slate-700 hover:text-slate-900 font-medium">ロードマップ</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">今、日大が抱えている問題</h1>

        <section className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>ガバナンスの不全</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>不正事案が明らかになった後、日大は改革を進めていますが、根本的な問題は解決されていません。</p>
              <ul className="list-disc list-inside space-y-2">
                <li>意思決定の過程が不透明で、学生や教職員の声が反映されにくい</li>
                <li>役員・理事会の権限と責任が明確でなく、チェック機能が機能していない</li>
                <li>内部通報制度や監査体制が十分に機能していない</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>学生自治の形骸化</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>かつて日本大学には、学生が主体的に大学運営に関わる自治組織がありました。しかし、現在、その自治は形骸化しています。</p>
              <ul className="list-disc list-inside space-y-2">
                <li>学生の意見を吸い上げる仕組みが機能していない</li>
                <li>学生が大学運営に関わる機会が限定されている</li>
                <li>課外活動や自治活動への関心が低下している</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>財務の透明性</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p>日大は毎年、事業報告書や決算書を公開していますが、その内容は複雑で、学生にはわかりにくいものになっています。</p>
              <ul className="list-disc list-inside space-y-2">
                <li>学費がどのように集められ、何に使われているかが、学生に明確に伝わっていない</li>
                <li>不正事案に関連する費用がどの程度含まれているかが不明確</li>
                <li>学生が財務情報にアクセスしやすい形での公開がなされていない</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 text-center mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">次のステップ</h3>
          <Link href="/finance" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            財務情報を見る
          </Link>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
        </div>
      </footer>
    </div>
  );
}
