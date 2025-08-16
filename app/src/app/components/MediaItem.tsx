"use client";

import Image from "next/image";

type MediaItemProps = {
  src: string;
  alt: string;
  type: "image" | "video";
  className?: string;
  poster?: string;
};

const MediaItem = (props: MediaItemProps) => {
  if (props.type === "video") {
    return (
      <video
        src={props.src}
        poster={props.poster}
        className={props.className}
        controls
        muted
        playsInline
        preload="metadata"
        style={{ backgroundColor: "#f3f4f6" }} // Light gray background for loading
      >
        <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
          Video not supported or failed to load
        </div>
      </video>
    );
  }

  return (
    <Image src={props.src} alt={props.alt} fill className={props.className} />
  );
};

export default MediaItem;
