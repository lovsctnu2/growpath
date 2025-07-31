// app/training/[id]/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const trainingId = params.id;
  return {
    title: `Detail Pelatihan ${trainingId} - Growpath`,
    description: `Lihat detail lengkap tentang pelatihan ${trainingId} ini.`,
  };
}

export default function TrainingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}