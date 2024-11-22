export const ImageSkeleton = () => {
  const boxes = Array.from({ length: 20 }, () => ({
    height: Math.floor(Math.random() * 568) + 264,
  }));
  return (
    <div className="imageSkeleton">
      {boxes.map((box, i) => (
        <div
          className="imageSkeleton-box"
          key={i}
          style={{ height: `${box.height > 568 ? 264 : box.height}px` }}
        ></div>
      ))}
    </div>
  );
};
