'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone, 
  Database,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Zap,
  Target
} from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({})
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        react: 90,
        typescript: 85,
        tailwind: 88,
        nodejs: 82,
        python: 75,
        design: 70
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: '#',
      demo: '#',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and interactive maps',
      tech: ['Vue.js', 'API Integration', 'Chart.js', 'CSS3'],
      github: '#',
      demo: '#',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      tech: ['Python', 'React', 'Django', 'D3.js'],
      github: '#',
      demo: '#',
      icon: <BarChart className="w-5 h-5" />
    }
  ]

  const skills = {
    'Frontend': [
      { name: 'React', level: 90, icon: <Code className="w-4 h-4" /> },
      { name: 'TypeScript', level: 85, icon: <Code className="w-4 h-4" /> },
      { name: 'Tailwind CSS', level: 88, icon: <Palette className="w-4 h-4" /> }
    ],
    'Backend': [
      { name: 'Node.js', level: 82, icon: <Database className="w-4 h-4" /> },
      { name: 'Python', level: 75, icon: <Code className="w-4 h-4" /> },
      { name: 'PostgreSQL', level: 78, icon: <Database className="w-4 h-4" /> }
    ],
    'Tools': [
      { name: 'Git', level: 92, icon: <Code className="w-4 h-4" /> },
      { name: 'Docker', level: 70, icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Figma', level: 70, icon: <Palette className="w-4 h-4" /> }
    ]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/portfolio-logo.png" alt="Portfolio Logo" className="w-6 h-6" />
              <span className="font-bold text-xl">Portfolio</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t">
            <div className="px-4 py-2 space-y-2">
              {['home', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize rounded-md hover:bg-accent transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full mb-6 animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hola, Soy Desarrollador Web
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creo experiencias digitales modernas y atractivas con las últimas tecnologías web. 
              Apasionado por el código limpio y el diseño intuitivo.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
              Ver Proyectos
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Contactarme
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Algunos de mis trabajos recientes que demuestran mis habilidades y experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo diariamente
            </p>
          </div>

          <Tabs defaultValue="Frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {Object.keys(skills).map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {skillList.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={progressValues[skill.name.toLowerCase()] || 0} className="h-2" />
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría saber de ti
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Responderé tan pronto como sea posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                    <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Gracias por contactarme. Te responderé pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tu mensaje"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/portfolio-logo.png" alt="Portfolio Logo" className="w-5 h-5" />
              <span className="text-sm text-muted-foreground">
                © 2024 Portfolio. Todos los derechos reservados.
              </span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Missing imports
import { ShoppingCart, Cloud, BarChart } from 'lucide-react'