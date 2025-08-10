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
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, PenToolIcon as Tool, CheckCircle, Snowflake, AlertTriangle, Lightbulb, ClipboardCheck } from 'lucide-react'


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

       <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-12">
          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              การปฐมพยาบาลเบื้องต้น: <br className="hidden md:block" />
              <span className="text-primary">การดามกระดูกหักและการประคบเย็น</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              เรียนรู้วิธีการปฐมพยาบาลเบื้องต้นที่สำคัญ เพื่อป้องกันการบาดเจ็บซ้ำ ลดอาการปวดบวม และช่วยให้ผู้ป่วยปลอดภัยก่อนถึงมือแพทย์
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {/* Card 1: Introduction & Goals */}
            <Card className="col-span-full lg:col-span-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  การดามกระดูกหักและการประคบเย็นเบื้องต้น
                </CardTitle>
                <CardDescription className="text-gray-600">
                  ช่วยป้องกันการเคลื่อนไหว ลดการบาดเจ็บซ้ำ และบรรเทาอาการบวม/ปวดในระยะแรก
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src="/images/kradook/damkradoohak.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="First aid kit with a red cross symbol"
                    className="rounded-md"
                  />
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Target className="h-7 w-7" />
                  <h3 className="text-xl font-semibold">เป้าหมาย</h3>
                </div>
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>หยุดการเคลื่อนไหว ของกระดูก/ข้อที่หัก</li>
                  <li>ลดอาการบวม-ปวด</li>
                  <li>ป้องกันเส้นเลือด/เส้นประสาทถูกกดทับ</li>
                  <li>ช่วยให้ปลอดภัยก่อนถึงโรงพยาบาล</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Equipment */}
            <Card className="col-span-full md:col-span-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <div className="flex items-center gap-3 text-primary">
                    <Tool className="h-7 w-7" />
                    อุปกรณ์ที่ต้องเตรียม
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>
                    **ไม้ดาม (Splint)** – ไม้, หนังสือ, ไม้บรรทัด, แผ่นพลาสติกแข็ง ฯลฯ
                  </li>
                  <li>**วัสดุรองซับ** – ผ้าขนหนู, ผ้านุ่ม, ผ้าก๊อซ</li>
                  <li>**เชือก / ผ้าพัน / เทปกาว / ผ้ายืด** – สำหรับยึดไม้ดาม</li>
                  <li>**ถุงน้ำแข็ง / เจลเย็น / ผ้าเย็น** – สำหรับประคบ</li>
                  <li>**กรรไกร / ถุงมือสะอาด** (ถ้ามี)</li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src="/images/kradook/damkradook.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Various first aid splinting materials like bandages, wood, and ice packs on a table"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Splinting Steps */}
            <Card className="col-span-full md:col-span-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <div className="flex items-center gap-3 text-primary">
                    <CheckCircle className="h-7 w-7" />
                    ขั้นตอนการดามกระดูกหักเบื้องต้น
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <ol className="list-decimal pl-8 space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold">ประเมินผู้ป่วย</span>
                    <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                      <li>สังเกตอาการหัก: ปวด บวม ผิดรูป ขยับไม่ได้</li>
                      <li>ถ้ามีเลือดออก → ห้ามเลือดก่อน</li>
                      <li>อย่าเคลื่อนย้ายมากเกินจำเป็น</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">จัดท่าผู้ป่วยให้นิ่ง</span>
                    <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                      <li>ให้ส่วนที่หักอยู่ใน ท่าที่เจ็บน้อยที่สุด</li>
                      <li>อย่าพยายามดัดหรือจัดกระดูกกลับที่</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">รองซับจุดที่ดาม</span>
                    <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                      <li>วางผ้านุ่มหรือผ้าขนหนูรอบบริเวณที่ดาม เพื่อลดแรงกด</li>
                      <li>โดยเฉพาะจุดที่กระดูกนูน เช่น ข้อศอก, ข้อเท้า</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">วางไม้ดาม</span>
                    <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                      <li>ดามให้ ยาวคลุมข้อเหนือและใต้ บริเวณที่หัก (เช่น หักแขน → ดามตั้งแต่ข้อศอกถึงข้อมือ)</li>
                      <li>วางไม้ดามไว้ ด้านข้าง หรือตามแนวกระดูก</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">พันหรือผูกยึดไม้ดาม</span>
                    <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                      <li>ใช้ผ้าหรือเชือกพัน พอแน่นแต่ไม่รัดจนบวม</li>
                      <li>เช็กปลายมือ/เท้าว่า ยังอุ่น สีไม่คล้ำ และขยับได้</li>
                      <li>ถ้ามีอาการชา/เขียว/ปลายซีด = คลายให้หลวม</li>
                    </ul>
                  </li>
                </ol>
                <div className="relative w-full h-60 rounded-md overflow-hidden mt-6">
                  <Image
                    src="/images/kradook/kanton.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Illustration of person applying a splint to a broken arm with bandages"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Cold Compress */}
            <Card className="col-span-full md:col-span-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <div className="flex items-center gap-3 text-primary">
                    <Snowflake className="h-7 w-7" />
                    การประคบเย็น (Cold Compress)
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">วิธีทำ</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>ใช้ ถุงน้ำแข็ง / เจลเย็น / ผ้าแช่เย็น</li>
                  <li>ห่อด้วยผ้าบาง ๆ แล้ววางบนบริเวณที่บวม</li>
                  <li>ประคบครั้งละ 15–20 นาที หยุดพัก 20–30 นาที แล้วทำใหม่</li>
                  <li>ทำได้ในช่วง 24–48 ชั่วโมงแรก หลังบาดเจ็บ</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800">จุดประสงค์</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>ลดอาการบวม</li>
                  <li>ลดเลือดออกใต้ผิวหนัง</li>
                  <li>ช่วยบรรเทาอาการปวด</li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden mt-6">
                  <Image
                    src="/images/kradook/prakob.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Person applying a cold compress with an ice pack on a swollen ankle"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Precautions & Easy Steps */}
            <Card className="col-span-full md:col-span-1 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <div className="flex items-center gap-3 text-destructive">
                    <AlertTriangle className="h-7 w-7" />
                    ข้อควรระวัง
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>ห้ามวางน้ำแข็งโดยตรงบนผิวหนัง → อาจทำให้ผิวไหม้เย็น</li>
                  <li>อย่าขยับกระดูกหักเอง</li>
                  <li>
                    หากปลายมือ/เท้าชา บวมมาก มีแผลเปิด หรือสงสัยหักหลายจุด → ส่งโรงพยาบาลทันที
                  </li>
                </ul>
                <div className="relative w-full h-48 rounded-md overflow-hidden mt-6">
                  <Image
                    src="/images/kradook/piumai.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Emergency room sign or ambulance at a hospital"
                    className="rounded-md"
                  />
                </div>
                <div className="flex items-center gap-3 mt-8 text-yellow-600">
                  <Lightbulb className="h-7 w-7" />
                  <h3 className="text-xl font-semibold">วิธีการจำง่าย:</h3>
                </div>
                <p className="text-center text-2xl md:text-3xl font-extrabold text-primary bg-primary-foreground p-4 rounded-md border border-primary/20">
                  “ประเมิน – จัดท่า – รองซับ – ดาม – พัน – ประคบเย็น”
                </p>
              </CardContent>
            </Card>

            {/* Card 6: Summary */}
            <Card className="col-span-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  <div className="flex items-center gap-3 text-green-600">
                    <ClipboardCheck className="h-7 w-7" />
                    สรุป
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4 text-gray-700">
                <p>
                  การปฐมพยาบาลเบื้องต้นสำหรับการดามกระดูกหักและการประคบเย็นเป็นสิ่งสำคัญในการลดความรุนแรงของการบาดเจ็บและเตรียมผู้ป่วยก่อนถึงมือแพทย์
                  โดยมีหลักการสำคัญคือการหยุดการเคลื่อนไหวของกระดูกที่หัก ลดอาการบวมและปวด
                  รวมถึงป้องกันภาวะแทรกซ้อนที่อาจเกิดขึ้น
                </p>
                <p>
                  จดจำขั้นตอนง่ายๆ:
                  <span className="font-semibold text-primary">
                    “ประเมิน – จัดท่า – รองซับ – ดาม – พัน – ประคบเย็น”
                  </span>
                  และระมัดระวังข้อควรปฏิบัติเพื่อความปลอดภัยสูงสุดของผู้ป่วย
                </p>
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
