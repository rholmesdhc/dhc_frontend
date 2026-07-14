import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diabetes Clinic & Management | Delta Health Center',
  description: 'Receive specialized diabetes support and clinical care at Delta Health Center. We offer education, blood glucose monitoring, nutritional guidance, and treatment plans.',
};

export default function DiabetesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
