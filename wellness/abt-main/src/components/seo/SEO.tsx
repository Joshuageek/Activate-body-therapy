import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  index?: boolean;
  type?: string;
}

const createOrUpdateTag = (
  selector: string,
  attr: string,
  value: string,
  tagName = "meta"
) => {
  let element = document.head.querySelector(selector) as HTMLElement | null;
  if (!element) {
    element = document.createElement(tagName);
    const attributeMatch = selector.match(/\[(.*?)=['"](.*?)['"]\]/);
    if (attributeMatch) {
      element.setAttribute(attributeMatch[1], attributeMatch[2]);
    }
    if (tagName === "link" && selector.includes("rel='canonical'")) {
      element.setAttribute("rel", "canonical");
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
};

const SEO = ({
  title,
  description,
  url,
  image,
  index = true,
  type = "website",
}: SeoProps) => {
  useEffect(() => {
    const pageTitle = `${title}`;
    document.title = pageTitle;

    createOrUpdateTag("meta[name='description']", "content", description);
    createOrUpdateTag("meta[name='keywords']", "content", "physiotherapy, pain management, sports rehabilitation, wellness clinic, massage therapy, dry needling, IV therapy");
    createOrUpdateTag("meta[name='robots']", "content", index ? "index, follow" : "noindex, nofollow");
    createOrUpdateTag("link[rel='canonical']", "href", url, "link");

    createOrUpdateTag("meta[property='og:title']", "content", pageTitle);
    createOrUpdateTag("meta[property='og:description']", "content", description);
    createOrUpdateTag("meta[property='og:type']", "content", type);
    createOrUpdateTag("meta[property='og:url']", "content", url);
    createOrUpdateTag("meta[property='og:image']", "content", image);

    createOrUpdateTag("meta[name='twitter:card']", "content", "summary_large_image");
    createOrUpdateTag("meta[name='twitter:title']", "content", pageTitle);
    createOrUpdateTag("meta[name='twitter:description']", "content", description);
    createOrUpdateTag("meta[name='twitter:image']", "content", image);
  }, [title, description, url, image, index, type]);

  return null;
};

export default SEO;
