import { Check, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-10 lg:py-20 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col ">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Choose the plan that right for you and your team.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 lg:w-6xl sm:w-full gap-4 ">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Starter
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for small teams or startups looking to build core professional and
                  communication skills through engaging workshops.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$1,500</span>
                    <span className="text-sm text-muted-foreground"> / program</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>1–2 Day Workshop</p>
                        <p className="text-muted-foreground text-sm">
                          Focused sessions to improve teamwork and communication.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Practical Learning</p>
                        <p className="text-muted-foreground text-sm">
                          Hands-on exercises and real-world scenarios.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Certificate of Completion</p>
                        <p className="text-muted-foreground text-sm">
                          Every participant receives official recognition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Enroll Now <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Professional
                  </span>
                </CardTitle>
                <CardDescription>
                  Ideal for growing organizations ready to develop leadership, team
                  collaboration, and workplace excellence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$4,000</span>
                    <span className="text-sm text-muted-foreground"> / program</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>3–5 Day Training</p>
                        <p className="text-muted-foreground text-sm">
                          Comprehensive learning for mid to senior-level employees.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Customized Curriculum</p>
                        <p className="text-muted-foreground text-sm">
                          Tailored modules designed to meet organizational goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Expert Trainers</p>
                        <p className="text-muted-foreground text-sm">
                          Delivered by certified facilitators with real-world expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Enroll <MoveRight className="w-4 h-4" />
                  </Button>                </div>
              </CardContent>
            </Card>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription>
                  Designed for large organizations needing scalable, customized training
                  programs across departments or regions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">Custom</span>
                    <span className="text-sm text-muted-foreground"> pricing</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Fully Tailored Programs</p>
                        <p className="text-muted-foreground text-sm">
                          Built around your company’s strategic objectives.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Hybrid or Onsite Delivery</p>
                        <p className="text-muted-foreground text-sm">
                          Delivered virtually, onsite, or blended across teams.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Dedicated Training Manager</p>
                        <p className="text-muted-foreground text-sm">
                          End-to-end support for planning, execution, and reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Book a Consultation <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
