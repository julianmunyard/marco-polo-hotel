"use client";

import { useState, useEffect } from "react";
import { getGalleryImages } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/utils";

interface GalleryImage {
  _id: string;
  image: any;
  alt: string;
  order: number;
}

// Fallback images - original gallery images
const fallbackImages = [
  { id: 1, src: "/marco%20polo%20images/starry%20marco.jpg", alt: "Starry Marco Polo Motel" },
  { id: 2, src: "/marco%20polo%20images/inside/marco%20side%20on%20.jpg", alt: "Marco Polo Motel Side View" },
  { id: 3, src: "/marco%20polo%20images/inside/bathroom.avif", alt: "Bathroom" },
  { id: 4, src: "/marco%20polo%20images/inside/inside%202.avif", alt: "Inside View 2" },
  { id: 5, src: "/marco%20polo%20images/inside/inside%203.avif", alt: "Inside View 3" },
  { id: 6, src: "/marco%20polo%20images/inside/inside%20rooms.avif", alt: "Inside Rooms" },
  { id: 7, src: "/marco%20polo%20images/inside/outside.avif", alt: "Outside View" },
  { id: 8, src: "/marco%20polo%20images/inside/shower.webp", alt: "Shower" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<Array<{ id: string; src: string; alt: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const galleryImages = await getGalleryImages();
        // If Sanity has images, use those; otherwise use fallback
        if (galleryImages && galleryImages.length > 0) {
          const formattedImages = galleryImages.map((img: GalleryImage) => ({
            id: img._id,
            src: urlFor(img.image).width(800).height(800).url(),
            alt: img.alt,
          }));
          setImages(formattedImages);
        } else {
          // Use fallback images if Sanity is empty
          setImages(fallbackImages);
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        // Use fallback images if Sanity fails
        setImages(fallbackImages);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) {
    return (
      <section className="section bg-section">
        <div className="container">
          <div className="text-center mb-12 px-4">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
              Gallery
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Loading gallery...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-section">
      <div className="container">
        <div className="text-center mb-12 px-4">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
            Gallery
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern, comfortable accommodations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
              onClick={() => setSelectedImage(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(index);
                }
              }}
              aria-label={`View image ${image.id}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))}
          </div>
        )}

        {selectedImage !== null && images.length > 0 && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="max-w-5xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-xl p-4 md:p-6 max-h-[90vh] overflow-y-auto">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {images[selectedImage]?.src ? (
                    <img 
                      src={images[selectedImage].src} 
                      alt={images[selectedImage].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 px-4">Image {selectedImage + 1}</span>
                  )}
                </div>
                <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
                  <button
                    onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
                    type="button"
                  >
                    Previous
                  </button>
                  <span className="text-sm md:text-base text-gray-600 whitespace-nowrap">
                    {selectedImage + 1} of {images.length}
                  </span>
                  <button
                    onClick={() => setSelectedImage(Math.min(images.length - 1, selectedImage + 1))}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
                    type="button"
                  >
                    Next
                  </button>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
