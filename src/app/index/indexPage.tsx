import Image from "next/image";
import cityBoy from "../../../public/images/city_boy.png";
import workLady from "../../../public/images/work_lady.png";
import fashionLady from "../../../public/images/fashion_lady.png";
import Link from "next/link";
import { Tab, TabPanel } from "@/components/tab/Customtab";
import { Slider } from "@/components/slider/slider";
import { Carousel } from "@/components/carousel/carousel";

export default function IndexPage() {
  return (
    <>
      <div className="ip-banner">
        <div className="ip-banner__overlay">
          <div className="ip-banner-text">
            <p className="ip-banner-text__md">Gallarium</p>
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
          <Image
            className="ip-explore-cont-r-image"
            src={cityBoy}
            alt="city boy"
            width={270}
          />
          <Image
            className="ip-explore-cont-r-image animated"
            src={workLady}
            alt="city boy"
            width={270}
          />
          <Image
            className="ip-explore-cont-r-image animated"
            src={fashionLady}
            alt="city boy"
            width={270}
          />
        </div>
      </div>
      <div className="ip-about">
        <div className="ip-about-text">
          <p className="ip-about-text-md">About Gallarium</p>
          <p className="ip-about-text-sm">
            Lorem ipsum dolor sit amet consectetur. Viverra facilisis cursus
            vitae lectus tortor volutpat at a. Tincidunt fermentum volutpat sed
            turpis. Posuere diam nullam sit neque sodales amet nulla. Non in
            dignissim nulla volutpat eget malesuada aliquam amet id.
          </p>
        </div>

        <div className="ip-about-masonry">
          <div className="ip-about-masonry-subtext">
            <p className="ip-about-masonry-subtext-md">What make us special</p>
            <p className="ip-about-masonry-subtext-sm">
              Lorem ipsum dolor sit amet consectetur. Gravida tellus ut
              consequat odio dui commodo sit scelerisque pellentesque. Risus
              pretium tortor sed consequat nisl massa. Id dolor in dolor vitae
              feugiat blandit sagittis egestas. Tincidunt elit sit curabitur
              nunc nibh aliquam in lectus.{" "}
              <Link className="ip-about-masonry-subtext-link" href={"#"}>
                see more
              </Link>
            </p>
          </div>
          <div className="wrapper">
            <div className="wrapper-left"></div>
            <div className="cont">
              <div className="flex">
                <div className="box0"></div>
                <div className="box1"></div>
              </div>
              <div className="flex">
                <div className="box2"></div>
                <div className="box3"></div>
              </div>
            </div>
            <div className="wrapper-right"></div>
          </div>
        </div>
      </div>
      <div className="ip-fc">
        <div className="ip-fc-text">
          <p className="ip-fc-text-md">Featured categories</p>
        </div>
        <Tab>
          <TabPanel title="Nature">
            <Slider title="Nature" mb />
            <Slider title="Nature" backwards border />
          </TabPanel>
          <TabPanel title="Portraits">
            <Slider title="Portraits" backwards mb />
            <Slider title="Portraits" border />
          </TabPanel>
          <TabPanel title="Event">
            <Slider title="Event" mb />
            <Slider title="Event" backwards border />
          </TabPanel>
          <TabPanel title="Abstract">
            <Slider title="Abstract" backwards mb />
            <Slider title="Abstract" border />
          </TabPanel>
          <TabPanel title="Culture">
            <Slider title="culture" mb />
            <Slider title="culture" backwards border />
          </TabPanel>
        </Tab>
      </div>
      <div className="ip-spotlight">
        <div className="ip-spotlight-text">
          <p className="ip-spotlight-text-md">Photographer,s Spotlight</p>
          <p className="ip-spotlight-text-sm">Meet the Artists</p>
        </div>
        <div>
          <Carousel>
            <div>hey</div>
            <div>hey</div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
