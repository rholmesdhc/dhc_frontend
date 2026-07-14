import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referring Physicians & Referrals | Delta Health Center',
  description: 'Refer patients to Delta Health Center specialties. Access online referral portals, submission guidelines, and contact information for referring practitioners.',
};

export default function ReferringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
