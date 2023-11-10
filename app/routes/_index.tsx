import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { AiOutlineArrowRight } from 'react-icons/ai/index.js';
import HeroCarousel from '~/components/HeroCarousel';
import SearchBar from '~/components/SearchBar';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const carouselImages = useLoaderData<typeof loader>();
  console.log('Index ~ carouselImages:', carouselImages);

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <AiOutlineArrowRight className="text-md align-middle text-red-500 my-auto" />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="pt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <SearchBar />
          </div>

          <HeroCarousel images={carouselImages} />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Iphone', 'book', 'laptop', 'shoes', 'watch', 'shirt'].map(
            (product) => (
              <div
                className=""
                key={product}
              >
                {product}
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export function action({ request }: ActionFunctionArgs) {
  return null;
}

export async function loader() {
  console.log('loader');
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=10');

  const data = await response.json();
  return data;
}
