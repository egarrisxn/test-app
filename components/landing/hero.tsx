"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/backgrounds/bg-00.avif'
          alt='Background'
          fill
          priority
          className='object-cover blur-sm brightness-75'
        />
        <div className='absolute inset-0 bg-black/20' />
      </div>

      <div className='relative z-10 mx-auto max-w-6xl px-4 text-white'>
        <div className='mx-auto flex flex-col items-center space-y-40 md:space-y-28'>
          <div>
            <div className='flex w-full flex-col items-center justify-center gap-4 md:flex-row'>
              <div className='mx-auto mb-4 size-52 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl ring-1 shadow-black ring-white/30 sm:mb-5 sm:size-56 md:mb-6 md:size-60 dark:ring-white/60'>
                <Image
                  src='/icons/gma-icon.png'
                  alt='gma icon'
                  height={400}
                  width={400}
                  className='size-full object-cover'
                />
              </div>
              <div className='flex w-full flex-1 flex-col items-center text-center md:items-start md:text-start'>
                <h1 className='mb-3 bg-gradient-to-bl from-yellow-50 via-red-300 to-rose-300 bg-clip-text font-serif text-4xl font-bold text-transparent text-shadow-lg sm:text-5xl md:mb-2.5 md:text-6xl 2xl:text-7xl'>
                  Patricia G. Penisten
                </h1>
                <div className='mb-5 flex space-x-4 text-base leading-snug tracking-tight text-white/90 text-shadow-lg sm:text-lg md:mb-4.5 md:pl-1 md:text-xl'>
                  <p>December 22nd, 1935 - June 5th, 2025</p>
                </div>
                <p className='mb-8 text-lg text-white text-shadow-lg sm:text-xl md:pl-0.5 md:text-2xl'>
                  Beloved{" "}
                  <span className='font-semibold text-yellow-100 italic'>
                    Grandmother
                  </span>
                  ,{" "}
                  <span className='font-semibold text-yellow-100 italic'>
                    Mother
                  </span>
                  , &{" "}
                  <span className='font-semibold text-yellow-100 italic'>
                    Teacher
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("#lifestory")}
              className='animate-bounce'
            >
              <ChevronDown className='z-50 size-8 text-white/70 transition-colors hover:text-white dark:text-black/70 hover:dark:text-black' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { ChevronDown, Heart } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// export default function Hero() {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id='home'
//       className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'
//     >
//       <div className='absolute inset-0 -z-10'>
//         <Image
//           src='/backgrounds/bg-00.avif'
//           alt='Background'
//           fill
//           priority
//           className='object-cover blur-sm brightness-75'
//         />
//         <div className='absolute inset-0 bg-black/20' />
//       </div>

//       <div className='relative z-10 mx-auto max-w-4xl px-4 text-center text-white'>
//         <div className='space-y-24'>
//           <div>
//             <div className='mx-auto mb-6 size-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl dark:ring-white/60'>
//               <Image
//                 src='/icons/gma-icon.png'
//                 alt='gma icon'
//                 height={400}
//                 width={400}
//                 className='size-full object-cover'
//               />
//             </div>
//             <h1 className='mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
//               Patricia G. Penisten
//             </h1>
//             <div className='mb-6 flex items-center justify-center space-x-4 text-xl text-white md:text-2xl'>
//               <span>December 22nd, 1935</span>
//               <Heart className='size-6 text-red-500' />
//               <span>June 5th, 2025</span>
//             </div>
//             <p className='mb-8 text-xl font-light text-white md:text-2xl'>
//               Beloved Mother, Grandmother, Wife, & Teacher
//             </p>
//             <div className='flex flex-wrap justify-center gap-3'>
//               <Badge
//                 variant='secondary'
//                 className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
//               >
//                 Educator for 25+ years
//               </Badge>
//               <Badge
//                 variant='secondary'
//                 className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
//               >
//                 Devoted family woman
//               </Badge>
//               <Badge
//                 variant='secondary'
//                 className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
//               >
//                 Biggest lover of life
//               </Badge>
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={() => scrollToSection("#biography")}
//               className='animate-bounce'
//             >
//               <ChevronDown className='size-8 text-white/70 transition-colors hover:text-white dark:text-black/70 hover:dark:text-black' />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
