import type { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Detail Pelatihan - Growpath",
  description: "Lihat detail lengkap tentang pelatihan ini.",
};

export default function TrainingDetailLayout({ children }: LayoutProps) {
  return <>{children}</>;
}