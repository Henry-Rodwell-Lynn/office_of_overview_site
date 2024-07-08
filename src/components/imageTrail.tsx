import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaItem {
  id: number;
  x: number;
  y: number;
  src: string;
}

const MAX_ITEMS = 48;
const MEDIA_FOLDER = "/aboutMe";
const IMAGE_SIZE = 300; // Size for media trail items
const TOTAL_IMAGES = 12; // Total number of images in the folder

const ImageTrail: React.FC = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [mediaIndex, setMediaIndex] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Determine next media to be shown
      const mediaType = mediaIndex <= 12 ? "png" : "gif"; // Example: switch between png and gif
      const mediaSrc = `${MEDIA_FOLDER}/img${mediaIndex}.${mediaType}`;

      // Update position of the latest item to mouse coordinates
      const newItem: MediaItem = {
        id: Date.now(),
        x: event.pageX - IMAGE_SIZE / 2,
        y: event.pageY - IMAGE_SIZE / 2,
        src: mediaSrc,
      };

      setItems((prevItems) => [...prevItems, newItem].slice(-MAX_ITEMS));

      // Cycle through all images
      setMediaIndex((prevIndex) => (prevIndex % TOTAL_IMAGES) + 1);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mediaIndex]); // Dependency on mediaIndex to update media source

  useEffect(() => {
    if (items.length > 0) {
      const timer = setTimeout(() => {
        setItems((prevItems) => prevItems.slice(1)); // Remove the oldest item
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [items]);

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }} // Stagger animation
            style={{ left: item.x, top: item.y, zIndex: index }} // Ensure latest item is on top
            className="absolute w-[300px] h-[300px] pointer-events-none"
          >
            {item.src.toLowerCase().endsWith(".png") ||
            item.src.toLowerCase().endsWith(".jpg") ||
            item.src.toLowerCase().endsWith(".jpeg") ? (
              <img src={item.src} alt="" className="w-full h-full object-contain" />
            ) : item.src.toLowerCase().endsWith(".gif") ? (
              <img src={item.src} alt="" className="w-full h-full object-contain" />
            ) : (
              <video src={item.src} autoPlay muted loop className="w-full h-full object-cover" />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageTrail;
