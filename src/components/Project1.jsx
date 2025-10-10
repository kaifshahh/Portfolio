import { useContext } from "react";
import { BgContext } from "../context/BgContext";
import { useNavigate } from "react-router-dom";

const Project1 = () => {
  const { colorScheme } = useContext(BgContext);
  const navigate = useNavigate();

  const data = {
    name: "My Portfolio",
    type: "Web App",
    company: "Personal Project",
    role: "Frontend Developer",
    tools: ["ReactJS", "React Router DOM", "Tailwind CSS", "GSAP"],
    timeline: "Aug'24 - Sep'24",
    description:
      "A personal portfolio website built using React.js to showcase my projects, skills, and achievements. It features smooth animations, responsive design, and modern UI elements for an engaging user experience.",
    context:
      "This portfolio serves as my personal web presence, highlighting my journey as a frontend developer. It integrates GSAP for animations, Tailwind CSS for styling, and React Router DOM for seamless navigation between pages.",
    problems: [
      "Creating a visually appealing yet performant portfolio that works smoothly across all devices.",
      "Managing component-based structure while maintaining consistent design across pages.",
      "Implementing animations and transitions without affecting load time or responsiveness.",
    ],
    solutions: [
      "Built using React.js and Tailwind CSS to achieve a modular, fast, and responsive design.",
      "Used GSAP and React Fast Marquee for smooth animations and dynamic motion effects.",
      "Integrated React Router DOM for clean and efficient page navigation.",
      "Optimized asset loading and layout for better performance and accessibility.",
    ],
    images: [],
    links: {
      github: "https://github.com/kaifshahh/Portfolio",
      live: "https://portfolio.vercel.app",
    },
  };
  return (
    <div
      onClick={() => {
        navigate("/work/portfolio", { state: data });
      }}
      className={`relative border hover:cursor-pointer group col-span-12 md:col-span-6 xl:order-2 order-4 xl:col-span-3 md:row-span-3 row-span-2 xl:row-span-4 rounded-3xl flex justify-center items-center overflow-hidden ${colorScheme.border} ${colorScheme.bg} ${colorScheme.text} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label="Project Placeholder 1"
      id="P1"
    >
      <img
        src="/p1.jpg"
        className="w-full h-full sm:h-auto md:h-full transition-transform duration-300 object-cover sm:object-contain md:object-cover rounded-3xl max-h-[300px]"
        alt=""
      />
      {/* Text appears and slides up on hover */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-lg opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        Portfolio
      </div>
    </div>
  );
};

export default Project1;
