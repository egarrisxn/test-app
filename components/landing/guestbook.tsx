"use client";

import { useState } from "react";
import SectionHeader from "@/components/landing/section-header";
import EntryList from "@/components/landing/entry-list";
import EntryForm from "@/components/landing/entry-form";
import { mockApprovedEntries } from "@/lib/data";
import type { Entry } from "@/lib/types";

export default function Guestbook() {
  const [userEntries, setUserEntries] = useState<Entry[]>([]);
  const approvedEntries = mockApprovedEntries;
  const yourPendingEntries: Entry[] = [];
  const displayedUserEntries = [...yourPendingEntries, ...userEntries];

  const handleEntrySubmitted = (entry: Entry) => {
    setUserEntries((prev) => [entry, ...prev]);
  };

  return (
    <div
      id='guestbook'
      className='5xl:py-32 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
        <div className='space-y-6'>
          <SectionHeader
            header='Guestbook'
            subheader='Share your thoughts and stories.'
          />
          <div className='5xl:gap-16 grid grid-cols-1 gap-6 lg:gap-12'>
            <section>
              <EntryList
                approvedEntries={approvedEntries}
                userEntries={displayedUserEntries}
              />
            </section>
            <section>
              <EntryForm onEntrySubmitted={handleEntrySubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
