import { Github } from "lucide-react";
import certGoogle from "@/assets/cert-google.png";
import certKaggle from "@/assets/cert-kaggle.png";
import certCoursera from "@/assets/cert-coursera.png";
import certMicrosoft from "@/assets/cert-microsoft.png";

const certifications = [
  { name: "Google Developers", image: certGoogle, link: "https://drive.google.com/file/d/1vpxrtU92EheQiRFSw2A-rKpJ0neGp8vr/view?usp=sharing" },
  { name: "Kaggle", image: certKaggle, link: "https://www.kaggle.com/madhavgajjely" },
  { name: "Coursera", image: certCoursera, link: "https://www.coursera.org/user/0d7141a1ba6ffdd9449d22ba2aba4b9c" },
  { name: "Microsoft", image: certMicrosoft, link: "https://learn.microsoft.com/en-us/users/gajjellymadhav-5604/achievements?source=docs" },
  
];

const projects = [
  {
    title: "LUMINA",
    desc: "Multimodal AI platform for fact-checking, bias detection, and content authenticity verification using advanced LLMs and computer vision for combating misinformation.",
    tags: ["FastAPI", "LangChain", "Groq LLM", "Google Gemini"],
    code: "https://github.com/gajjellymadhav/LUMINA",
  },
  {
  title: "MedXScan-AI",
  desc: "Chest X-ray disease detection system with explainability heatmaps, automated PDF reports, and RAG-powered medical chatbot.",
  tags: ["PyTorch", "DenseNet-121", "Flask", "FAISS"],
  code: "https://github.com/gajjellymadhav/MedXScan-AI",
  },
  {
  title: "Movie Recommender System",
  desc: "Content-based recommendation engine using TF-IDF vectorization and cosine similarity on 10,000+ movies with poster integration.",
  tags: ["Scikit-learn", "Pandas", "Streamlit", "TMDb API"],
  code: "https://github.com/gajjellymadhav/movie_recommender_system",
  },
  {
  title: "Music Recommender System",
  desc: "Personalized music recommendation platform leveraging collaborative filtering and machine learning for playlist generation.",
  tags: ["Scikit-learn", "TensorFlow", "Flask", "Python"],
  code: "https://github.com/gajjellymadhav/Music_Recommender_System",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4 max-w-6xl">
        <div className="mb-16">
          
          <h2 className="text-4xl md:text-6xl font-bold">Featured <span className="gradient-text">Work</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass rounded-3xl p-8 group hover:border-accent/40 transition-all duration-500 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-border">
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/gajjellymadhav"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-foreground underline underline-offset-8 decoration-accent/60 hover:decoration-accent hover:text-accent transition-colors"
          >
            View more projects
          </a>
        </div>

        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold">
              Certifications / <span className="gradient-text">Badges</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-3 aspect-square hover:border-accent/40 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-xl p-3 shadow-lg flex items-center justify-center w-20 h-20">
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground font-medium text-center">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
