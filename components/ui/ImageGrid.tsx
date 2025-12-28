import Image from "next/image";

interface ImageGridItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGridProps {
  images: ImageGridItem[];
  columns?: 2 | 3 | 4;
  gap?: "small" | "medium" | "large";
  aspectRatio?: "square" | "portrait" | "landscape";
}

export default function ImageGrid({
  images,
  columns = 3,
  gap = "medium",
  aspectRatio = "square",
}: ImageGridProps) {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
  };

  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
      {images.map((image, index) => (
        <div key={index} className="group cursor-pointer">
          <div className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden bg-brand-800`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {(image.title || image.description) && (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  {image.title && (
                    <h3 className="heading-sm text-brand-50 mb-2">
                      {image.title}
                    </h3>
                  )}
                  {image.description && (
                    <p className="text-sm text-brand-200">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
