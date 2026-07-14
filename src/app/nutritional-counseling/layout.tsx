import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nutritional Counseling & Dietetics | Delta Health Center',
  description: 'Consult with registered dietitians at Delta Health Center. Get personalized nutrition plans, dietary counseling, and chronic disease management guidance.',
};

export default function NutritionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
