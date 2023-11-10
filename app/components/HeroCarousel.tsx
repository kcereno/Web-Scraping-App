import { useLoaderData } from '@remix-run/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

type HeroCarouselProps = {
  images: [
    {
      id: string;
      width: number;
      author: string;
      height: number;
      url: string;
      download_url: string;
    }
  ];
};

function HeroCarousel({ images }: HeroCarouselProps) {
  console.log('HeroCarousel ~ images:', images);
  return (
    <div>
      <Carousel
        showArrows={false}
        // autoPlay
        // interval={2000}
        infiniteLoop
        showThumbs={false}
        width={'500px'}
        showStatus={false}
      >
        {images.map(({ id, download_url }) => (
          <div
            className=""
            key={id}
          >
            <img
              src={download_url}
              alt={id}
              className="rounded-xl max-w-[484px] object-cover "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
