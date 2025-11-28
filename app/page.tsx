import GalleryContainer from "@/components/GalleryContainer";
import { images as staticImages } from "@/lib/data";
import { client } from "@/sanity/lib/client";
import { IMAGES_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every 60 seconds

async function getImages() {
  try {
    // Check if Sanity is configured
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const sanityImages = await client.fetch(IMAGES_QUERY);
      
      if (sanityImages && sanityImages.length > 0) {
        return sanityImages.map((img: any) => ({
          id: img._id,
          src: urlForImage(img.image).url(),
          title: img.title,
          category: img.category,
          description: img.description,
        }));
      }
    }
    return staticImages;
  } catch (error) {
    console.error("Error fetching images from Sanity:", error);
    return staticImages;
  }
}

export default async function Home() {
  const images = await getImages();

  return <GalleryContainer initialImages={images} />;
}
