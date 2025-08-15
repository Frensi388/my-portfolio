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
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <Image src={props.src} alt={props.alt} fill className={props.className} />
  );
};

export default MediaItem;
