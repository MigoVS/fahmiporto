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

const profiles: InterfaceProfile = {
  name: "Fahmi Nabeel",
  title: "Full Stack Developer",
  description:
    "A Passionate Full Stack Developer & Product Designer having 12 years of Experiences over 24+ Country Worldwide.",
  email: "fahmi.nabeel21@gmail.com",
  image: "/assets/images/me.png",
};

const works: InterfaceWorkExperience[] = [
  {
    company: "SMP Negeri 1 Cilegon",
    position: "Spensa P-ONE",
    startDate: "2017",
    endDate: "2020",
    imageCompany: "/assets/images/logo/smp1.svg",
  },
  {
    company: "SMK Negeri 2 Cilegon",
    position: "Kimia Industri",
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
    position: "Intership Polypropylene Plant",
    startDate: "2025",
    endDate: "2026",
    imageCompany: "/assets/images/logo/figma.svg",
  },
];

// Data untuk recent projects
const recentProjects = [
  {
    title: "Biofour Team",
    image: "/assets/images/biofour.png",
    tags: ["Web Development", "Team"],
    link: "https://biofourteam.vercel.app",
  },
  {
    title: "QR Code",
    image: "/assets/images/qrcode.png",
    tags: ["QR Code", "Scan"],
    link: "https://qrgenerator-fahmi.vercel.app/",
  },
  {
    title: "Notes Online",
    image: "/assets/images/notes.png",
    tags: ["Notes", "Online"],
    link: "https://catatan-fahmi.vercel.app/",
  },
];

// Data untuk certificates
const certificates = [
  {
    title: "INNOVATOPIA Teknologi Tepat Guna Nasional",
    issuer: "FLMPI Nasional  BPSDMI KEMENPERIN",
    date: "2025",
    image: "/assets/images/certificates/Serti1.jpg",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMAUdr3juFlF6LFwv_AJjh7JN6tP7XYfTC-dveOd425wbjFKXVb9o0Nqa4bVFHFVmYpct3eY1y4M9m0ldb4BwJ8DWGx6sORkauOo6JGrILJb1IakaI9x0g2kbnHSBsxoYrWdBfuPJIKA2-goXctIk4E=w1341-h948-s-no-gm?authuser=0",
  },
  {
    title: "INNOVATOPIA Teknologi Tepat Guna PIPB",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/serti2.jpg",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMAiodRGwMWD5Ha46awP7X81pcjKWKxh6ctRoc69w9wVDfa3waqVWjQbLOMsnB39muZQ5YlSVSAbY3Bi6GMswjoEXZAffWLnHK5ca_PjRo65QNVL4w8dFFAeXIgdtnEG9PPnzx-cRlkx34fopZptO-X=w2695-h1708-s-no-gm?authuser=0/...",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ.jpg",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczP3H5hOkFzL6-GpA96bSxpSjC1tSDF5KVGb3PDl5G8Vr9VEKx-2X-cL2rRMEaOiF-K7Vj0OKgxl7NYDYbDMCVMsV-0_BFl72mJCgTP8w2g4Y38S9hEO2qjSEwDsoAIw0mYwgA6t4uJCtH6xdoZOKRdt=w1080-h1350-s-no-gm?authuser=0",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ1.jpg",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNuViJhZ9wF9uahIndCwn1yJDTJyVcyXChQMmNryu6hNRZ1QzMhDJS4hp_GWPoTtEynlco8n3Wc_I8P7zGPNLdGWchnlhOBuMST0QDRX3B8FzEG_WuaqwvSo5yIjoJYRRv_TjefzuPdQ3pjEcWPJ-Fz=w1080-h1920-s-no-gm?authuser=0",
  },
  {
    title: "Bismillah Sinta 3",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/jurnal.png",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczN1wDY28e-gIDrAMoZbHHolpxJnw9b4Ai12iLURCbOib_ozcSMg5IqnY0VkT9FRUi8zw1JdThGy8CNqHkv7ZBzLiGlZwUvB7RjJ2fXRA86NlJcVeCkG2K3Jl8rI7U9dLCvlbd7FKAIM28770qLbre2P=w790-h906-s-no-gm?authuser=0",
  },
  {
    title: "Lomba Inovasi Pemanfaatan Limbah Plastik Polypropylene",
    issuer: "BIOFOURTEAM",
    date: "2025",
    image: "/assets/images/certificates/limbah.png",
    credentialUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczM2wy2qFKUV0_KXdM5sqHpknOeYdFZP0bXocycc3LhXRx6S_I1_9ASAoTTiveOCKx9O_0rzIO3g_ivq0MZjpUH6O9xGFSpb9r8yxVixEIMOYlT9fkcBsyZdwXPEttoKpGZqzjJOs7Q8OT1AwMFmIaq6=w634-h805-s-no-gm?authuser=0",
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <ProfileCard profiles={profiles} />

      <WorkExperience works={works} />

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">
            Recent Projects
          </h3>
          <a
            href="portfolio.html"
            className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
          >
            <span>All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 space-y-6">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
            >
              <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                />

                <a
                  href={project.link}
                  data-gall={`project-gallery-${index + 1}`}
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                  >
                    <path d="M10 4.167v11.666M4.167 10h11.666" />
                  </svg>
                </a>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Section */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">
            Certificates & Achievements
          </h3>
          <a
            href="certificates.html"
            className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
          >
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-light dark:bg-dark-2 transition-all hover:shadow-lg"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge untuk verified certificate */}
                <div className="absolute right-3 top-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-lg dark:bg-green-600/90 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                {/* External Link Button */}
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path d="M17.5 11.667v-5h-5" />
                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-dark dark:text-light mb-1 line-clamp-2">
                  {certificate.title}
                </h4>
                <p className="text-sm font-medium text-primary dark:text-primary mb-1">
                  {certificate.issuer}
                </p>
                <p className="text-xs text-muted dark:text-light/60 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Issued {certificate.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Service />

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="animate-marquee whitespace-nowrap overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-white dark:bg-dark-2">
          Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For
          Hire 🚀 Crafting Digital Experiences 🎨
        </div>

        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
          Let's👋 <br />
          Work Together
        </h2>

        <a
          href="contact.html"
          className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
        >
          <span>Let's Talk</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M17.5 11.667v-5h-5" />
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </main>
  );
}
