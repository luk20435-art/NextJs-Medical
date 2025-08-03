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

  const lessons = [
  {
    title: "ยาต้านการอักเสบ (NSAIDs)",
    slug: "nsaids",
    image: "/images/nsaids.jpg",
    summary: "ยากลุ่ม NSAIDs ยับยั้ง COX enzyme ลดการสร้าง prostaglandin ที่ทำให้เกิดการอักเสบ"
  },
  {
    title: "ยาลดไข้ (Antipyretics)",
    slug: "antipyretics",
    image: "/images/antipry.jpg",
    summary: "ยาลดไข้ทำงานผ่าน hypothalamus โดยลดระดับ PGE2 เพื่อลดอุณหภูมิร่างกาย"
  },
  {
    title: "กลไกดูดซึมยา",
    slug: "absorption",
    image: "/images/konkai.jpg",
    summary: "ยาส่วนใหญ่ดูดซึมผ่านลำไส้เล็ก โดยใช้ passive หรือ active transport"
  }
  
  ];

  const skills = [
  {
    title: "การวัดชีพจร",
    description: "เรียนรู้วิธีจับชีพจรอย่างถูกต้องตามหลักการแพทย์",
    image: "/images/pulse.jpg",
  },
  {
    title: "การทำ CPR",
    description: "เรียนรู้การช่วยชีวิตเบื้องต้น และใช้เครื่อง AED",
    image: "/images/make_cpr.jpg",
  },
  {
    title: "การทำแผลเบื้องต้น",
    description: "เรียนรู้ขั้นตอนล้างแผล ห้ามเลือด และพันแผลอย่างถูกวิธี",
    image: "/images/wound.jpg",
  },
  {
    title: "การใส่สายให้น้ำเกลือ",
    description: "ขั้นตอนการเตรียมอุปกรณ์ และใส่ IV เบื้องต้น",
    image: "/images/saline.jpg",
  },
  {
    title: "การดามกระดูกหัก",
    description: "ขั้นตอนการเตรียมอุปกรณ์ และการประคบเย็น",
    image: "/images/dam_kradook.jpg",
  },
  {
    title: "อาการช็อก / หน้ามืด / ลมหมดสติ",
    description: "เรียนรู้ขั้นตอนการนอนของผู้ป่วย ",
    image: "/images/penlom.jpg",
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
                <source src="/videos/cpr.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>  
        </div>
      </section>

      {/* การ์ดทักษะเบื้องต้น */}
      <section id="" className="bg-white py-16">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

      {/* หลักการออกฤทธิ์ของยา */}
      <section id="slug" className="py-16 px-4 bg-white">
        <main className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center ">หลักการออกฤทธิ์ของยา</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={""}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img src={lesson.image} alt={lesson.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{lesson.title}</h2>
                  <p className="text-gray-600 mt-2">{lesson.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </section>

      {/* คำศัพท์เภสัช */}
      <h1 id="vocab" className="text-3xl font-bold mb-8 text-center mt-6">คำศัพท์เภสัชเบื้องต้น</h1>
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full md:ml-20">
          <Image
            src="/images/saids.jpg"
            alt="Science of Improvement"
            width={500}
            height={200}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Right: Text content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">NSAIDs</h2>
          <p className="text-gray-600 text-lg">Non-Steroidal Anti-Inflammatory Drugs</p>
          <p className="text-gray-600">ยาต้านอักเสบที่ไม่ใช่สเตียรอยด์</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-right md:pr-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Antibiotics</h2>
          <p className="text-gray-600 text-lg">ยาฆ่าเชื้อแบคทีเรีย</p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:mr-20">
          <Image
            src="/images/antipry.jpg"
            alt="Science of Improvement"
            width={500}
            height={200}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full md:ml-20">
          <Image
            src="/images/half_life.jpg"
            alt="Science of Improvement"
            width={500}
            height={200}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Half-life</h2>
          <p className="text-gray-600 text-lg">
            ระยะเวลาที่ระดับยาในกระแสเลือดลดลงครึ่งหนึ่ง
          </p>
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
                <li>
                  <Link href="#" className="hover:text-white">
                    การตรวจร่างกาย
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
                <li>อีเมล: info@medlearn.th</li>
                <li>โทร: 02-xxx-xxxx</li>
                <li>ที่อยู่: กรุงเทพมหานคร</li>
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
