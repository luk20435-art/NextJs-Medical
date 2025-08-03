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
import { Tabs, TabsContent, TabsList,TabsTrigger } from "@radix-ui/react-tabs";

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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ระบบประสาท</h3> 
                </div>
                
                <Tabs defaultValue="brain" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger
                        value="brain"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        โครงสร้างสมอง
                      </TabsTrigger>
                      <TabsTrigger
                        value="central"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ประสาทส่วนกลาง
                      </TabsTrigger>
                      <TabsTrigger
                        value="peripheral"
                        className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md transition"
                      >
                        ประสาทส่วนปลาย
                      </TabsTrigger>
                  </TabsList>

                  <TabsContent value="brain" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>โครงสร้างสมอง</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="w-full aspect-video"> 
                                <video width="100%" height="auto" controls autoPlay muted loop>
                                  <source src="/videos/brain.MP4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>  
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>หน้าที่ของสมอง</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">กลีบหน้าผาก (Frontal Lobe)</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• การคิดและการตัดสินใจ</li>
                              <li>• การควบคุมการเคลื่อนไหว</li>
                              <li>• บุคลิกภาพและอารมณ์</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">กลีบขมับ (Temporal Lobe)</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• การได้ยิน</li>
                              <li>• ความจำ</li>
                              <li>• การเข้าใจภาษา</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">กลีบท้ายทอย (Occipital Lobe)</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• การมองเห็น</li>
                              <li>• การประมวลผลภาพ</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="central" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>ระบบประสาทส่วนกลาง</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Image
                            src="/images/klang.jpg"
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
                          <CardTitle>การป้องกันระบบประสาทส่วนกลาง</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">กะโหลกศีรษะ</h4>
                            <p className="text-sm text-gray-600">ป้องกันสมองจากการกระแทก</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">กระดูกสันหลัง</h4>
                            <p className="text-sm text-gray-600">ป้องกันไขสันหลัง</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">เยื่อหุ้มสมอง</h4>
                            <p className="text-sm text-gray-600">เยื่อ 3 ชั้นที่หุ้มสมองและไขสันหลัง</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="peripheral" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>ระบบประสาทส่วนปลาย</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Image
                            src="/images/plai.jpg"
                            alt="ระบบประสาทส่วนปลาย"
                            width={400}
                            height={300}
                            className="w-full max-w-[400px] mx-auto rounded-lg mb-4 h-auto"
                            sizes="(max-width: 768px) 100vw, 400px"
                          /> 
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>ประเภทของประสาท</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">ประสาทรับความรู้สึก</h4>
                            <p className="text-sm text-gray-600">นำสัญญาณจากอวัยวะรับความรู้สึกไปยังสมอง</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">ประสาทสั่งการ</h4>
                            <p className="text-sm text-gray-600">นำสัญญาณจากสมองไปยังกล้ามเนื้อ</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-700 mb-2">ประสาทผสม</h4>
                            <p className="text-sm text-gray-600">ทำหน้าที่ทั้งรับความรู้สึกและสั่งการ</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
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
