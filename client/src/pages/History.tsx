import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, AlertCircle } from "lucide-react";

export default function History() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ChevronLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">何が起きたのか？ 日大問題の経緯</h1>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <AlertCircle className="w-5 h-5" />
                不正事案の概要
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                2022年3月31日、日本大学は「元理事及び前理事長による不正事案に係る第三者委員会」の調査報告書を公開しました。この報告書は、日大の運営上の深刻な問題を明らかにしました。
              </p>
              <p className="font-semibold text-slate-900">
                問題の核心：日本大学の事業部を通じて、特定の関係者に対し、不透明な取引が行われていました。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Figures Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">主要な関係者</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">田中英壽氏（元理事長・常務理事）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  長期間にわたり日本大学の理事長を務め、大学の運営に強い影響力を持っていました。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">井ノ口忠男氏（元理事・事業部取締役）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  事業部の実質的なトップとして機能し、業者選定や契約に関して強い影響力を行使していました。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">藪本雅巳氏（医療法人前理事長）</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p>
                  井ノ口氏と関係を持ち、複数の企業を通じて日大から多額の金銭を受け取っていました。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">次のステップ</h3>
          <Link href="/issues" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            現状の課題を見る
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>日本大学 学生自治復活プロジェクト © 2024</p>
        </div>
      </footer>
    </div>
  );
}
