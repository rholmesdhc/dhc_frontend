import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our History & Legacy | Delta Health Center',
  description: 'Learn about the legacy of Delta Health Center, established in 1965 as the nation\'s first rural community health center, pioneering health equity and social medicine.',
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
