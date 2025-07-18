"use client";

import { User, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Entry } from "@/lib/types";

export default function EntryList({
  approvedEntries,
  userEntries,
}: {
  approvedEntries: Entry[];
  userEntries: Entry[];
}) {
  const allEntries = [
    ...approvedEntries,
    ...userEntries.filter(
      (e) =>
        e.status === "pending" && !approvedEntries.some((ae) => ae.id === e.id)
    ),
  ];

  if (allEntries.length === 0) {
    return (
      <section className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800'>
          <MessageCircle className='text-foreground/80 size-12' />
        </div>
        <p className='text-foreground/80 text-lg'>No Guestbook entries yet</p>
        <p className='text-foreground/70 text-sm'>
          Be the first to add a lovely story
        </p>
      </section>
    );
  }

  return (
    <section className='5xl:gap-10 grid grid-cols-1 gap-6 lg:gap-8'>
      {allEntries.map((entry) => (
        <Card
          key={`entry-${entry.id}`}
          className='border-border/20 px-6 py-10 shadow-lg backdrop-blur-sm hover:shadow-xl lg:min-h-60'
        >
          <CardContent className='px-4 pt-2 pb-4'>
            <div className='flex items-start space-x-4'>
              <div className='min-w-0 flex-1 flex-col'>
                <div className='5xl:mb-7 mb-4 flex items-start justify-between lg:mb-6'>
                  {entry.status === "pending" && (
                    <div className='absolute top-2 right-2 rounded-full bg-yellow-200 px-2 py-0.5 text-xs text-yellow-800'>
                      <User className='mr-1 inline-block size-3' /> Pending
                      (only you)
                    </div>
                  )}
                  <div>
                    <h4 className='5xl:text-3xl 5xl:mb-1 mb-0.5 text-xl font-medium lg:text-2xl'>
                      {entry.name || "Anonymous"}
                    </h4>
                    <p className='5xl:text-xl text-purple-700 italic lg:text-lg dark:text-purple-300'>
                      {entry.relationship || "Unknown"}
                    </p>
                  </div>
                  <time className='text-accent-foreground/80 5xl:text-lg text-sm lg:text-base'>
                    {new Date(entry.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className='text-foreground/90 5xl:text-xl lg:text-lg'>
                  <q>{entry.message}</q>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
