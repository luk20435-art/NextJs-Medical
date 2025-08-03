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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบย่อยอาหาร</h3> 
                </div>
            <div className="space-y-8">

        <Tabs defaultValue="upper" className="w-full"> 
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="upper"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ทางเดินอาหารส่วนบน
                      </TabsTrigger>
                      <TabsTrigger
                        value="lower"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                       ทางเดินอาหารส่วนล่าง
                      </TabsTrigger>
                      <TabsTrigger
                        value="absorption"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        การดูดซึม
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="upper" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ปากและฟัน</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/mouth_teeth.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ฟัน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ฟันตัด: ตัดอาหาร</li>
                        <li>• ฟันเขี้ยว: ฉีกอาหาร</li>
                        <li>• ฟันกราม: บดอาหาร</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ลิ้น</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ช่วยเคี้ยวและกลืน</li>
                        <li>• รับรสชาติ</li>
                        <li>• ผสมอาหารกับน้ำลาย</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>หลอดอาหารและกระเพาะอาหาร</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/lodlom.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">หลอดอาหาร</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ยาวประมาณ 25 ซม.</li>
                        <li>• ส่งอาหารสู่กระเพาะ</li>
                        <li>• การเคลื่อนไหวแบบคลื่น</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">กระเพาะอาหาร</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เก็บและย่อยอาหาร</li>
                        <li>• สร้างกรดและเอนไซม์</li>
                        <li>• ฆ่าเชื้อโรค</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>ต่อมช่วยย่อย</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">ตับ</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• สร้างน้ำดี</li>
                      <li>• ย่อยไขมัน</li>
                      <li>• กำจัดสารพิษ</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">ตับอ่อน</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• สร้างเอนไซม์ย่อย</li>
                      <li>• สร้างฮอร์โมนอินซูลิน</li>
                      <li>• ควบคุมน้ำตาล</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">ถุงน้ำดี</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• เก็บน้ำดี</li>
                      <li>• ปล่อยเมื่อกินไขมัน</li>
                      <li>• ช่วยย่อยไขมัน</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lower" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ลำไส้เล็ก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/lamsai_small.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ส่วนประกอบ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ลำไส้เล็กส่วนต้น (Duodenum)</li>
                        <li>• ลำไส้เล็กส่วนกลาง (Jejunum)</li>
                        <li>• ลำไส้เล็กส่วนปลาย (Ileum)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ขนาด</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ยาวประมาณ 6-7 เมตร</li>
                        <li>• เส้นผ่านศูนย์กลาง 2.5 ซม.</li>
                        <li>• พื้นผิวมีขนย่อย</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ลำไส้ใหญ่</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/lamsai_yai.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ส่วนประกอบ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ลำไส้ใหญ่ขึ้น</li>
                        <li>• ลำไส้ใหญ่ขวาง</li>
                        <li>• ลำไส้ใหญ่ลง</li>
                        <li>• ลำไส้ตรง</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">หน้าที่</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ดูดซึมน้ำ</li>
                        <li>• สร้างวิตามิน K</li>
                        <li>• ขับถ่ายของเสีย</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="absorption" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>การดูดซึมสารอาหาร</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/dudsem.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">คาร์โบไhydrate</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ย่อยเป็นน้ำตาลง่าย</li>
                        <li>• ดูดซึมที่ลำไส้เล็ก</li>
                        <li>• ให้พลังงาน</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">โปรตีน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ย่อยเป็นกรดอะมิโน</li>
                        <li>• ดูดซึมที่ลำไส้เล็ก</li>
                        <li>• สร้างและซ่อมแซมเนื้อเยื่อ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>โครงสร้างช่วยดูดซึม</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                                      src="/images/digestive/system_dud.jpg"
                                      alt=""
                                      width={400}
                                      height={300}
                                      className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ขนย่อย (Villi)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เพิ่มพื้นผิวการดูดซึม</li>
                        <li>• มีหลอดเลือดและหลอดน้ำเหลือง</li>
                        <li>• สูงประมาณ 1 มม.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">ไมโครวิลไล (Microvilli)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ขนย่อยขนาดเล็กมาก</li>
                        <li>• เพิ่มพื้นผิวอีก 20 เท่า</li>
                        <li>• มีเอนไซม์ย่อยอาหาร</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>การดูดซึมไขมัน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 mb-2">กระบวนการ</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• น้ำดีย่อยไขมันเป็นหยดเล็ก</li>
                      <li>• เอนไซม์ไลเปสย่อยต่อ</li>
                      <li>• ดูดซึมเป็นไคโลไมครอน</li>
                      <li>• เข้าสู่ระบบน้ำเหลือง</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 mb-2">วิตามินละลายไขมัน</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• วิตามิน A, D, E, K</li>
                      <li>• ต้องมีไขมันช่วยดูดซึม</li>
                      <li>• เก็บในตับและเนื้อเยื่อไขมัน</li>
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
