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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, Target, Wrench, CheckCircle } from 'lucide-react'
import { useState } from "react";


const sections = [
  {
    id: "intro",
    title: "การใส่สาย IV Line",
    icon: <Stethoscope className="w-6 h-6" />,
    content: {
      definition: "การเจาะเส้นเลือดดำเพื่อให้น้ำเกลือ ยา หรือสารอาหารเข้าสู่ร่างกายโดยตรง",
      image: "/images/saline/ivline.jpg"
    }
  },
  {
    id: "goals",
    title: "เป้าหมาย",
    icon: <Target className="w-6 h-6" />,
    content: {
      goals: [
        "เติมน้ำ ยา อิเล็กโตรไลต์",
        "ชดเชยภาวะขาดน้ำ", 
        "เปิดเส้นไว้ในกรณีฉุกเฉิน",
        "ให้ยาอย่างต่อเนื่อง"
      ], 
    }
  },
  {
    id: "equipment",
    title: "อุปกรณ์ที่ต้องเตรียม",
    icon: <Wrench className="w-6 h-6" />,
    content: {
      equipment: [
        "สายให้น้ำเกลือ (IV set)",
        "น้ำเกลือ (Normal Saline / 5% Dextrose ฯลฯ)",
        "เข็ม IV catheter (เบอร์ขึ้นกับผู้ป่วย)",
        "สายล็อกกับเข็ม (Extension tube/3-way ถ้ามี)",
        "แอลกอฮอล์ / เบตาดีน",
        "ผ้าก๊อซ / พลาสเตอร์",
        "ที่รัดแขน (Tourniquet)",
        "ถุงมือสะอาด",
        "ถังเข็ม (Sharps box)"
      ],
      image: "/images/saline/uppakon.jpg"
    }
  }
]

const procedureSteps = [
  {
    step: 1,
    title: "ล้างมือ → ใส่ถุงมือ",
    description: "เพื่อป้องกันการติดเชื้อ",
    image: "/images/saline/langmue.jpg",
    details: "ล้างมือให้สะอาดและใส่ถุงมือสะอาดเพื่อป้องกันการติดเชื้อ"
  },
  {
    step: 2,
    title: "เตรียมน้ำเกลือ + สาย IV",
    description: "เจาะฝา บีบห้องหยด ไล่อากาศ",
    image: "/images/saline/namklua.jpg",
    details: "• เจาะฝาน้ำเกลือด้วย spike ของสาย\n• บีบห้องหยดให้เต็มครึ่งนึง\n• เปิดลมไล่อากาศในสายออกจนสุด แล้วปิด clamp"
  },
  {
    step: 3,
    title: "เลือกเส้นเลือดที่เหมาะสม",
    description: "หลังมือ / ข้อมือ / แขน",
    image: "/images/saline/sen.jpg",
    details: "• นิยมเจาะที่ หลังมือ / ข้อมือ / แขน\n• เส้นควรเต้นดี มองเห็น/คลำได้ชัด\n• ถ้าเจาะหลายรอบไม่เข้า → ปรึกษาแพทย์/พยาบาลอาวุโส"
  },
  {
    step: 4,
    title: "รัดแขน + ทำให้เส้นเด่น",
    description: "ใช้ tourniquet และทำความสะอาด",
    image: "/images/saline/rad.jpg",
    details: "• รัด tourniquet เหนือตำแหน่งที่จะเจาะ\n• ให้ผู้ป่วยกำมือ / ตบเบา ๆ / ห้อยแขน\n• ทำความสะอาดด้วยแอลกอฮอล์ (เช็ดวนจากในออกนอก)"
  },
  {
    step: 5,
    title: "เจาะเส้นเลือด",
    description: "มุม 15-30 องศา รอ flashback",
    image: "/images/saline/joh.jpg",
    details: "• จับ catheter ทำมุมประมาณ 15–30 องศา\n• แทงเข้าไปจนเห็นเลือดไหลย้อนกลับใน flashback chamber\n• ดัน catheter เข้าไปสุด แล้ว ถอนเข็มออก ค่อย ๆ\n• กดเส้นเลือดเหนือปลาย catheter ป้องกันเลือดไหล"
  },
  {
    step: 6,
    title: "ต่อสาย IV + เปิดน้ำ",
    description: "ล็อกสาย เช็คการไหล",
    image: "/images/saline/torsai.jpg",
    details: "• ล็อกสายเข้ากับ catheter\n• เปิด clamp ให้น้ำเกลือไหล\n• เช็กว่าน้ำไหลดี ไม่มีบวม/รั่ว"
  },
  {
    step: 7,
    title: "ติดพลาสเตอร์ยึด catheter",
    description: "ป้องกันการขยับและหลุด",
    image: "/images/saline/plaster.jpg",
    details: "• อย่าให้ขยับง่าย หรือหลุด\n• เขียนชื่อ/เวลาเจาะ/วันที่ลงบนพลาสเตอร์"
  },
  {
    step: 8,
    title: "เก็บอุปกรณ์ + บันทึก",
    description: "ทิ้งเข็มและบันทึกข้อมูล",
    image: "/images/saline/keb.jpg",
    details: "• ทิ้งเข็มในถังเข็มทันที\n• บันทึกข้อมูลในเวชระเบียน: วัน-เวลา, ตำแหน่งเจาะ, ของเหลวที่ให้, สภาพผู้ป่วย"
  }
]

const importantNotes = [
  "ควรเปลี่ยนตำแหน่ง catheter ทุก 72–96 ชม. (ตามนโยบายโรงพยาบาล)",
  "สังเกตอาการบวม แดง เจ็บ = อาจอักเสบ/หลุด",
  "ถ้ามีฟองอากาศในสาย → ไล่ลมออกทันที",
  "ห้ามให้แรงดันน้ำเกลือมากเกินไปถ้าเส้นเล็ก"
]

