import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request an Appointment | Delta Health Center',
  description: 'Book your medical, dental, or behavioral health appointment at any of our Delta Health Center clinics across the Mississippi Delta region.',
};

export default function RequestAppointmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
