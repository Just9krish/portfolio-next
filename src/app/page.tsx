import BottomHero from '@/components/home/bottom-hero';
import ContactSection from '@/components/home/contact-section';
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';
import WorkExperience from '@/components/home/work-experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Explore the portfolio of Amit Vishwakarma - showcasing innovative web development projects, technical expertise, and creative solutions.',
};

export default function Home() {
  return (
    <main className="w-full lg:w-[90%] mx-auto flex flex-col justify-center items-center">
      <Hero />
      <WorkExperience />
      <Projects />
      <BottomHero />
      <ContactSection />
    </main>
  );
}
