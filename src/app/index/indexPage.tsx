import Image from "next/image";
import cityBoy from "../../../public/images/city_boy.png";
import workLady from "../../../public/images/work_lady.png";
import fashionLady from "../../../public/images/fashion_lady.png";
import Link from "next/link";

export default function IndexPage() {
  const masonryItems = [
    {
      width: 120,
      height: 120,
      header: "What make us special",
      bodyText:
        "Lorem ipsum dolor sit amet consectetur. Gravida tellus ut consequat odio dui commodo sit scelerisque pellentesque. Risus pretium tortor sed consequat nisl massa. Id dolor in dolor vitae feugiat blandit sagittis egestas. Tincidunt elit sit curabitur nunc nibh aliquam in lectus.",
    },

    { width: 400, height: 315 },
    { width: 224, height: 219 },
    { width: 224, height: 219 },
    { width: 224, height: 219 },
    { width: 188, height: 155 },
    { width: 400, height: 315 },
    { width: 188, height: 155 },
  ];
  return (
    <>
      <div className="ip-banner">
        <div className="ip-banner__overlay">
          <div className="ip-banner-text">
            <p className="ip-banner-text__md">Gallerium</p>
            <p className="ip-banner-text__sm">
              Discover, Organize, Showcase...
            </p>
          </div>
        </div>
      </div>
      <div className="ip-explore-cont">
        <div className="ip-explore-cont-l">
          <div>
            <p className="ip-explore-cont-l__text-md">Explore the visuals</p>
            <p className="ip-explore-cont-l__text-sm">
              Dive into our diverse collection of images showcasing creativity
              and beauty
            </p>
          </div>

          <button className="ip-explore-cont-l__button">Get started</button>
        </div>
        <div className="ip-explore-cont-r">
          <Image src={cityBoy} alt="city boy" width={270} />
          <Image src={workLady} alt="city boy" width={270} />
          <Image src={fashionLady} alt="city boy" width={270} />
        </div>
      </div>
      <div className="ip-about">
        <div className="ip-about-text">
          <p className="ip-about-text-md">About Gallerium</p>
          <p className="ip-about-text-sm">
            Lorem ipsum dolor sit amet consectetur. Viverra facilisis cursus
            vitae lectus tortor volutpat at a. Tincidunt fermentum volutpat sed
            turpis. Posuere diam nullam sit neque sodales amet nulla. Non in
            dignissim nulla volutpat eget malesuada aliquam amet id.
          </p>
        </div>

        <div className="ip-about-masonry">
          {masonryItems.map((item, i) => {
            const widthHeightRatio = item.height / item.width;
            const galleryHeight = Math.ceil(item.height * widthHeightRatio);
            const photoRowspan = Math.ceil(galleryHeight / 25) + 3;

            return (
              <div
                style={{
                  width: `${item.width}px`,
                  height: `${galleryHeight}px`,
                  gridRow: `span ${photoRowspan}`,
                  gridColumn: `span ${photoRowspan}`,
                }}
                className="ip-about-masonry-item"
                key={i}
              >
                {item.header && <div>{item.header}</div>}
                {item.bodyText && (
                  <div>
                    {item.bodyText} <Link href="#">see more</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="ip-fc"></div>
    </>
  );
}
