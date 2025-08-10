"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {  Shield, Droplets, LigatureIcon as Bandage, AlertTriangle, CheckCircle,Phone, Thermometer,Scissors, } from 'lucide-react'


export default function MedicalLearningPlatform() { 
   
   const steps = [
    {
      number: 1,
      title: "ล้างมือให้สะอาด",
      description: "ใช้น้ำและสบู่ หรือน้ำยาฆ่าเชื้อ",
      detail: "ป้องกันการนำเชื้อโรคเข้าแผล",
      icon: <Hand className="w-6 h-6" />,
      image: "/images/wound/langmue.jpg"
    },
    {
      number: 2,
      title: "หยุดเลือด (ถ้ามีเลือดออก)",
      description: "ใช้ผ้าก๊อซหรือผ้าสะอาด กดแผลไว้ประมาณ 5–10 นาที",
      detail: "ยกตำแหน่งแผลให้สูงกว่าระดับหัวใจถ้าเป็นไปได้",
      icon: <Droplets className="w-6 h-6" />,
      image: "/images/wound/stopblood.jpg"
    },
    {
      number: 3,
      title: "ล้างแผลให้สะอาด",
      description: "ใช้น้ำเกลือ (Normal Saline) หรือ น้ำต้มสุกที่เย็นแล้ว",
      detail: "ล้างสิ่งสกปรก ดิน ทราย คราบเลือด",
      icon: <Droplets className="w-6 h-6" />,
      image: "/images/wound/langplae.jpg"
    },
    {
      number: 4,
      title: "เช็ดรอบแผล",
      description: "ใช้ผ้าก๊อซชุบน้ำเกลือเช็ด จากด้านในแผล → ออกด้านนอก",
      detail: "เปลี่ยนก๊อซทุกครั้งที่เช็ด",
      icon: <Eye className="w-6 h-6" />,
      image: "/images/wound/ched.jpg"
    },
    {
      number: 5,
      title: "ทายา (ถ้ามี)",
      description: "ใช้ยาปฏิชีวนะทาเฉพาะที่ (เช่น เบตาดีน)",
      detail: "ป้ายบาง ๆ ไม่ต้องหนาเกินไป",
      icon: <Thermometer className="w-6 h-6" />,
      image: "/images/wound/thaya.jpg"
    },
    {
      number: 6,
      title: "ปิดแผล/พันแผล",
      description: "ใช้ผ้าก๊อซแห้งปิด แล้วพันด้วยผ้ายืด",
      detail: "ไม่พันแน่นเกินไป จนเลือดไหลเวียนไม่สะดวก",
      icon: <Bandage className="w-6 h-6" />,
      image: "/images/wound/panplae.jpg"
    }
  ]

  const goals = [
    { text: "หยุดเลือด", icon: <Droplets className="w-5 h-5" /> },
    { text: "ลดเชื้อโรค", icon: <Shield className="w-5 h-5" /> },
    { text: "ป้องกันการติดเชื้อเพิ่ม", icon: <Shield className="w-5 h-5" /> },
    { text: "ช่วยให้แผลหายเร็วและไม่เป็นแผลเป็น", icon: <Heart className="w-5 h-5" /> }
  ]

  const emergencySignals = [
    "แผลลึก, กว้าง, เห็นเนื้อหรือกระดูก",
    "เลือดไม่หยุดเกิน 10 นาที",
    "มีของฝังในแผล (เศษไม้, แก้ว ฯลฯ)",
    "แผลสัตว์กัด, สนิมบาด หรือเสี่ยงบาดทะยัก",
    "แผลเริ่มแดง บวม ร้อน หนอง → ติดเชื้อ"
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

       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with Image */}
        <div className="text-center space-y-6"> 
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Bandage className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">การทำแผลเบื้องต้น</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            การล้างแผล ห้ามเลือด และพันแผลอย่างถูกวิธี เพื่อลดการติดเชื้อและช่วยให้แผลหายเร็ว
          </p>
        </div>

        {/* Goals */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <CheckCircle className="w-7 h-7 text-green-500" />
              เป้าหมายหลักในการทำแผล
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600">{goal.icon}</div>
                  <span className="font-medium text-gray-800">{index + 1}. {goal.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Steps with Images */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
            <Scissors className="w-7 h-7 text-blue-500" />
            ขั้นตอนการทำแผลเบื้องต้น
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="text-blue-600">{step.icon}</div>
                    <span className="text-lg">{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 font-medium">{step.description}</p>
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">{step.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <Card className="shadow-lg border-0 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <AlertTriangle className="w-6 h-6" />
              ข้อควรระวัง
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>ห้ามใช้แอลกอฮอล์หรือไฮโดรเจนเปอร์ออกไซด์</strong> ล้างภายในแผลโดยตรง 
                เพราะจะทำลายเซลล์
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>ห้ามเปิดดูแผลบ่อย</strong> เพราะเลือดจะออกใหม่
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>เปลี่ยนผ้าก๊อซ</strong> วันละ 1–2 ครั้ง หรือเมื่อเปียก/สกปรก
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency with Image */}
        <Card className="shadow-lg border-0 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Phone className="w-6 h-6" />
              เมื่อไหร่ควรไปโรงพยาบาล
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4"> 
            <div className="grid gap-3">
              {emergencySignals.map((signal, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{signal}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Memory Aid */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-100 to-pink-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-purple-800">
              📌 วิธีจำง่าย
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-xl font-bold text-purple-800 bg-white p-4 rounded-lg shadow">
                "ล้างมือ – ห้ามเลือด – ล้างแผล – เช็ดรอบ – ทายา – ปิดแผล"
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["ล้างมือ", "ห้ามเลือด", "ล้างแผล", "เช็ดรอบ", "ทายา", "ปิดแผล"].map((step, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                    {step}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-indigo-100 to-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl text-indigo-800">
              <BookOpen className="w-7 h-7" />
              สรุปสำคัญ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6"> 
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  สิ่งที่ควรทำ
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">ล้างมือก่อนทำแผลทุกครั้ง</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">ใช้น้ำเกลือหรือน้ำต้มสุกล้างแผล</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">กดห้ามเลือด 5-10 นาที</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">เช็ดจากในออกนอก</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">ปิดแผลด้วยก๊อซสะอาด</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  สิ่งที่ห้ามทำ
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">ห้ามใช้แอลกอฮอล์ล้างในแผล</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">ห้ามเปิดดูแผลบ่อย</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">ห้ามพันแผลแน่นเกินไป</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">ห้ามดึงผ้าก๊อซเดิมออก</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">ห้ามทายาหนาเกินไป</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-indigo-800">🎯 จุดสำคัญที่ต้องจำ</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">เวลาทอง</p>
                  <p className="text-sm text-gray-600">ทำแผลภายใน 6 ชั่วโมง</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">ความสะอาด</p>
                  <p className="text-sm text-gray-600">สิ่งสำคัญที่สุด</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">เมื่อสงสัย</p>
                  <p className="text-sm text-gray-600">ปรึกษาแพทย์</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-600 bg-white/50 p-6 rounded-lg">
          <p className="text-sm">
            ⚠️ ข้อมูลนี้เป็นเพียงคำแนะนำเบื้องต้น หากมีข้อสงสัยหรือแผลรุนแรง ควรปรึกษาแพทย์
          </p>
        </div>
      </div>
    </div>
   

        <div className="text-start mt-12 mb-12 ml-44">
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                ⬅️ ย้อนกลับไปหน้าแรก
            </Link>
        </div>
 
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
