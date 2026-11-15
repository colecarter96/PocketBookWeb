import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PocketBook does not collect your notes. They stay on your iPhone and in your private iCloud.",
};

export default function PrivacyPage() {
  return (
    <>
      <main>
        <h1>Privacy Policy</h1>
        <p className="meta">November 14, 2026</p>
        <p className="lede">PocketBook does not collect your notes. Cole Carter does not receive them, store them, or sell them.</p>

        <h2>Who this covers</h2>
        <p>
          PocketBook is an iPhone app made by Cole Carter. It has no account of its own and no servers of its own. This policy describes PocketBook on the App Store, bundle ID <span>com.colecarter.PocketBook</span>, including its Home Screen widget.
        </p>

        <h2>What stays on your iPhone</h2>
        <p>Notes, list names, dates, and revisit settings are stored in the app on your device. Photos you add and voice memos you record are stored in the app as well. A transcript, when one is made, is saved with the note.</p>
        <p>Recent searches, the reading font, text size, and light or dark appearance are stored on the device. The widget keeps a preview of your notes in a file shared only with PocketBook on that same iPhone. None of this is sent to Cole Carter.</p>

        <h2>iCloud</h2>
        <p>If you are signed in to iCloud, PocketBook uses it so your notebook can follow you to your other devices. Note text, lists, and related fields sync through your private iCloud database. Photos and voice memos are stored in your private iCloud container for PocketBook.</p>
        <p>
          That copy belongs to your Apple Account. Cole Carter cannot open it. Apple’s handling of iCloud is covered by <a href="https://www.apple.com/legal/privacy/">Apple’s Privacy Policy</a>. If iCloud is off or unavailable, PocketBook keeps the notebook on the device only.
        </p>
        <p>PocketBook does not send you notifications. Apple may deliver a silent update so iCloud can sync.</p>

        <h2>Camera, photos, microphone, and speech</h2>
        <p>The camera is used only when you take a photo for a note. The photo library is used only for the photos you pick. PocketBook does not read the rest of your library.</p>
        <p>The microphone is used only when you record a voice memo.</p>
        <p>
          Speech recognition writes the words from a voice memo into the note. PocketBook does this on your iPhone when the device can. If on-device recognition is unavailable, the recording may be sent to Apple to produce the transcript. Cole Carter does not receive the audio. Apple describes that processing in <a href="https://www.apple.com/legal/privacy/">Apple’s Privacy Policy</a>.
        </p>
        <p>You can turn Camera, Microphone, and Speech Recognition off in Settings, under Privacy &amp; Security. The rest of the app keeps working.</p>

        <h2>What PocketBook does not do</h2>
        <ul>
          <li>No analytics, advertising, or tracking across other companies’ apps and websites.</li>
          <li>No sale or sharing of personal information.</li>
          <li>No location, contacts, health, or payment data.</li>
          <li>No account, and the app does not ask for your name or email.</li>
        </ul>
        <p>Apple may collect diagnostics about apps through the App Store under Apple’s own policy. PocketBook does not receive a separate analytics feed.</p>
        <p>A note is free-form. You might type a name, a health detail, or anything else. PocketBook does not ask for those, and it does not treat them as a separate collection.</p>

        <h2 id="choices">Your choices</h2>
        <p>Delete a note in the app and it is removed from the notebook. Deleting a list removes the list and leaves the notes. Undo can bring back a recent deletion during the same session. That undo is forgotten when you quit the app.</p>
        <p>Delete PocketBook to remove the copy stored on that iPhone, including widget previews, recent searches, and reading settings.</p>
        <p>To remove the iCloud copy, open Settings, tap your name, then iCloud, and manage PocketBook’s data. You can also turn off iCloud for PocketBook there.</p>
        <p>Cole Carter does not hold a copy of your notes, so there is no separate account to export or erase. If you write anyway, the reply will explain how to delete what is on your device and in your iCloud.</p>

        <h2>Children</h2>
        <p>PocketBook is not directed at children under 13, and it does not knowingly collect personal information from children.</p>

        <h2>Changes</h2>
        <p>If these practices change, this page will change, and the date at the top will change with it.</p>

        <h2>Contact</h2>
        <p>Privacy questions go to Cole Carter.</p>
        <p className="contact">
          <a href="mailto:colescarter@gmail.com">colescarter@gmail.com</a>
        </p>
      </main>
      <footer>
        <p>
          <Link href="/">PocketBook</Link>
          {" · "}
          <Link href="/support">Support</Link>
        </p>
        <p>Cole Carter</p>
      </footer>
    </>
  );
}
