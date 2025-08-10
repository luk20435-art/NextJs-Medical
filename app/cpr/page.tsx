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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Zap, AlertTriangle, CheckCircle } from 'lucide-react'


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

       <div className="max-w-4xl mx-auto p-6 space-y-6 bg-gradient-to-br from-red-50 to-blue-50 min-h-screen">
          {/* Header */}
          <Card className="border-red-200 bg-white shadow-lg">
            <CardHeader className="text-center bg-red-600 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Heart className="h-8 w-8" />
                <CardTitle className="text-2xl font-bold">การทำ CPR + การใช้เครื่อง AED</CardTitle>
              </div>
              <p className="text-red-100">การช่วยชีวิตเบื้องต้นเมื่อหัวใจหยุดเต้น เพื่อเพิ่มโอกาสรอดก่อนถึงมือแพทย์</p>
            </CardHeader>
          </Card>

          {/* CPR Definition */}
          <Card className="border-blue-200 shadow-md">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                CPR คืออะไร?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-900 mb-2">CPR = Cardio-Pulmonary Resuscitation</p>
                <p className="text-gray-700">คือการ <span className="font-bold text-red-600">ปั๊มหัวใจ + ช่วยหายใจ</span> เพื่อให้เลือดและออกซิเจนไหลเวียนไปเลี้ยงสมองและอวัยวะสำคัญ ขณะหัวใจหยุดเต้น</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-4">
            <img
              src="/images/cpr/what-cpr.jpg"
              alt="การวางมือสำหรับการกดหน้าอก CPR"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* CPR Steps */}
          <Card className="border-green-200 shadow-md">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <Users className="h-6 w-6" />
                ขั้นตอนการทำ CPR เบื้องต้น (ผู้ใหญ่)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              {/* Step 1 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-green-700 mb-2">ขั้นที่ 1: ประเมินสถานการณ์</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• ปลอดภัยไหม? ตัวเองไม่เสี่ยง?</li>
                  <li>• เช็กสติ: เรียกเสียงดัง / เขย่าตัวเบา ๆ</li>
                  <li>• ไม่ตอบสนอง → <span className="font-bold text-red-600">ขอความช่วยเหลือ / โทร 1669</span></li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-blue-700 mb-2">ขั้นที่ 2: เช็กการหายใจ</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• ดูหน้าอกขยับไหม?</li>
                  <li>• ฟังเสียงหายใจ / รู้สึกลมหายใจที่แก้ม</li>
                  <li>• ไม่หายใจ/หายใจเฮือก ๆ → <span className="font-bold text-red-600">เริ่ม CPR</span></li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-700 mb-2">ขั้นที่ 3: เริ่มปั๊มหัวใจ (Chest Compression)</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• วางมือซ้อนกันกลางหน้าอก (ระหว่างหัวนม)</li>
                  <li>• แขนเหยียดตรง ใช้น้ำหนักตัวกดลง</li>
                  <li>• กดลึก <span className="font-bold text-red-600">5–6 ซม.</span> ที่ความเร็ว <span className="font-bold text-red-600">100–120 ครั้ง/นาที</span></li>
                  <li>• หลังจากแต่ละครั้งให้หน้าอกดีดกลับ</li>
                  <li>• ทำต่อเนื่อง <span className="font-bold text-red-600">30 ครั้ง</span></li>
                </ul>
                <div className="mt-3 text-center">
                  <img
                    src="/images/cpr/cpr-first.jpg"
                    alt="ตำแหน่งการวางมือที่ถูกต้องสำหรับการกดหน้าอก"
                    className="mx-auto rounded-lg border"
                  />
                  <p className="text-sm text-gray-600 mt-2">ตำแหน่งการวางมือที่ถูกต้อง</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-purple-700 mb-2">ขั้นที่ 4: เป่าปาก 2 ครั้ง (ถ้า trained และมีอุปกรณ์)</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• เปิดทางเดินหายใจ: เงยหน้า เชยคาง</li>
                  <li>• ปิดจมูก เป่าลมเข้าปากผู้ป่วยให้หน้าอกขยับ</li>
                  <li>• ถ้าไม่มั่นใจหรือไม่มีอุปกรณ์: <span className="font-bold text-purple-600">ทำแต่การกดหน้าอกก็ได้</span></li>
                </ul>
                <div className="mt-3 text-center">
                  <img
                    src="/images/cpr/first-cpr.jpg"
                    alt="เทคนิคการเปิดทางเดินหายใจ"
                    className="mx-auto rounded-lg border"
                  />
                  <p className="text-sm text-gray-600 mt-2">การเงยหน้าเชยคางเพื่อเปิดทางเดินหายใจ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AED Usage */}
          <Card className="border-yellow-200 shadow-md">
            <CardHeader className="bg-yellow-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img
                  src="/images/cpr/use-aed.jpg"
                  alt="เครื่อง AED"
                  className="rounded border"
                />
              </div>
              <CardTitle className="text-xl text-yellow-800 flex items-center gap-2">
                <Zap className="h-6 w-6" />
                การใช้เครื่อง AED (เครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Badge className="bg-yellow-500 text-white min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                  <p className="text-gray-700">เปิดเครื่อง AED → จะมีเสียงแนะนำทีละขั้น</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Badge className="bg-yellow-500 text-white min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-1">แปะแผ่นนำไฟฟ้า (Pads) ลงบนหน้าอก</p>
                    <p>• แผ่นแรก: ใต้กระดูกไหปลาร้าด้านขวา</p>
                    <p>• แผ่นสอง: ใต้รักแร้ซ้าย (ด้านล่างของหัวใจ)</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <img
                    src="/images/cpr/aed.jpg"
                    alt="ตำแหน่งการแปะแผ่นนำไฟฟ้า AED"
                    className="mx-auto rounded-lg border"
                  />
                  <p className="text-sm text-gray-600 mt-2">ตำแหน่งการแปะแผ่นนำไฟฟ้า AED</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Badge className="bg-yellow-500 text-white min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                  <p className="text-gray-700">รอเครื่องวิเคราะห์ → <span className="font-bold text-red-600">ห้ามแตะตัวผู้ป่วย</span></p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Badge className="bg-yellow-500 text-white min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-1">ถ้าต้องช็อก:</p>
                    <p>• กดปุ่ม "ช็อก" ตามคำสั่ง</p>
                    <p>• จากนั้น ทำ CPR ต่อทันที 2 นาที (5 รอบ) แล้วให้เครื่องวิเคราะห์ใหม่</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-md mb-6">
            <CardHeader className="bg-gray-100">
              <CardTitle className="text-xl text-gray-800">ลำดับขั้นตอน CPR แบบภาพ</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <img
                    src="/images/cpr/pramern.jpg"
                    alt="การประเมินสถานการณ์และเช็กสติ"
                    className="mx-auto rounded-lg border mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-700">1. ประเมินสถานการณ์</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/cpr/check.jpg"
                    alt="การตรวจสอบการหายใจ"
                    className="mx-auto rounded-lg border mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-700">2. เช็กการหายใจ</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/cpr/pump.jpg"
                    alt="การกดหน้าอก"
                    className="mx-auto rounded-lg border mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-700">3. กดหน้าอก 30 ครั้ง</p>
                </div>
                <div className="text-center">
                  <img
                    src="/images/cpr/paopak.jpg"
                    alt="การช่วยหายใจ"
                    className="mx-auto rounded-lg border mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-700">4. เป่าปาก 2 ครั้ง</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* C-A-B Summary */}
          <Card className="border-indigo-200 shadow-md">
            <CardHeader className="bg-indigo-100">
              <CardTitle className="text-xl text-indigo-800">สรุปลำดับการช่วยชีวิต: C-A-B</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-4 p-3 bg-indigo-50 rounded-lg">
                  <Badge className="bg-red-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center">C</Badge>
                  <div className="flex-1">
                    <p className="font-bold text-indigo-900">Compression</p>
                    <p className="text-gray-700">กดหน้าอก 30 ครั้ง</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-indigo-50 rounded-lg">
                  <Badge className="bg-blue-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center">A</Badge>
                  <div className="flex-1">
                    <p className="font-bold text-indigo-900">Airway</p>
                    <p className="text-gray-700">เปิดทางเดินหายใจ</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-indigo-50 rounded-lg">
                  <Badge className="bg-green-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center">B</Badge>
                  <div className="flex-1">
                    <p className="font-bold text-indigo-900">Breathing</p>
                    <p className="text-gray-700">เป่าปาก 2 ครั้ง (ถ้าทำได้)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-indigo-100 rounded-lg">
                <p className="text-center font-semibold text-indigo-900">ทำ CPR สลับกับใช้ AED จนกว่าจะฟื้นหรือทีมแพทย์มาถึง</p>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="border-orange-200 shadow-md">
            <CardHeader className="bg-orange-100">
              <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                ข้อควรรู้
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-2 text-gray-700">
                <p>• เริ่ม CPR ให้เร็วที่สุด = เพิ่มโอกาสรอด</p>
                <p>• ใช้ AED ได้แม้ไม่เคยเรียน เพราะมีเสียงแนะนำ</p>
                <p>• <span className="font-bold text-red-600">ห้ามใช้ AED ขณะร่างกายเปียกน้ำ</span></p>
                <p>• เด็ก {'>'} 1 ปี ใช้ CPR แบบผู้ใหญ่ได้ (แต่แรงน้อยลง)</p>
                <p>• เด็ก {'<'} 1 ปี: ใช้นิ้วกดหน้าอก (CPR แบบทารก)</p>
              </div>
            </CardContent>
          </Card>

          {/* Memory Aid */}
          <Card className="border-pink-200 shadow-md">
            <CardHeader className="bg-pink-100">
              <CardTitle className="text-xl text-pink-800">วิธีการจำง่ายๆ</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <p className="text-lg font-bold text-pink-900">
                  "โทร – ปั๊ม – ช็อก – เป่า – ปั๊มต่อ จนรอดหรือทีมแพทย์ถึง"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="border-red-300 bg-red-50 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-red-700 mb-2">เหตุฉุกเฉิน</p>
                <p className="text-4xl font-bold text-red-800">1669</p>
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
