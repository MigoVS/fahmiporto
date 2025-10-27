"use client";

import { useState, useEffect, useRef } from "react";
import ProfileCard from "./components/home/profilecard";
import WorkExperience from "./components/home/workexperience";
import { InterfaceProfile } from "./interfaces/profile";
import { InterfaceWorkExperience } from "./interfaces/work";
import Service from "./components/home/service";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  delayBetween?: number;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isLoading?: boolean;
}

interface AirQualityData {
  aqi: number;
  components: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
  };
  main: { aqi: number };
}

const profiles: InterfaceProfile = {
  name: "Fahmi Nabeel",
  title: "Process Engineering",
  description:
    "A passionate Process Engineering student specializing in chemical process optimization, plant operations, and industrial innovation. Currently interning at PT Lotte Chemical Indonesia, specializing in polypropylene production processes. A lover of technology, politics, and business.",
  email: "fahmi.nabeel21@gmail.com",
  image: "/assets/images/me.png",
};

const works: InterfaceWorkExperience[] = [
  {
    company: "SMP Negeri 1 Cilegon",
    position: "Science Program Student",
    startDate: "2017",
    endDate: "2020",
    imageCompany: "/assets/images/logo/smp1.svg",
  },
  {
    company: "SMK Negeri 2 Cilegon",
    position: "Industrial Chemistry",
    startDate: "2020",
    endDate: "2023",
    imageCompany: "/assets/images/logo/smk2.svg",
  },
  {
    company: "Politeknik Industri Petrokimia",
    position: "Petrochemical Industrial Process Technology",
    startDate: "2023",
    endDate: "2026",
    imageCompany: "/assets/images/logo/pipb.svg",
  },
  {
    company: "Lotte Chemical Indonesia",
    position: "Process Engineering Apprentice - Polypropylene Plant",
    startDate: "2025",
    endDate: "2026",
    imageCompany: "/assets/images/logo/figma.svg",
  },
];

