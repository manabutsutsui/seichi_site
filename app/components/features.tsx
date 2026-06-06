type Feature = {
  titleJa: string;
  titleEn: string;
  icon: React.ReactNode;
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <rect x="3" y="5" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="5" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M5 6.5h14a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H10l-3.5 3v-3H5a1.5 1.5 0 01-1.5-1.5V8a1.5 1.5 0 011.5-1.5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function RankingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M7 20V10M12 20V4M17 20v-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l2.2 5.5H20l-4.5 3.5 1.7 5.5L12 16.8 6.8 17.5 8.5 12 4 8.5h5.8L12 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

const features: Feature[] = [
  {
    titleJa: "聖地スポットの検索・閲覧",
    titleEn: "Search & browse pilgrimage spots",
    icon: <SearchIcon />,
  },
  {
    titleJa: "アニメと実景の比較",
    titleEn: "Compare anime scenes with real views",
    icon: <CompareIcon />,
  },
  {
    titleJa: "レビュー・評価の投稿",
    titleEn: "Share reviews and ratings",
    icon: <ReviewIcon />,
  },
  {
    titleJa: "訪問数・人気ランキング",
    titleEn: "Visit & popularity rankings",
    icon: <RankingIcon />,
  },
  {
    titleJa: "プレミアムプラン",
    titleEn: "Premium plan (ad-free & more)",
    icon: <PremiumIcon />,
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">できること</h2>
          <p className="mt-3 text-base text-sky-600 sm:text-lg">What you can do with Seichi</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">アニメ聖地巡礼に必要な機能を、ひとつのアプリに。</p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.titleJa} className="group rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-600 transition-colors group-hover:bg-sky-500/15">{feature.icon}</div>
              <h3 className="text-base font-semibold text-zinc-900">{feature.titleJa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{feature.titleEn}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
