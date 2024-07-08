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
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

  useEffect(() => {
    let mediaIndex = 1;

    const fetchNextMedia = () => {
      const mediaType = mediaIndex <= 12 ? "png" : "gif"; // Example: switch between png and gif
      const mediaSrc = `${MEDIA_FOLDER}/img${mediaIndex}.${mediaType}`;

      // Preload media
      const media = new Image();
      media.src = mediaSrc;

      const newItem: MediaItem = {
        id: Date.now(),
        x: 0, // Set initial position at (0, 0); adjust as needed
        y: 0,
        src: mediaSrc,
      };

      setItems((prevItems) => {
        // Append latest item to the end, ensuring it's rendered on top
        const updatedItems = [...prevItems, newItem].slice(-MAX_ITEMS);
        return updatedItems;
      });

      mediaIndex = (mediaIndex % TOTAL_IMAGES) + 1; // Cycle through all images
    };

    const handleMouseMove = (event: MouseEvent) => {
      fetchNextMedia();
      // Update position of latest item to mouse coordinates
      setItems((prevItems) =>
        prevItems.map((item, index) => {
          if (index === prevItems.length - 1) {
            return { ...item, x: event.pageX - IMAGE_SIZE / 2, y: event.pageY - IMAGE_SIZE / 2 };
          }
          return item;
        })
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (items.length > 0 && !currentlyPlaying) {
      setCurrentlyPlaying(true);
      setTimeout(() => {
        setItems((prevItems) => prevItems.slice(1)); // Remove the oldest item
        setCurrentlyPlaying(false);
      }, 400);
    }
  }, [items, currentlyPlaying]);

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
