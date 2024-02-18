import { SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { getLandingPageData } from "@/data/getLandingPageData";

import "./team.scss";

const Team = async () => {
  const { team_section } = await getLandingPageData();

  if (team_section.length === 0) {
    return;
  }

  return (
    <section className="team">
      <Container>
        <div className="team__content">
          <h6 className="team__title">Our Team</h6>
          <Slider data={team_section} />
        </div>
      </Container>
    </section>
  );
};

export default Team;
