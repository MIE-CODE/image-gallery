"use client";
import type { Photo } from "@/models/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Props = {
  photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
  const [like, setLike] = useState(false);
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(270 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 3;
  const colors = [
    "#7D7D7D",
    "#A9A9A9",
    "#B2A9A1",
    "#C0C0C0",
    "#8B8682",
    "#696969",
    "#BEBEBE",
    "#778899",
    "#D3D3D3",
    "#A2A2A2",
  ];
  return (
    <div
      style={{
        gridRow: `span ${photoSpans}`,
      }}
      className="gallery-item"
    >
      <div>
        <div
          style={{
            backgroundColor: !photo
              ? `${colors[Math.floor(Math.random() * (colors.length - 1)) + 1]}`
              : "",
          }}
          className="gallery-placeholder"
        >
          <Image
            loading="lazy"
            className="gallery-image"
            src={photo.src.large}
            alt={photo.alt}
            width={270}
            height={galleryHeight}
            sizes="270px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
          <Link href={`/pic/${photo.id}`} className="gallery-item-overlay">
            <div className="gallery-item-overlay">
              {photo.alt}

              <div>
                <button onClick={() => setLike(!like)} style={{ zIndex: "12" }}>
                  <div> {photo.liked ? "dislike" : "like"}</div>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="gallery-avatar-cont">
        <div className="gallery-avatar"></div>
        <p>{photo.photographer}</p>
      </div>
    </div>
  );
}
