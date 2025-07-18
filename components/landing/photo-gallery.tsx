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
      id='photogallery'
      className='5xl:py-32 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
        <div className='space-y-6'>
          <SectionHeader
            header='Photo Gallery'
            subheader='Share your cherished memories with photos.'
          />
          <div className='5xl:gap-16 grid grid-cols-1 gap-6 lg:gap-12'>
            <section>
              <PhotoGrid
                approvedPhotos={approvedPhotos}
                userPhotos={displayedUserPhotos}
              />
            </section>
            <section>
              <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
