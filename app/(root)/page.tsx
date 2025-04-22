import Hero from '@/components/home/hero';
import Recommends from '@/components/home/recommends';
import Intro from '@/components/home/intro';
import Comments from '@/components/home/comments';
import Bottom from '@/components/home/bottom';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Recommends />
      <Intro />
      <Comments />
      <Bottom />
    </>
  );
};

export default Homepage;
