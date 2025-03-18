import { Link } from 'react-router-dom';
import { Upload, Users, CheckSquare} from "lucide-react"
import Button from "../shared/Button";
import Card from "../shared/Card";
import CardContent from "../shared/CardContent";

export default function TestLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">TestCollab</span>
          </div>
          <nav className="hidden md:flex gap-6">
          <Link to="/projects" className="text-sm font-medium hover:underline">
        Projects
      </Link>

      <Link to="/test-suites" className="text-sm font-medium hover:underline">
        Test Suites
      </Link>

      <Link to="/uat" className="text-sm font-medium hover:underline">
        UAT
      </Link>

      <Link to="/settings" className="text-sm font-medium hover:underline">
        Settings
      </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button text={"Sign In"}></Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Collaborative Manual Testing Made Easy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Upload CSV test cases, collaborate in real-time, and streamline UAT workflows
                </p>
              </div>
              <div className="space-y-4">
                <Button text={"Start Free Trial"} className="h-12 px-8">
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Used by 500+ QA Teams</span>
                <span className="h-1 w-1 rounded-full bg-border"></span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Import Test Cases in Seconds</h3>
                  <p className="text-gray-500">Drag-and-drop CSV files with preformatted templates</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Real-Time Co-Editing</h3>
                  <p className="text-gray-500">Track changes, comment inline, and assign tasks</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <CheckSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">UAT Checklist</h3>
                  <p className="text-gray-500">Interactive checklists with evidence uploads</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Collaboration Demo */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">See How Teams Collaborate</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Flexible UI for seamless team coordination
              </p>
              <div className="w-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="border-r p-4 md:w-1/2">
                    <div className="mb-4 text-sm font-medium">Steps/Expected Results</div>
                    <div className="space-y-4">
                      <div className="rounded border p-3">
                        <div className="mb-1 font-medium">Step 1</div>
                        <div className="text-sm text-gray-500">Navigate to login page</div>
                      </div>
                      <div className="rounded border p-3">
                        <div className="mb-1 font-medium">Expected Result</div>
                        <div className="text-sm text-gray-500">Login form is displayed</div>
                      </div>
                      <div className="rounded border p-3">
                        <div className="mb-1 font-medium">Step 2</div>
                        <div className="text-sm text-gray-500">Enter credentials and click login</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2">
                    <div className="mb-4 text-sm font-medium">Comments + Version History</div>
                    <div className="space-y-4">
                      <div className="rounded border p-3">
                        <div className="mb-1 flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-muted"></div>
                          <div className="font-medium">Sarah K.</div>
                        </div>
                        <div className="text-sm text-gray-500">Added screenshot for step 1 verification</div>
                      </div>
                      <div className="rounded border p-3">
                        <div className="mb-1 flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-muted"></div>
                          <div className="font-medium">Mike T.</div>
                        </div>
                        <div className="text-sm text-gray-500">Updated expected result for clarity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Streamline Your Testing Workflow?
                </h2>
              </div>
              <div className="space-y-4">
                <Button text={"Sign Up for Free"} className="h-12 px-8">
                  
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="text-center text-sm text-gray-500">© 2025 TestCollab. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

