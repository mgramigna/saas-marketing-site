import {
  Activity,
  Ambulance,
  CircleCheck,
  FileHeart,
  HeartPulse,
  Hospital,
  Menu,
  Play,
  Stethoscope,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Tabs from "@radix-ui/react-tabs";
import { Testimonial } from "@/components/Testimonial";
import { Fragment, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: "1",
    text: "HealthNexus has transformed the way we deliver care in our clinic. Its intuitive interface and powerful features have streamlined our workflow and improved patient outcomes. Highly recommend!",
    author: {
      name: "Dr. Sarah Rodriguez",
      title: "Family Physician",
      avatarUrl:
        "https://fastly.picsum.photos/id/606/200/200.jpg?hmac=nC0ge4pSLWRgvo95xirIb1usWSLDart07cBldzt9lG8",
    },
  },
  {
    id: "2",
    text: "As a healthcare administrator, I'm always looking for innovative solutions to enhance efficiency and patient satisfaction. HealthNexus exceeded my expectations with its seamless integration and comprehensive tools. A game-changer for our facility!",
    author: {
      name: "John Smith",
      title: "Healthcare Administrator",
      avatarUrl:
        "https://fastly.picsum.photos/id/297/200/200.jpg?hmac=elahxndleNOPlIfCfcZuJFmS-MkvvkXnQozwsyqF-FU",
    },
  },
  {
    id: "3",
    text: "I've been using HealthNexus to manage my patients' records and appointments, and I couldn't be happier with the results. It's user-friendly, secure, and has simplified my practice management tasks immensely. Thank you, HealthNexus!",
    author: {
      name: "Emily Johnson",
      title: "Nurse Practitioner",
      avatarUrl:
        "https://fastly.picsum.photos/id/472/200/200.jpg?hmac=PScxKeNxgxcauarhbWIWesyo4VsouCtfdX8fNTy9HRI",
    },
  },
  {
    id: "4",
    text: "HealthNexus has revolutionized the way we communicate with our patients. Its telemedicine feature has enabled us to provide virtual consultations seamlessly, improving accessibility and convenience for our patients. Truly a lifesaver!",
    author: {
      name: "Dr. Michael Chen",
      title: "Cardiologist",
      avatarUrl:
        "https://fastly.picsum.photos/id/322/200/200.jpg?hmac=h5_-NQtnn86YBEwVT2_4zcSeuxpCnMAdriBcZchtfas",
    },
  },
  {
    id: "5",
    text: "HealthNexus is a game-changer for our clinic. Its intuitive interface and comprehensive features have drastically improved our efficiency and patient care. Highly recommend!",
    author: {
      name: "Dr. David Lee",
      title: "Medical Director",
      avatarUrl:
        "https://fastly.picsum.photos/id/243/200/200.jpg?hmac=fW5ZwzzyTBy2t2MROp988oq12mZnKwN0coFLhZEE87s",
    },
  },
  {
    id: "6",
    text: "HealthNexus has transformed our hospital's operations. With seamless integration into our systems, it streamlines workflows, empowering us to focus on patient care. The telemedicine feature ensures timely access to care, enhancing our standard of service",
    author: {
      name: "Dr. Rachel Patel",
      title: "Chief Medical Officer",
      avatarUrl:
        "https://fastly.picsum.photos/id/243/200/200.jpg?hmac=fW5ZwzzyTBy2t2MROp988oq12mZnKwN0coFLhZEE87s",
    },
  },
] as const;

