import { Zap, FolderOpen, Shield, CloudLightning, Github, Twitter, MessageCircle, BookOpen, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Hero ─── */
const Hero = () => {
  const [typed, setTyped] = useState(false);
  useEffect(() => { const t = setTimeout(() => setTyped(true), 300); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-24">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-4">
          <Zap className="w-3.5 h-3.5 text-secondary" />
          <span>Ultra-fast routing for modern JavaScript</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          The Smartest Route for{" "}
          <span className="text-gradient">your Modern Stack.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Routeis é um framework de roteamento universal, leve e tipado, projetado para oferecer performance extrema em aplicações Web e Mobile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#get-started" className="inline-flex items-center gap-2 h-12 px-8 rounded-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary glow-primary hover:opacity-90 transition-opacity">
            Get Started
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-lg font-semibold border border-border hover:border-primary/50 hover:bg-muted/50 transition-colors">
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        {/* Terminal block */}
        <div className="max-w-md mx-auto glass rounded-xl overflow-hidden mt-8">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45 93% 47% / 0.6)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--code-string) / 0.6)" }} />
            <span className="ml-2 text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="px-4 py-4 font-mono text-sm">
            <span className="text-muted-foreground">$ </span>
            <span className={`inline-block overflow-hidden whitespace-nowrap border-r-2 border-secondary ${typed ? "animate-typing" : "w-0"} animate-blink`}>
              npm install routeis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Features ─── */
const features = [
  { icon: FolderOpen, title: "Zero Config", desc: "Configuração automática baseada em diretórios. Sem boilerplate, sem setup manual." },
  { icon: Shield, title: "Type Safe", desc: "Integração nativa com TypeScript. Rotas tipadas que previnem erros de navegação em compile-time." },
  { icon: CloudLightning, title: "Edge Ready", desc: "Otimizado para Cloudflare Workers, Vercel Edge e qualquer ambiente serverless." },
];

const Features = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Built for <span className="text-gradient">Speed & Simplicity</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        Tudo que você precisa para roteamento moderno, em um pacote leve e poderoso.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="glass rounded-2xl p-8 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-primary transition-shadow">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Code Showcase ─── */
const codeLines = [
  { tokens: [{ text: "import", cls: "text-primary" }, { text: " { route } ", cls: "text-foreground" }, { text: "from", cls: "text-primary" }, { text: " 'routeis'", cls: "text-secondary" }, { text: ";", cls: "text-muted-foreground" }] },
  { tokens: [] },
  { tokens: [{ text: "route", cls: "text-secondary" }, { text: "(", cls: "text-foreground" }, { text: "'/user/:id'", cls: "text-[hsl(var(--code-string))]" }, { text: ", (ctx) ", cls: "text-foreground" }, { text: "=>", cls: "text-primary" }, { text: " {", cls: "text-foreground" }] },
  { tokens: [{ text: "  return", cls: "text-primary" }, { text: " ctx.", cls: "text-foreground" }, { text: "render", cls: "text-secondary" }, { text: "(", cls: "text-foreground" }, { text: "'Profile'", cls: "text-[hsl(var(--code-string))]" }, { text: ");", cls: "text-muted-foreground" }] },
  { tokens: [{ text: "}", cls: "text-foreground" }, { text: ");", cls: "text-muted-foreground" }] },
];

const CodeShowcase = () => (
  <section className="py-24 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Simple, <span className="text-gradient">Elegant API</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Crie rotas poderosas com poucas linhas de código.
      </p>
      <div className="glass rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45 93% 47% / 0.6)" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--code-string) / 0.6)" }} />
          <span className="ml-3 text-xs text-muted-foreground font-mono">routes.ts</span>
        </div>
        <div className="p-6 font-mono text-sm leading-7">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 text-right text-muted-foreground/40 mr-6 select-none">{i + 1}</span>
              {line.tokens.length === 0 ? <br /> : line.tokens.map((t, j) => (
                <span key={j} className={t.cls}>{t.text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Benchmarks ─── */
const benchmarks = [
  { name: "Routeis", value: 98, label: "142k req/s", color: "from-primary to-secondary" },
  { name: "Express Router", value: 52, label: "74k req/s", color: "from-muted-foreground/40 to-muted-foreground/20" },
  { name: "React Router", value: 45, label: "64k req/s", color: "from-muted-foreground/30 to-muted-foreground/15" },
];

const metrics = [
  { label: "Requests/sec", value: "142k" },
  { label: "Bundle Size", value: "2.1kb" },
  { label: "Cold Start", value: "<1ms" },
];

const Benchmarks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Blazing <span className="text-gradient">Fast Performance</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Routeis é até 2x mais rápido que os roteadores tradicionais.
        </p>

        <div className="glass rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            {benchmarks.map((b) => (
              <div key={b.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{b.name}</span>
                  <span className="text-muted-foreground">{b.label}</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${b.color} transition-all duration-1000`}
                    style={{ width: visible ? `${b.value}%` : "0%", ["--bar-width" as string]: `${b.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{m.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const footerLinks = [
  { title: "Product", links: [{ label: "Documentation", href: "#", icon: BookOpen }, { label: "Get Started", href: "#", icon: ExternalLink }] },
  { title: "Community", links: [{ label: "Discord", href: "#", icon: MessageCircle }, { label: "GitHub", href: "#", icon: Github }] },
  { title: "Social", links: [{ label: "Twitter / X", href: "#", icon: Twitter }] },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-16 px-4">
    <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10">
      <div>
        <div className="text-xl font-bold text-gradient mb-2">Routeis</div>
        <p className="text-sm text-muted-foreground">The smartest route for your modern stack.</p>
      </div>
      {footerLinks.map((g) => (
        <div key={g.title}>
          <h4 className="font-semibold text-sm mb-4">{g.title}</h4>
          <ul className="space-y-2.5">
            {g.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <l.icon className="w-3.5 h-3.5" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Routeis. All rights reserved.
    </div>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Hero />
    <Features />
    <CodeShowcase />
    <Benchmarks />
    <Footer />
  </div>
);

export default Index;
