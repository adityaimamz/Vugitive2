'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
function Carousel() {
  const [activeItem, setActiveItem] = useState(cards[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-[40px] font-bold tracking-tight text-black uppercase  ml-5">@vugitive</h2>
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing">
        {cards.slice(0, 8)?.map((itemData, index) => {
          return (
            <motion.div className="min-w-[20rem] min-h-[25rem] p-2">
              <Image
                src={itemData?.url}
                width={400}
                height={400}
                alt="img"
                className="w-full h-full object-cover pointer-events-none  rounded-md"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
export default Carousel;

const cards = [
  {
    url: "/products/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/products/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/products/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/products/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/products/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/products/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/products/7.jpg",
    title: "Title 6",
    id: 7,
  },
];
