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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบทางเดินหายใจ</h3> 
                </div>
                <div className="space-y-8">

        <Tabs defaultValue="upper" className="w-full"> 
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="upper"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ทางเดินหายใจส่วนบน
                      </TabsTrigger>
                      <TabsTrigger
                        value="lower"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                       ทางเดินหายใจส่วนล่าง
                      </TabsTrigger>
                      <TabsTrigger
                        value="process"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        กระบวนการหายใจ
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="upper" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>โพรงจมูก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/nose.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หน้าที่</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กรองอากาศจากฝุ่นและเชื้อโรค</li>
                        <li>• ทำให้อากาศอุ่นและชื้น</li>
                        <li>• รับกลิ่น</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">โครงสร้าง</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ขนจมูก (กรองฝุ่น)</li>
                        <li>• เยื่อเมือก (ดักเชื้อโรค)</li>
                        <li>• หลอดเลือดฝอย (ทำให้อุ่น)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>คอหอย และหลอดลม</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/kohoi.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">คอหอย (Pharynx)</h4>
                      <p className="text-sm text-gray-600">ทางผ่านร่วมของอากาศและอาหาร</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">กล่องเสียง (Larynx)</h4>
                      <p className="text-sm text-gray-600">สร้างเสียงและป้องกันอาหารเข้าหลอดลม</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หลอดลม (Trachea)</h4>
                      <p className="text-sm text-gray-600">ท่อนำอากาศสู่ปอด มีกระดูกอ่อนค้ำจุน</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lower" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>หลอดลมแขนง</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/kaneang.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หลอดลมใหญ่ (Bronchi)</h4>
                      <p className="text-sm text-gray-600">แขนงหลักของหลอดลมเข้าสู่ปอดแต่ละข้าง</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">หลอดลมเล็ก (Bronchioles)</h4>
                      <p className="text-sm text-gray-600">แขนงเล็กที่นำอากาศสู่ถุงลม</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ปอดและถุงลม</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/lungs.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ปอด (Lungs)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ปอดขวา: 3 กลีบ</li>
                        <li>• ปอดซ้าย: 2 กลีบ</li>
                        <li>• หุ้มด้วยเยื่อหุ้มปอด</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ถุงลม (Alveoli)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• จุดแลกเปลี่ยนแก๊ส</li>
                        <li>• ผนังบางมาก</li>
                        <li>• มีหลอดเลือดฝอยล้อมรอบ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>การหายใจเข้า</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/out.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">กลไกการหายใจเข้า</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กะบังลมหดตัวลง</li>
                        <li>• กล้ามเนื้อซี่โครงหดตัว</li>
                        <li>• ช่องอกขยายตัว</li>
                        <li>• ความดันในปอดลดลง</li>
                        <li>• อากาศไหลเข้าปอด</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>การหายใจออก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/respiratory/in.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">กลไกการหายใจออก</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กะบังลมคลายตัวขึ้น</li>
                        <li>• กล้ามเนื้อซี่โครงคลายตัว</li>
                        <li>• ช่องอกหดตัว</li>
                        <li>• ความดันในปอดเพิ่มขึ้น</li>
                        <li>• อากาศไหลออกจากปอด</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>การแลกเปลี่ยนแก๊ส</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">ที่ถุงลม</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• O₂ จากอากาศ → เลือด</li>
                      <li>• CO₂ จากเลือด → อากาศ</li>
                      <li>• ผ่านการแพร่</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">ที่เนื้อเยื่อ</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• O₂ จากเลือด → เซลล์</li>
                      <li>• CO₂ จากเซลล์ → เลือด</li>
                      <li>• สำหรับการหายใจเซลล์</li>
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
