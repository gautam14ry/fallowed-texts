import Image from "next/image";
import { Button } from "../ui/button";
import Container from "../ui/container/container";

import "./hero-style.scss";

const Hero = ({ data }: any) => {
  const {
    title,
    description,
    cta_button_text,
    first_image,
    second_image,
    third_image,
  } = data;
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
            />
            <Image
              src={second_image.filename}
              alt={second_image.alt}
              className="hero__image hero__image--second"
              width={754}
              height={397}
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
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
