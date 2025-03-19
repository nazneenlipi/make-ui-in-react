
import Faq from "../components/Faq";
import Button from "../shared/Button";
import Card from "../shared/Card";
import CardContent from "../shared/CardContent";
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
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage2() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-primary">TestCollab</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              text={" Sign In"}
              variant="outline"
              className="hidden md:flex"
            ></Button>
            <Button text={"Get Started"}></Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Revolutionize Manual Software Testing Collaboration
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Streamline your testing process with an interactive SaaS
                    platform for testers and developers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button
                    text={"Get Started for Free"}
                    size="lg"
                    className="h-12 px-8"
                  ></Button>
                  <Button
                    text={"Request a Demo"}
                    size="lg"
                    variant="outline"
                    className="h-12 px-8"
                  ></Button>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-2 shadow-lg">
                <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Why Choose Our Platform?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Powerful features designed to streamline your testing workflow
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Upload/Import Test Cases
                  </h3>
                  <p className="text-muted-foreground">
                    Easily import test cases from CSV files with preformatted
                    templates
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <CheckSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Interactive Test Cases</h3>
                  <p className="text-muted-foreground">
                    Add interactivity with a flexible UI for better test
                    management
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Collaboration Tools</h3>
                  <p className="text-muted-foreground">
                    Enable real-time communication between testers and
                    developers
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">User Acceptance Testing</h3>
                  <p className="text-muted-foreground">
                    Manage UAT entities effectively with interactive checklists
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Commenting & Feedback</h3>
                  <p className="text-muted-foreground">
                    Centralized feedback for seamless communication between team
                    members
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FolderKanban className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Test Case Management</h3>
                  <p className="text-muted-foreground">
                    Organize projects, suites, and cases effortlessly in one
                    place
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Simplify Your Testing Workflow
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform streamlines your testing process in just three
                simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  1
                </div>
                <div className="rounded-lg border bg-background p-4 shadow-md w-full">
                  <FileUp className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold mb-2">Import Test Cases</h3>
                  <p className="text-muted-foreground">
                    Easily import test cases from CSV files with our
                    preformatted templates
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  2
                </div>
                <div className="rounded-lg border bg-background p-4 shadow-md w-full">
                  <UserPlus className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold mb-2">Add Interactivity</h3>
                  <p className="text-muted-foreground">
                    Add interactivity to test cases and assign roles to team
                    members
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  3
                </div>
                <div className="rounded-lg border bg-background p-4 shadow-md w-full">
                  <MessageCircle className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold mb-2">
                    Collaborate in Real-Time
                  </h3>
                  <p className="text-muted-foreground">
                    Collaborate, comment, and track progress with your team in
                    real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Empowering Teams to Deliver Quality Software
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform helps teams collaborate effectively and deliver
                high-quality software
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Save Time</h3>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks like importing test cases and
                    assigning roles
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Improve Collaboration</h3>
                  <p className="text-muted-foreground">
                    Bridge the gap between testers and developers with real-time
                    communication
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FolderKanban className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Enhance Management</h3>
                  <p className="text-muted-foreground">
                    Organize projects, suites, and test cases effortlessly in
                    one place
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Boost Productivity</h3>
                  <p className="text-muted-foreground">
                    Focus on testing, not managing tools, with our intuitive
                    platform
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from teams who have transformed their testing process with
                our platform
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="mb-4 italic text-muted-foreground">
                    "TestCollab has completely transformed how our QA and
                    development teams work together. The ability to import test
                    cases and collaborate in real-time has cut our testing cycle
                    by 40%."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        QA Lead, TechSolutions Inc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="mb-4 italic text-muted-foreground">
                    "The UAT features have been a game-changer for our client
                    approvals. We can now manage the entire testing process in
                    one place, with clear visibility for all stakeholders."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">
                        Project Manager, WebDev Co.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="mb-4 italic text-muted-foreground">
                    "As a developer, I appreciate how TestCollab bridges the
                    communication gap with our QA team. The commenting feature
                    helps us resolve issues quickly without endless email
                    chains."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Alex Rodriguez</p>
                      <p className="text-sm text-muted-foreground">
                        Senior Developer, InnovateSoft
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo/Interactive Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                See It in Action
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Watch how TestCollab can transform your testing workflow
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border bg-background p-2 shadow-lg">
                <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary opacity-75" />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  text={"   Try Now"}
                  size="lg"
                  className="h-12 px-8"
                ></Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Affordable Plans for Every Team
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for your team's needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border shadow-md flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold">Free Trial</h3>
                    <div className="mt-2 text-3xl font-bold">$0</div>
                    <p className="text-sm text-muted-foreground">14 days</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 5 users</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic test case management</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>CSV import</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 flex justify-center items-center">
                  <Button text={"Start Free Trial"} className="w-full"></Button>
                </div>
              </Card>
              <Card className="border shadow-md flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold">Basic</h3>
                    <div className="mt-2 text-3xl font-bold">$29</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 10 users</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced test case management</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>CSV import/export</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Email & chat support</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 flex justify-center items-center">
                  <Button text={"Subscribe Now"} className="w-full"></Button>
                </div>
              </Card>
              <Card className="border shadow-md flex flex-col relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardContent className="p-6 flex-1">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold">Pro</h3>
                    <div className="mt-2 text-3xl font-bold">$79</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 25 users</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Full test case management</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>UAT management</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 flex justify-center items-center">
                  <Button text={"Subscribe Now"} className="w-full"></Button>
                </div>
              </Card>
              <Card className="border shadow-md flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold">Enterprise</h3>
                    <div className="mt-2 text-3xl font-bold">Custom</div>
                    <p className="text-sm text-muted-foreground">
                      contact sales
                    </p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced security features</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 premium support</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom training</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 flex justify-center items-center">
                  <Button text={"Contact Sales"} className="w-full"></Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Got Questions?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to commonly asked questions about our platform
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
             <Faq/>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Join thousands of testers improving their workflow today!
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Start your free trial and see how TestCollab can transform your
                testing process.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button
                  text={" Get Started for Free"}
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8"
                ></Button>
                <Button
                  size="lg"
                  text={"  Request a Demo"}
                  variant="outline"
                  className="h-12 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                ></Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-primary">TestCollab</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Collaborative manual testing platform for modern QA teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TestCollab. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
