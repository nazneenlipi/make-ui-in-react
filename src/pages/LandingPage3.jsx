"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Upload,
  Users,
  CheckSquare,
  MessageSquare,
  FileUp,
  UserPlus,
  MessageCircle,
  Clock,
  Zap,
  FolderKanban,
  Play,
  ChevronRight,
  Mountain,
  Star,
  Menu,
  X,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage3() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Mountain className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              TestCollab
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
              Get Started
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container py-4 px-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button variant="outline" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-primary to-purple-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                  <span>New Features Available</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Revolutionize Manual Software Testing Collaboration
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your testing process with an interactive SaaS platform for testers and developers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                  >
                    Get Started for Free
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 border-primary/20 hover:bg-primary/5">
                    Request a Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 w-8 rounded-full border-2 border-background ${["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"][i]}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">500+</span> teams already using TestCollab
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-xl bg-background">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-muted/80 backdrop-blur-sm flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-medium text-center w-full">TestCollab Dashboard</div>
                  </div>
                  <div className="pt-12 p-4 aspect-[4/3] bg-muted/30 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full h-full p-2">
                      <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm">Test Cases</div>
                          <div className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">42</div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 mt-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-muted h-6 rounded-md"></div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm">Comments</div>
                          <div className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">12</div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 mt-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-muted h-6 rounded-md"></div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm">Team</div>
                          <div className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">8</div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 mt-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-muted h-6 rounded-md"></div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-sm">Progress</div>
                          <div className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">78%</div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 mt-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-muted h-6 rounded-md"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="w-full py-12 border-y border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm text-muted-foreground">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                {["Microsoft", "Google", "Airbnb", "Spotify", "Slack"].map((brand) => (
                  <div key={brand} className="text-xl font-semibold text-muted-foreground/60">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Why Choose Our Platform?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Powerful features designed to streamline your testing workflow
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  icon: <Upload className="h-6 w-6 text-primary" />,
                  title: "Upload/Import Test Cases",
                  description: "Easily import test cases from CSV files with preformatted templates",
                },
                {
                  icon: <CheckSquare className="h-6 w-6 text-primary" />,
                  title: "Interactive Test Cases",
                  description: "Add interactivity with a flexible UI for better test management",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Collaboration Tools",
                  description: "Enable real-time communication between testers and developers",
                },
                {
                  icon: <UserPlus className="h-6 w-6 text-primary" />,
                  title: "User Acceptance Testing",
                  description: "Manage UAT entities effectively with interactive checklists",
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-primary" />,
                  title: "Commenting & Feedback",
                  description: "Centralized feedback for seamless communication between team members",
                },
                {
                  icon: <FolderKanban className="h-6 w-6 text-primary" />,
                  title: "Test Case Management",
                  description: "Organize projects, suites, and cases effortlessly in one place",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
          <div className="absolute left-0 bottom-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>How It Works</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Simplify Your Testing Workflow
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform streamlines your testing process in just three simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-primary to-purple-600/40"></div>

              {[
                {
                  step: 1,
                  icon: <FileUp className="h-10 w-10 text-primary" />,
                  title: "Import Test Cases",
                  description: "Easily import test cases from CSV files with our preformatted templates",
                },
                {
                  step: 2,
                  icon: <UserPlus className="h-10 w-10 text-primary" />,
                  title: "Add Interactivity",
                  description: "Add interactivity to test cases and assign roles to team members",
                },
                {
                  step: 3,
                  icon: <MessageCircle className="h-10 w-10 text-primary" />,
                  title: "Collaborate in Real-Time",
                  description: "Collaborate, comment, and track progress with your team in real-time",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-lg font-bold text-primary-foreground mb-8 z-10 shadow-lg">
                    {step.step}
                  </div>
                  <div className="rounded-xl border bg-background/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-full">
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4">
                  <span>Benefits</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl mb-4">
                  Empowering Teams to Deliver Quality Software
                </h2>
                <p className="text-muted-foreground md:text-xl mb-8">
                  Our platform helps teams collaborate effectively and deliver high-quality software
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Clock className="h-6 w-6 text-primary" />,
                      title: "Save Time",
                      description: "Automate repetitive tasks like importing test cases and assigning roles",
                    },
                    {
                      icon: <Users className="h-6 w-6 text-primary" />,
                      title: "Improve Collaboration",
                      description: "Bridge the gap between testers and developers with real-time communication",
                    },
                    {
                      icon: <FolderKanban className="h-6 w-6 text-primary" />,
                      title: "Enhance Management",
                      description: "Organize projects, suites, and test cases effortlessly in one place",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Boost Productivity",
                      description: "Focus on testing, not managing tools, with our intuitive platform",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-xl">
                  <div className="aspect-square bg-muted/30 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-background rounded-lg shadow-lg p-6 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-lg font-bold">Project Dashboard</div>
                        <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">Active</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="text-3xl font-bold text-primary">42</div>
                          <div className="text-xs text-muted-foreground">Test Cases</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="text-3xl font-bold text-primary">78%</div>
                          <div className="text-xs text-muted-foreground">Completion</div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div
                              className={`h-2 w-2 rounded-full ${["bg-green-500", "bg-yellow-500", "bg-blue-500", "bg-red-500"][i]}`}
                            ></div>
                            <div className="flex-1 h-4 bg-muted rounded"></div>
                            <div className="h-4 w-16 bg-muted rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
          <div className="absolute right-0 bottom-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">What Our Users Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from teams who have transformed their testing process with our platform
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "TestCollab has completely transformed how our QA and development teams work together. The ability to import test cases and collaborate in real-time has cut our testing cycle by 40%.",
                  author: "Sarah Johnson",
                  role: "QA Lead, TechSolutions Inc.",
                },
                {
                  quote:
                    "The UAT features have been a game-changer for our client approvals. We can now manage the entire testing process in one place, with clear visibility for all stakeholders.",
                  author: "Michael Chen",
                  role: "Project Manager, WebDev Co.",
                },
                {
                  quote:
                    "As a developer, I appreciate how TestCollab bridges the communication gap with our QA team. The commenting feature helps us resolve issues quickly without endless email chains.",
                  author: "Alex Rodriguez",
                  role: "Senior Developer, InnovateSoft",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo/Interactive Preview */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>Demo</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">See It in Action</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Watch how TestCollab can transform your testing workflow
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-xl">
                  <div className="aspect-video w-full bg-muted/30 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-purple-600/5"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                >
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
          <div className="absolute left-0 top-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>Pricing</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Affordable Plans for Every Team
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for your team's needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Free Trial",
                  price: "$0",
                  period: "14 days",
                  features: ["Up to 5 users", "Basic test case management", "CSV import", "Email support"],
                  cta: "Start Free Trial",
                  popular: false,
                },
                {
                  name: "Basic",
                  price: "$29",
                  period: "per month",
                  features: [
                    "Up to 10 users",
                    "Advanced test case management",
                    "CSV import/export",
                    "Basic collaboration tools",
                    "Email & chat support",
                  ],
                  cta: "Subscribe Now",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$79",
                  period: "per month",
                  features: [
                    "Up to 25 users",
                    "Full test case management",
                    "Advanced collaboration tools",
                    "UAT management",
                    "API access",
                    "Priority support",
                  ],
                  cta: "Subscribe Now",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "contact sales",
                  features: [
                    "Unlimited users",
                    "Custom integrations",
                    "Advanced security features",
                    "Dedicated account manager",
                    "24/7 premium support",
                    "Custom training",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`border-0 ${plan.popular ? "bg-gradient-to-b from-background to-primary/5" : "bg-background/60"} backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-purple-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-6 pt-8 flex-1">
                    <div className="mb-6 text-center">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="mt-2 text-3xl font-bold">{plan.price}</div>
                      <p className="text-sm text-muted-foreground">{plan.period}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white" : ""}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Got Questions?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to commonly asked questions about our platform
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-md">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How do I import test cases?",
                        answer:
                          'You can import test cases by uploading a CSV file with our preformatted template. Simply navigate to the "Test Cases" section, click on "Import," and follow the instructions to upload your file. Our system will automatically process the file and import your test cases.',
                      },
                      {
                        question: "Is there a free trial available?",
                        answer:
                          "Yes, we offer a 14-day free trial with access to most of our features. You can sign up for the free trial without providing any payment information. After the trial period, you can choose to upgrade to one of our paid plans or continue with limited features.",
                      },
                      {
                        question: "Can I integrate this tool with other software?",
                        answer:
                          "Yes, our platform offers integration with popular project management tools, issue trackers, and CI/CD pipelines. We provide API access in our Pro and Enterprise plans, allowing you to build custom integrations with your existing tools and workflows.",
                      },
                      {
                        question: "How many users can I add to my account?",
                        answer:
                          "The number of users depends on your subscription plan. The Free Trial allows up to 5 users, Basic plan up to 10 users, Pro plan up to 25 users, and Enterprise plan offers unlimited users. You can upgrade your plan at any time to add more users.",
                      },
                      {
                        question: "What kind of support do you offer?",
                        answer:
                          "We offer different levels of support based on your subscription plan. All plans include email support. The Basic plan adds chat support, the Pro plan includes priority support, and the Enterprise plan offers 24/7 premium support with a dedicated account manager and custom training sessions.",
                      },
                    ].map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-border/40 last:border-0"
                      >
                        <AccordionTrigger className="text-left font-medium py-4 hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-600/5 -z-10" />
          <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />

          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-border/40">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                  <span>Get Started</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Join thousands of testers improving their workflow today!
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Start your free trial and see how TestCollab can transform your testing process.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                  >
                    Get Started for Free
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 border-primary/20 hover:bg-primary/5">
                    Request a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                  <Mountain className="h-5 w-5" />
                </div>
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  TestCollab
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Collaborative manual testing platform for modern QA teams.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About Us", "Careers", "Blog", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {["Documentation", "Help Center", "Community", "Webinars"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TestCollab. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">Designed with ❤️ for testing teams worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

