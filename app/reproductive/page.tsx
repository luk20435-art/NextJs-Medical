"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function MedicalLearningPlatform() { 
    const topics = [
    {
      title: "เนื้อเยื่อบุผิว (Epithelial Tissue)",
      description: "ศึกษาเนื้อเยื่อที่ปกคลุมผิวหนังและอวัยวะภายใน",
      icon: Eye,
      href: "/epithelial-tissue",
      color: "bg-blue-500",
    },
    {
      title: "เนื้อเยื่อเชื่อมต่อ (Connective Tissue)",
      description: "เนื้อเยื่อที่ให้การสนับสนุนและเชื่อมต่ออวัยวะต่างๆ",
      icon: Bone,
      href: "/connective-tissue",
      color: "bg-green-500",
    },
    {
      title: "เนื้อเยื่อกล้ามเนื้อ (Muscle Tissue)",
      description: "ศึกษาโครงสร้างและการทำงานของกล้ามเนื้อ",
      icon: Heart,
      href: "/muscle-tissue",
      color: "bg-red-500",
    },
    {
      title: "เนื้อเยื่อประสาท (Nervous Tissue)",
      description: "โครงสร้างของเซลล์ประสาทและระบบประสาท",
      icon: Brain,
      href: "/nervous-tissue",
      color: "bg-purple-500",
    },
    {
      title: "ระบบหายใจ (Respiratory System)",
      description: "โครงสร้างจุลภาคของปอดและทางเดินหายใจ",
      icon: Lungs,
      href: "/respiratory-system",
      color: "bg-cyan-500",
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

        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบสืบพันธุ์</h3> 
                </div>
            <div className="space-y-8"> 

        <Tabs defaultValue="male" className="w-full"> 
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="male"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ระบบสืบพันธุ์ชาย
                      </TabsTrigger>
                      <TabsTrigger
                        value="female"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                       ระบบสืบพันธุ์หญิง
                      </TabsTrigger>
                      <TabsTrigger
                        value="hormones"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ฮอร์โมนสืบพันธุ์
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="male" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>อวัยวะสืบพันธุ์ชายภายนอก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/male.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">อัณฑะ (Testes)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างสเปิร์ม</li>
                        <li>• สร้างฮอร์โมนเทสโทสเตอโรน</li>
                        <li>• อยู่ในถุงอัณฑะ</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ถุงอัณฑะ (Scrotum)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ห่อหุ้มอัณฑะ</li>
                        <li>• ควบคุมอุณหภูมิ</li>
                        <li>• ป้องกันอัณฑะ</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">อวัยวะเพศชาย</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ส่งสเปิร์มเข้าสู่ร่างกายหญิง</li>
                        <li>• ขับปัสสาวะ</li>
                        <li>• มีเนื้อเยื่อแข็งตัวได้</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>อวัยวะสืบพันธุ์ชายภายใน</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/painai_male.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หลอดนำสเปิร์ม</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• นำสเปิร์มจากอัณฑะ</li>
                        <li>• เก็บสเปิร์มให้สุก</li>
                        <li>• ยาวประมาณ 45 ซม.</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ต่อมลูกหมาก</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างของเหลวในน้ำกาม</li>
                        <li>• ช่วยเลี้ยงสเปิร์ม</li>
                        <li>• ล้อมรอบท่อปัสสาวะ</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ถุงน้ำกาม</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างน้ำตาลฟรุกโทส</li>
                        <li>• ให้พลังงานแก่สเปิร์ม</li>
                        <li>• สร้างของเหลว 60%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>การสร้างสเปิร์ม</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">ระยะเวลา</h4>
                    <p className="text-sm text-gray-600">ประมาณ 74 วัน</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">จำนวน</h4>
                    <p className="text-sm text-gray-600">300-500 ล้านตัว/วัน</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">อุณหภูมิ</h4>
                    <p className="text-sm text-gray-600">ต่ำกว่าร่างกาย 2-3°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="female" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>อวัยวะสืบพันธุ์หญิงภายนอก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/female.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">ปากช่องคลอด</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ทางเข้าสู่อวัยวะภายใน</li>
                        <li>• มีเยื่อบุที่ชื้น</li>
                        <li>• ป้องกันเชื้อโรค</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">ริมฝีปากช่องคลอด</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ป้องกันอวัยวะภายใน</li>
                        <li>• มีต่อมน้ำมัน</li>
                        <li>• เปลี่ยนแปลงตามฮอร์โมน</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>อวัยวะสืบพันธุ์หญิงภายใน</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/painai_female.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">รังไข่ (Ovaries)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างไข่</li>
                        <li>• สร้างฮอร์โมนเอสโตรเจนและโปรเจสเตอโรน</li>
                        <li>• มี 2 ข้าง</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">ท่อนำไข่</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• นำไข่จากรังไข่สู่มดลูก</li>
                        <li>• สถานที่ปฏิสนธิ</li>
                        <li>• มีขนเซลล์ช่วยขับไข่</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">มดลูก (Uterus)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• รองรับการเจริญของทารก</li>
                        <li>• ผนังหนาและยืดหยุ่น</li>
                        <li>• เปลี่ยนแปลงตามรอบเดือน</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>รอบประจำเดือน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-red-700 mb-2">วันที่ 1-5</h4>
                    <p className="text-sm text-gray-600">ประจำเดือน</p>
                    <p className="text-xs text-gray-500">ผนังมดลูกหลุด</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-700 mb-2">วันที่ 6-13</h4>
                    <p className="text-sm text-gray-600">ระยะฟอลลิคูลาร์</p>
                    <p className="text-xs text-gray-500">ไข่เจริญ</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">วันที่ 14</h4>
                    <p className="text-sm text-gray-600">ตกไข่</p>
                    <p className="text-xs text-gray-500">ไข่ออกจากรังไข่</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-yellow-700 mb-2">วันที่ 15-28</h4>
                    <p className="text-sm text-gray-600">ระยะลูทีล</p>
                    <p className="text-xs text-gray-500">เตรียมรับไข่ปฏิสนธิ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hormones" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ฮอร์โมนเพศชาย</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/hormone_male.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">เทสโทสเตอโรน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างจากอัณฑะ</li>
                        <li>• พัฒนาลักษณะเพศชาย</li>
                        <li>• กระตุ้นการสร้างสเปิร์ม</li>
                        <li>• เพิ่มมวลกล้ามเนื้อ</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">FSH และ LH</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างจากต่อมใต้สมอง</li>
                        <li>• FSH: กระตุ้นการสร้างสเปิร์ม</li>
                        <li>• LH: กระตุ้นการสร้างเทสโทสเตอโรน</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ฮอร์โมนเพศหญิง</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/reproductive/hormone_female.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">เอสโตรเจน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างจากรังไข่</li>
                        <li>• พัฒนาลักษณะเพศหญิง</li>
                        <li>• ควบคุมรอบประจำเดือน</li>
                        <li>• เสริมสร้างกระดูก</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-700 mb-2">โปรเจสเตอโรน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• สร้างจากคอร์ปัสลูทีอัม</li>
                        <li>• เตรียมมดลูกรับการตั้งครรภ์</li>
                        <li>• รักษาการตั้งครรภ์</li>
                        <li>• ลดการหดตัวของมดลูก</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>การควบคุมฮอร์โมน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">ไฮโปธาลามัส</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• สร้าง GnRH</li>
                      <li>• ควบคุมต่อมใต้สมอง</li>
                      <li>• รับสัญญาณจากสิ่งแวดล้อม</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">ต่อมใต้สมอง</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• สร้าง FSH และ LH</li>
                      <li>• ควบคุมรังไข่และอัณฑะ</li>
                      <li>• ตอบสนองต่อ GnRH</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
            </div>
        </section>

        <div className="text-start mb-12 ml-28">
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
