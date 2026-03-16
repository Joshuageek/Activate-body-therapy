import { motion } from "framer-motion"

import image1 from "/therapy-session.jpg"
import image2 from "/massage-hands.jpg"

const cards = [
  { image: image1, label: "Deep Tissue" },
  { image: image2, label: "Sports Therapy" },
]

export default function HeroImageFanMobile() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="min-w-[220px] h-56 rounded-xl overflow-hidden shadow-lg snap-center bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={card.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white">
            {card.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
