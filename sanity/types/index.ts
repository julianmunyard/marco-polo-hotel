export interface GalleryImage {
  _id: string;
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  alt: string;
  order: number;
}

export interface HeroContent {
  backgroundImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  subtitle: string;
  supportingText: string;
}

export interface RoomPrice {
  _id: string;
  roomId: string;
  price: number;
}
