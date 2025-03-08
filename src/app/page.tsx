// app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Users, Server, Cloud, Globe, Code, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            National Information Technology Centre
          </h1>
          <p className="text-xl mb-8">
            Driving Nepal&apos;s Digital Transformation
          </p>
          <div className="flex justify-center gap-4">
            <Button className="text-black bg-white duration-300 transition-colors ease-in-out hover:bg-blue-600 hover:text-white cursor-pointer">
              Our Services
            </Button>
            <Button className="text-white bg-blue-600 hover:bg-white hover:text-black cursor-pointer duration-300 transition-colors ease-in-out">
              Digital Initiatives
            </Button>
          </div>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold">1,345+</h3>
            </div>
            <p className="text-gray-600">Government Websites Hosted</p>
          </Card>
          <Card className="text-center p-6 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold">3057</h3>
            </div>
            <p className="text-gray-600">Government Domains Registered</p>
          </Card>
          <Card className="text-center p-6 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold">516+</h3>
            </div>
            <p className="text-gray-600">Cloud Service Users</p>
          </Card>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Government Infrastructure</CardTitle>
              <CardDescription>
                Secure network solutions for public sector
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Optical Fiber Network</li>
                <li>• Data Center Management</li>
                <li>• Disaster Recovery</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <Code className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Digital Solutions</CardTitle>
              <CardDescription>
                Building Nepal&apos;s e-Governance framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• E-Gate Pass System</li>
                <li>• Government Portals</li>
                <li>• Secure Email Services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Cyber Security</CardTitle>
              <CardDescription>
                Protecting national digital assets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Infrastructure Security</li>
                <li>• Data Protection</li>
                <li>• Compliance Monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Progress */}
      <section className="bg-white py-16 mb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Nepal&apos;s Digital Progress
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                E-Governance Development
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>E-Readiness</span>
                    <span>51.17%</span>
                  </div>
                  <Progress value={51.17} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Service Digitization</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Internet Penetration</TableHead>
                  <TableHead>E-Gov Ranking</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2020</TableCell>
                  <TableCell>48.9%</TableCell>
                  <TableCell>132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023</TableCell>
                  <TableCell>51.6%</TableCell>
                  <TableCell>125</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* About NITC */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold mb-8">About NITC</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Established in 2002 under IT Policy 2000, operating under
                Ministry of Science and Technology. Located in Singha Durbar,
                Kathmandu. Key infrastructure includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Government&apos;s central ISP</li>
                <li>Optical fiber network between ministries</li>
                <li>Disaster Recovery Center</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Mandate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold">Primary Functions:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data depository for national-level information</li>
                  <li>IT infrastructure regulator</li>
                  <li>E-governance implementation facilitator</li>
                </ul>
                <Progress value={68} className="h-2" />
                <p className="text-sm text-gray-500">
                  Current G2C (Government to Citizen) service implementation
                  status
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Services */}
      <section className="bg-white py-16 mb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-fit">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Domain Services</CardTitle>
                <ul className="text-gray-600 space-y-2">
                  <li>.gov.np domain registration</li>
                  <li>1345+ government websites hosted</li>
                  <li>3057 DNS registrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Infrastructure</CardTitle>
                <ul className="text-gray-600 space-y-2">
                  <li>Singha Durbar e-Gate Pass System</li>
                  <li>Government email servers</li>
                  <li>516+ cloud service users</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-4 rounded-full w-fit">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Capacity Building</CardTitle>
                <ul className="text-gray-600 space-y-2">
                  <li>Basic computer training</li>
                  <li>Advanced ICT courses</li>
                  <li>E-government implementation workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold mb-8">Challenges & Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Non-digitized government services (37.2% unaware of
                  e-services)
                </li>
                <li>Infrastructure-device disparity</li>
                <li>Centralized service bottlenecks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proposed Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Strategic Initiatives:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Decentralized regional NITC branches</li>
                    <li>SMS-based services for remote areas</li>
                    <li>Citizen digital literacy programs</li>
                  </ul>
                </div>
                <Progress value={45} className="h-2" />
                <p className="text-sm text-gray-500">
                  Current implementation status of proposed framework
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Progress */}
      <section className="bg-gray-50 py-16 mb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Progress Metrics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>E-Governance Development</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>EGDI Score</TableHead>
                      <TableHead>Ranking</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2020</TableCell>
                      <TableCell>0.4699</TableCell>
                      <TableCell>132</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2022</TableCell>
                      <TableCell>0.5117</TableCell>
                      <TableCell>125</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">Internet Penetration (2023)</p>
                    <h3 className="text-2xl font-bold">51.6%</h3>
                  </div>
                  <div>
                    <p className="text-gray-600">Mobile Connectivity</p>
                    <h3 className="text-2xl font-bold">139.2%</h3>
                  </div>
                  <div>
                    <p className="text-gray-600">Active Internet Users</p>
                    <h3 className="text-2xl font-bold">15.85 Million</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is NITC&apos;s primary role?
            </AccordionTrigger>
            <AccordionContent>
              As Nepal&apos;s central IT agency, we provide critical
              infrastructure, develop e-governance frameworks, and ensure secure
              digital transformation of government services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How to access government services?
            </AccordionTrigger>
            <AccordionContent>
              Citizens can access services through our national portal
              nepal.gov.np or visit local government offices with digital
              service centers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Singha Durbar, Kathmandu</p>
            <p className="text-gray-400">Email: info@nitc.gov.np</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <div className="flex gap-4">
              <Image
                width={100}
                height={100}
                src="/tu-logo-white.svg"
                alt="TU"
                className="h-12"
              />
              <Image
                width={100}
                height={100}
                src="/moscit-logo.svg"
                alt="MoSCIT"
                className="h-12"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
