import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <h1>A notebook on your iPhone.</h1>
        <p className="lede">
          PocketBook keeps notes, lists, photos, and voice memos. Search looks through a note and its transcript. Revisit brings back notes that are not on a list.
        </p>
        <p>Your notes stay on your phone, and in your iCloud when you are signed in. PocketBook does not collect them.</p>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
          {" · "}
          <Link href="/support">Support</Link>
        </p>
      </main>
      <footer>
        <p>Cole Carter</p>
        <p>
          <a href="mailto:colescarter@gmail.com">colescarter@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