type FeatureTab = "emr" | "telehealth" | "claims";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFeatureTab, setSelectedFeatureTab] =
    useState<FeatureTab>("emr");

  return (
    <div className="flex flex-col h-full scroll-smooth">
      <header className="py-12">
        <div className="sm:px-8 px-2">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <a className="flex items-center gap-2 pr-8" href="/">
                <HeartPulse className="h-10 w-10 text-pink-600" />
                <span className="font-display">HealthNexus</span>
              </a>
              <div className="hidden md:flex">
                <a href="#features">
                  <Button variant="link">Features</Button>
                </a>
                <a href="#testimonials">
                  <Button variant="link">Testimonials</Button>
                </a>
                <a href="#pricing">
                  <Button variant="link">Pricing</Button>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/sign-in">
                <Button variant="link" className="hidden md:flex">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button animated>Get Started</Button>
              </Link>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden flex"
                  >
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  side="top"
                  className="rounded-xl top-6"
                >
                  <div className="flex flex-col gap-8">
                    <a
                      href="#features"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Features
                    </a>
                    <a
                      href="#testimonials"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                      Pricing
                    </a>
                    <Separator />
                    <a href="#" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
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
            <p className="mx-auto max-w-2xl sm:px-0 px-2">
              At HealthNexus, we're revolutionizing healthcare by seamlessly
              integrating technology into every aspect of patient care.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/sign-up">
                <Button animated>Get Started for Free</Button>
              </Link>
              <Button variant="outline">
                <Play className="h-6 w-6 pr-2" />
                Watch Video
              </Button>
            </div>
          </div>
          <div className="pt-24">
            <p className="font-display text-slate-700 sm:px-0 px-2">
              Trusted by the leading innovators in healthcare technology
            </p>
            <div className="text-slate-500 px-8 pt-8 gap-x-8 flex justify-center items-center sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
              <div className="flex flex-col sm:flex-row items-center sm:gap-x-12 sm:gap-y-0 gap-y-8">
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
                  <span>Pulse Health</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:gap-x-12 sm:gap-y-0 gap-y-8">
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
          <div className="text-center max-w-7xl mx-auto pb-16 text-white">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl sm:text-5xl tracking-tight font-display mx-auto max-w-4xl">
                Everything you need to streamline patient care
              </h2>
              <p className="mx-auto max-w-2xl sm:px-0 px-2">
                With the HealthNexus app, every feature you can think of is
                right at your fingertips
              </p>
            </div>
            <div className="flex justify-center pt-16">
              <Tabs.Root
                orientation="horizontal"
                value={selectedFeatureTab}
                onValueChange={(v) => setSelectedFeatureTab(v as FeatureTab)}
              >
                <Tabs.List className="flex justify-center gap-2 pb-8">
                  <Tabs.Trigger asChild value={"emr"}>
                    <motion.button
                      className={cn(
                        "rounded-full sm:px-4 sm:py-2 p-2 transition-colors animate-out duration-300",
                        selectedFeatureTab === "emr" &&
                          "text-blue-600 bg-slate-50",
                      )}
                    >
                      EMR Integration
                    </motion.button>
                  </Tabs.Trigger>
                  <Tabs.Trigger asChild value={"telehealth"}>
                    <motion.button
                      className={cn(
                        "rounded-full sm:px-4 sm:py-2 p-2 transition-colors animate-out duration-300",
                        selectedFeatureTab === "telehealth" &&
                          "text-blue-600 bg-slate-50",
                      )}
                    >
                      Telehealth
                    </motion.button>
                  </Tabs.Trigger>
                  <Tabs.Trigger asChild value={"claims"}>
                    <motion.button
                      className={cn(
                        "rounded-full sm:px-4 sm:py-2 p-2 transition-colors animate-out duration-300",
                        selectedFeatureTab === "claims" &&
                          "text-blue-600 bg-slate-50",
                      )}
                    >
                      Claims
                    </motion.button>
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="sm:px-12 px-2" value={"emr"}>
                  <p className="pb-12">
                    Seamlessly integrate patient health data and appointments
                    into the EMR of your choosing
                  </p>
                  <img
                    src="/dashboard.png"
                    className="rounded-xl hidden md:flex"
                  />
                  <img
                    src="/dashboard-mobile.png"
                    className="rounded-xl flex md:hidden"
                  />
                </Tabs.Content>
                <Tabs.Content className="px-2 sm:px-12" value={"telehealth"}>
                  <p className="pb-12">
                    Conduct telehealth visits directly in the platform
                  </p>
                  <img
                    src="/appointments.png"
                    className="rounded-xl hidden md:flex"
                  />
                  <img
                    src="/appointments-mobile.png"
                    className="rounded-xl flex md:hidden"
                  />
                </Tabs.Content>
                <Tabs.Content className="px-2 sm:px-12" value={"claims"}>
                  <p className="pb-12">
                    View all the financial information for your practice
                  </p>
                  <img
                    src="/finance.png"
                    className="rounded-xl hidden md:flex"
                  />
                  <img
                    src="/finance-mobile.png"
                    className="rounded-xl flex md:hidden"
                  />
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div className="max-w-7xl mx-auto py-16 px-4">
            <div className="text-center flex flex-col gap-8">
              <h2 className="text-3xl sm:text-5xl tracking-tight font-display mx-auto max-w-4xl">
                Loved by healthcare companies everywhere
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-16 gap-8">
              {testimonials.map(({ id, text, author }) => (
                <Fragment key={id}>
                  <Testimonial text={text} author={author} />
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="relative overflow-hidden bg-slate-900 pb-28 pt-20 sm:py-32 px-4 sm:px-8"
        >
          <div className="max-w-7xl mx-auto pb-16 text-white">
            <div className="flex flex-col gap-8 text-center">
              <h2 className="text-3xl sm:text-5xl tracking-tight font-display mx-auto max-w-4xl">
                Simple pricing to scale with your business
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pt-16 gap-8">
              <div className="flex flex-col gap-8 border rounded-xl p-6">
                <h3 className="font-display text-3xl">Starter</h3>
                <div className="space-y-2">
                  <h4 className="font-display text-xl">
                    $5<span className="text-slate-300">/month</span>
                  </h4>
                  <p>Good for anyone just getting started with HealthNexus</p>
                </div>

                <Link to="/sign-up">
                  <Button className="bg-slate-900 hover:bg-slate-900/90 border border-slate-200 w-full">
                    Get Started
                  </Button>
                </Link>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Support for up to 5000 patients</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>1 production environment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>100 telehealth visits per month</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Unlimited clinical notes</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 border rounded-xl p-6 bg-blue-600 order-first md:order-none">
                <h3 className="font-display text-3xl">Pro</h3>
                <div className="space-y-2">
                  <h4 className="font-display text-xl">
                    $20<span className="text-slate-300">/month</span>
                  </h4>
                  <p>
                    Perfect for small to medium-sized businesses looking to
                    level up
                  </p>
                </div>
                <Link to="/sign-up">
                  <Button variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </Link>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>1 production environment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>2 preview environments</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Unlimited patients</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Unlimited telehealth visits</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Unlimited clinical notes</p>
                  </div>
                </div>
                <p className="text-center">✨ Most Popular ✨</p>
              </div>
              <div className="flex flex-col gap-8 border rounded-xl p-6">
                <h3 className="font-display text-3xl">Enterprise</h3>
                <div className="space-y-2">
                  <h4 className="font-display text-xl">Contact Us</h4>
                  <p>Good for anyone just getting started with HealthNexus</p>
                </div>
                <Link to="/sign-up">
                  <Button className="bg-slate-900 hover:bg-slate-900/90 border border-slate-200 w-full">
                    Get Started
                  </Button>
                </Link>
                <div className="flex flex-col gap-4">
                  <p>Everything in Pro and...</p>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Unlimited preview environments</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Dedicated support representative</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Automated insurance claims</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheck />
                    <p>Automated telehealth transcription</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="py-16">
            <div className="flex items-center gap-2 pr-8 justify-center">
              <HeartPulse className="h-10 w-10 text-pink-600" />
              <span className="font-display">HealthNexus</span>
            </div>
            <nav className="mt-10 text-sm">
              <div className="flex justify-center gap-x-6">
                <a href="#features">
                  <Button variant="link">Features</Button>
                </a>
                <a href="#testimonials">
                  <Button variant="link">Testimonials</Button>
                </a>
                <a href="#pricing">
                  <Button variant="link">Pricing</Button>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <a
                className="group"
                aria-label="HealthNexus on GitHub"
                href="https://github.com/mgramigna"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright &copy; 2024 HealthNexus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
