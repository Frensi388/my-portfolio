import Blog from "./components/Blog";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Blog />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
