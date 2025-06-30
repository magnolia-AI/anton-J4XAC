'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { ContactForm } from '@/components/contact-form'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-20 text-center">
        <h1 className="text-6xl font-heading font-bold tracking-tight lg:text-7xl animate-fade-in-up">
          Crafting Digital Experiences
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-[700px] mx-auto animate-fade-in-up animation-delay-200">
          I blend elegant design with robust functionality to create web solutions that captivate and convert.
        </p>
        <div className="mt-10 flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <Button size="lg" className="group">
            View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-5xl font-heading font-bold mb-8 animate-fade-in-up">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
            {/* Replace with your actual artist statement */}
            Hello! I'm a passionate web designer with a keen eye for detail and a love for creating intuitive and beautiful digital products. My journey in web design began with a fascination for how technology can connect people and ideas. I specialize in crafting user-centric experiences that are not only visually stunning but also highly functional and accessible. I believe that good design is invisible, allowing the user to focus on the content and purpose of the site.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-300">
            {/* Continue your artist statement */}
            My process involves a deep understanding of client needs, meticulous planning, and a creative approach to problem-solving. I'm proficient in modern web technologies and always eager to learn new tools and techniques to push the boundaries of what's possible on the web. Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-20 bg-muted/20">
        <h2 className="text-5xl font-heading font-bold text-center mb-12 animate-fade-in-up">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="group overflow-hidden relative animate-fade-in-up animation-delay-200">
              <div className="relative w-full h-60 bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                Project {item} Placeholder
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                <p className="text-muted-foreground text-sm">A brief description of Project {item}, highlighting its key features and technologies used.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12 animate-fade-in-up">Get in Touch</h2>
          <ContactForm />
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-4">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-8 w-8" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


