const TERMS_URL = "https://tsutsunoidoblog.com/movie_and_anime_holy_land_sns_terms_of_use/";
const PRIVACY_URL = "https://tsutsunoidoblog.com/movie_and_anime_holy_land_sns_privacy_policy/";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-white">
            利用規約
          </a>
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-white">
            プライバシーポリシー
          </a>
        </nav>

        <p className="text-center text-xs text-zinc-500">© 2026 Tsutsunoido</p>
      </div>
    </footer>
  );
}
