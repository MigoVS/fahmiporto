import { Metadata } from "next";
import ProfileCard from "./components/home/profilecard";
import WorkExperience from "./components/home/workexperience";
import { InterfaceProfile } from "./interfaces/profile";
import { InterfaceWorkExperience } from "./interfaces/work";
import Service from "./components/home/service";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "My Site"} | Home`,
  description: "My Portfolio",
};

const profiles: InterfaceProfile =
{
  name: "Fahmi Nabeel",
  title: "Full Stack Developer",
  description: "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "fahmi.nabeel21@gmail.com",
  image: "/assets/images/me.png",
}

const works: InterfaceWorkExperience[] = [
  {
    company: "SMP Negeri 1 Cilegon",
    position: "Senior Frontend Developer",
    startDate: "2017",
    endDate: "2020",
    imageCompany: "/assets/images/logo/smp1.svg",
  },
  {
    company: "SMK Negeri 2 Cilegon",
    position: "Senior Frontend Developer",
    startDate: "2020",
    endDate: "2023",
    imageCompany: "/assets/images/logo/smk2.svg",
  },
  {
    company: "Politeknik Industri Petrokimia",
    position: "Teknologi Proses Industri Petrokimia",
    startDate: "2023",
    endDate: "2026",
    imageCompany: "/assets/images/logo/pipb.svg",
  },
  {
    company: "Lotte Chemical Indonesia",
    position: "Intership",
    startDate: "2025",
    endDate: "2026",
    imageCompany: "/assets/images/logo/figma.svg",
  }
];

// Data untuk recent projects
const recentProjects = [
  {
    title: "Biofour Team",
    image: "/assets/images/biofour.png",
    tags: ["Web Development", "Team"],
    link: "https://biofourteam.vercel.app"
  },
  {
    title: "QR Code",
    image: "/assets/images/qrcode.png",
    tags: ["QR Code", "Scan"],
    link: "https://qrgenerator-fahmi.vercel.app/"
  },
  {
    title: "Notes Online",
    image: "/assets/images/notes.png",
    tags: ["Notes", "Online"],
    link: "https://catatan-fahmi.vercel.app/"
  }
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <ProfileCard profiles={profiles} />

      <WorkExperience works={works} />

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
          <a href="portfolio.html" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 space-y-6">
          {recentProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img src={project.image} alt={project.title} className="h-full w-full rounded-t-lg object-cover object-top transition" />

                <a href={project.link} data-gall={`project-gallery-${index+1}`} className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M10 4.167v11.666M4.167 10h11.666" />
                  </svg>
                </a>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Service />
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="animate-marquee whitespace-nowrap overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-white dark:bg-dark-2">
          Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
          Crafting Digital Experiences 🎨
        </div>

        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
          Let's👋 <br />
          Work Together
        </h2>

        <a href="contact.html" className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
          <span>Let's Talk</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
            <path d="M17.5 11.667v-5h-5" />
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </main>
  );
}