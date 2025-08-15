export type MediaFile = {
  src: string;
  type: "image" | "video";
  alt: string;
  poster?: string; // For video poster/thumbnail
};

/**
 * Get media files for a project based on the project folder name
 * This function dynamically loads images and videos from the public folder
 */
export const getProjectMedia = (projectKey: string): MediaFile[] => {
  // Project media mapping based on actual files in public folder
  // Videos are always placed first, followed by images
  const projectMediaMap: Record<string, MediaFile[]> = {
    ithake: [
      {
        src: "/ithake/image-1.png",
        type: "image",
        alt: "Ithake Climate App Dashboard",
      },
      {
        src: "/ithake/image-2.png",
        type: "image",
        alt: "Ithake Mobility Tracking",
      },
      {
        src: "/ithake/image-3.png",
        type: "image",
        alt: "Ithake Carbon Footprint",
      },
    ],
    janah: [
      // Video first
      {
        src: "/janah/video-1.mov",
        type: "video",
        alt: "Janah Platform Demo",
        poster: "/janah/image-1.png",
      },
      // Then images
      {
        src: "/janah/image-1.png",
        type: "image",
        alt: "Janah Investment Dashboard",
      },
      {
        src: "/janah/image-2.png",
        type: "image",
        alt: "Janah Portfolio Analytics",
      },
      {
        src: "/janah/image-3.png",
        type: "image",
        alt: "Janah Investment Insights",
      },
    ],
    ibitibi: [
      // Video first
      {
        src: "/ibitibi/video-1.mov",
        type: "video",
        alt: "Ibitibi Platform Demo",
        poster: "/ibitibi/image-1.png",
      },
      // Then images
      {
        src: "/ibitibi/image-1.png",
        type: "image",
        alt: "Ibitibi Platform Overview",
      },
      {
        src: "/ibitibi/image-2.png",
        type: "image",
        alt: "Ibitibi Features",
      },
      {
        src: "/ibitibi/image-3.png",
        type: "image",
        alt: "Ibitibi User Interface",
      },
      {
        src: "/ibitibi/image-4.png",
        type: "image",
        alt: "Ibitibi Dashboard",
      },
      {
        src: "/ibitibi/image-5.png",
        type: "image",
        alt: "Ibitibi Analytics",
      },
      {
        src: "/ibitibi/image-6.png",
        type: "image",
        alt: "Ibitibi Settings",
      },
      {
        src: "/ibitibi/image-7.png",
        type: "image",
        alt: "Ibitibi Mobile View",
      },
      {
        src: "/ibitibi/image-8.png",
        type: "image",
        alt: "Ibitibi Reports",
      },
      {
        src: "/ibitibi/image-9.png",
        type: "image",
        alt: "Ibitibi Integration",
      },
    ],
    // Other projects will fall back to legacy images until media files are added
  };

  return projectMediaMap[projectKey] || [];
};

/**
 * Convert legacy image URLs to MediaFile format
 */
export const convertLegacyImages = (images: string[]): MediaFile[] => {
  return images.map((src, index) => ({
    src,
    type: "image" as const,
    alt: `Project Image ${index + 1}`,
  }));
};
