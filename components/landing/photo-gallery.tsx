"use client";

import { useState } from "react";
import SectionHeader from "@/components/landing/section-header";
import PhotoUpload from "@/components/landing/photo-upload";
import PhotoGrid from "@/components/landing/photo-grid";
import { mockApprovedPhotos, mockPendingPhotos } from "@/lib/data";
import type { Photo } from "@/lib/types";

export default function PhotoGallery() {
  const [userPhotos, setUserPhotos] = useState<Photo[]>([]);

  const approvedPhotos = mockApprovedPhotos;
  const yourPendingPhotos = mockPendingPhotos.filter((p) => p.name === "You");
  const displayedUserPhotos = [...yourPendingPhotos, ...userPhotos];

  const handlePhotoSubmitted = (photo: Photo) => {
    setUserPhotos((prev) => [photo, ...prev]);
  };

  return (
    <div
      id='photos'
      className='bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <SectionHeader
            header='Photo Gallery'
            subheader='Share your cherished memories with photos.'
          />
          <div className='grid grid-cols-1 gap-6 lg:gap-12'>
            <section className='order-2 lg:order-1'>
              <PhotoGrid
                approvedPhotos={approvedPhotos}
                userPhotos={displayedUserPhotos}
              />
            </section>
            <section className='order-1 lg:order-2'>
              <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import SectionHeader from "@/components/landing/section-header";
// import PhotoUpload from "@/components/landing/photo-upload";
// import PhotoGrid from "@/components/landing/photo-grid";
// import { mockApprovedPhotos } from "@/lib/data";
// import type { Photo } from "@/lib/types";

// export default function PhotoGallery() {
//   const [userPhotos, setUserPhotos] = useState<Photo[]>([]);
//   const [approvedPhotos] = useState<Photo[]>(mockApprovedPhotos);

//   const handlePhotoSubmitted = (photo: Photo) => {
//     setUserPhotos((prev) => [photo, ...prev]);
//   };

//   return (
//     <div
//       id='photos'
//       className='bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
//     >
//       <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//         <div className='space-y-6'>
//           <SectionHeader
//             header='Photo Gallery'
//             subheader='Share your cherished memories with photos.'
//           />
//           <div className='grid grid-cols-1 gap-6 lg:gap-12'>
//             <section className='order-2 lg:order-1'>
//               <PhotoGrid
//                 approvedPhotos={approvedPhotos}
//                 userPhotos={userPhotos}
//               />
//             </section>
//             <section className='order-1 lg:order-2'>
//               <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
