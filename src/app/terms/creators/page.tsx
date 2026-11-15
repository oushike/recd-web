import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "creator terms",
  description: "The terms for creators using rec'd.",
  alternates: { canonical: "/terms/creators" },
};

export default function CreatorTermsPage() {
  const email = siteConfig.supportEmail;
  return (
    <LegalPage title="creator terms" updated="November 15, 2026">
      <p>
        These terms are a working draft and may change before rec&apos;d launches. By using
        rec&apos;d as a creator you agree to them and to our <a href="/privacy">privacy policy</a>.
      </p>

      <h2>The short version</h2>
      <p>
        Redeem a perk, post a public Reel tagging the business within 48 hours, and keep it up for
        30 days. You keep ownership of your Reel; the business can repost it and run it as ads.
      </p>

      <h2>Who can join</h2>
      <ul>
        <li>You must be 18 or older.</li>
        <li>
          To redeem perks you need a public Instagram professional (creator or business) account
          that meets the follower and Reel minimums shown in the app.
        </li>
        <li>One Instagram account per rec&apos;d account.</li>
      </ul>

      <h2>Redeeming a perk</h2>
      <ul>
        <li>
          Redeem in person, during the business&apos;s hours, and show the live screen to staff.
        </li>
        <li>Redemptions can&apos;t be undone. Limits like cooldowns and weekly spots apply.</li>
        <li>
          If the business can&apos;t honor the perk, report it in the app within 2 hours and you
          won&apos;t be held to posting.
        </li>
        <li>You can&apos;t redeem at a business you own or manage.</li>
      </ul>

      <h2>Posting</h2>
      <ul>
        <li>Post a public Reel that features the business and tags it, within 48 hours.</li>
        <li>Keep the Reel up and public for at least 30 days.</li>
        <li>
          Follow the law and Instagram&apos;s rules, including disclosing that you received
          something free.
        </li>
        <li>Missing a post can pause your ability to redeem new perks.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You own your Reels. You give the business you posted for, and rec&apos;d, a license to
        repost, share and run your Reel as ads, as described in the app before you redeem.
      </p>

      <h2>Your account</h2>
      <p>
        We can pause or close accounts that break these terms or misuse rec&apos;d. You can delete
        your account at any time. See <a href="/data-deletion">data deletion</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