const recentProjects = [
  {
    title: "BIOFOUR TEAM",
    image: "/assets/images/biofour.png",
    tags: ["Bioethanol", "Friendly Fuel"],
    link: "https://biofourteam.vercel.app/",
  },
  {
    title: "QR Code",
    image: "/assets/images/qrcode.png",
    tags: ["Simple Make a QR Code", "Scan"],
    link: "https://qrgenerator-fahmi.vercel.app/",
  },
  {
    title: "Score Master",
    image: "/assets/images/skor.png",
    tags: ["Score", "Match"],
    link: "https://tanding.vercel.app/",
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
    credentialUrl: "https://lh3.googleusercontent.com/pw/AP1GczMAiodRGwMWD5Ha46awP7X81pcjKWKxh6ctRoc69w9wVDfa3waqVWjQbLOMsnB39muZQ5YlSVSAbY3Bi6GMswjoEXZAffWLnHK5ca_PjRo65QNVL4w8dFFAeXIgdtnEG9PPnzx-cRlkx34fopZptO-X=w2695-h1708-s-no-gm?authuser=0",
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

// Gemini AI Integration
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// Enhanced context about Fahmi for Gemini AI
const FAHMI_CONTEXT = `
You are Fahmi Nabeel's AI assistant. Here is comprehensive information about Fahmi:

PERSONAL PROFILE:
- Name: Fahmi Nabeel
- Current Role: Process Engineering Student & Apprentice
- Specialization: Chemical Process Optimization, Plant Operations, Industrial Innovation
- Email: fahmi.nabeel21@gmail.com

EDUCATION BACKGROUND:
1. SMP Negeri 1 Cilegon (2017-2020) - Science Program
2. SMK Negeri 2 Cilegon (2020-2023) - Industrial Chemistry
3. Politeknik Industri Petrokimia (2023-2026) - Petrochemical Industrial Process Technology
4. Lotte Chemical Indonesia (2025-2026) - Process Engineering Apprentice in Polypropylene Plant

PROFESSIONAL EXPERIENCE:
- Current Internship: PT Lotte Chemical Indonesia, Polypropylene Plant
- Expertise: Process monitoring, data analysis, optimization projects in polypropylene production
- Technical Skills: Chemical process optimization, plant operations, industrial safety

PROJECTS & ACHIEVEMENTS:
1. BIOFOUR TEAM - Bioethanol research and friendly fuel development
2. QR Code Generator - Simple QR code creation tool
3. Score Master - Sports scoring application
4. Multiple certificates in innovation competitions and academic achievements

CERTIFICATIONS & AWARDS:
- INNOVATOPIA Teknologi Tepat Guna Nasional (FLMPI Nasional BPSDMI KEMENPERIN) - 2025
- INNOVATOPIA Teknologi Tepat Guna PIPB (FLMPI Politeknik Industri Petrokimia Banten) - 2024
- Various academic and innovation competition awards

TECHNICAL INTERESTS:
- Process Engineering & Chemical Optimization
- Industrial Innovation & Technology
- Business Strategy & Political Economics
- Sustainable Engineering Solutions

PERSONAL INTERESTS:
- Technology innovation
- Business and entrepreneurship 
- Political economics
- Interdisciplinary problem-solving

RESPONSE GUIDELINES:
- Be professional, helpful, and informative
- Focus on Fahmi's expertise in process engineering
- Provide specific details about his experience and projects
- Keep responses concise but comprehensive (2-4 paragraphs maximum)
- Offer to provide more details if needed
- Be enthusiastic about collaboration opportunities
- Use Indonesian or English based on user's language preference
`;

// Enhanced AI Response Generator with Gemini AI
const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    // Fallback responses if Gemini is not available
    const fallbackResponses = {
      'process engineering': "As a Process Engineering student specializing in chemical process optimization, I focus on improving efficiency, safety, and sustainability in industrial processes. I have experience with polypropylene production, plant operations, and process optimization techniques at Lotte Chemical Indonesia.",
      
      'lotte chemical': "I'm currently interning at PT Lotte Chemical Indonesia in the Polypropylene Plant department. My work involves process monitoring, data analysis, and contributing to optimization projects in polypropylene production to enhance efficiency and quality.",
      
      'education': "My educational journey includes SMP Negeri 1 Cilegon (Science Program), SMK Negeri 2 Cilegon (Industrial Chemistry), and currently pursuing Petrochemical Industrial Process Technology at Politeknik Industri Petrokimia.",
      
      'project': "I've worked on several innovative projects including BIOFOUR TEAM (bioethanol research for sustainable fuel), QR Code generator application, and Score Master for sports management. These projects combine my technical skills with practical applications.",
      
      'certificate': "I've earned multiple certificates including INNOVATOPIA awards for appropriate technology, academic achievements, and innovation competitions at both institutional and national levels."
    };

    // Check for API key
    if (!GEMINI_API_KEY) {
      console.log('Gemini API key not found, using fallback responses');
      
      // Find the most relevant fallback response
      const lowerMessage = userMessage.toLowerCase();
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return response;
        }
      }
      
      // Default fallback response
      return "Thank you for your interest! I'm Fahmi Nabeel, a Process Engineering student specializing in chemical process optimization and industrial innovation. I'm currently interning at Lotte Chemical Indonesia in the Polypropylene Plant. How can I help you with more specific information about my experience or projects?";
    }

    // Prepare the prompt for Gemini AI
    const prompt = {
      contents: [
        {
          parts: [
            {
              text: `${FAHMI_CONTEXT}

User Question: "${userMessage}"

Please provide a helpful, professional response as Fahmi's AI assistant. Focus on his expertise in process engineering, education, projects, and professional experience. Keep the response informative but concise.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }

  } catch (error) {
    console.error('Error generating AI response:', error);
    
    // Enhanced fallback logic based on message content
    const message = userMessage.toLowerCase();
    
    if (message.includes('process engineering') || message.includes('chemical engineering')) {
      return "As a Process Engineering student specializing in chemical process optimization, I focus on improving efficiency, safety, and sustainability in industrial processes. I have hands-on experience with polypropylene production, plant operations, and process optimization techniques at Lotte Chemical Indonesia. My work involves monitoring process parameters, analyzing data for optimization opportunities, and implementing improvements in chemical manufacturing processes.";
    }
    
    if (message.includes('lotte chemical') || message.includes('internship')) {
      return "I'm currently interning at PT Lotte Chemical Indonesia in the Polypropylene Plant department. My responsibilities include process monitoring, data analysis, quality control, and contributing to optimization projects. I work with advanced process control systems and participate in troubleshooting activities to ensure efficient and safe polypropylene production operations.";
    }
    
    if (message.includes('education') || message.includes('school')) {
      return "My educational background spans from SMP Negeri 1 Cilegon (Science Program, 2017-2020), SMK Negeri 2 Cilegon (Industrial Chemistry, 2020-2023), to my current studies at Politeknik Industri Petrokimia (Petrochemical Industrial Process Technology, 2023-2026). This comprehensive education has provided me with strong foundations in chemistry, process engineering, and industrial operations.";
    }
    
    if (message.includes('project') || message.includes('portfolio')) {
      return "I've developed several projects including BIOFOUR TEAM focusing on bioethanol as sustainable fuel, QR Code generator for easy code creation, and Score Master for sports management. These projects demonstrate my ability to combine technical knowledge with practical application development. I'm particularly proud of BIOFOUR TEAM's innovative approach to renewable energy solutions.";
    }
    
    if (message.includes('certificate') || message.includes('achievement')) {
      return "I've earned multiple prestigious certificates including INNOVATOPIA awards at both institutional and national levels, academic excellence awards, and innovation competition recognitions. These achievements reflect my commitment to technological innovation and academic excellence in the field of process engineering and industrial chemistry.";
    }
    
    // General default response
    return "Thank you for your message! I'm Fahmi Nabeel, a passionate Process Engineering student with experience in chemical process optimization and industrial innovation. I'm currently interning at Lotte Chemical Indonesia's Polypropylene Plant. I'd be happy to discuss my experience in process engineering, education background, projects, or any specific questions you might have. What would you like to know more about?";
  }
};

// Typing Animation Component
const TypingText = ({ texts, speed = 100, delayBetween = 2000 }: TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    const fullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delayBetween]);

  return (
    <span className="relative">
      {currentText}
      <span 
        className={`ml-1 text-purple-500 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
};

// Luxury Real-time Clock Component
const LuxuryClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Selamat Pagi 🌅";
    if (hour < 15) return "Selamat Siang ☀️";
    if (hour < 19) return "Selamat Sore 🌇";
    return "Selamat Malam 🌙";
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 p-8 shadow-2xl backdrop-blur-xl border border-purple-500/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl hover:border-purple-500/40">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -inset-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-30 animate-bounce"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Waktu Saat Ini</h3>
              <p className="text-purple-200 text-sm">{getGreeting()}</p>
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
        
        {/* Time Display */}
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="text-5xl md:text-6xl font-mono font-bold text-white mb-2 tracking-wider bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {formatTime(currentTime)}
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl -z-10"></div>
          </div>
          
          <div className="space-y-2">
            <div className="text-lg text-purple-200 font-medium">
              {formatDate(currentTime)}
            </div>
            <div className="text-sm text-purple-300 opacity-80">
              Cilegon, Banten • WIB
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-400/50 rounded-tl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-t-2 border-pink-400/50 rounded-tr-2xl"></div>
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/50 rounded-bl-2xl"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-400/50 rounded-br-2xl"></div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-[2px] rounded-3xl bg-slate-900"></div>
      </div>
    </div>
  );
};

// Luxury Air Quality Component for Cilegon
const LuxuryAirQuality = () => {
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate air quality data since we don't have API key
    const simulateAirQuality = () => {
      const demoData: AirQualityData = {
        aqi: 2,
        components: {
          co: 250.46,
          no2: 12.34,
          o3: 45.67,
          so2: 5.43,
          pm2_5: 15.28,
          pm10: 23.45
        },
        main: { aqi: 2 }
      };
      setAirQuality(demoData);
      setLoading(false);
    };

    simulateAirQuality();
    const interval = setInterval(simulateAirQuality, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getAQILevel = (aqi: number) => {
    const levels = {
      1: { 
        label: "SANGAT BAIK", 
        color: "text-emerald-300", 
        bg: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-400/30",
        description: "Kualitas udara sangat bagus",
        icon: "🌿"
      },
      2: { 
        label: "BAIK", 
        color: "text-green-300", 
        bg: "from-green-500/20 to-emerald-500/20",
        border: "border-green-400/30",
        description: "Kualitas udara baik",
        icon: "✅"
      },
      3: { 
        label: "SEDANG", 
        color: "text-yellow-300", 
        bg: "from-yellow-500/20 to-amber-500/20",
        border: "border-yellow-400/30",
        description: "Kualitas udara sedang",
        icon: "⚠️"
      },
      4: { 
        label: "TIDAK SEHAT", 
        color: "text-orange-300", 
        bg: "from-orange-500/20 to-red-500/20",
        border: "border-orange-400/30",
        description: "Kualitas udara tidak sehat",
        icon: "😷"
      },
      5: { 
        label: "SANGAT TIDAK SEHAT", 
        color: "text-red-300", 
        bg: "from-red-500/20 to-pink-500/20",
        border: "border-red-400/30",
        description: "Kualitas udara sangat tidak sehat",
        icon: "🚨"
      }
    };
    return levels[aqi as keyof typeof levels] || levels[2];
  };

  const getPollutantLevel = (value: number, type: string) => {
    const thresholds: { [key: string]: { good: number; moderate: number; unhealthy: number } } = {
      pm2_5: { good: 12, moderate: 35, unhealthy: 55 },
      pm10: { good: 54, moderate: 154, unhealthy: 254 },
      no2: { good: 40, moderate: 100, unhealthy: 360 },
      so2: { good: 20, moderate: 80, unhealthy: 250 },
      co: { good: 4400, moderate: 9400, unhealthy: 12400 },
      o3: { good: 60, moderate: 100, unhealthy: 140 }
    };

    const threshold = thresholds[type];
    if (!threshold) return "text-gray-400";

    if (value <= threshold.good) return "text-emerald-300";
    if (value <= threshold.moderate) return "text-yellow-300";
    if (value <= threshold.unhealthy) return "text-orange-300";
    return "text-red-300";
  };

  if (loading) {
    return (
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 p-8 shadow-2xl backdrop-blur-xl border border-emerald-500/20">
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-800 rounded-2xl"></div>
              <div className="space-y-2">
                <div className="h-4 bg-emerald-800 rounded w-24"></div>
                <div className="h-3 bg-emerald-800 rounded w-16"></div>
              </div>
            </div>
            <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-8 bg-emerald-800 rounded"></div>
            <div className="h-4 bg-emerald-800 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  const aqiLevel = airQuality ? getAQILevel(airQuality.main.aqi) : getAQILevel(2);

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 p-8 shadow-2xl backdrop-blur-xl border border-emerald-500/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl hover:border-emerald-500/40">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -inset-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-500 rounded-full blur-2xl opacity-30 animate-bounce"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-teal-500 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Kualitas Udara</h3>
              <p className="text-emerald-200 text-sm">Cilegon, Banten</p>
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* AQI Display */}
        <div className="text-center space-y-6 mb-8">
          <div className="relative">
            <div className={`text-4xl md:text-5xl font-bold ${aqiLevel.color} mb-3`}>
              {aqiLevel.icon} {aqiLevel.label}
            </div>
            <div className="text-lg text-emerald-200">
              {aqiLevel.description}
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>

        {/* Pollutant Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-emerald-200">PM2.5</span>
              <span className={getPollutantLevel(airQuality!.components.pm2_5, 'pm2_5')}>
                {airQuality!.components.pm2_5.toFixed(1)} µg/m³
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-emerald-200">PM10</span>
              <span className={getPollutantLevel(airQuality!.components.pm10, 'pm10')}>
                {airQuality!.components.pm10.toFixed(1)} µg/m³
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-emerald-200">NO₂</span>
              <span className={getPollutantLevel(airQuality!.components.no2, 'no2')}>
                {airQuality!.components.no2.toFixed(1)} µg/m³
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-emerald-200">SO₂</span>
              <span className={getPollutantLevel(airQuality!.components.so2, 'so2')}>
                {airQuality!.components.so2.toFixed(1)} µg/m³
              </span>
            </div>
          </div>
        </div>

        {/* Last Update */}
        <div className="text-center mt-6">
          <div className="text-xs text-emerald-300/60">
            Terakhir update: {new Date().toLocaleTimeString('id-ID')}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-400/50 rounded-tl-2xl"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-t-2 border-teal-400/50 rounded-tr-2xl"></div>
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-2xl"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-b-2 border-teal-400/50 rounded-br-2xl"></div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-[2px] rounded-3xl bg-slate-900"></div>
      </div>
    </div>
  );
};

// Enhanced Live Chat Component with Gemini AI
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm Fahmi's AI assistant. I can tell you about his process engineering experience, projects, education, certificates, and professional background. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced message handling with Gemini AI
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Generate AI response using Gemini
      const aiResponse = await generateAIResponse(inputMessage);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      
      // Error response
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble generating a response right now. Please feel free to ask me about Fahmi's process engineering experience, education background, projects, or professional achievements. You can also contact him directly at fahmi.nabeel21@gmail.com",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick questions suggestions
  const quickQuestions = [
    "Tell me about your process engineering experience",
    "What projects have you worked on?",
    "Tell me about your education background",
    "What certificates have you earned?",
    "What are your technical skills?",
    "Tell me about your Lotte Chemical internship"
  ];

  return (
    <>
      {/* Enhanced Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl group"
      >
        <div className="relative">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 animate-ping"></div>
          <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-500"></div>
        </div>
      </button>

      {/* Enhanced Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-end sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Chat Container */}
          <div className="relative w-full max-w-md rounded-3xl bg-white/95 dark:bg-gray-900/95 shadow-2xl backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-300 scale-100 opacity-100">
            
            {/* Enhanced Chat Header */}
            <div className="rounded-t-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-lg">⚗️</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-white">
                      <div className="h-full w-full rounded-full bg-emerald-500 animate-ping"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fahmi's AI Assistant</h3>
                    <p className="text-purple-100 text-sm">Process Engineering Expert</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 hover:bg-white/20 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span>AI Online</span>
                </div>
                <span>•</span>
                <span>Powered by Gemini AI</span>
              </div>
            </div>

            {/* Enhanced Messages Container */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 backdrop-blur-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-gray-100 dark:bg-gray-800 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick Questions Suggestions */}
              {messages.length <= 2 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Quick questions you can ask:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInputMessage(question);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about process engineering, projects, or experience..."
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white pr-12"
                    disabled={isTyping}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                    <button 
                      onClick={() => setInputMessage('')}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center min-w-[44px]"
                >
                  {isTyping ? (
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Powered by Gemini AI • Ask about engineering, projects, or experience
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const typingTexts = [
    "Process Engineering",
    "Apprentice PT Lotte Chemical Indonesia", 
    "Polypropylene Department",
    "Chemical Innovation",
    "technological innovation",
    "Business",
    "Politics"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 md:-top-40 md:-right-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 md:-bottom-40 md:-left-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-10 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-10 blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute inset-0 bg-grid-slate-100/25 dark:bg-grid-slate-800/25 bg-[size:20px_20px]"></div>
      </div>

      <main className="relative z-10 grid grid-cols-1 gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-3 lg:gap-10 lg:p-10">
        
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="group relative overflow-hidden rounded-3xl bg-white/90 border border-gray-200/50 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl dark:bg-gray-900/90 dark:border-gray-700/50">
            <div className="relative p-6 md:p-8 bg-white/95 dark:bg-gray-900/95 rounded-3xl backdrop-blur-xl">
              <div className="relative mx-auto mb-6 h-32 w-32 md:h-40 md:w-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-spin" style={{animationDuration: '3s'}}>
                  <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                  <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>
                <div className="absolute inset-4 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={profiles.image}
                    alt={profiles.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h1 className="mb-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  {profiles.name}
                </h1>
                
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100/80 to-pink-100/80 px-4 py-2 backdrop-blur-sm border border-purple-200/50 dark:from-purple-900/30 dark:to-pink-900/30 dark:border-purple-700/30">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300 min-h-[20px]">
                    <TypingText texts={typingTexts} speed={120} delayBetween={2500} />
                  </p>
                </div>

                <p className="mb-6 text-sm text-gray-600 leading-relaxed dark:text-gray-300 text-justify">
                  {profiles.description}
                </p>

                <a
                  href={`mailto:${profiles.email}`}
                  className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
                  <svg
                    className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="relative">Get In Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Luxury Widgets Section - Di bawah Profile Card */}
          <div className="mt-6 space-y-6">
            <LuxuryClock />
            <LuxuryAirQuality />
          </div>
        </div>

        {/* Work Experience */}
        <div className="lg:col-span-1">
          <div className="h-full">
            <WorkExperience works={works} />
          </div>
        </div>

        {/* Recent Projects */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl bg-white/90 border border-gray-200/50 p-6 md:p-8 shadow-2xl backdrop-blur-xl dark:bg-gray-900/90 dark:border-gray-700/50">
            <div className="mb-6 md:mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  Recent Projects
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <span className="text-2xl">⚗️</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl dark:from-gray-800 dark:to-gray-700"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-purple-600 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-110"
                    >
                      <svg
                        className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12"
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

                  <div className="p-4 md:p-6">
                    <h4 className="mb-3 text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-xs font-medium text-purple-700 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300"
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

        {/* Certificates Section - Tetap penuh 3 kolom */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-white/90 border border-gray-200/50 p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl dark:bg-gray-900/90 dark:border-gray-700/50">
            <div className="mb-6 md:mb-8 lg:mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  Certificates & Achievements
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 dark:from-gray-800 dark:to-gray-700"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-600 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:scale-110"
                    >
                      <svg
                        className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12"
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

                  <div className="p-4 md:p-6">
                    <h4 className="mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {certificate.title}
                    </h4>
                    <p className="mb-2 md:mb-3 text-sm md:text-base font-medium text-emerald-600 dark:text-emerald-400 line-clamp-1">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50">
                        <svg
                          className="h-3 w-3 text-emerald-600 dark:text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Issued {certificate.date}</span>
                    </div>
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
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 md:p-8 shadow-2xl text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
            <div className="relative">
              <div className="mb-4 md:mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/20 p-3 md:p-4 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
                  <span className="text-lg">⚗️</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold">Available For Collaboration</p>
                  <p className="text-xs text-white/80">Process Engineering Solutions</p>
                </div>
              </div>

              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold leading-tight">
                Let's 🤝 <br />
                Collaborate
              </h2>

              <p className="mb-6 md:mb-8 text-sm md:text-base text-white/90 leading-relaxed">
                Ready to optimize processes and innovate solutions? Let's work together to create efficient and sustainable engineering solutions!
              </p>

              <a
                href={`mailto:${profiles.email}`}
                className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"></div>
                <span className="relative">Let's Connect</span>
                <svg
                  className="relative h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-1"
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
        </div>

      </main>

      {/* Enhanced Live Chat with Gemini AI */}
      <LiveChat />
    </div>
  );
}