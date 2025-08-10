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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบปัสสาวะ</h3> 
                </div> 
            <div className="space-y-8"> 

        <Tabs defaultValue="kidneys" className="w-full"> 
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="kidneys"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ไต
                      </TabsTrigger>
                      <TabsTrigger
                        value="ureters"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                       ท่อไต
                      </TabsTrigger>
                      <TabsTrigger
                        value="bladder"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        กระเพาะปัสสาวะ
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="kidneys" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>โครงสร้างไต</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/kidney.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-700 mb-2">เปลือกไต (Cortex)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ชั้นนอกของไต</li>
                        <li>• มีหน่วยไตจำนวนมาก</li>
                        <li>• สีแดงเข้ม</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-700 mb-2">แกนไต (Medulla)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ชั้นในของไต</li>
                        <li>• มีท่อเก็บปัสสาวะ</li>
                        <li>• สีแดงอ่อน</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>หน่วยไต (Nephron)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/nephron.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-700 mb-2">กลอเมอรูลัส</h4>
                      <p className="text-sm text-gray-600">กลุ่มหลอดเลือดฝอยที่กรองเลือด</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-700 mb-2">แคปซูลโบว์แมน</h4>
                      <p className="text-sm text-gray-600">หุ้มกลอเมอรูลัส รับของเหลวที่กรองแล้ว</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-700 mb-2">ท่อไต</h4>
                      <p className="text-sm text-gray-600">ดูดซึมสารที่ต้องการกลับคืน</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>หน้าที่ของไต</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-700 mb-2">การกรอง</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• กรองของเสียจากเลือด</li>
                      <li>• กรองน้ำส่วนเกิน</li>
                      <li>• สร้างปัสสาวะเบื้องต้น</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-700 mb-2">การดูดซึมกลับ</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ดูดน้ำกลับคืน</li>
                      <li>• ดูดเกลือแร่ที่จำเป็น</li>
                      <li>• ดูดกลูโคสกลับคืน</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-700 mb-2">การหลั่ง</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• หลั่งของเสียเพิ่มเติม</li>
                      <li>• ควบคุม pH เลือด</li>
                      <li>• หลั่งยาและสารพิษ</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-700 mb-2">การควบคุม</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ควบคุมความดันโลหิต</li>
                      <li>• สร้างฮอร์โมน EPO</li>
                      <li>• ควบคุมสมดุลเกลือแร่</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ureters" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ท่อไต (Ureters)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/ureters.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">ลักษณะ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ท่อกลวงยาวประมาณ 25-30 ซม.</li>
                        <li>• เส้นผ่านศูนย์กลาง 3-4 มม.</li>
                        <li>• มี 2 เส้น (ซ้าย-ขวา)</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">โครงสร้าง</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ผนังมีกล้ามเนื้อเรียบ</li>
                        <li>• เยื่อบุชั้นใน</li>
                        <li>• มีลิ้นป้องกันไหลย้อน</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>การทำงานของท่อไต</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/work_kidney.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">การเคลื่อนไหวแบบคลื่น</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กล้ามเนื้อหดตัวเป็นคลื่น</li>
                        <li>• ดันปัสสาวะไปข้างหน้า</li>
                        <li>• ไม่ขึ้นกับแรงโน้มถ่วง</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">การป้องกัน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ลิ้นป้องกันไหลย้อน</li>
                        <li>• ป้องกันเชื้อโรคขึ้นไต</li>
                        <li>• รักษาทิศทางการไหล</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bladder" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>กระเพาะปัสสาวะ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/chirag.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">โครงสร้าง</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ถุงกลวมขยายตัวได้</li>
                        <li>• ผนังมีกล้ามเนื้อเรียบ</li>
                        <li>• ความจุ 400-600 มล.</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">กล้ามเนื้อดีทรูเซอร์</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กล้ามเนื้อผนังกระเพาะ</li>
                        <li>• หดตัวเพื่อขับปัสสาวะ</li>
                        <li>• ควบคุมโดยระบบประสาท</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>การขับปัสสาวะ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/urinary/urine.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">การเก็บปัสสาวะ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กล้ามเนื้อกระเพาะคลายตัว</li>
                        <li>• กล้ามเนื้อหูรูดหดตัว</li>
                        <li>• ปัสสาวะสะสมในกระเพาะ</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">การขับปัสสาวะ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• กล้ามเนื้อกระเพาะหดตัว</li>
                        <li>• กล้ามเนื้อหูรูดคลายตัว</li>
                        <li>• ปัสสาวะไหลออกทางท่อปัสสาวะ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>ท่อปัสสาวะ (Urethra)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">ในเพศชาย</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ยาวประมาณ 20 ซม.</li>
                      <li>• ผ่านต่อมลูกหมาก</li>
                      <li>• ใช้ขับปัสสาวะและน้ำกาม</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-700 mb-2">ในเพศหญิง</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ยาวประมาณ 4 ซม.</li>
                      <li>• สั้นและตรง</li>
                      <li>• ใช้ขับปัสสาวะเท่านั้น</li>
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
