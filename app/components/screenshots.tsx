import Image from "next/image";

type Screenshot = {
  src: string;
  alt: string;
  captionJa: string;
  captionEn: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/screenshot1.png",
    alt: "Seichi ホーム画面",
    captionJa: "聖地レビューや新着アニメをチェック",
    captionEn: "Home — Browse reviews and newly added anime",
  },
  {
    src: "/screenshot2.png",
    alt: "Seichi 聖地詳細画面",
    captionJa: "アニメシーンと実景を並べて比較",
    captionEn: "Spot detail — Compare anime scenes with real views",
  },
  {
    src: "/screenshot3.png",
    alt: "Seichi ストリートビュー画面",
    captionJa: "現地の雰囲気をそのまま体験",
    captionEn: "Street view — Explore locations as if you were there",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="scroll-mt-20 bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-4xl">スクリーンショット</h2>
          <p className="mt-3 text-base text-sky-600 sm:text-lg">App screenshots</p>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-base">聖地巡礼の体験が、そのままアプリの中に。</p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {screenshots.map((screenshot) => (
            <li key={screenshot.src} className="flex flex-col items-center">
              <div className="w-full max-w-[240px] overflow-hidden rounded-[2rem] sm:max-w-[220px]">
                <Image src={screenshot.src} alt={screenshot.alt} width={1242} height={2688} className="h-auto w-full" />
              </div>

              <figcaption className="mt-6 max-w-xs text-center">
                <p className="text-base font-bold text-zinc-800">{screenshot.captionJa}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{screenshot.captionEn}</p>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
