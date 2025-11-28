import { groq } from "next-sanity";

export const IMAGES_QUERY = groq`*[_type == "galleryImage"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  image,
  "category": category->title,
  description,
  publishedAt
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  description
}`;
