"use client";

import { useState } from "react";
import { Image as ImageIcon, Heart, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/admin/stat-card";
import PendingSection from "@/components/admin/pending";
import AllSubmissionsSection from "@/components/admin/all-submissions";
import type { Photo, Entry } from "@/lib/types";

export default function AdminDashboard({
  initialAdminPhotos,
  initialAdminEntries,
}: {
  initialAdminPhotos: Photo[];
  initialAdminEntries: Entry[];
}) {
  const [photos, setPhotos] = useState<Photo[]>(initialAdminPhotos);
  const [entries, setEntries] = useState<Entry[]>(initialAdminEntries);
  const [activeTab, setActiveTab] = useState<"pending" | "all">("pending");

  const pendingPhotos = photos.filter((p) => p.status === "pending");
  const pendingEntries = entries.filter((e) => e.status === "pending");

  const handlePhotoAction = (
    id: string,
    action: "approve" | "deny" | "delete"
  ) => {
    setPhotos((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? {
                ...p,
                status:
                  action === "approve"
                    ? "approved"
                    : action === "deny"
                      ? "denied"
                      : p.status,
              }
            : p
        )
        .filter((p) => (action === "delete" ? p.id !== id : true))
    );
  };

  const handleEntryAction = (
    id: string,
    action: "approve" | "deny" | "delete"
  ) => {
    setEntries((prev) =>
      prev
        .map((e) =>
          e.id === id
            ? {
                ...e,
                status:
                  action === "approve"
                    ? "approved"
                    : action === "deny"
                      ? "denied"
                      : e.status,
              }
            : e
        )
        .filter((e) => (action === "delete" ? e.id !== id : true))
    );
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-4'>
        <StatCard
          icon={<Clock />}
          className='text-yellow-500'
          label='Pending Photos'
          count={pendingPhotos.length}
        />
        <StatCard
          icon={<Clock />}
          className='text-yellow-500'
          label='Pending Entries'
          count={pendingEntries.length}
        />
        <StatCard
          icon={<ImageIcon />}
          className='text-blue-500'
          label='Total Photos'
          count={photos.length}
        />
        <StatCard
          icon={<Heart />}
          className='text-red-500'
          label='Total Entries'
          count={entries.length}
        />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as "pending" | "all")}
        className='w-full'
      >
        <TabsList className='mb-8 grid w-full grid-cols-2'>
          <TabsTrigger value='pending'>
            Pending Approval ({pendingPhotos.length + pendingEntries.length})
          </TabsTrigger>
          <TabsTrigger value='all'>All Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value='pending'>
          <PendingSection
            pendingPhotos={pendingPhotos}
            pendingEntries={pendingEntries}
            onPhotoAction={handlePhotoAction}
            onEntryAction={handleEntryAction}
          />
        </TabsContent>

        <TabsContent value='all'>
          <AllSubmissionsSection
            photos={photos}
            entries={entries}
            onPhotoAction={handlePhotoAction}
            onEntryAction={handleEntryAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
