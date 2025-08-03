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

        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบไหลเวียนเลือด</h3> 
                </div> 
            <div className="space-y-8"> 

        <Tabs defaultValue="heart" className="w-full">
          
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="heart"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        หัวใจ
                      </TabsTrigger>
                      <TabsTrigger
                        value="vessels"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        หลอดเลือด
                      </TabsTrigger>
                      <TabsTrigger
                        value="lymphatic"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ระบบน้ำเหลือง
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="heart" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>โครงสร้างหัวใจ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                      src="/images/circulatory/heart.jpg"
                      alt="ระบบประสาทส่วนกลาง"
                      width={400}
                      height={300}
                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                      sizes="(max-width: 768px) 100vw, 400px"
                  />  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ลิ้นหัวใจ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">ลิ้นไตรคัสปิด</h4>
                    <p className="text-sm text-gray-600">ระหว่างห้องบนขวาและห้องล่างขวา</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">ลิ้นไบคัสปิด</h4>
                    <p className="text-sm text-gray-600">ระหว่างห้องบนซ้ายและห้องล่างซ้าย</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">ลิ้นเซมิลูนาร์</h4>
                    <p className="text-sm text-gray-600">ที่ทางออกของหลอดเลือดใหญ่</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>การทำงานของหัวใจ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">ระยะหดตัว (Systole)</h4>
                    <p className="text-sm text-gray-600">หัวใจหดตัวเพื่อสูบเลือดออกจากหัวใจ</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">ระยะคลายตัว (Diastole)</h4>
                    <p className="text-sm text-gray-600">หัวใจคลายตัวเพื่อรับเลือดเข้าสู่หัวใจ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vessels" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>หลอดเลือดแดง</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                      src="/images/circulatory/red_blood.jpg"
                      alt="หลอดเลือดแดง"
                      width={400}
                      height={300}
                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                      sizes="(max-width: 768px) 100vw, 400px"
                  /> 
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">ลักษณะ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ผนังหนาและยืดหยุ่น</li>
                        <li>• ความดันสูง</li>
                        <li>• ไม่มีลิ้นกั้น</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">หน้าที่</h4>
                      <p className="text-sm text-gray-600">ขนส่งเลือดที่มีออกซิเจนจากหัวใจไปยังอวัยวะต่างๆ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>หลอดเลือดดำ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                      src="/images/circulatory/black_blood.jpg"
                      alt="หลอดเลือดดำ"
                      width={400}
                      height={300}
                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                      sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ลักษณะ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ผนังบางและยืดหยุ่นน้อย</li>
                        <li>• ความดันต่ำ</li>
                        <li>• มีลิ้นกั้นป้องกันเลือดไหลย้อน</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หน้าที่</h4>
                      <p className="text-sm text-gray-600">ขนส่งเลือดที่ไม่มีออกซิเจนกลับสู่หัวใจ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>หลอดเลือดฝอย</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">ขนาด</h4>
                    <p className="text-sm text-gray-600">เส้นผ่านศูนย์กลางเล็กมาก</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">ผนัง</h4>
                    <p className="text-sm text-gray-600">บางมากเพื่อการแลกเปลี่ยน</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-700 mb-2">หน้าที่</h4>
                    <p className="text-sm text-gray-600">แลกเปลี่ยนสารระหว่างเลือดและเนื้อเยื่อ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lymphatic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ระบบน้ำเหลือง</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                      src="/images/circulatory/yellow.jpg"
                      alt="ระบบน้ำเหลือง"
                      width={400}
                      height={300}
                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                      sizes="(max-width: 768px) 100vw, 400px"
                  /> 
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>หน้าที่ของระบบน้ำเหลือง</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">การป้องกันร่างกาย</h4>
                    <p className="text-sm text-gray-600">กรองและทำลายเชื้อโรคและสารแปลกปลอม</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">การดูดซึมไขมัน</h4>
                    <p className="text-sm text-gray-600">ดูดซึมไขมันจากลำไส้เล็กและขนส่งสู่กระแสเลือด</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">การรักษาสมดุลของเหลว</h4>
                    <p className="text-sm text-gray-600">เก็บของเหลวส่วนเกินจากเนื้อเยื่อกลับสู่กระแสเลือด</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
