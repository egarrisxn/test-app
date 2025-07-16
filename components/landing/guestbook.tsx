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
      className='bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-24 pb-40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <SectionHeader
            header='Guestbook'
            subheader='Share your thoughts and stories.'
          />
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
            <section className='order-2 lg:order-1'>
              <EntryList
                approvedEntries={approvedEntries}
                userEntries={displayedUserEntries}
              />
            </section>
            <section className='order-1 lg:order-2'>
              <EntryForm onEntrySubmitted={handleEntrySubmitted} />
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
// import EntryList from "@/components/landing/entry-list";
// import EntryForm from "@/components/landing/entry-form";
// import { mockApprovedEntries } from "@/lib/data";
// import type { Entry } from "@/lib/types";

// export default function Guestbook() {
//   const [userEntries, setUserEntries] = useState<Entry[]>([]);
//   const [approvedEntries] = useState<Entry[]>(mockApprovedEntries);

//   const handleEntrySubmitted = (entry: Entry) => {
//     setUserEntries((prev) => [entry, ...prev]);
//   };

//   return (
//     <div
//       id='guestbook'
//       className='bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-24 pb-40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
//     >
//       <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//         <div className='space-y-6'>
//           <SectionHeader
//             header='Guestbook'
//             subheader='Share your thoughts and stories.'
//           />
//           <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
//             <section className='order-2 lg:order-1'>
//               <EntryList
//                 approvedEntries={approvedEntries}
//                 userEntries={userEntries}
//               />
//             </section>
//             <section className='order-1 lg:order-2'>
//               <EntryForm onEntrySubmitted={handleEntrySubmitted} />
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
