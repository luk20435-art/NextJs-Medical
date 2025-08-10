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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบกล้ามเนื้อและกระดูก</h3> 
                </div> 
            <div className="space-y-8"> 

        <Tabs defaultValue="bones" className="w-full"> 
          <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="bones"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        กระดูก
                      </TabsTrigger>
                      <TabsTrigger
                        value="muscles"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                       กล้ามเนื้อ
                      </TabsTrigger>
                      <TabsTrigger
                        value="joints"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ข้อต่อ
                      </TabsTrigger>
          </TabsList>

          <TabsContent value="bones" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>โครงสร้างกระดูก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/skull.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">กระดูกแน่น</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• อยู่ชั้นนอก</li>
                        <li>• แข็งแรงและหนาแน่น</li>
                        <li>• ให้ความแข็งแรง</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">กระดูกฟองน้ำ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• อยู่ชั้นใน</li>
                        <li>• มีช่องว่างเป็นรูพรุน</li>
                        <li>• เบาและยืดหยุ่น</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ประเภทของกระดูก</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/type_skull.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">กระดูกยาว</h4>
                      <p className="text-sm text-gray-600">เช่น กระดูกต้นแขน ต้นขา</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">กระดูกสั้น</h4>
                      <p className="text-sm text-gray-600">เช่น กระดูกข้อมือ ข้อเท้า</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">กระดูกแบน</h4>
                      <p className="text-sm text-gray-600">เช่น กะโหลกศีรษะ กระดูกซี่โครง</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>หน้าที่ของกระดูก</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-yellow-700 mb-2">ค้ำจุน</h4>
                    <p className="text-sm text-gray-600">ให้โครงสร้างและรูปร่างร่างกาย</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-yellow-700 mb-2">ป้องกัน</h4>
                    <p className="text-sm text-gray-600">ป้องกันอวัยวะภายใน</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-yellow-700 mb-2">สร้างเลือด</h4>
                    <p className="text-sm text-gray-600">ไขกระดูกสร้างเซลล์เลือด</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="muscles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ประเภทของกล้ามเนื้อ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/type_muscle.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">กล้ามเนื้อลาย</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ควบคุมได้ตามใจ</li>
                        <li>• ติดกับกระดูก</li>
                        <li>• ทำให้ร่างกายเคลื่อนไหว</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">กล้ามเนื้อหัวใจ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ควบคุมไม่ได้</li>
                        <li>• อยู่ที่หัวใจ</li>
                        <li>• สูบฉีดเลือด</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">กล้ามเนื้อเรียบ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ควบคุมไม่ได้</li>
                        <li>• อยู่ในอวัยวะภายใน</li>
                        <li>• ช่วยการทำงานของอวัยวะ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>การทำงานของกล้ามเนื้อ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/working.png"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">การหดตัว</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เส้นใยกล้ามเนื้อหดตัว</li>
                        <li>• กล้ามเนื้อสั้นลงและหนาขึ้น</li>
                        <li>• ใช้พลังงาน ATP</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">การคลายตัว</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เส้นใยกล้ามเนื้อคลายตัว</li>
                        <li>• กล้ามเนื้อยาวขึ้นและบางลง</li>
                        <li>• กลับสู่สภาพปกติ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="joints" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>ประเภทของข้อต่อ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/type_joint.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">ข้อต่อลูกบอล</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เคลื่อนไหวได้ทุกทิศทาง</li>
                        <li>• เช่น ข้อไหล่ ข้อสะโพก</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">ข้อต่อบานพับ</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• เคลื่อนไหวได้ทิศทางเดียว</li>
                        <li>• เช่น ข้อศอก ข้อเข่า</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">ข้อต่อหมุน</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• หมุนรอบแกน</li>
                        <li>• เช่น ข้อต่อคอ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>โครงสร้างข้อต่อ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/musculos/shoulder.jpg"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">กระดูกอ่อน</h4>
                      <p className="text-sm text-gray-600">หุ้มปลายกระดูก ลดการเสียดสี</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">น้ำไซโนเวียล</h4>
                      <p className="text-sm text-gray-600">หล่อลื่นข้อต่อ ลดการเสียดสี</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">เอ็น</h4>
                      <p className="text-sm text-gray-600">เชื่อมกล้ามเนื้อกับกระดูก</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">เส้นเอ็น</h4>
                      <p className="text-sm text-gray-600">เชื่อมกระดูกกับกระดูก</p>
                    </div>
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