export default function MedicalLearningPlatform() { 

  const [currentSection, setCurrentSection] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [showProcedure, setShowProcedure] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const totalSections = sections.length + procedureSteps.length + 2 // +2 for important notes and summary
  const currentProgress = showSummary ? 100 : ((currentSection + (showProcedure ? procedureSteps.length : 0) + (currentStep)) / totalSections) * 100

  const nextSection = () => {
    if (!showProcedure && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else if (!showProcedure && currentSection === sections.length - 1) {
      setShowProcedure(true)
      setCurrentStep(0)
    } else if (showProcedure && currentStep < procedureSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (showProcedure && currentStep === procedureSteps.length - 1) {
      setShowSummary(true)
    }
  }

  const prevSection = () => {
    if (showSummary) {
      setShowSummary(false)
      setShowProcedure(true)
      setCurrentStep(procedureSteps.length - 1)
    } else if (showProcedure && currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else if (showProcedure && currentStep === 0) {
      setShowProcedure(false)
      setCurrentSection(sections.length - 1)
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const canGoNext = !showSummary
  const canGoPrev = currentSection > 0 || showProcedure || showSummary
   

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

       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">คู่มือการใส่สาย IV Line</h1>
          <p className="text-gray-600">แนวทางปฏิบัติสำหรับบุคลากรทางการแพทย์</p>
          <div className="mt-4">
            <Progress value={currentProgress} className="w-full h-2" />
            <p className="text-sm text-gray-500 mt-2">{Math.round(currentProgress)}% เสร็จสิ้น</p>
          </div>
        </div>

        {/* Content */}
        <Card className="min-h-[600px] shadow-xl">
          {!showProcedure && !showSummary && (
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                {sections[currentSection].icon}
                <CardTitle className="ml-2 text-2xl text-gray-800">
                  {sections[currentSection].title}
                </CardTitle>
              </div>
            </CardHeader>
          )}

          <CardContent className="p-8">
            {!showProcedure && !showSummary && (
              <div className="space-y-6">
                {/* Introduction Section */}
                {currentSection === 0 && (
                  <div className="text-center space-y-6">
                    <Image
                      src={sections[currentSection].content.image || "/placeholder.svg"}
                      alt="IV Line Insertion"
                      width={400}
                      height={300}
                      className="mx-auto rounded-lg shadow-md"
                    />
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {sections[currentSection].content.definition}
                      </p>
                    </div>
                  </div>
                )}

                {/* Goals Section */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    
                    <div className="grid gap-4">
                      {sections[currentSection].content.goals.map((goal, index) => (
                        <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                          <Target className="w-5 h-5 text-green-600 mr-3" />
                          <span className="text-gray-700">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Equipment Section */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <Image
                      src={sections[currentSection].content.image || "/placeholder.svg"}
                      alt="Medical Equipment"
                      width={400}
                      height={300}
                      className="mx-auto rounded-lg shadow-md"
                    />
                    <div className="grid gap-3">
                      {sections[currentSection].content.equipment.map((item, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Badge variant="outline" className="mr-3 min-w-[30px] justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Procedure Steps */}
            {showProcedure && !showSummary && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">ขั้นตอนการใส่ IV</h2>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    ขั้นตอนที่ {procedureSteps[currentStep].step} จาก {procedureSteps.length}
                  </Badge>
                </div>

                <div className="text-center space-y-6">
                  <Image
                    src={procedureSteps[currentStep].image || "/placeholder.svg"}
                    alt={`Step ${procedureSteps[currentStep].step}`}
                    width={350}
                    height={250}
                    className="mx-auto rounded-lg shadow-md"
                  />
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {procedureSteps[currentStep].title}
                    </h3>
                    <p className="text-gray-600 mb-4">{procedureSteps[currentStep].description}</p>
                    <div className="bg-white p-4 rounded-md">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap text-left">
                        {procedureSteps[currentStep].details}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Summary Section */}
            {showSummary && (
              <div className="space-y-8">
                <div className="text-center">
                  <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">สรุปและข้อควรรู้</h2>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    ข้อควรรู้สำคัญ
                  </h3>
                  <div className="space-y-3">
                    {importantNotes.map((note, index) => (
                      <div key={index} className="flex items-start p-3 bg-white rounded-md">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Memory Aid */}
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">วิธีการจำง่าย</h3>
                  <div className="bg-white p-4 rounded-md">
                    <p className="text-lg font-mono text-gray-800">
                      "ล้างมือ – เตรียมสาย – เลือกเส้น – เจาะ – ต่อสาย – ติดเทป – เปิดน้ำ – บันทึก"
                    </p>
                  </div>
                </div>

                {/* Completion Message */}
                <div className="text-center bg-blue-50 p-6 rounded-lg">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">เสร็จสิ้นการศึกษา</h3>
                  <p className="text-gray-600">คุณได้ศึกษาขั้นตอนการใส่สาย IV Line ครบถ้วนแล้ว</p>
                </div>
              </div>
            )}
          </CardContent>

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 border-t">
            <Button
              variant="outline"
              onClick={prevSection}
              disabled={!canGoPrev}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              ย้อนกลับ
            </Button>

            <div className="text-sm text-gray-500">
              {!showProcedure && !showSummary && `${currentSection + 1} / ${sections.length}`}
              {showProcedure && !showSummary && `ขั้นตอน ${currentStep + 1} / ${procedureSteps.length}`}
              {showSummary && "สรุป"}
            </div>

            <Button
              onClick={nextSection}
              disabled={!canGoNext}
              className="flex items-center"
            >
              {showSummary ? "เสร็จสิ้น" : "ถัดไป"}
              {!showSummary && <ChevronRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
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
