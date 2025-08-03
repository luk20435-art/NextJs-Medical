"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { motion } from "framer-motion"

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
  Ear,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function MedicalLearningPlatform() {
    
  const bodySystems = [
    {
      id: "skeletal",
      title: "ระบบกระดูก (Skeletal System)",
      description: "โครงสร้างกระดูก ข้อต่อ และการทำงานของระบบโครงร่าง",
      icon: Bone,
      color: "bg-amber-100 text-amber-800",
      details: "206 กระดูกในร่างกายผู้ใหญ่",
    },
    {
      id: "muscular",
      title: "ระบบกล้ามเนื้อ (Muscular System)",
      description: "กล้ามเนื้อลาย กล้ามเนื้อเรียบ และกล้ามเนื้อหัวใจ",
      icon: Activity,
      color: "bg-red-100 text-red-800",
      details: "มากกว่า 600 กล้ามเนื้อ",
    },
    {
      id: "cardiovascular",
      title: "ระบบหัวใจและหลอดเลือด",
      description: "หัวใจ หลอดเลือด และการไหลเวียนของเลือด",
      icon: Heart,
      color: "bg-pink-100 text-pink-800",
      details: "สูบเลือด 5-6 ลิตรต่อนาที",
    },
    {
      id: "respiratory",
      title: "ระบบทางเดินหายใจ",
      description: "ปอด หลอดลม และกระบวนการแลกเปลี่ยนแก๊ส",
      icon: Lungs,
      color: "bg-blue-100 text-blue-800",
      details: "หายใจ 12-20 ครั้งต่อนาที",
    },
    {
      id: "nervous",
      title: "ระบบประสาท (Nervous System)",
      description: "สมอง ไขสันหลัง และเส้นประสาทส่วนปลาย",
      icon: Brain,
      color: "bg-purple-100 text-purple-800",
      details: "86 พันล้านเซลล์ประสาทในสมอง",
    },
    {
      id: "digestive",
      title: "ระบบทางเดินอาหาร",
      description: "การย่อยและดูดซึมสารอาหาร",
      icon: Zap,
      color: "bg-green-100 text-green-800",
      details: "ยาวรวม 9 เมตร",
    },
    {
      id: "sensory",
      title: "อวัยวะรับความรู้สึก",
      description: "ตา หู จมูก ลิ้น และผิวหนัง",
      icon: Eye,
      color: "bg-indigo-100 text-indigo-800",
      details: "5 ประสาทสัมผัสหลัก",
    },
    {
      id: "endocrine",
      title: "ระบบต่อมไร้ท่อ",
      description: "ฮอร์โมนและการควบคุมร่างกาย",
      icon: Ear,
      color: "bg-teal-100 text-teal-800",
      details: "มากกว่า 50 ฮอร์โมน",
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
          </div>
        </div>
      </header>     

      {/*ระบบต่างๆ ในร่างกาย */}
        <section id="systems" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">รายละเอียดกายวิภาคศาสตร์มหภาค</h3>
                    <p className="text-xl text-gray-600">Gross Anatomy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bodySystems.map((system) => {
                    const IconComponent = system.icon
                    return (
                    <motion.div
                        key={system.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-3">
                            <div className={`p-3 rounded-lg ${system.color}`}>
                                <IconComponent className="w-6 h-6" />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                                {system.details}
                            </Badge>
                            </div>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {system.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm leading-relaxed">
                            {system.description}
                            </CardDescription>
                        </CardContent>
                        </Card>
                    </motion.div>
                    )
                })}
                </div>
            </div>
        </section> 

        <div className="text-start mb-12 ml-32">
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                ⬅️ ย้อนกลับไปหน้าแรก
            </Link>
        </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
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
