import Image from "next/image";
import cityBoy from "../../../public/images/city_boy.png";
import workLady from "../../../public/images/work_lady.png";
import fashionLady from "../../../public/images/fashion_lady.png";
import Link from "next/link";
import { Tab, TabPanel } from "@/components/tab/Customtab";
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
          <Image src={cityBoy} alt="city boy" width={270} />
          <Image src={workLady} alt="city boy" width={270} />
          <Image src={fashionLady} alt="city boy" width={270} />
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
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptates corrupti corporis repudiandae nostrum sed consectetur
              modi voluptatum velit quam sunt asperiores error, rerum repellat
              quae exercitationem, odit expedita id, accusamus labore excepturi!
              Qui dolores, quidem consequatur similique iure rerum?
            </div>
          </TabPanel>
          <TabPanel title="Portraits">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              soluta temporibus dolor totam illo impedit similique quod
              veritatis? Velit perferendis distinctio, iure aperiam nisi
              molestiae similique commodi voluptatum, dolore iusto excepturi
              sapiente nostrum accusamus. Perferendis doloremque odit deserunt
              sunt laboriosam.
            </div>
          </TabPanel>
          <TabPanel title="Event">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              ssamus. Perferendis doloremque odit deserunt sunt laboriosam.
            </div>
          </TabPanel>
          <TabPanel title="Abstract">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              ssamus. Perferendis doloremque odit deserunt sunt laboriosam.
            </div>
          </TabPanel>
          <TabPanel title="culture">
            <Carousel title="culture" />
            <Carousel title="culture" />
          </TabPanel>
        </Tab>
      </div>
    </>
  );
}
