import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find a Provider | Delta Health Center',
  description: 'Search our directory to find highly skilled, compassionate doctors, dentists, pediatricians, and nurse practitioners at Delta Health Center locations.',
};

export default function FindProviderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
