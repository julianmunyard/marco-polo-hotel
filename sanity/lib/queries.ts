import { client } from './client';

export interface GalleryImage {
  _id: string;
  image: any;
  alt: string;
  order: number;
}

export interface HeroContent {
  backgroundImage: any;
  subtitle: string;
  supportingText: string;
}

export interface RoomPrice {
  _id: string;
  roomId: string;
  price: number;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "galleryImage"] | order(order asc) {
    _id,
    image,
    alt,
    order
  }`;
  
  return await client.fetch(query);
}

export async function getHeroContent(): Promise<HeroContent | null> {
  const query = `*[_type == "hero"][0] {
    backgroundImage,
    subtitle,
    supportingText
  }`;
  
  const result = await client.fetch(query);
  return result || null;
}

export async function getRoomPrices(): Promise<Record<string, number>> {
  const query = `*[_type == "roomPrice"] {
    roomId,
    price
  }`;
  
  const prices = await client.fetch(query);
  
  // Convert array to object keyed by roomId
  const priceMap: Record<string, number> = {};
  prices.forEach((item: RoomPrice) => {
    priceMap[item.roomId] = item.price;
  });
  
  return priceMap;
}
