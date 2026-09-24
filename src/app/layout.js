import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { WorkoutProvider } from "@/context/WorkoutContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: "FitLog - Your Ultimate Workout Library & Fitness Planner",
    template: "%s | FitLog",
  },
  description:
    "Explore customized workout routines, track exercise libraries, and plan your daily fitness goals effortlessly with FitLog.",
  keywords: [
    "Fitness",
    "Workout Planner",
    "Gym Routines",
    "Exercise Library",
    "FitLog",
    "Workout Tracker",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${montserrat.className} bg-black text-white min-h-screen antialiased`}
      >
        

        <WorkoutProvider>
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
