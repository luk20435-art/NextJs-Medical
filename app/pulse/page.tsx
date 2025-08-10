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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Info, } from 'lucide-react'
import Image from "next/image";


export default function MedicalLearningPlatform() { 

  const pulsePositions = [
    { name: "ข้อมือ (Radial)", description: "นิยมสุด", popular: true },
    { name: "คอ (Carotid)", description: "ใช้ตอนฉุกเฉิน/หมดสติ", emergency: true },
    { name: "ข้อพับแขน (Brachial)", description: "ใช้ในเด็ก", children: true },
    { name: "หลังเท้า, ขาหนีบ, หลังเข่า, หลังข้อเท้า", description: "ใช้เสริมกรณีเฉพาะ", special: true }
  ]

  const normalRates = [
    { group: "ทารก", rate: "100–160 ครั้ง/นาที", color: "bg-pink-100 text-pink-800" },
    { group: "เด็ก", rate: "70–120 ครั้ง/นาที", color: "bg-blue-100 text-blue-800" },
    { group: "ผู้ใหญ่", rate: "60–100 ครั้ง/นาที", color: "bg-green-100 text-green-800" },
    { group: "นักกีฬา/คนฟิต", rate: "อาจต่ำกว่า 60 ครั้ง/นาที", color: "bg-purple-100 text-purple-800" }
  ]

  const measurementSteps = [
    "ใช้นิ้วชี้ + กลาง + นาง จับ (ห้ามใช้นิ้วโป้ง)",
    "วางนิ้วเบา ๆ ที่ตำแหน่ง",
    "นับ 30 วินาทีแล้วคูณ 2 หรือ 60 วินาทีถ้าจังหวะไม่สม่ำเสมอ"
  ]

  const precautions = [
    "จับคอข้างเดียวเท่านั้น (ไม่งั้นเลือดไปเลี้ยงสมองลด)",
    "ถ้าชีพจรเต้นไม่สม่ำเสมอ หรือช้ามาก = อาจมีปัญหาเรื่องหัวใจ",
    "ล้างมือก่อนและหลังวัดชีพจรเสมอ"
  ]

  const preparationTips = [
    "ให้ผู้ป่วยพักก่อน 5 นาที",
    "อย่าเพิ่งวัดหลังออกกำลังกาย",
    "สังเกตว่าชีพจร แรง-เบา / สม่ำเสมอหรือไม่"
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

       
      <div className="max-w-7xl mx-auto p-6 space-y-8">
          {/* Header Card */}
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-red-500" />
                <CardTitle className="text-3xl font-bold text-gray-800">
                  การวัดชีพจร (Pulse Measurement)
                </CardTitle>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                ชีพจร คือ การเต้นของหลอดเลือดแดงจากการบีบตัวของหัวใจ ใช้ดูว่าใจเต้นเร็ว ช้า หรือผิดปกติไหม
              </p>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pulse Positions Card */}
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-green-700">ตำแหน่งจับชีพจรที่นิยม</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {pulsePositions.map((position, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{position.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{position.description}</p>
                      </div>
                      <div className="flex gap-1">
                        {position.popular && <Badge variant="secondary" className="bg-green-100 text-green-800">นิยม</Badge>}
                        {position.emergency && <Badge variant="secondary" className="bg-red-100 text-red-800">ฉุกเฉิน</Badge>}
                        {position.children && <Badge variant="secondary" className="bg-blue-100 text-blue-800">เด็ก</Badge>}
                        {position.special && <Badge variant="secondary" className="bg-purple-100 text-purple-800">เฉพาะ</Badge>}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Image Placeholder Card */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">ภาพประกอบการวัดชีพจร</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <Image
                      src="/images/pulse/thecares.jpg"
                      alt="Science of Improvement"
                      width={200}
                      height={200}
                      className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Measurement Method Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl text-blue-700">วิธีจับชีพจรที่ถูกต้อง</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {measurementSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preparation Tips Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">ขณะวัด</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {preparationTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Normal Values Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-green-600" />
                <CardTitle className="text-xl text-green-700">ค่าปกติของชีพจร</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {normalRates.map((rate, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow">
                    <Badge className={`${rate.color} mb-3`}>{rate.group}</Badge>
                    <p className="font-semibold text-gray-800">{rate.rate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Precautions Card */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-xl text-red-700">ข้อควรระวัง</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {precautions.map((precaution, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{precaution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card className="bg-gradient-to-r from-gray-50 to-slate-100 border-gray-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 text-center">📋 สรุป</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-lg font-semibold text-gray-800 mb-2">การวัดชีพจรอย่างถูกต้อง</p>
                <p className="text-gray-700 leading-relaxed">
                  "จับชีพจร = วัดหัวใจเต้น ใช้นิ้ว 3 นิ้ววางเบา ๆ ที่ข้อมือ/คอ นับเวลา สังเกตจังหวะ แรงเบา และเปรียบเทียบกับค่าปกติ"
                </p>
              </div>
            </CardContent>
          </Card>
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
