import PhotoCard from "@/components/admin/photo-card";
import EntryCard from "@/components/admin/entry-card";
import type { Photo, Entry } from "@/lib/types";

interface AllSubmissionsSectionProps {
  photos: Photo[];
  entries: Entry[];
  onPhotoAction: (id: string, action: "approve" | "deny" | "delete") => void;
  onEntryAction: (id: string, action: "approve" | "deny" | "delete") => void;
}

export default function AllSubmissionsSection({
  photos,
  entries,
  onPhotoAction,
  onEntryAction,
}: AllSubmissionsSectionProps) {
  return (
    <div className='space-y-8'>
      {photos.length > 0 && (
        <div>
          <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
            All Photos
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isPending={false}
                onApprove={() => onPhotoAction(photo.id, "approve")}
                onDeny={() => onPhotoAction(photo.id, "deny")}
                onDelete={() => onPhotoAction(photo.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}

      {entries.length > 0 && (
        <div>
          <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
            All Entries
          </h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {entries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                isPending={false}
                onApprove={() => onEntryAction(entry.id, "approve")}
                onDeny={() => onEntryAction(entry.id, "deny")}
                onDelete={() => onEntryAction(entry.id, "delete")}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
