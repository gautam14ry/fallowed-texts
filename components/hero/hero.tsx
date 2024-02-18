import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container/container";
import { getLandingPageData } from "@/data/getLandingPageData";

import "./hero.scss";

const Hero = async () => {
  const { hero_section } = await getLandingPageData();

  if (hero_section.length === 0) {
    return;
  }

  const {
    first_image,
    second_image,
    title,
    description,
    cta_button_text,
    third_image,
  } = hero_section[0];

  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <div className="hero__row hero__row--first">
            <Image
              src={first_image.filename}
              alt={first_image.alt}
              className="hero__image hero__image--first"
              width={486}
              height={397}
              priority
            />
            <Image
              src={second_image.filename}
              alt={second_image.alt}
              className="hero__image hero__image--second"
              width={754}
              height={397}
              priority
            />
          </div>
          <div className="hero__row hero__row--second">
            <div className="hero__card">
              <div className="hero__card__info">
                <h2 className="hero__card__title">{title}</h2>
                <p className="hero__card__description body-xl">{description}</p>
              </div>
              <Button>{cta_button_text}</Button>
            </div>
            <Image
              src={third_image.filename}
              alt={third_image.alt}
              className="hero__image hero__image--third"
              width={376}
              height={376}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
