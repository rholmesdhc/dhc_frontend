import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hunger Relief & Food Bank Resources | Delta Health Center',
  description: 'Find local food pantries, community hunger relief schedules, and nutrition assistance resources supported by Delta Health Center across the Mississippi Delta.',
};

export default function FoodBankLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
