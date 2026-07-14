import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Delta Health Center',
  description: 'Get in touch with Delta Health Center. Contact our administrative offices, send an inquiry, or locate key clinic phone numbers across the Mississippi Delta.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
