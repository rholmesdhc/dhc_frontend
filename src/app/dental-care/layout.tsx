import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Care Services | Delta Health Center',
  description: 'Access professional, community-focused dental services at Delta Health Center. We offer dental exams, cleanings, fillings, extractions, and preventative care for all ages.',
};

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
