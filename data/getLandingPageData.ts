import { getStoryblokApi } from "@storyblok/react/rsc";

type VesionType = "published" | "draft";

export async function getLandingPageData() {
  let version = process.env.SB_DATA_VERSION as VesionType;

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(
    `cdn/stories/landing-page`,
    { version },
    { cache: "no-store" }
  );

  const { hero_section, team_section } = data.story.content;

  return {
    hero_section: hero_section,
    team_section,
  };
}
