import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "business terms",
  description: "The terms for businesses using rec'd.",
  alternates: { canonical: "/terms/businesses" },
};

export default function BusinessTermsPage() {
  const email = siteConfig.supportEmail;
  return (
    <LegalPage title="business terms" updated="November 15, 2026">
      <p>
        These terms are a working draft and may change before rec&apos;d launches. By listing a
        business on rec&apos;d you agree to them and to our <a href="/privacy">privacy policy</a>.
      </p>

      <h2>The short version</h2>
      <p>
        Honor your perks and events as listed. You can repost creators&apos; approved Reels and run
        them as ads, within the guardrails in these terms.
      </p>

      <h2>Your listing</h2>
      <ul>
        <li>Every business is reviewed before it goes live.</li>
        <li>Keep your details, hours and address accurate.</li>
        <li>No alcohol perks.</li>
      </ul>

      <h2>Perks and events</h2>
      <ul>
        <li>Honor every perk redeemed and every confirmed RSVP, as listed at the time.</li>
        <li>If something goes wrong, report it in the app so we can review it.</li>
      </ul>

      <h2>Using creators&apos; Reels</h2>
      <p>
        You may repost approved Reels and run them as ads, credit the creator, and not edit them in
        a way that changes their meaning. Creators keep ownership of their content.
      </p>

      <h2>Billing</h2>
      <p>
        Plans, included posts and extra-post pricing are shown in the app and billed through Stripe.
        Cancelling takes effect at the end of your paid period.
      </p>

      <h2>Your account</h2>
      <p>
        We can pause or remove listings that break these terms. Email us to close your business
        listing.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
