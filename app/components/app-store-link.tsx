import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/jp/app/%E3%82%A2%E3%83%8B%E3%83%A1%E3%81%AE%E8%81%96%E5%9C%B0%E5%B7%A1%E7%A4%BC%E3%82%A2%E3%83%97%E3%83%AA-seichi/id6723886292";

type AppStoreLinkProps = {
  className?: string;
};

export default function AppStoreLink({ className }: AppStoreLinkProps) {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`inline-block transition-opacity hover:opacity-80 ${className ?? ""}`} aria-label="App Store でダウンロード">
      <Image src="/appstore.svg" alt="App Store からダウンロード" width={160} height={54} className="h-12 w-auto sm:h-[54px]" />
    </a>
  );
}
