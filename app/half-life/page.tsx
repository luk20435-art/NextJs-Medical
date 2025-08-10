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
  ClockIcon,
  CheckCircleIcon,
  LightbulbIcon,
  PillIcon,
  AlertTriangleIcon,
  ClipboardCheckIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, XCircle, Hospital, ClipboardList, HeartPulse, Droplet, ThermometerSnowflake, Wind, HandHelping, Bed, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; 

export default function MedicalLearningPlatform() { 
   

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
 
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 lg:p-12 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center leading-tight">
            {"ทำความเข้าใจ Half-life ของยา"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
            {/* Card 1: Definition */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <ClockIcon className="w-8 h-8 text-gray-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"Half-life (t½)"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg text-gray-700 mb-4">{"ระยะเวลาที่ระดับความเข้มข้นของยาในกระแสเลือดลดลงเหลือครึ่งหนึ่ง"}</p>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/nano.jpg"
                    alt="Medicine half-life concept"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Importance */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"🎯 ความสำคัญของ Half-life"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                  <li>{"ใช้บอกว่า ยาคงอยู่ในร่างกายนานแค่ไหน"}</li>
                  <li>{"มีผลต่อ ความถี่ในการให้ยา"}</li>
                  <li>{"ส่งผลต่อการออกฤทธิ์และเวลาที่ต้องเว้นระยะการใช้ยา"}</li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/example.png"
                    alt="Importance of drug half-life"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Example */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <LightbulbIcon className="w-8 h-8 text-yellow-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"🧠 ตัวอย่าง:"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg text-gray-700 mb-4">{"ถ้ายา A มี Half-life = 4 ชั่วโมง → หมายความว่า"}</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                  <li>{"เมื่อเริ่มให้ยา → ระดับยา = 100%"}</li>
                  <li>{"ผ่านไป 4 ชม. → เหลือ 50%"}</li>
                  <li>{"ผ่านไป 8 ชม. → เหลือ 25%"}</li>
                  <li>{"ผ่านไป 12 ชม. → เหลือ 12.5%"}</li>
                  <li className="font-semibold">{"(ลดลงครึ่งหนึ่งเรื่อย ๆ)"}</li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/important.jpg"
                    alt="Drug concentration decay graph"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Drug Types (by Half-life) */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <PillIcon className="w-8 h-8 text-purple-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"📋 ประเภทของยา (ตาม Half-life)"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{"Half-life สั้น"}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{"ยาออกฤทธิ์เร็ว"}</li>
                      <li>{"Paracetamol (~2–3 ชม.)"}</li>
                      <li>{"ใช้บ่อยขึ้น"}</li>
                      <li>{"ต้องให้ยาซ้ำทุก 4–6 ชม."}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{"Half-life ยาว"}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{"Diazepam (~20–50 ชม.)"}</li>
                      <li>{"วันละครั้งหรือวันเว้นวันก็พอ"}</li>
                    </ul>
                  </div>
                </div>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/clock.jpg"
                    alt="Short vs long half-life drugs"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Half-life Affects */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-2">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <AlertTriangleIcon className="w-8 h-8 text-red-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"⚠️ Half-life มีผลต่อ:"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                  <li>{"📌 การออกฤทธิ์นาน/สั้น ของยา"}</li>
                  <li>{"📌 การค้างในร่างกาย (ยา Half-life ยาวต้องระวังสะสม)"}</li>
                  <li>{"📌 การกำหนดเวลาเว้นการให้ยา"}</li>
                  <li>{"📌 การล้างยาออกในผู้ป่วยไตหรือตับเสื่อม"}</li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/puu.jpg"
                    alt="Drug effects and body elimination"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 6: Summary */}
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-white border-b">
                <ClipboardCheckIcon className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-2xl font-bold text-gray-800">{"📌 สรุปเนื้อหา half life :"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-lg text-gray-700 mb-4">
                  {"“Half-life = ยาลดลงครึ่งนึงในเวลา X ชั่วโมง → มีผลต่อความถี่และปริมาณในการใช้ยา”"}
                </p>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/half-life/halflife.png"
                    alt="Drug half-life summary"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
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
