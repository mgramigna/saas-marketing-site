import {
  Activity,
  Ambulance,
  FileHeart,
  HeartPulse,
  Hospital,
  Play,
  Stethoscope,
  Waves,
} from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col h-full">
      <header className="py-12">
        <div className="px-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center gap-2 pr-8">
                <HeartPulse className="h-10 w-10 text-pink-600" />
                <span>HealthNexus</span>
              </div>
              <div className="hidden md:flex">
                <Button variant="link">Features</Button>
                <Button variant="link">Testimonials</Button>
                <Button variant="link">Pricing</Button>
                <Button variant="link">FAQ</Button>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="link">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="">
        <div className="text-center max-w-7xl mx-auto pb-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl pt-16 sm:text-7xl tracking-tight font-display max-w-4xl mx-auto">
              Empowering <span className="text-pink-600">healthcare</span>{" "}
              through innovation
            </h1>
            <p className="mx-auto max-w-2xl">
              At HealthNexus, we're revolutionizing healthcare by seamlessly
              integrating technology into every aspect of patient care.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Get Started for Free</Button>
              <Button variant="outline">
                <Play className="h-6 w-6 pr-2" />
                Watch Video
              </Button>
            </div>
          </div>
          <div className="pt-24">
            <p className="font-display">
              Trusted by the leading innovators in healthcare technology
            </p>
            <div className="pt-12 flex flex-col items-center gap-4 px-8">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                  <Hospital className="h-8 w-8" />
                  <span>MedTech Innovations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ambulance className="h-8 w-8" />
                  <span>Care Dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-8 w-8" />
                  <span>Pulse</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                  <Waves className="h-8 w-8" />
                  <span>Vital Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-8 w-8" />
                  <span>Wellness Ware Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileHeart className="h-8 w-8" />
                  <span>Medwise Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          id="features"
          className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
        >
          <img
            src="/bg.jpg"
            className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
          />
        </section>
        <section id="testimonials"></section>
        <section id="pricing"></section>
        <section id="faq"></section>
      </main>
    </div>
  );
}
