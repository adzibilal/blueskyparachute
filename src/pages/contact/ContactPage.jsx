import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaWhatsapp
} from "react-icons/fa";
import SEO from "../../components/SEO";
import Button from "../../components/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi field yang required
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Mohon lengkapi semua field yang wajib diisi (*)');
      return;
    }
    
    // WhatsApp number (format: 62 untuk Indonesia, tanpa + atau 0 di awal)
    // const phoneNumber = '628112182888'; // Sesuai nomor di contact info
    const phoneNumber = '6285156510302'; // Sesuai nomor di contact info
    
    // Buat pesan dari data form
    let message = `Halo Blue Sky Parachute! 👋\n\n`;
    message += `📝 *INQUIRY FORM*\n`;
    message += `━━━━━━━━━━━━━━━━\n\n`;
    message += `👤 *Nama:* ${formData.name}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    
    if (formData.phone) {
      message += `📱 *Telepon:* ${formData.phone}\n`;
    }
    
    if (formData.company) {
      message += `🏢 *Perusahaan:* ${formData.company}\n`;
    }
    
    if (formData.subject) {
      message += `📋 *Subjek:* ${formData.subject}\n`;
    }
    
    message += `\n💬 *Pesan:*\n${formData.message}\n\n`;
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `🕒 Dikirim pada: ${new Date().toLocaleString('id-ID')}`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
    
    // Reset form setelah mengirim
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    
    // Optional: Tampilkan pesan sukses
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan komunikasi.');
  };

  // Fungsi untuk membuka WhatsApp langsung
  const openWhatsApp = () => {
    // const phoneNumber = '628112182888';
    const phoneNumber = '6285156510302';
    const message = encodeURIComponent('Halo Blue Sky Parachute! Saya tertarik dengan produk parachute Anda.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Kontak"
        description="Hubungi PT Langit Biru Parasut untuk konsultasi, pemesanan, atau informasi lebih lanjut tentang produk parasut militer dan rekreasi. Tim ahli kami siap membantu kebutuhan parasut Anda dengan layanan profesional."
        keywords="kontak blue sky parachute, hubungi parasut, konsultasi parasut, pemesanan parasut, alamat parasut indonesia, telepon parasut, email parasut"
        url="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Kontak - PT Langit Biru Parasut",
          "description": "Halaman kontak PT Langit Biru Parasut untuk konsultasi dan pemesanan parasut",
          "url": "https://blueskyparachute.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "PT Langit Biru Parasut",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Indonesian", "English"],
              "telephone": "+62-851-5651-0302"
            }
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-camo relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Get in Touch with Our Team
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-earth-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-earth-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-army-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Send us a Message
              </motion.h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-army-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-army-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-army-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-army-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-army-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product-info">Product Information</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-army-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-army-500 focus:border-army-500 transition-colors resize-vertical"
                  ></textarea>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button type="submit" variant="primary" size="large" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-earth-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-army-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-lg text-earth-700 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                We're here to help you with all your parachute needs. Whether
                you're looking for a quote, have questions about our products,
                or need technical support, our team is ready to assist you.
              </motion.p>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-earth-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-army-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-army-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-army-800 mb-1">Address</h3>
                    <p className="text-earth-600 leading-relaxed">
                      Jl. Cilampeni No. 10 – Kopo – Katapang – Bandung – West
                      Java – Indonesia – 40921
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-earth-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-army-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-xl text-army-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-army-800 mb-1">Phone</h3>
                    <p className="text-earth-600">
                      <a href="tel:+628112182888" className="hover:text-army-600 transition-colors">+62-811-218-2888</a>
                    </p>
                    <p className="text-earth-600">
                      <a href="tel:+628111088787" className="hover:text-army-600 transition-colors">+62-811-108-8787</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-earth-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-army-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-xl text-army-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-army-800 mb-1">Email</h3>
                    <p className="text-earth-600">
                      <a href="mailto:info@blueskyparachute.com" className="hover:text-army-600 transition-colors">
                        info@blueskyparachute.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-earth-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-army-100 rounded-lg flex items-center justify-center">
                    <FaClock className="text-xl text-army-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-army-800 mb-1">Business Hours</h3>
                    <p className="text-earth-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-earth-600">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-earth-600">Sunday: Closed</p>
                  </div>
                </motion.div>

                {/* WhatsApp Quick Contact */}
                <motion.div 
                  className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-army-800 mb-3">
                      💬 Chat via WhatsApp
                    </h3>
                    <p className="text-earth-600 mb-4">
                      Dapatkan respons cepat melalui WhatsApp
                    </p>
                    <motion.button
                      onClick={openWhatsApp}
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-xl" />
                      Chat WhatsApp
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-army-800 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose Our Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-earth-200 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold text-army-800 mb-3">Quick Response</h3>
              <p className="text-earth-600 leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-earth-200 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold text-army-800 mb-3">Technical Support</h3>
              <p className="text-earth-600 leading-relaxed">
                Our technical team is available to help with product
                specifications and requirements.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-earth-200 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold text-army-800 mb-3">Custom Quotes</h3>
              <p className="text-earth-600 leading-relaxed">
                We provide detailed quotes for custom manufacturing and bulk
                orders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
