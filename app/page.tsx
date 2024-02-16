import { Hero } from "@/components/hero";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();
  const { hero_section } = data.story.content;
  
  return <Hero data={hero_section[0]} />;
}

export async function fetchData() {
  // let sbParams = { version: "published" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(
    `cdn/stories/landing-page`,
    { version: "published" },
    { cache: "no-store" }
  );
}
