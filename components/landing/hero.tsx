import Image from "next/image";
import ScrollDownButton from "@/components/landing/scroll-down";

export default function Hero() {
  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 z-10 size-full'>
        <Image
          src='/backgrounds/bg-00.avif'
          alt='Patricia G Penisten Background'
          fill
          priority
          className='object-cover blur-sm brightness-[.4] grayscale'
        />
      </div>
      {/* Background overlay */}
      <div className='absolute inset-0 z-20 size-full bg-black/20' />

      {/* Middle section */}
      <div className='absolute inset-0 z-30 flex size-full pb-36 sm:pb-24 lg:pb-28'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-7 px-4 lg:flex-row lg:gap-4 2xl:gap-6'>
          <aside className='flex items-center justify-center lg:items-end lg:justify-end'>
            <figure className='size-52 overflow-hidden sm:size-68 lg:size-60 xl:size-76 2xl:size-80'>
              <Image
                src='/icons/8.png'
                alt='Patricia G Penisten Icon'
                height={400}
                width={400}
                className='size-full object-cover'
              />
              <figcaption>
                <p className='sr-only'>Patricia G Penisten Icon</p>
              </figcaption>
            </figure>
          </aside>
          <header className='flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start'>
            <h1 className='mb-1 bg-gradient-to-bl from-yellow-50 via-red-300 to-rose-300 bg-clip-text font-serif text-4xl font-bold text-transparent text-shadow-lg sm:text-5xl lg:mb-2 lg:text-6xl xl:mb-3 xl:text-[4.30rem] xl:tracking-[-0.015em] 2xl:text-7xl'>
              Patricia G. Penisten
            </h1>
            <h2 className='mb-8 text-white/80 sm:text-lg lg:mb-4.5 lg:pl-1 lg:text-xl xl:text-[1.45rem] xl:tracking-[-0.015em] 2xl:mb-5.5 2xl:text-[1.65rem]'>
              December 22nd, 1935 - June 5th, 2025
            </h2>
            <h3 className='xltracking-[0.015em] max-w-sm text-2xl text-white text-shadow-lg lg:max-w-none lg:pl-1 lg:text-3xl xl:max-w-xl xl:text-[2.35rem] 2xl:text-[2.5rem]'>
              Beloved{" "}
              <span className='font-semibold text-yellow-100'>Teacher</span>,{" "}
              <span className='font-semibold text-yellow-100'>Mother</span>,{" "}
              <span className='font-semibold text-yellow-100'>Grandmother</span>
              , & <span className='font-semibold text-yellow-100'>Wife</span>.
            </h3>
          </header>
        </div>
      </div>

      {/* Bottom section */}
      <div className='absolute bottom-10 z-30 flex w-full justify-center'>
        <ScrollDownButton />
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
