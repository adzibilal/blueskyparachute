import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Quote = () => {
  const quotes = [
    {
      id: 1,
      name: "Prabowo Subianto",
      title: "Presiden Republik Indonesia",
      image: "/images/quotes/president.jpg", 
      quote: {
        english: "The defense industry is a vital part, a defining part of our independence, our sovereignty.",
        indonesian: "Industri pertahanan adalah bagian vital, bagian yang menentukan dari kemerdekaan kita, kedaulatan kita."
      },
      bgGradient: "from-red-600 to-red-800",
    },
    {
      id: 2,
      name: "Sjafrie Sjamsoeddin",
      title: "Menteri Pertahanan Republik Indonesia",
      image: "/images/quotes/menhan.jpg", 
      quote: {
        english: "The domestic defense industry must be a pillar of Indonesia's defense capability.",
        indonesian: "Industri pertahanan dalam negeri harus menjadi penopang kemampuan pertahanan (defence capability) Indonesia."
      },
      bgGradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="md:py-16 py-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Quotes from Leaders
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Commitment of Indonesian leaders in strengthening the defense and
          achieving independence in various strategic sectors.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {quotes.map((quote, index) => (
          <motion.div
            key={quote.id}
            className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br ${quote.bgGradient} text-white`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10 p-8 md:p-10">
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-12 h-12 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>

              {/* Profile Section */}
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/30 mr-4 flex-shrink-0">
                  <img
                    src={quote.image}
                    alt={quote.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback jika gambar tidak ditemukan
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EFoto%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {quote.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-medium">
                    {quote.title}
                  </p>
                </div>
              </motion.div>

              {/* Quote Text */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <blockquote className="text-lg md:text-xl leading-relaxed text-white/95">
                  "{quote.quote.english}"
                </blockquote>
                <blockquote className="text-base md:text-lg leading-relaxed text-white/90 italic">
                  "{quote.quote.indonesian}"
                </blockquote>
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="mt-6 w-16 h-1 bg-white/50 rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Context */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          As a defense company committed to excellence, Blue Sky Parachute supports the vision of Indonesian leaders in
          strengthening the defense system and achieving independence in
          various strategic sectors.
        </p>
      </motion.div>
    </div>
  );
};

export default Quote;
