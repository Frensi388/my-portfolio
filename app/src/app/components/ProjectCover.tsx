"use client";

import Image from "next/image";

type ProjectCoverProps = {
  media: {
    src: string;
    type: "image" | "video";
    alt: string;
  };
  fallbackSrc: string;
  fallbackAlt: string;
  className?: string;
};

const ProjectCover = (props: ProjectCoverProps) => {
  if (props.media.type === "video") {
    return (
      <video
        src={props.media.src}
        className={props.className}
        muted
        loop
        playsInline
        preload="metadata"
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
        }}
      />
    );
  }

  return (
    <Image
      src={props.media.src || props.fallbackSrc}
      alt={props.media.alt || props.fallbackAlt}
      fill
      className={props.className}
    />
  );
};

export default ProjectCover;
