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

const certificates = [
  {
    title: "INNOVATOPIA Teknologi Tepat Guna Nasional",
    issuer: "FLMPI Nasional BPSDMI KEMENPERIN",
    date: "2025",
    image: "/assets/images/certificates/Serti1.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczMAUdr3juFlF6LFwv_AJjh7JN6tP7XYfTC-dveOd425wbjFKXVb9o0Nqa4bVFHFVmYpct3eY1y4M9m0ldb4BwJ8DWGx6sORkauOo6JGrILJb1IakaI9x0g2kbnHSBsxoYrWdBfuPJIKA2-goXctIk4E=w1341-h948-s-no-gm?authuser=0",
  },
  {
    title: "INNOVATOPIA Teknologi Tepat Guna PIPB",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/serti2.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczMAiodRGwMWD5Ha46awP7X81pcjKWKxh6ctRoc69w9wVDfa3waqVWjQbLOMsnB39muZQ5YlSVSAbY3Bi6GMswjoEXZAffWLnHK5ca_PjRo65QNVL4w8dFFAeXIgdtnEG9PPnzx-cRlkx34fopZptO-X=w2695-h1708-s-no-gm?authuser=0/...",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczPkuxTPbq0-OS41u-00YGxckgvLqrWYoY7uqK8dPZXdtFWctM7qvyLtdJz0MMgw7PuYUzc4NzadaVWIae7LfoWkxm21k3NoTrLtIwg_B-9bcK7s7oVtPOO3Ci0Yi3OgCMJ8Y8cOTbCYrG0J1dTL3JlI=w1080-h1350-s-no-gm?authuser=0",
  },
  {
    title: "🚀Congratulations🚀",
    issuer: "FLMPI Politeknik Industri Petrokimia Banten",
    date: "2025",
    image: "/assets/images/certificates/champ1.jpg",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczNuViJhZ9wF9uahIndCwn1yJDTJyVcyXChQMmNryu6hNRZ1QzMhDJS4hp_GWPoTtEynlco8n3Wc_I8P7zGPNLdGWchnlhOBuMST0QDRX3B8FzEG_WuaqwvSo5yIjoJYRRv_TjefzuPdQ3pjEcWPJ-Fz=w1080-h1920-s-no-gm?authuser=0",
  },
  {
    title: "Bismillah Sinta 3",
    issuer: "Politeknik Industri Petrokimia Banten",
    date: "2024",
    image: "/assets/images/certificates/jurnal.png",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczN1wDY28e-gIDrAMoZbHHolpxJnw9b4Ai12iLURCbOib_ozcSMg5IqnY0VkT9FRUi8zw1JdThGy8CNqHkv7ZBzLiGlZwUvB7RjJ2fXRA86NlJcVeCkG2K3Jl8rI7U9dLCvlbd7FKAIM28770qLbre2P=w790-h906-s-no-gm?authuser=0",
  },
  {
    title: "Lomba Inovasi Pemanfaatan Limbah Plastik Polypropylene",
    issuer: "BIOFOURTEAM",
    date: "2025",
    image: "/assets/images/certificates/limbah.png",
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczM2wy2qFKUV0_KXdM5sqHpknOeYdFZP0bXocycc3LhXRx6S_I1_9ASAoTTiveOCKx9O_0rzIO3g_ivq0MZjpUH6O9xGFSpb9r8yxVixEIMOYlT9fkcBsyZdwXPEttoKpGZqzjJOs7Q8OT1AwMFmIaq6=w634-h805-s-no-gm?authuser=0",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-950 dark:to-purple-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-400 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
      </div>

      <main className="relative z-10 grid grid-cols-1 gap-6 p-6 lg:grid-cols-3 lg:gap-8 lg:p-8">
        
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <ProfileCard profiles={profiles} />
        </div>

        {/* Work Experience */}
        <div className="lg:col-span-1">
          <WorkExperience works={works} />
        </div>

        {/* Recent Projects */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-sm dark:bg-black/90">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Recent Projects 🚀
              </h3>
              <a
                href="portfolio.html"
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
              >
                View All
              </a>
            </div>

            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-gray-50 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple-600 shadow-lg transition-all hover:bg-purple-600 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section - Full Width */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:bg-black/90">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                Certificates & Achievements 🏆
              </h3>
              <a
                href="certificates.html"
                className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
              >
                View All
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificates.slice(0, 6).map((certificate, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-gray-50 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 dark:bg-gray-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute right-3 top-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg transition-all hover:bg-emerald-600 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                      {certificate.title}
                    </h4>
                    <p className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {certificate.issuer}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
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
        </div>

        {/* Service Component */}
        <div className="lg:col-span-2">
          <Service />
        </div>

        {/* Call to Action */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6 shadow-xl text-white">
            <div className="mb-4 rounded-lg bg-white/20 p-3">
              <p className="text-sm font-medium">
                ✨ Available For Hire 🚀 Crafting Digital Experiences
              </p>
            </div>

            <h2 className="mb-4 text-3xl font-bold">
              Let's 👋 <br />
              Work Together
            </h2>

            <p className="mb-6 text-sm text-white/80">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>

            <a
              href="contact.html"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-purple-600 transition-colors hover:bg-gray-100"
            >
              <span>Let's Talk</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}