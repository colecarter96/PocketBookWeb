import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact Cole Carter for help with PocketBook. Email colescarter@gmail.com.",
};

export default function SupportPage() {
  return (
    <>
      <main>
        <h1>Support</h1>
        <p className="lede">For help with PocketBook, a bug, or a feature request, write to Cole Carter.</p>
        <p className="contact">
          <a href="mailto:colescarter@gmail.com">colescarter@gmail.com</a>
        </p>
        <p className="who">Cole Carter · PocketBook for iPhone</p>
        <p>Include your iPhone model and iOS version when something is broken. That is enough to write back.</p>

        <h2>Notes</h2>
        <ul>
          <li>Tap a note to edit it. A blank new note is discarded when you stop editing.</li>
          <li>Swipe left for Copy, Memo, List, Photos, and Delete. A full swipe does not delete.</li>
          <li>Undo sits above the plus button. It can step back the last three deletions, photo removals, and memo removals from this session, and it is forgotten when you quit the app.</li>
        </ul>

        <h2>Photos and voice memos</h2>
        <ul>
          <li>Add a photo from your library or the camera. Only the photos you choose are added.</li>
          <li>If the camera does not open, allow Camera in Settings, under Privacy &amp; Security.</li>
          <li>A voice memo needs Microphone. A transcript also needs Speech Recognition. PocketBook transcribes on the device when it can.</li>
        </ul>

        <h2>iCloud</h2>
        <p>Notes, photos, and voice memos stay on the iPhone. When you are signed in, they also stay in your iCloud, so another device on the same Apple Account can show them.</p>
        <p>If a note is missing on a second device, check that the device is signed into the same Apple Account and that iCloud is on for PocketBook. A new photo or memo is saved on the phone first, then handed to iCloud, so it can take a moment to appear.</p>

        <h2>Lists, Revisit, and the widget</h2>
        <ul>
          <li>Deleting a list does not delete its notes.</li>
          <li>Revisit shows notes that are not on a list and are not blank. “Back in the mix” hides the current note for three days.</li>
          <li>The New Note widget opens PocketBook ready to write. The note widget shows a preview of a note you pick.</li>
        </ul>

        <h2>Delete your data</h2>
        <p>Delete notes in the app. Delete PocketBook to remove what is stored on that iPhone.</p>
        <p>
          To remove the iCloud copy, open Settings, tap your name, then iCloud, and delete PocketBook’s data. How the app handles notes is also described in the <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </main>
      <footer>
        <p>
          <Link href="/">PocketBook</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
        </p>
        <p>
          <a href="mailto:colescarter@gmail.com">colescarter@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
