import { MenuItem } from '@/ui/components/common/Menu/MenuItem/MenuItem';

export const Menu = () => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <MenuItem
        href="/docs"
        heading="Docs"
        description="Find in-depth information about Next.js features and API."
      />
      <MenuItem
        href="/learn"
        heading="Learn"
        description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
      />
      <MenuItem
        href="/templates"
        heading="Templates"
        description="Explore starter templates for Next.js."
      />
      <MenuItem
        href="/deploy"
        heading="Deploy"
        description="Instantly deploy your Next.js site to a shareable URL with Vercel."
      />
    </div>
  );
};
