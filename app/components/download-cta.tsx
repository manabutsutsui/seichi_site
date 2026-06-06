import Image from "next/image";
import AppStoreLink from "./app-store-link";

export default function DownloadCta() {
  return (
    <section id="download" className="scroll-mt-20 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Image src="/icon.png" alt="Seichi" width={72} height={72} className="rounded-[16px] shadow-lg shadow-sky-900/30" />

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">さあ、聖地巡礼をはじめよう</h2>
          <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">Start your anime pilgrimage today</p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">今すぐダウンロードして、好きな作品の舞台を探しに出かけましょう。</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">Download now and discover the real-world settings of your favorite anime.</p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <AppStoreLink />
            <p className="text-xs text-white/60">
              無料 · アプリ内課金あり
              <span className="mx-1.5">·</span>
              Free · In-app purchases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
