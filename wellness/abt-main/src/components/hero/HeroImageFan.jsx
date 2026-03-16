import { motion } from "framer-motion"

import image1 from "/therapy-session.jpg"
import image2 from "/massage-hands.jpg"
import image3 from "/therapy-session.jpg"
import image4 from "/massage-hands.jpg"

const cards = [
  { image: image1, label: "Deep Tissue" },
  { image: image2, label: "Sports Therapy" },
  { image: image3, label: "Relaxation" },
  { image: image4, label: "Rehabilitation" },
]


const positions = [
  { x: -140, y: 40, rotate: -20 },
  { x: -60, y: 0, rotate: -8 },
  { x: 60, y: 0, rotate: 8 },
  { x: 140, y: 40, rotate: 20 },
]

export default function HeroImageFan() {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">

      {/* SPLASH / GLOW BACKGROUND */}
      <div className="absolute w-[420px] h-[300px] rounded-full bg-terracotta/30 blur-3xl" />
      <div className="absolute top-12 left-10 w-32 h-32 bg-sage/30 rounded-full blur-2xl" />
      <div className="absolute bottom-16 right-12 w-40 h-40 bg-terracotta/30 rounded-full blur-3xl" />

      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute w-44 h-60 rounded-2xl overflow-hidden bg-white shadow-2xl"
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            x: positions[index].x,
            y: [positions[index].y, positions[index].y - 4, positions[index].y],
            rotate: positions[index].rotate,
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          whileHover={{
            rotate: 0,
            y: -10,
            scale: 1.03,
            }}

          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={card.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* PREMIUM GLOSS */}
          {/* Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white font-medium">
            {card.label}
            </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30" />
        </motion.div>
      ))}
    </div>
  )
}
