//import React from "react";
import LoginCard from "./components/LoginCard";
import LoginIntro from "./components/LoginIntro";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Brand + Copy */}
          <section>
            <LoginIntro />
          </section>

          {/* RIGHT: Login Card */}
          <section className="flex justify-center lg:justify-end">
            <LoginCard />
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

// function FeatureRow({
//   icon,
//   title,
//   desc,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div className="flex gap-4">
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
//         {icon}
//       </div>
//       <div>
//         <div className="text-sm font-bold text-slate-900">{title}</div>
//         <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
//       </div>
//     </div>
//   );
// }

/* ---------- Icons (SVG) ---------- */

// function LogoMark() {
//   return (
//     <svg
//       viewBox="0 0 48 48"
//       className="h-6 w-6"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         d="M27.5 7.5c7.6 1.3 13 7.9 12.2 15.8-.7 6.9-6.3 12.4-13.2 13.1-7.9.8-14.6-4.6-15.8-12.2"
//         stroke="#0EA5A4"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />
//       <path
//         d="M20.5 40.5c-7.6-1.3-13-7.9-12.2-15.8.7-6.9 6.3-12.4 13.2-13.1 7.9-.8 14.6 4.6 15.8 12.2"
//         stroke="#2563EB"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function GoogleIcon() {
//   return (
//     <svg
//       className="h-5 w-5"
//       viewBox="0 0 48 48"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         fill="#EA4335"
//         d="M24 9.5c3.3 0 6.3 1.2 8.6 3.2l5.9-5.9C34.9 3.5 29.8 1.5 24 1.5 14.9 1.5 7.1 6.7 3.3 14.3l6.9 5.4C12 13.7 17.5 9.5 24 9.5z"
//       />
//       <path
//         fill="#34A853"
//         d="M46.1 24.5c0-1.6-.2-3.1-.5-4.6H24v9h12.4c-.5 2.8-2.1 5.2-4.4 6.8l6.8 5.2c4-3.7 6.3-9.2 6.3-16.4z"
//       />
//       <path
//         fill="#4A90E2"
//         d="M10.2 28.7c-.6-1.7-1-3.5-1-5.4s.4-3.7 1-5.4l-6.9-5.4C1.9 15.6 1 19 1 23.3c0 4.3.9 7.7 2.3 10.8l6.9-5.4z"
//       />
//       <path
//         fill="#FBBC05"
//         d="M24 45.5c5.8 0 10.9-1.9 14.5-5.2l-6.8-5.2c-1.9 1.3-4.4 2.1-7.7 2.1-6.5 0-12-4.2-13.8-10l-6.9 5.4c3.8 7.6 11.6 12.9 20.7 12.9z"
//       />
//     </svg>
//   );
// }

// function KakaoIcon() {
//   return (
//     <svg
//       className="h-5 w-5"
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 4C7.2 4 3.3 7 3.3 10.8c0 2.4 1.6 4.6 4.1 5.8l-.7 2.8c-.1.4.3.8.7.6l3.2-2c.5.1 1 .1 1.4.1 4.8 0 8.7-3 8.7-6.8S16.8 4 12 4z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }


// function PeopleIcon() {
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       width="32" 
//       height="32" 
//       fill="#000000" 
//       viewBox="0 0 256 256">
//         <path 
//           d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
//         />
//       </svg>
//   );
// }

// function ChartIcon() {
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       width="32" 
//       height="32" 
//       fill="#000000" 
//       viewBox="0 0 256 256"
//     >
//       <path 
//         d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"
//       />
//     </svg>
//   );
// }

// function ShareIcon() {
//   return (
//     <svg
//       className="h-6 w-6"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M18 16a3 3 0 0 0-2.6 1.5L8.9 13.9a3.2 3.2 0 0 0 0-3.8l6.5-3.6A3 3 0 1 0 14 4a3 3 0 0 0 .1.7L7.6 8.3A3 3 0 1 0 8 14a3 3 0 0 0-.4 0l6.5 3.6A3 3 0 1 0 18 16Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }
