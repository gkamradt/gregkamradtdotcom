import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';
import { baseUrl, createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: {
    template: '%s | Greg Kamradt',
    default: 'Greg Kamradt',
  },
  description: 'Personal website for Greg Kamradt',
  metadataBase: baseUrl,
});

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
