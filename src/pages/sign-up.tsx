import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex flex-col h-full scroll-smooth">
      <header className="py-12">
        <div className="sm:px-8 px-2">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <a
                className="flex items-center gap-2 pr-8"
                href="/saas-marketing-site"
              >
                <HeartPulse className="h-10 w-10 text-pink-600" />
                <span className="font-display">HealthNexus</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="flex justify-center">
          <div className="p-6 flex flex-col gap-y-12 w-full max-w-lg border-none shadow-none rounded-none sm:border sm:shadow-xl sm:border-slate-200 sm:rounded-xl">
            <div className="space-y-2">
              <h3 className="text-xl font-display">Get started today!</h3>
              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link className="text-blue-600" to="/sign-in">
                  Sign in
                </Link>{" "}
                here
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                <div className="space-y-2">
                  <label className="text-sm text-slate-700">First Name</label>
                  <Input />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-700">Last Name</label>
                  <Input />
                </div>
                <div className="space-y-2 col-span-full">
                  <label className="text-sm text-slate-700">
                    Email Address
                  </label>
                  <Input type="email" />
                </div>
                <div className="space-y-2 col-span-full">
                  <label className="text-sm text-slate-700">Password</label>
                  <Input type="password" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
