"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const path = usePathname();
  const privacy = path.startsWith("/privacy");
  const support = path.startsWith("/support");

  return (
    <header className="top">
      <Link className="brand" href="/">
        <img src="/icon.png" width={36} height={36} alt="" />
        <span>PocketBook</span>
      </Link>
      <div className="tools">
        <nav aria-label="Pages">
          <Link href="/privacy" aria-current={privacy ? "page" : undefined}>
            Privacy
          </Link>
          <Link href="/support" aria-current={support ? "page" : undefined}>
            Support
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
