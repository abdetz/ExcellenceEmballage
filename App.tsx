import { motion } from "framer-motion";
import { PhoneCall, MapPin, Package, Clock, ShieldCheck, Zap, Truck, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

import logoUrl from "./logo.png";
import plasticUrl from "./plastic.jpg";
import glassUrl from "./glass.jpg";
import cosmeticsUrl from "./cosmetics.png";
import boxesUrl from "./boxes.png";

const PRODUCTS = [
  { id: "plastic", image: plasticUrl, fr: "Pots en Plastique", ar: "علب بلاستيكية" },
  { id: "glass", image: glassUrl, fr: "Pots en Verre", ar: "علب زجاجية" },
  { id: "cosmetics", image: cosmeticsUrl, fr: "Matières Premières Cosmétiques", ar: "مواد أولية لصناعة مستحضرات التجميل" },
  { id: "boxes", image: boxesUrl, fr: "Caisses et Cartons", ar: "صناديق وعلب كرتون" },
];

const BENEFITS = [
  { icon: Truck, fr: "Livraison Rapide", ar: "توصيل سريع" },
  { icon: ShieldCheck, fr: "Qualité Garantie", ar: "جودة مضمونة" },
  { icon: Package, fr: "Stock Permanent", ar: "مخزون دائم" },
  { icon: Zap, fr: "Prix de Gros", ar: "أسعار الجملة" },
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center bg-background overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <main className="w-full max-w-2xl mx-auto px-4 py-12 md:py-16 relative z-10 flex flex-col gap-16">

        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <img src={logoUrl} alt="Excellence Emballage" className="w-64 md:w-80 h-auto object-contain drop-shadow-md" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-1">
            <h1 className="sr-only">Excellence Emballage</h1>
            <p className="text-lg text-muted-foreground font-medium">Vente et distribution d'emballage à Oran</p>
            <p className="text-lg text-muted-foreground font-arabic font-semibold" dir="rtl">وكالة بيع وتوزيع منتجات التعبئة والتغليف في وهران</p>
          </motion.div>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-4 w-full"
        >
          <motion.a
            variants={itemVariants}
            href="https://wa.me/213559922610"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-accent-foreground/10 p-2 rounded-lg">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span>Commander sur WhatsApp</span>
                <span className="text-sm opacity-80">+213 559 92 26 10</span>
              </div>
            </div>
            <div className="font-arabic text-xl relative z-10" dir="rtl">واتساب</div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="tel:+213559922610"
            className="group flex items-center justify-between p-4 rounded-xl bg-card border-2 border-primary/20 hover:border-primary text-foreground font-bold text-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span>Appeler</span>
            </div>
            <div className="font-arabic text-xl" dir="rtl">اتصل بنا</div>
          </motion.a>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
        >
          <motion.a
            variants={itemVariants}
            href="https://www.facebook.com/ExcellenceEmballage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary transition-colors"
          >
            <FaFacebook className="w-5 h-5 text-[#1877F2]" />
            <span className="font-semibold">Facebook</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://instagram.com/excellence.emballage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary transition-colors"
          >
            <FaInstagram className="w-5 h-5 text-[#E4405F]" />
            <span className="font-semibold">Instagram</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.google.com/maps/search/?api=1&query=M8VX%2BWJC+Rue+Mascara+Oran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-secondary transition-colors md:col-span-1"
          >
            <MapPin className="w-5 h-5 text-destructive" />
            <span className="font-semibold">Localisation</span>
            <span className="font-arabic font-semibold ml-1" dir="rtl">الموقع</span>
          </motion.a>
        </motion.section>

        <section className="py-6 border-y border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <b.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{b.fr}</span>
                  <span className="text-xs font-arabic text-muted-foreground" dir="rtl">{b.ar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold">Nos Produits</h2>
            <h2 className="text-xl font-arabic text-muted-foreground mt-1" dir="rtl">منتجاتنا</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {PRODUCTS.map((prod) => (
              <div key={prod.id} className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.fr}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-4 flex flex-col bg-card">
                  <span className="font-semibold text-sm md:text-base leading-tight">{prod.fr}</span>
                  <span className="font-arabic text-xs md:text-sm text-muted-foreground mt-1" dir="rtl">{prod.ar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">Horaires d'ouverture</h3>
              <h3 className="font-arabic text-sm text-muted-foreground" dir="rtl">ساعات العمل</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="font-medium">Samedi - Jeudi <span className="font-arabic mx-1" dir="rtl">(السبت - الخميس)</span></span>
              <span className="font-bold">08:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base text-muted-foreground">
              <span className="font-medium">Vendredi <span className="font-arabic mx-1" dir="rtl">(الجمعة)</span></span>
              <span className="font-bold">Fermé / مغلق</span>
            </div>
          </div>

          <div className="mt-2 pt-6 border-t border-border flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">Rue Mascara, Oran, Algérie</span>
                <span className="font-arabic text-sm text-muted-foreground mt-1" dir="rtl">شارع معسكر، وهران، الجزائر</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">+213 559 92 26 10</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-primary text-primary-foreground py-10 mt-auto">
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2 opacity-80">
            <Package className="w-6 h-6" />
            <span className="font-bold text-lg">Excellence Emballage</span>
          </div>

          <div className="flex gap-6">
            <a href="https://wa.me/213559922610" className="hover:text-accent transition-colors"><FaWhatsapp className="w-6 h-6" /></a>
            <a href="https://www.facebook.com/ExcellenceEmballage" className="hover:text-accent transition-colors"><FaFacebook className="w-6 h-6" /></a>
            <a href="https://instagram.com/excellence.emballage" className="hover:text-accent transition-colors"><FaInstagram className="w-6 h-6" /></a>
          </div>

          <p className="text-sm opacity-60 mt-4">
            © {new Date().getFullYear()} Excellence Emballage. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
