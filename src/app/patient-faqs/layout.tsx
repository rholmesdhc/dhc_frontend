import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Frequently Asked Questions (FAQs) | Delta Health Center',
  description: 'Find answers to common patient questions regarding insurance, billing, appointments, patient portal access, medical records, and sliding fee scales.',
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
