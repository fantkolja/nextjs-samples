import { LayoutProps } from '@/types/page';
import { ReactNode } from 'react';
import { Card } from '@/ui/components/common/Card/Card';
import { ArticleTabs } from '@/ui/components/learn/ArticleTabs/ArticleTabs';

interface LayoutSlots {
  read: ReactNode;
  edit: ReactNode;
}

export default function LearnLayout({ children, read, edit }: LayoutProps & LayoutSlots) {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {children}
      <ArticleTabs />
      <div className="flex gap-4 mt-6 items-center justify-between w-full">
        <Card className="w-1/2 h-96">
          {read}
        </Card>
        <Card className="w-1/2 h-96">
          {edit}
        </Card>
      </div>
    </div>
  );
}
