"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Menandai bahwa komponen sudah dimount di client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Mencegah akses localStorage sebelum client-side rendering

    try {
      // Cek preferensi sistem terlebih dahulu
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("theme");

      let shouldUseDarkMode = false;

      if (savedTheme) {
        // Jika ada preferensi yang tersimpan, gunakan itu
        shouldUseDarkMode = savedTheme === "dark";
      } else {
        // Jika tidak ada preferensi tersimpan, gunakan preferensi sistem
        shouldUseDarkMode = prefersDark;
      }

      setDarkMode(shouldUseDarkMode);

      // Apply theme ke document
      if (shouldUseDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }

      // Set meta theme-color untuk mobile browsers
      updateMetaThemeColor(shouldUseDarkMode);
    } catch (error) {
      console.warn(
        "Error accessing localStorage or system preferences:",
        error
      );
      // Fallback ke light mode jika ada error
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      updateMetaThemeColor(false);
    }
  }, [isClient]);

  // Fungsi untuk update meta theme-color (penting untuk mobile)
  const updateMetaThemeColor = (isDark: boolean) => {
    try {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]');

      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
      }

      // Set warna yang sesuai dengan tema (sesuaikan dengan design system Anda)
      const lightColor = "#ffffff"; // Warna untuk light mode
      const darkColor = "#1a1a1a"; // Warna untuk dark mode

      metaThemeColor.setAttribute("content", isDark ? darkColor : lightColor);
    } catch (error) {
      console.warn("Error updating meta theme-color:", error);
    }
  };

  // Listen untuk perubahan preferensi sistem
  useEffect(() => {
    if (!isClient) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Hanya update jika user belum pernah set preferensi manual
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        const shouldUseDarkMode = e.matches;
        setDarkMode(shouldUseDarkMode);

        if (shouldUseDarkMode) {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }

        updateMetaThemeColor(shouldUseDarkMode);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback untuk browser lama
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [isClient]);

  const toggleDarkMode = () => {
    if (!isClient) return;

    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);

      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }

      updateMetaThemeColor(newDarkMode);

      // Tambahkan haptic feedback untuk mobile (jika didukung)
      if ("vibrate" in navigator) {
        navigator.vibrate(50);
      }
    } catch (error) {
      console.warn("Error toggling dark mode:", error);
    }
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}
