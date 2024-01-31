import { sleep } from '@/server/data/fetcher';

export default async function ReadArticlePage() {
  await sleep(3000);
  return (
    <div>
      <h2 className="text-2xl">Read Article</h2>
      <p className="text-sm">
        Fusce euismod tortor neque, nec dictum magna placerat eget. In ac quam consequat, rutrum diam vitae, pharetra neque. Etiam maximus, neque eu ultricies interdum, purus lacus consectetur enim, ut pretium massa purus vitae ipsum. Nullam accumsan nulla et dui dapibus tincidunt. Vivamus ultricies augue at est pharetra vehicula. Sed turpis nisi, dictum nec egestas et, maximus in felis. Aliquam tempus aliquet neque, quis ullamcorper ex sodales non. Maecenas finibus sollicitudin velit, sit amet eleifend augue aliquam ut. Aliquam in arcu in lacus aliquam pretium accumsan eu leo. In fringilla, elit et tincidunt molestie, orci nisi auctor orci, ac elementum dui nunc in lectus.
      </p>
    </div>
  );
}
