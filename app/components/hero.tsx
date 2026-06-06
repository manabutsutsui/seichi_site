import Image from "next/image";
import AppStoreLink from "./app-store-link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src="/bg.png" alt="" fill priority className="object-cover object-[center_20%]" sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/25 via-sky-900/10 to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/30 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full max-w-xl flex-1">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
            アニメの聖地を、
            <br />
            あなたの旅に。
          </h1>
          <p className="mt-4 text-base font-medium text-white/90 drop-shadow-sm sm:text-lg">Turn anime scenes into real journeys.</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">世界中のアニメ聖地巡礼ファンと繋がろう。聖地スポットの検索・閲覧、実景との比較、レビュー共有ができます。</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">Connect with anime pilgrimage fans worldwide. Search spots, compare scenes with real locations, and share reviews.</p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <AppStoreLink />
            <p className="text-xs text-white/60">
              無料 · アプリ内課金あり
              <span className="mx-1.5">·</span>
              Free · In-app purchases
            </p>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <Image src="/screenshot1.png" alt="Seichi アプリのホーム画面" width={1242} height={2688} className="h-auto w-full max-w-[260px] drop-shadow-2xl sm:max-w-[280px] lg:max-w-[300px]" priority />
        </div>
      </div>
    </section>
  );
}
