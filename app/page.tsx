"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" 
import { Input } from "@/components/ui/input"
import { useRef } from "react";

import {
  Heart,
  Brain,
  Eye,
  Stethoscope,
  BookOpen,
  Users,
  Award,
  Search,
  Play,
  Clock,
  Star,
  ChevronRight,
  Activity,
  Microscope,
  Bone,
  TreesIcon as Lungs,
  Mouse,
  Icon,
  Hand,
  Settings,
  Cog,
  Gauge,
  Utensils,
  Droplets,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";

export default function MedicalLearningPlatform() {

  const circuits = [
  {
    image: "/images/cell.jpg",
    title: "เซลล์ (Cell)",
   
  },
  {
    image: "/images/tissue.jpg",
    title: "เนื้อเยื่อ (Tissue)", 
  },
  {
    image: "/images/organ.jpg",
    title: "อวัยวะ (Organ)", 
  },
  {
    image: "/images/doctor.jpg",
    title: "ระบบอวัยวะ (Organ system)", 
  }, 
  // เพิ่มการ์ดได้เรื่อย ๆ
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const terms = [
    { term: "NSAIDs", definition: "Non-Steroidal Anti-Inflammatory Drugs: ยาต้านอักเสบที่ไม่ใช่สเตียรอยด์" },
    { term: "Antibiotics", definition: "ยาฆ่าเชื้อแบคทีเรีย" },
    { term: "Half-life", definition: "ระยะเวลาที่ระดับยาในกระแสเลือดลดลงครึ่งหนึ่ง" },
  ];

  const slugs = [
  {
    id: "nsaid",
    title: "ยาต้านการอักเสบ (NSAIDs)",  
    summary: "ยากลุ่ม NSAIDs ยับยั้ง COX enzyme ลดการสร้าง prostaglandin ที่ทำให้เกิดการอักเสบ",
    image: "/images/nsaids.jpg",
    href: "/nsaid",
  },
  {
    id: "antipry",
    title: "ยาลดไข้ (Antipyretics)",  
    summary: "ยาลดไข้ทำงานผ่าน hypothalamus โดยลดระดับ PGE2 เพื่อลดอุณหภูมิร่างกาย",
    image: "/images/antipry.jpg",
    href: "/antipry",
  },
  {
    id: "dudsem",
    title: "กลไกดูดซึมยา",  
    summary: "ยาส่วนใหญ่ดูดซึมผ่านลำไส้เล็ก โดยใช้ passive หรือ active transport",
    image: "/images/konkai.jpg",
    href: "/dudsem",
  },
  {
    id: "antibiotic",
    title: "ยาปฏิชีวนะ (Antibiotic)",  
    summary: "ยาส่วนใหญ่ดูดซึมผ่านลำไส้เล็ก โดยใช้ passive หรือ active transport",
    image: "/images/antibiotics.jpg",
    href: "/antibiotic",
  },
  {
    id: "half-life",
    title: "Half-Life",  
    summary: "ยาส่วนใหญ่ดูดซึมผ่านลำไส้เล็ก โดยใช้ passive หรือ active transport",
    image: "/images/half_life.jpg",
    href: "/half-life",
  }
  ];

  const skills = [
  {
    id: "pulse",
    title: "การวัดชีพจร",
    description: "เรียนรู้วิธีจับชีพจรอย่างถูกต้องตามหลักการแพทย์",
    image: "/images/pulse.jpg",
    href: "/pulse",
  },
  {
    id: "cpr",
    title: "การทำ CPR",
    description: "เรียนรู้การช่วยชีวิตเบื้องต้น และใช้เครื่อง AED",
    image: "/images/make_cpr.jpg",
    href: "/cpr",
  },
  {
    id: "wound",
    title: "การทำแผลเบื้องต้น",
    description: "เรียนรู้ขั้นตอนล้างแผล ห้ามเลือด และพันแผลอย่างถูกวิธี",
    image: "/images/wound.jpg",
    href: "/wound",
  },
  {
    id: "saline",
    title: "การใส่สายให้น้ำเกลือ",
    description: "ขั้นตอนการเตรียมอุปกรณ์ และใส่ IV เบื้องต้น",
    image: "/images/saline.jpg",
    href: "/saline",
  },
  {
    id: "kradook",
    title: "การดามกระดูกหัก",
    description: "ขั้นตอนการเตรียมอุปกรณ์ และการประคบเย็น",
    image: "/images/dam_kradook.jpg",
    href: "/kradook",
  },
  {
    id: "penlom ",
    title: "อาการช็อก / หน้ามืด / ลมหมดสติ",
    description: "เรียนรู้ขั้นตอนการนอนของผู้ป่วย ",
    image: "/images/penlom.jpg",
    href: "/penlom",
  },
  ];

  const bodySystems = [
  {
    id: "nervous",
    title: "ระบบประสาท",
    description: "โครงสร้างสมอง, ประสาทส่วนกลาง/ส่วนปลาย",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    href: "/nervous",
  },
  {
    id: "circulatory",
    title: "ระบบไหลเวียนเลือด",
    description: "หัวใจ, หลอดเลือดแดง/ดำ, ระบบน้ำเหลือง",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    href: "/circulatory",
  },
  {
    id: "respiratory",
    title: "ระบบทางเดินหายใจ",
    description: "โพรงจมูก, หลอดลม, ปอด",
    icon: Lungs,
    color: "bg-blue-100 text-blue-700",
    href: "/respiratory",
  },
  {
    id: "digestive",
    title: "ระบบย่อยอาหาร",
    description: "ปากถึงลำไส้ใหญ่, การดูดซึม",
    icon: Utensils,
    color: "bg-green-100 text-green-700",
    href: "/digestive",
  },
  {
    id: "musculoskeletal",
    title: "ระบบกล้ามเนื้อและกระดูก",
    description: "กล้ามเนื้อ, กระดูก, ข้อต่อ",
    icon: Bone,
    color: "bg-yellow-100 text-yellow-700",
    href: "/musculos",
  },
  {
    id: "urinary",
    title: "ระบบปัสสาวะ",
    description: "ไต, ท่อไต, กระเพาะปัสสาวะ",
    icon: Droplets,
    color: "bg-cyan-100 text-cyan-700",
    href: "/urinary",
  },
  {
    id: "reproductive",
    title: "ระบบสืบพันธุ์",
    description: "ระบบสืบพันธุ์ชาย/หญิง",
    icon: Users,
    color: "bg-pink-100 text-pink-700",
    href: "/reproductive",
  },
  ]

  const pharmacyTerms = [
  {
    term: "NSAIDs (เอ็นเสดส์)",
    fullEnglish: "Non-Steroidal Anti-Inflammatory Drugs",
    meaning: "ยาต้านการอักเสบที่ไม่ใช่สเตียรอยด์ เช่น ibuprofen, diclofenac",
    image: "/images/vocab/ibuprofen.jpg",
  },
  {
    term: "Antipyretics (แอนทิไป-เรทิกส์)",
    fullEnglish: "Anti-pyretic drugs",
    meaning: "ยาลดไข้ เช่น paracetamol",
   image: "/images/vocab/antipy.jpg",
  },
  {
    term: "Analgesics (แอน-แนล-จี-ซิกส์)",
    fullEnglish: "Pain relievers / Analgesic drugs",
    meaning: "ยาแก้ปวด เช่น paracetamol, morphine",
    image: "/images/vocab/analgesics.jpg",
  },
  {
    term: "Antibiotics (แอน-ไท-ไบ-ออ-ติกส์)",
    fullEnglish: "Anti-bacterial drugs",
    meaning: "ยาฆ่าเชื้อแบคทีเรีย เช่น amoxicillin",
   image: "/images/vocab/antibiotics.jpg",
  },
  {
    term: "Antacids (แอน-แทส-ซิดส์)",
    fullEnglish: "Anti-acid drugs",
    meaning: "ยาลดกรด เช่น aluminum hydroxide",
    image: "/images/vocab/antacids.jpg",
  },
  {
    term: "Antihistamines (แอน-ที-ฮิส-ทะ-มีนส์)",
    fullEnglish: "Anti-histamine drugs",
    meaning: "ยาแก้แพ้ เช่น loratadine, cetirizine",
    image: "/images/vocab/antihistamines.jpg",
  },
  {
    term: "Antiemetics (แอน-ที-อี-เม-ติกส์)",
    fullEnglish: "Anti-vomiting drugs",
    meaning: "ยาแก้อาเจียน เช่น metoclopramide",
   image: "/images/vocab/antiemetics.jpg",
  },
  {
    term: "Sedatives (เซ-ดา-ทีฟส์)",
    fullEnglish: "Sedative drugs",
    meaning: "ยากล่อมประสาท เช่น diazepam",
    image: "/images/vocab/sedatives.jpg",
  },
  {
    term: "Antiseptics (แอน-ที-เซพ-ติกส์)",
    fullEnglish: "Germ-killing solutions",
    meaning: "ยาฆ่าเชื้อโรคภายนอก เช่น povidone iodine",
    image: "/images/vocab/antiseptics.jpg",
  },
  {
    term: "Corticosteroids (คอร์-ติ-โค-สเตีย-รอยด์)",
    fullEnglish: "Steroid-type anti-inflammatory drugs",
    meaning: "ยาสเตียรอยด์ เช่น prednisolone",
    image: "/images/vocab/corticos.jpg",
  },
  {
    term: "Anticoagulants (แอน-ที-โค-แอก-กิว-แลนต์ส)",
    fullEnglish: "Blood thinners",
    meaning: "ยาต้านการแข็งตัวของเลือด เช่น warfarin, heparin",
    image: "/images/vocab/heparin.jpg",
  },
  {
    term: "Diuretics (ได-ยู-เร-ติกส์)",
    fullEnglish: "Water pills / Diuretic drugs",
    meaning: "ยาขับปัสสาวะ เช่น furosemide",
    image: "/images/vocab/furo.png",
  },
  {
    term: "Bronchodilators (บรอน-โค-ได-เล-เทอร์ส)",
    fullEnglish: "Airway-widening drugs",
    meaning: "ยาขยายหลอดลม เช่น salbutamol",
    image: "/images/vocab/salbutamol.jpg",
  },
  {
    term: "Vasodilators (เว-โซ-ได-เล-เทอร์ส)",
    fullEnglish: "Blood vessel-widening drugs",
    meaning: "ยาขยายหลอดเลือด เช่น nitroglycerin",
    image: "/images/vocab/nitrogly.jpg",
  },
  {
    term: "Antidepressants (แอน-ที-ดี-เพรส-แซนต์ส)",
    fullEnglish: "Anti-depression drugs",
    meaning: "ยาต้านซึมเศร้า เช่น fluoxetine",
    image: "/images/vocab/fluoxetine.jpg",
  },
  {
    term: "Antipsychotics (แอน-ที-ไซ-คอ-ติกส์)",
    fullEnglish: "Anti-psychosis drugs",
    meaning: "ยารักษาโรคจิต เช่น haloperidol",
    image: "/images/vocab/haloperidol.jpg",
  },
  {
    term: "Ointment (ออยท์-เมนต์)",
    fullEnglish: "",
    meaning: "ยาขี้ผึ้ง ใช้ทาภายนอก บำรุงหรือรักษาแผลผิวหนัง",
   image: "/images/vocab/kipeng.jpg",
  },
  {
    term: "Syrup (ซี-รัป)",
    fullEnglish: "",
    meaning: "ยาน้ำเชื่อม ยารูปแบบน้ำ หวาน กินง่ายโดยเฉพาะในเด็ก",
    image: "/images/vocab/syrup.jpg",
  },
  {
    term: "Suspension (ซัส-เพน-ชัน)",
    fullEnglish: "",
    meaning: "ยาน้ำแขวนตะกอน ต้องเขย่าก่อนใช้ เช่น ยาแก้ท้องเสียเด็ก",
   image: "/images/vocab/suspension.jpg",
  },
  {
    term: "Tablet (แท็บ-เลต)",
    fullEnglish: "",
    meaning: "ยาเม็ด รูปแบบยากินที่พบบ่อย",
    image: "/images/vocab/tablet.jpg",
  },
  {
    term: "Capsule (แคป-ซูล)",
    fullEnglish: "",
    meaning: "ยาที่บรรจุในปลอกเจลาติน กินง่าย",
    image: "/images/vocab/capsule.jpg",
  },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MedRxLearn</h1>
                <p className="text-xs text-gray-600">แพลตฟอร์มเรียนรู้ทางการแพทย์</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                หน้าแรก
              </Link> 
              <Link href="#anatomy" className="text-gray-700 hover:text-blue-600 font-medium">
                กายวิภาค
              </Link>

              <Link href="#systems" className="text-gray-700 hover:text-blue-600 font-medium">
                ระบบต่างๆ
              </Link>

              <Link href="#skill" className="text-gray-700 hover:text-blue-600 font-medium">
                ทักษะทางแพทย์
              </Link>

              <Link href="#slug" className="text-gray-700 hover:text-blue-600 font-medium">
                หลักการออกฤทธิ์ของยา
              </Link>

              <Link href="#vocab" className="text-gray-700 hover:text-blue-600 font-medium">
                คำศัพท์เภสัช
              </Link>

              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                เกี่ยวกับเรา
              </Link>
            </nav>

            {/* <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="ค้นหาหลักสูตร..." className="pl-10 w-64" />
              </div>
              <Button variant="outline">เข้าสู่ระบบ</Button>
              <Button>สมัครสมาชิก</Button>
            </div> */}
          </div>
        </div>
      </header>

      {/* แบนเนอร์*/}
      <section id="banner" className="relative h-[700px] w-full">
        {/* 🔹 Background Image */}
        <Image
          src="/images/wound.jpg"
          alt="Students working"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.6]"
          priority
        />

        {/* 🔹 Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <motion.h1
              className="text-white text-xl md:text-4xl font-bold text-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              การเรียนรู้ออนไลน์เกี่ยวกับกายวิภาค,<br />
              ระบบร่างกาย, ทักษะทางแพทย์เบื้องต้น
            </motion.h1>
          </div>
        </div>
      </section>
      
      {/* กายวิภาค*/}
      <section id="anatomy" className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white text-white py-10 px-4">
          
          {/* หัวเรื่อง: กายวิภาค */}
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            กายวิภาค
          </motion.h2>

          {/* คำอธิบาย */}
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.1 }}
          >
            เรียนรู้กายวิภาคศาสตร์มหภาค และกายวิภาคศาสตร์จุลภาค
          </motion.p>

          {/* กล่อง 2 ใบ (Gross & Micro) */}
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {/* Card ซ้าย */}
            <div className="bg-white rounded-l overflow-hidden shadow-lg">
              <Image src="/images/gross.jpg" alt="Gross Anatomy" width={800} height={400} className="w-full object-cover" />
              <div className="p-6 text-center mt-32">
                <span className="text-sky-800 text-2xl font-semibold mb-3">
                  กายวิภาคศาสตร์มหภาค <p>(Gross Anatomy)</p>
                </span>
                <p>
                  <Link href="/gross-detail">
                    <Button variant="outline" size="sm" className="mt-8 text-gray-900">
                      ดูรายละเอียด
                    </Button>
                  </Link>
                </p>
              </div>
            </div>

            {/* Card ขวา */}
            <div className="bg-white rounded-l overflow-hidden shadow-lg">
              <Image src="/images/micro.jpg" alt="Microscopic Anatomy" width={800} height={400} className="w-full object-cover" />
              <div className="p-6 text-center">
                <span className="text-sky-800 text-2xl font-semibold mb-3">
                  กายวิภาคศาสตร์จุลภาค <p>(Microscopic Anatomy)</p>
                </span>
                <p>
                  <Link href="/micro-detail">
                    <Button variant="outline" size="sm" className="mt-8 text-gray-900">
                      ดูรายละเอียด
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* องค์ประกอบพื้นฐาน */}
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h2 className="text-neutral-900 text-xl font-semibold mb-8 border-l-4 border-teal-500 pl-4 uppercase tracking-wide mt-6">
            องค์ประกอบพื้นฐานในกายวิภาค:
          </h2>
          <div className="space-x-2">
            <button onClick={scrollLeft} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">❮</button>
            <button onClick={scrollRight} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">❯</button>
          </div>
        </motion.div>

        {/* สไลด์ circuits */}
        <motion.div
          className="overflow-x-auto scroll-smooth"
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex space-x-4 text-center justify-center">
            {circuits.map((circuit, index) => (
              <motion.div
                key={index}
                className="min-w-[240px] bg-white rounded-lg shadow hover:shadow-md hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
              >
                <Image
                  src={circuit.image}
                  alt={circuit.title}
                  width={240}
                  height={160}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-base font-semibold text-gray-900">{circuit.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
 
      {/* ระบบต่างๆ ในร่างกายมนุษย์ */}
      <section id="systems" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
            <div className="text-center mb-16">  
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ระบบต่างๆ ในร่างกายมนุษย์</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                เรียนรู้ระบบต่างๆ ในร่างกายมนุษย์อย่างละเอียด พร้อมภาพประกอบและแบบจำลอง
              </p>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bodySystems.map((system) => {
                const IconComponent = system.icon
                return (
                  <Link key={system.id} href={system.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 rounded-full ${system.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">{system.title}</CardTitle>
                        <CardDescription className="text-gray-600">{system.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <span className="text-sm text-blue-600 font-medium group-hover:text-blue-800">เรียนรู้เพิ่มเติม →</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
        </div>
      </section> 

      {/* ทักษะทางแพทย์เบื้องต้น */}
     <main className="bg-gray-50 min-h-screen">
      {/* ส่วนหัว Hero */}
      <section id="skill" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            ทักษะทางการแพทย์เบื้องต้น
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            เรียนรู้พื้นฐานทางการแพทย์ เช่น การวัดชีพจร การทำแผล CPR 
          </p>
        </div>

        {/* วิดีโอแนะนำ */}
        <div className="w-full aspect-video"> 
              <video width="100%" height="auto"  autoPlay muted loop playsInline>
                <source src="/videos/cpr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>  
        </div>
      </section>

      {/* การ์ดทักษะเบื้องต้น */}
      <section id="skill" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            ตัวอย่างทักษะต่างๆ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div> 
                    <div className="text-center mb-4">
                      <Link key={skill.id} href={skill.href}>
                        <span className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer">
                          เรียนรู้เพิ่มเติม →
                        </span>
                      </Link>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

      {/* หลักการออกฤทธิ์ของยา */}
      <section id="slug" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            หลักการออกฤทธิ์ของยา
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {slugs.map((slug, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={slug.image}
                  alt={slug.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {slug.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{slug.summary}</p>
                </div> 
                    <div className="text-center mb-4">
                      <Link key={slug.id} href={slug.href}>
                        <span className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer">
                          เรียนรู้เพิ่มเติม →
                        </span>
                      </Link>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* คำศัพท์เภสัช */}
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h1 className="text-xl font-bold tracking-tight text-center mb-8 md:text-2xl lg:text-3xl">
          คำศัพท์เภสัชเบื้องต้น (Basic Pharmacy Terms)
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {pharmacyTerms.map((term, index) => (
            <Card key={index} className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Image
                  src={term.image}
                  alt={term.term}
                  width={300}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 flex-grow">
                <h2 className="text-lg font-semibold mb-1 text-primary">{term.term}</h2>
                {term.fullEnglish && (
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    {term.fullEnglish}
                  </p>
                )}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {term.meaning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 shadow-sm">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl font-bold text-blue-700 dark:text-blue-300">
              📌 เคล็ดลับในการจำคำศัพท์เรื่องยาและการออกฤทธิ์ของยาแต่ละชนิด:
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-base text-blue-800 dark:text-blue-200">
              {'“ศัพท์ยาส่วนใหญ่ลงท้ายด้วย -ics / -ines / -ants / -oids แปลว่ายานั้นทำหน้าที่ต่อต้านหรือส่งผลต่อสิ่งใดสิ่งหนึ่ง”'}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>


      {/* ติดตามข่าวสารและเนื้อหาใหม่ */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">ติดตามข่าวสารและเนื้อหาใหม่</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            รับข้อมูลหลักสูตรใหม่ เทคนิคการเรียนรู้ และข่าวสารทางการแพทย์ล่าสุด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="อีเมลของคุณ" className="bg-white text-gray-900" />
            <Button className="bg-blue-600 hover:bg-blue-700">สมัครรับข่าวสาร</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MedLearn Thailand</h3>
                  <p className="text-sm text-gray-400">แพลตฟอร์มเรียนรู้ทางการแพทย์</p>
                </div>
              </div>
              <p className="text-gray-400">แพลตฟอร์มการเรียนรู้ออนไลน์ที่ครอบคลุมเรื่องกายวิภาคศาสตร์และทักษะทางการแพทย์</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">หลักสูตร</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                   หลักการออกฤทธิ์ของยา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    คำศัพท์เภสัชเบื้องต้น
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    ทักษะทางแพทย์
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    การตรวจร่างกาย  
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white"> 
                    กายวิภาคศาสตร์ 
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white"> 
                    สรีรวิทยา 
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white"> 
                    ทักษะทางแพทย์ 
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ระบบร่างกาย</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    ระบบหัวใจและหลอดเลือด
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    ระบบประสาท
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    ระบบทางเดินหายใจ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    ระบบกระดูกและกล้ามเนื้อ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
              <ul className="space-y-2 text-gray-400">
                <li>อีเมล : santawisuk511@gmail.com
                          <p className="ml-10"> : Chaiyapol210151@gmail.com</p>
                          <p className="ml-10">: bigccubon1256@gmail.com</p>
                </li> 
                <li>Line : santawisuk2550
                          <p className="ml-10"> : Chaiyapol2551</p>
                          <p className="ml-10"> : cckomiauto</p>
                </li>
                <li>Facebook  : Sutthawat santawisuk
                          <p className="ml-10"> : Chaiyapol Mingkhwan</p>
                          <p className="ml-10"> : Natthaphat Chanloet</p>
                </li>
                <li>โทร : 0821318166</li>
                <li>ที่อยู่ : อุบลราชธานี</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedLearn Thailand. สงวนลิขสิทธิ์ทุกประการ</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
