'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Hotspot {
  id: number;
  x: number; // percentage
  y: number; // percentage
  product: {
    name: string;
    price: string;
    image: string;
  };
}

interface HotspotImageProps {
  imageSrc: string;
  hotspots: Hotspot[];
}

export default function HotspotImage({ imageSrc, hotspots }: HotspotImageProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
      <Image
        src={imageSrc}
        alt="Construction Site"
        fill
        className="object-cover"
      />
      
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          <button
            className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform"
            onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
            onMouseEnter={() => setActiveId(spot.id)}
          >
            +
          </button>

          <AnimatePresence>
            {activeId === spot.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute z-10 bg-white p-4 rounded-lg shadow-xl w-64 -translate-x-1/2 mt-2 left-1/2"
              >
                <div className="relative h-32 w-full mb-2">
                   <Image src={spot.product.image} alt={spot.product.name} fill className="object-cover rounded" />
                </div>
                <h3 className="font-bold text-gray-900">{spot.product.name}</h3>
                <p className="text-orange-600 font-bold">{spot.product.price}</p>
                <button className="mt-2 w-full bg-gray-900 text-white py-1 rounded hover:bg-gray-800 transition-colors">
                  Купить
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
