import React from 'react';
import { motion } from 'framer-motion';

const VideoHighlight = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mx-auto max-w-4xl px-4 py-16 sm:py-20"
    aria-labelledby="video-em-destaque"
  >
    <h2 id="video-em-destaque" className="mb-4 text-center text-2xl font-bold text-white">
      Vídeo em destaque
    </h2>
    <div className="aspect-video overflow-hidden rounded-xl border border-blue-500/20 bg-slate-800 shadow-lg">
      <iframe
        className="h-full w-full"
        src="https://youtu.be/bWXkYLIndQo"
        title="Vídeo em destaque de Samuel Santana"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </motion.section>
);

export default VideoHighlight;
