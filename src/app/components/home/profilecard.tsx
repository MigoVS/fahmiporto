import { InterfaceProfile } from "@/app/interfaces/profile";
import ImageComponent from "../image";
import TypingAnimation from "../typingAnimation";

interface ProfileProps {
  profiles: InterfaceProfile;
}

export default function ProfileCard({ profiles }: ProfileProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-[2px] shadow-2xl transition-all duration-500 hover:shadow-purple-500/25 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
      
      {/* Main card content */}
      <div className="relative rounded-3xl bg-white/95 p-8 backdrop-blur-xl dark:bg-black/95">
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-15 blur-2xl"></div>
        
        {/* Profile image container */}
        <div className="group/image relative aspect-[6/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6 text-center shadow-inner transition-all duration-700 hover:shadow-2xl dark:from-gray-800 dark:to-gray-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 transition-all duration-700 group-hover/image:from-purple-500/20 group-hover/image:to-blue-500/20"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1 left-1/4 h-2 w-2 rounded-full bg-purple-400 opacity-60 animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-pink-400 opacity-40 animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-blue-400 opacity-50 animate-bounce animation-delay-500"></div>
          </div>
          
          <ImageComponent
            src={profiles.image}
            alt={profiles.image}
            width={500}
            height={500}
            className="relative z-10 inline-block scale-110 object-contain object-bottom transition-all duration-700 group-hover/image:scale-125 group-hover/image:rotate-2"
          />
        </div>

        <div className="mt-8">
          {/* Name with gradient text */}
          <h3 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent transition-all duration-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
            {profiles.name}
            <span className="ml-2 inline-block animate-bounce text-2xl">👋</span>
          </h3>
          
          {/* Typing animation with subtle glow */}
          <div className="mt-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-3 shadow-inner dark:from-gray-800/50 dark:to-gray-900/50">
            <p className="text-gray-600 dark:text-gray-300">
              <TypingAnimation />
            </p>
          </div>

          {/* Action buttons with luxury styling */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="group/btn relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
              <div className="relative flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6 transition-transform duration-300 group-hover/btn:rotate-12"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                </svg>
                <span>Book A Call</span>
              </div>
            </a>
            
            <button
              type="button"
              data-clipboard-text="fahmi.nabeel21@gmail.com"
              data-clipboard-action="copy"
              data-clipboard-success-text="Copied to clipboard"
              className="group/copy relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-purple-500 dark:hover:bg-purple-900/30 dark:hover:text-purple-300"
            >
              <div className="relative flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6 transition-transform duration-300 group-hover/copy:scale-110"
                >
                  <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span>Copy Email</span>
              </div>

              <span
                className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover/copy:opacity-100 dark:bg-gray-700"
                role="tooltip"
              >
                Click to copy email
              </span>
            </button>
          </div>

          {/* Social media icons with premium hover effects */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              {
                name: "Facebook",
                icon: "M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z",
                color: "hover:bg-blue-600"
              },
              {
                name: "Pinterest", 
                icon: "M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.74 3.74 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.862 2.862 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903l-.002-.001Z",
                color: "hover:bg-red-600"
              },
              {
                name: "GitHub",
                icon: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z",
                color: "hover:bg-gray-800"
              },
              {
                name: "YouTube",
                icon: "M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z",
                color: "hover:bg-red-600"
              }
            ].map((social, index) => (
              <div key={index} className="group/social relative">
                <a
                  href="#"
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white/80 text-gray-600 backdrop-blur-sm transition-all duration-500 hover:border-transparent hover:text-white hover:shadow-2xl hover:shadow-current/25 hover:-translate-y-2 hover:rotate-6 focus:outline-none focus:ring-4 focus:ring-current/20 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:text-white ${social.color}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 transition-transform duration-500 group-hover/social:scale-125"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
                
                {/* Floating label */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover/social:opacity-100 dark:bg-gray-700">
                  {social.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}