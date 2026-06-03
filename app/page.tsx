import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import BlogPreview from '@/components/home/BlogPreview';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
