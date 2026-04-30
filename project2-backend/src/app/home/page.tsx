// 'use client'

// import { useRouter } from "next/navigation";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const FEATURES = [
//   {
//     icon: "⚡",
//     title: "Instant Risk Analysis",
//     desc: "Get credit risk scores in seconds using optimized financial signals.",
//   },
//   {
//     icon: "🔐",
//     title: "Secure Authentication",
//     desc: "JWT-based authentication with NextAuth ensures secure sessions.",
//   },
//   {
//     icon: "🌐",
//     title: "Google Login",
//     desc: "Login instantly with Google using OAuth authentication.",
//   },
//   {
//     icon: "📊",
//     title: "Smart Dashboard",
//     desc: "Visualize risk scores with clean analytics UI.",
//   },
//   {
//     icon: "✏️",
//     title: "Edit Profile",
//     desc: "Update your profile anytime with instant sync.",
//   },
//   {
//     icon: "🖼️",
//     title: "Cloud Storage",
//     desc: "Profile images stored securely with Cloudinary CDN.",
//   },
// ];

// export default function Home() {

//   const router = useRouter();
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

//   return (
//     <div className="min-h-screen bg-[#07090f] text-white overflow-x-hidden">

//       {/* BG */}
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(circle_at_90%_120%,rgba(6,182,212,0.12),transparent)] z-0" />

//       {/* NAVBAR */}
//       <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/70 border-b border-white/10 z-50">
//         <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-[60px]">

//           <div onClick={() => router.push("/")} className="flex items-center gap-2 cursor-pointer">
//             <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
//               CI
//             </div>
//             <span className="font-bold text-lg">
//               Credit<span className="text-purple-400">Insight</span>
//             </span>
//           </div>

//           <div className="flex gap-3">
//             <button onClick={() => router.push("/login")} className="px-4 py-1 border border-white/20 rounded text-gray-300 hover:text-white">
//               Login
//             </button>
//             <button onClick={() => router.push("/register")} className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded">
//               Get Started
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* HERO */}
//       <section
//         ref={heroRef}
//         className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative z-10"
//       >

//         <motion.div style={{ y: heroY }}>

//           <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
//             Know your credit risk
//             <br />
//             <span className="text-purple-400">before they do.</span>
//           </h1>

//           <p className="text-gray-400 max-w-md mx-auto mb-8">
//             AI-powered financial insights that help you understand and improve your credit profile instantly.
//           </p>

//           <div className="flex gap-4 justify-center flex-wrap">
//             <button
//               onClick={() => router.push("/register")}
//               className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Start Now →
//             </button>

//             <button
//               onClick={() => router.push("/risk")}
//               className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
//             >
//               Try Demo
//             </button>
//           </div>

//         </motion.div>

//         {/* Floating UI Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex gap-10"
//         >
//           {[
//             { label: "Score", value: "742" },
//             { label: "Grade", value: "A+" },
//             { label: "Risk", value: "Low" }
//           ].map((item, i) => (
//             <div key={i} className="text-center">
//               <h2 className="text-2xl font-bold text-purple-400">{item.value}</h2>
//               <p className="text-xs text-gray-500 uppercase">{item.label}</p>
//             </div>
//           ))}
//         </motion.div>

//       </section>

//       {/* 🔥 NEW TRUST / VISUAL SECTION */}
//       <section className="py-16 px-6 max-w-5xl mx-auto text-center relative z-10">
//         <h2 className="text-2xl font-bold mb-4">
//           Built for modern financial clarity
//         </h2>

//         <p className="text-gray-400 mb-10 max-w-xl mx-auto">
//           Designed to give instant, accurate, and easy-to-understand credit insights without complexity.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {["Fast", "Secure", "Accurate"].map((item, i) => (
//             <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
//               <h3 className="text-lg font-semibold">{item}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Features
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {FEATURES.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 transition"
//             >
//               <div className="text-2xl mb-3">{f.icon}</div>
//               <h3 className="font-semibold mb-2">{f.title}</h3>
//               <p className="text-sm text-gray-400">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center relative z-10">
//         <h2 className="text-3xl font-bold mb-4">
//           Ready to get started?
//         </h2>
//         <p className="text-gray-400 mb-6">
//           Start analyzing your credit profile today.
//         </p>
//         <button
//           onClick={() => router.push("/register")}
//           className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold"
//         >
//           Get Started
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/10 p-6 text-center text-gray-500">
//         © 2026 CreditInsight
//       </footer>

//     </div>
//   );
// }


'use client'

import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Risk Analysis",
    desc: "Get credit risk scores instantly using structured financial calculations.",
  },
  {
    icon: "🔐",
    title: "Secure Authentication",
    desc: "Authentication handled using NextAuth with secure session management and seamless login experience.",
  },
  {
    icon: "🌐",
    title: "Google Login",
    desc: "Quick sign-in using your Google account with secure OAuth.",
  },
  {
    icon: "📊",
    title: "Visual Dashboard",
    desc: "Understand your credit profile through simple visual insights.",
  },
  {
    icon: "✏️",
    title: "Edit Profile",
    desc: "Easily manage and update your personal information.",
  },
  {
    icon: "🖼️",
    title: "Cloud Storage",
    desc: "Secure image storage using Cloudinary CDN.",
  },
];

export default function Home() {

  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-[#07090f] text-white overflow-x-hidden">

      {/* BG */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(circle_at_90%_120%,rgba(6,182,212,0.12),transparent)] z-0" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/70 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-[60px]">

          <div onClick={() => router.push("/")} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
              CI
            </div>
            <span className="font-bold text-lg">
              Credit<span className="text-purple-400">Insight</span>
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-1 border border-white/20 rounded text-gray-300 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
            >
              Get Started
            </button>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 relative z-10"
      >

        <motion.div style={{ y: heroY }} className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Understand your credit risk
            <br />
            <span className="text-purple-400">before making decisions</span>
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            A simple tool to evaluate your financial profile and understand your loan risk clearly.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => router.push("/register")}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition"
            >
              Get Started →
            </button>

            <button
              onClick={() => router.push("/risk")}
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
            >
              Try Demo
            </button>
          </div>

        </motion.div>

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 w-full max-w-lg p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex justify-around"
        >
          {[
            { label: "Score", value: "742" },
            { label: "Grade", value: "A+" },
            { label: "Risk", value: "Low" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-purple-400">{item.value}</h2>
              <p className="text-xs text-gray-500 uppercase">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </section>

      {/* TRUST SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-bold mb-4">
          Simple. Clear. Reliable.
        </h2>

        <p className="text-gray-400 mb-10">
          Built to give you clear financial insights without unnecessary complexity.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Fast", "Secure", "Easy to Use"].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 transition"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-6">
          Try the tool and see your credit risk instantly.
        </p>
        <button
          onClick={() => router.push("/register")}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold"
        >
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 p-6 text-center text-gray-500">
        © 2026 CreditInsight
      </footer>

    </div>
  );
}