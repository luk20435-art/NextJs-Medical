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

       <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
            <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl lg:text-5xl">
              อาการช็อก / หน้ามืด / ลมหมดสติ (Fainting & Shock)
            </h1>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              ภาวะที่เลือดไปเลี้ยงสมองไม่เพียงพอ ทำให้หมดสติชั่วคราว หรือร่างกายอยู่ในภาวะวิกฤต ต้องช่วยเหลือทันที
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Section 1: หน้ามืด (Pre-syncope) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="illustration of a person feeling dizzy and lightheaded"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/named.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">📌 1. หน้ามืด (Pre-syncope)</CardTitle>
                  <CardDescription>อาการ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" /> เวียนหัว ตาลาย
                    </li>
                    <li className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-primary" /> ใจสั่น
                    </li>
                    <li className="flex items-center gap-2">
                      <Wind className="h-5 w-5 text-primary" /> หูอื้อ คลื่นไส้
                    </li>
                    <li className="flex items-center gap-2">
                      <ThermometerSnowflake className="h-5 w-5 text-primary" /> เหงื่อออก ตัวเย็น
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 2: ลมหมดสติ (Syncope) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="illustration of a person fainting or collapsing"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/modsati.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">📌 2. ลมหมดสติ (Syncope)</CardTitle>
                  <CardDescription>อาการและสาเหตุ</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-2">อาการ:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> เป็นลม หมดสติสั้น ๆ 1–2 นาที แล้วฟื้น
                    </li>
                  </ul>
                  <h3 className="font-medium mb-2">สาเหตุ:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-primary" /> ยืนนาน อากาศร้อน
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" /> ความเครียด
                    </li>
                    <li className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-primary" /> โลหิตจาง พักผ่อนน้อย
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 3: ภาวะช็อก (Shock) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="medical illustration of a person in a state of shock, pale and cold"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/shock.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">📌 3. ภาวะช็อก (Shock)</CardTitle>
                  <CardDescription>อาการและสาเหตุ</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-2">อาการ:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-center gap-2">
                      <ThermometerSnowflake className="h-5 w-5 text-primary" /> มือเท้าเย็น ซีด
                    </li>
                    <li className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-primary" /> ชีพจรเบาเร็ว หายใจหอบ
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-primary" /> ความดันต่ำ อาจหมดสติ
                    </li>
                  </ul>
                  <h3 className="font-medium mb-2">สาเหตุ:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" /> เสียเลือด ติดเชื้อรุนแรง ภูมิแพ้รุนแรง หัวใจล้มเหลว ฯลฯ
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-red-500">
                    ถือเป็นภาวะฉุกเฉิน ต้องรีบช่วยเหลือและส่งต่อทันที
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-center mt-12 mb-8 md:text-3xl">
              🛌 การจัดท่านอนผู้ป่วยอย่างถูกวิธี
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Section: ประเมินก่อน (Assessment) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="medical illustration of a first responder assessing an unresponsive person"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/position.png"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">✅ ขั้นตอนการจัดท่าผู้ป่วยหมดสติ/ช็อก</CardTitle>
                  <CardDescription>1. ประเมินก่อน</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ClipboardList className="h-5 w-5 text-primary" /> ผู้ป่วยตอบสนองหรือไม่? หายใจเองได้ไหม?
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> ถ้าไม่หายใจ → เริ่ม CPR ทันที
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> ถ้าหายใจได้ → วางนอนพักอย่างปลอดภัย
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section: ท่านอนยกขา (Trendelenburg Position) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="medical illustration of a person in Trendelenburg position with legs elevated"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/recovery.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">2. ท่านอนสำหรับคนเป็นลม / หน้ามืด / ช็อก</CardTitle>
                  <CardDescription>ท่านอนยกขา (Trendelenburg Position)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" /> ให้นอนหงาย ศีรษะราบ
                    </li>
                    <li className="flex items-center gap-2">
                      <HandHelping className="h-5 w-5 text-primary" /> ยกขาทั้งสองข้างสูง 30–45 องศา (เช่น ใช้หมอนหรือของนุ่มหนุนใต้ขา)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> ช่วยให้เลือดกลับไปเลี้ยงสมอง
                    </li>
                    <li className="flex items-center gap-2">
                      <Wind className="h-5 w-5 text-primary" /> คลายเสื้อผ้าให้หลวม เช็ดหน้า-ให้ลม หรือพัดเบา ๆ
                    </li>
                    <li className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-primary" /> สังเกตอาการต่อเนื่องจนกว่าจะฟื้น
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section: ห้ามทำ (Do Not Do) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="medical illustration of actions to avoid during fainting or shock, like shaking or strong inhalants"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/ammonia.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">3. ห้ามทำ</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> ห้ามให้ดมยาดมหรือแอมโมเนียแรงเกินไป (กระตุ้นให้กล่องเสียงหดตัว เสี่ยงหยุดหายใจ)
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> ห้ามเขย่าตัวแรง ๆ
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> ห้ามจับผู้ป่วยนั่งทันทีหลังฟื้น ควรรอให้นอนพักก่อน
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section: ท่านอนตะแคงท่ากู้ชีพ (Recovery Position) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="medical illustration of a person in the recovery position"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/kanton.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">✅ ท่านอนสำหรับผู้ป่วยอาเจียน/เสี่ยงสำลัก</CardTitle>
                  <CardDescription>ท่านอนตะแคงท่ากู้ชีพ (Recovery Position)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> เหมาะสำหรับคนหมดสติแต่ยังหายใจได้
                    </li>
                    <li className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" /> นอนตะแคงข้างหนึ่ง
                    </li>
                    <li className="flex items-center gap-2">
                      <HandHelping className="h-5 w-5 text-primary" /> ขาเหยียดข้างหนึ่ง พับขาอีกข้าง
                    </li>
                    <li className="flex items-center gap-2">
                      <HandHelping className="h-5 w-5 text-primary" /> มือข้างหนึ่งพยุงศีรษะ หันหน้าให้ทางเปิด
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> ป้องกันการสำลักน้ำลาย/อาเจียน
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section: เมื่อไหร่ต้องส่งโรงพยาบาลทันที (When to send to Hospital) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    alt="illustration of an ambulance or hospital entrance"
                    className="mb-4 rounded-lg object-cover"
                    height="200"
                    src="/images/penlom/hospital.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardTitle className="text-2xl font-semibold">⚠️ เมื่อไหร่ต้องส่งโรงพยาบาลทันที</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Hospital className="h-5 w-5 text-red-500" /> หมดสตินาน {'>'} 2–3 นาที
                    </li>
                    <li className="flex items-center gap-2">
                      <Hospital className="h-5 w-5 text-red-500" /> ไม่รู้สึกตัว / ปลุกไม่ตื่น
                    </li>
                    <li className="flex items-center gap-2">
                      <Hospital className="h-5 w-5 text-red-500" /> มีอาการชัก, แน่นหน้าอก, หายใจผิดปกติ
                    </li>
                    <li className="flex items-center gap-2">
                      <Hospital className="h-5 w-5 text-red-500" /> เป็นลมซ้ำหลายครั้ง / มีโรคประจำตัวรุนแรง
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section: สรุปขั้นตอนอย่างง่าย (Simple Summary) */}
              <Card>
                <CardHeader className="flex flex-col items-center text-center"> 
                  <CardTitle className="text-2xl font-semibold">📌 สรุปขั้นตอนอย่างง่าย</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-center text-primary">
                    “วางราบ – ยกขา – คลายเสื้อ – เช็กหายใจ – ตะแคงถ้าอาเจียน – ส่งต่อถ้าหนัก”
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
