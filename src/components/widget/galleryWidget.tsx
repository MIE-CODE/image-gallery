import Search from "../Navbar/Search";

export default function GalleryWidget() {
  return (
    <div className="gallery-flex">
      <div className="create-cont">
        <div className="create-text-cont">
          <span className="create-line"></span>
          <p className="create-text">Have a stunning photo to share?</p>
        </div>
        <button className="create-action">Submit</button>
      </div>
      <Search />
    </div>
  );
}
