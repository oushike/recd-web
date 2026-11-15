import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "data deletion",
  description: "How to delete your rec'd account and data.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  const email = siteConfig.supportEmail;
  return (
    <LegalPage title="data deletion" updated="November 15, 2026">
      <h2>Delete your account in the app</h2>
      <ul>
        <li>Open rec&apos;d and go to settings.</li>
        <li>Tap delete account and confirm.</li>
      </ul>
      <p>
        This deletes your account right away. Your name, photo, phone number, date of birth and
        connected Instagram account are removed, and your sign-in is deleted, so signing in again
        starts a brand-new account.
      </p>

      <h2>What stays</h2>
      <p>
        Records of perks you already redeemed, and the Reels you posted for businesses, stay with
        those businesses with your personal details removed. Businesses paid for and may keep using
        those posts under the terms you agreed to.
      </p>
      <p>
        If you own a business on rec&apos;d, deleting your account doesn&apos;t close the business
        listing. Email us to close it.
      </p>

      <h2>Remove Instagram access only</h2>
      <p>
        To stop rec&apos;d from reading your Instagram without deleting your account, remove
        rec&apos;d from Instagram&apos;s settings under apps and websites. We delete the access
        token we stored for you.
      </p>

      <h2>Can&apos;t use the app?</h2>
      <p>
        Email <a href={`mailto:${email}`}>{email}</a> from the email or phone number linked to your
        account and ask us to delete it. We&apos;ll confirm within 30 days.
      </p>
    </LegalPage>
  );
}
