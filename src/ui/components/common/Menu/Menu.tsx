import { MenuItem } from '@/ui/components/common/Menu/MenuItem/MenuItem';

export const Menu = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
    </nav>
  );
};


// export const Menu = () => {
//   return (
//     <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//       <MenuItem
//         href="/docs"
//         heading="Docs"
//         description="Find in-depth information about Next.js features and API."
//       />
//       <MenuItem
//         href="/learn"
//         heading="Learn"
//         description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
//       />
//       <MenuItem
//         href="/templates"
//         heading="Templates"
//         description="Explore starter templates for Next.js."
//       />
//       <MenuItem
//         href="/deploy"
//         heading="Deploy"
//         description="Instantly deploy your Next.js site to a shareable URL with Vercel."
//       />
//     </div>
//   );
// };
