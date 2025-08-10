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
import { Thermometer, FlaskConical, Pill,  WormIcon as Virus, Syringe, Baby,  HandPlatter } from 'lucide-react';


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
 

        <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Card 1: Definition */}
            <Card className="bg-white shadow-lg border-l-4 border-green-500">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Thermometer className="h-6 w-6 text-green-600" />
                <CardTitle className="text-xl font-bold text-green-800">ยาลดไข้ (Antipyretics)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  ยาที่ช่วยลดไข้ โดยทำงานผ่านสมองส่วนควบคุมอุณหภูมิ (<span className="font-semibold">hypothalamus</span>)
                </p>
                <img
                  src="/images/antipry/antipyre.jpg"
                  alt="Brain showing hypothalamus"
                  className="mt-4 mx-auto rounded-md"
                />
              </CardContent>
            </Card>

            {/* Card 2: Mechanism of Action */}
            <Card className="bg-white shadow-lg border-l-4 border-orange-500">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <FlaskConical className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-xl font-bold text-orange-800">🎯 กลไกการออกฤทธิ์</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Virus className="h-5 w-5 text-orange-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    เมื่อร่างกายติดเชื้อ → ภูมิคุ้มกันสร้าง <span className="font-semibold">cytokines</span> เช่น IL-1, IL-6 → กระตุ้นให้ hypothalamus สร้าง <span className="font-semibold">Prostaglandin E2 (PGE2)</span> → ทำให้ร่างกาย “ตั้งอุณหภูมิใหม่” ให้สูงขึ้น = <span className="font-bold text-red-600">เป็นไข้</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Syringe className="h-5 w-5 text-orange-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-bold text-green-600">ยาลดไข้</span> → ไป <span className="font-semibold">ยับยั้งการสร้าง PGE2</span> ใน hypothalamus
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Droplet className="h-5 w-5 text-orange-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    → ร่างกายจึง <span className="font-semibold">ลดอุณหภูมิกลับสู่ปกติ</span> เช่น ทำให้เหงื่อออก, ขยายหลอดเลือด
                  </p>
                </div>
                <img
                  src="/images/antipry/konkaio.jpg"
                  alt="Diagram of chemical inhibition"
                  className="mt-4 mx-auto rounded-md"
                />
              </CardContent>
            </Card>

            {/* Card 3: Examples */}
            <Card className="bg-white shadow-lg border-l-4 border-purple-500">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Pill className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-xl font-bold text-purple-800">📋 ตัวอย่างยาลดไข้</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-purple-700">Paracetamol (Acetaminophen)</h3>
                  <p className="text-gray-700">นิยมที่สุด, ปลอดภัย, ลดไข้และปวด แต่ <span className="font-bold text-red-600">ไม่ลดการอักเสบ</span></p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-700">Ibuprofen</h3>
                  <p className="text-gray-700">เป็น NSAID → ลดไข้ ปวด และ<span className="font-bold text-green-600">อักเสบด้วย</span></p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-700">Aspirin</h3>
                  <p className="text-gray-700">ลดไข้ดี แต่ <span className="font-bold text-red-600">ไม่ใช้ในเด็กอายุต่ำกว่า 12 ปี</span> (เสี่ยง Reye’s syndrome)</p>
                </div>
                <img
                  src="/images/antipry/example.jpg"
                  alt="Diagram of chemical inhibition"
                  className="mt-4 mx-auto rounded-md"
                />
              </CardContent>
            </Card>

            {/* Card 4: Side Effects and Precautions */}
            <Card className="bg-white shadow-lg border-l-4 border-red-500">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-xl font-bold text-red-800">⚠️ ผลข้างเคียงและข้อควรระวัง</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-red-700">✅ Paracetamol</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>ปลอดภัยถ้าใช้ขนาดที่เหมาะสม</li>
                    <li><span className="font-bold">ห้ามกินเกิน 4,000 มก./วัน</span> → เสี่ยงตับวาย</li>
                    <li>ใช้ได้ในหญิงตั้งครรภ์และเด็ก (ขนาดต้องเหมาะสม)</li>
                  </ul>
                  <img
                    src="/images/antipry/stop.jpg"
                    alt="Diagram of chemical inhibition"
                    className="mt-4 mx-auto rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-red-700">⚠️ NSAIDs (เช่น ibuprofen)</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>อาจระคายกระเพาะ</li>
                    <li><span className="font-bold">ห้ามใช้ในผู้ป่วยโรคไต, กระเพาะอักเสบ</span></li>
                    <li>ต้องกินหลังอาหาร</li>
                  </ul> 
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Principles of Use */}
            <Card className="bg-white shadow-lg border-l-4 border-teal-500">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Stethoscope className="h-6 w-6 text-teal-600" />
                <CardTitle className="text-xl font-bold text-teal-800">🧠 หลักการใช้ยาลดไข้</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Thermometer className="h-5 w-5 text-teal-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    กินเมื่อไข้ <span className="font-semibold">≥ 37.8–38.5°C</span> หรือมีอาการไม่สบายจากไข้
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Baby className="h-5 w-5 text-teal-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    ถ้าเป็นเด็กเล็ก → ใช้แบบน้ำเชื่อมหรือเหน็บทางทวาร
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-teal-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    ควรให้เวลายาออกฤทธิ์ <span className="font-semibold">~30–60 นาที</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <HandPlatter className="h-5 w-5 text-teal-500 shrink-0 mt-1" />
                  <p className="text-gray-700">
                    ร่วมกับการเช็ดตัวลดไข้จะช่วยให้ได้ผลดียิ่งขึ้น
                  </p>
                </div>
                <img
                  src="/images/antipry/use.jpg"
                  alt="Diagram of chemical inhibition"
                  className="mt-4 mx-auto rounded-md"
                />
              </CardContent>
            </Card>

            {/* Card 6: Summary */}
            <Card className="bg-white shadow-lg border-l-4 border-green-600">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <CheckCircle className="h-6 w-6 text-green-700" />
                <CardTitle className="text-xl font-bold text-green-900">📌 สรุปเนื้อหาของยาลดไข้</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 text-lg font-bold text-center">
                  “ยาลดไข้ = ยับยั้ง PGE2 ใน hypothalamus → ลดไข้ โดยไม่ฆ่าเชื้อ”
                </p>
                <img
                  src="/images/antipry/sarup.jpg"
                  alt="Diagram of chemical inhibition"
                  className="mt-4 mx-auto rounded-md"
                />
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
