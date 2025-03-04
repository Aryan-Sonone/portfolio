
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  // Wait for theme to be available
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // Return early to avoid rendering with incorrect theme
    return null;
  }
  
  return (
    <main className="relative min-h-screen">
      <Header toggleTheme={toggleTheme} isDarkMode={theme === "dark"} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;
