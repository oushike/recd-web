import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "privacy policy",
  description: "How rec'd collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const email = siteConfig.supportEmail;
  return (
    <LegalPage title="privacy policy" updated="November 15, 2026">
      <p>
        rec&apos;d is an app in metro Atlanta that connects local creators with local businesses.
        Creators get free perks from local spots and post an Instagram Reel to say thanks. This
        policy explains what information we collect, why, who sees it, and the choices you have.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account info:</strong> the phone number, Apple ID or Google account you sign in
          with, your display name and profile photo, and your date of birth (to confirm you&apos;re
          18 or older).
        </li>
        <li>
          <strong>Instagram info (creators):</strong> when you connect Instagram, Meta shares your
          Instagram account ID, username, profile picture, account type, follower count, and your
          list of posts (post ID, caption, post type, time posted, link and, where available, view
          counts). We use this to check eligibility, set your tier, and confirm the Reel you posted
          for a perk. We never post, comment or message on your behalf.
        </li>
        <li>
          <strong>Activity in the app:</strong> the perks you redeem, events you RSVP to or check in
          at, reports you file, and notifications we send you.
        </li>
        <li>
          <strong>Location:</strong> your phone&apos;s location is used on your device to show
          what&apos;s nearby. When you redeem a perk, we record where you were so we can check you
          were at the business. Businesses only see an approximate distance, never your exact
          location.
        </li>
        <li>
          <strong>Business info:</strong> for business accounts, your business details, address,
          hours, photos and Instagram handle. Payments are handled by Stripe; we never see or store
          full card numbers.
        </li>
        <li>
          <strong>Technical info:</strong> crash reports and basic usage analytics that help us fix
          bugs and improve the app.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>
          To run rec&apos;d: sign you in, show perks and events, process redemptions and RSVPs.
        </li>
        <li>To confirm creators posted the Reel they agreed to, and to bill businesses for it.</li>
        <li>To keep rec&apos;d fair and safe, including handling reports and preventing abuse.</li>
        <li>To send you notifications about your redemptions, deadlines and account.</li>
      </ul>
      <p>We don&apos;t sell your personal information, and we don&apos;t use it for ads.</p>

      <h2>Who sees it</h2>
      <ul>
        <li>
          <strong>Businesses</strong> see your public creator profile (name, photo, Instagram
          handle, follower count and tier) when you redeem with them, and the Reel you posted for
          them. They don&apos;t see your phone number, email or exact location.
        </li>
        <li>
          <strong>Service providers</strong> that help us run rec&apos;d (hosting, payments,
          messaging, crash reporting and analytics) process data for us under contract.
        </li>
        <li>We may share information if the law requires it or to protect people from harm.</li>
      </ul>

      <h2>How we protect it</h2>
      <p>
        Your Instagram access token is stored encrypted on our servers and is never sent to the app.
        Access to personal data is limited to what each part of rec&apos;d needs.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          You can edit your name and photo in settings, disconnect Instagram, or delete your account
          at any time. See <a href="/data-deletion">data deletion</a>.
        </li>
        <li>
          You can remove rec&apos;d&apos;s access to Instagram from Instagram&apos;s settings, under
          apps and websites.
        </li>
        <li>You can turn off notifications and location access in your phone&apos;s settings.</li>
      </ul>

      <h2>Age</h2>
      <p>rec&apos;d is only for people 18 and older.</p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we&apos;ll update the date above and tell you in the app when the
        change matters.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
