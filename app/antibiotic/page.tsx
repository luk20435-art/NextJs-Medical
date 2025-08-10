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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export default function MedicalLearningPlatform() { 

  const mechanisms = [
    {
      mechanism: "ยับยั้งการสร้างผนังเซลล์",
      effect: "แบคทีเรียแตกตาย",
      example: "Penicillin, Amoxicillin, Cephalexin",
    },
    {
      mechanism: "ยับยั้งการสร้างโปรตีน",
      effect: "แบคทีเรียหยุดโต",
      example: "Azithromycin, Doxycycline",
    },
    {
      mechanism: "ยับยั้งการสร้าง DNA/RNA",
      effect: "แบคทีเรียตาย/ไม่เพิ่มจำนวน",
      example: "Ciprofloxacin, Rifampicin",
    },
    {
      mechanism: "รบกวนเมแทบอลิซึม",
      effect: "แบคทีเรียขาดสารสำคัญ",
      example: "Sulfamethoxazole + Trimethoprim",
    },
  ]

  const examples = [
    {
      genericName: "Amoxicillin",
      tradeName: "Amoxil, Amoksiklav (ร่วมกับ Clavulanic acid)",
      treats: "คออักเสบ, ไซนัสอักเสบ, ฟันอักเสบ",
    },
    {
      genericName: "Azithromycin",
      tradeName: "Zithromax, Zitromax",
      treats: "ปอดบวม, คออักเสบ, หนองใน",
    },
    {
      genericName: "Ciprofloxacin",
      tradeName: "Cipro, Cifran",
      treats: "กระเพาะปัสสาวะอักเสบ, ลำไส้อักเสบ",
    },
    {
      genericName: "Doxycycline",
      tradeName: "Vibramycin",
      treats: "สิว, ไข้รากสาด, โรคติดเชื้อจากสัตว์",
    },
    {
      genericName: "Cefalexin",
      tradeName: "Keflex",
      treats: "แผลติดเชื้อ, กระเพาะปัสสาวะอักเสบ",
    },
    {
      genericName: "Metronidazole",
      tradeName: "Flagyl",
      treats: "ช่องปากอักเสบ, ลำไส้อักเสบจากเชื้อโปรโตซัว",
    },
  ]

  const precautions = [
    "ต้องใช้ให้ครบตามจำนวนวันที่กำหนด ถึงแม้อาการจะดีขึ้น",
    "ห้ามหยุดยาเอง → เสี่ยงแบคทีเรียดื้อยา",
    "บางตัวมีผลข้างเคียง เช่น คลื่นไส้ ท้องเสีย ผื่นแพ้",
    "ไม่ใช้รักษา ไข้หวัดธรรมดา (ซึ่งมักเกิดจากไวรัส)",
    "ห้ามใช้พร่ำเพรื่อ / ซื้อกินเองบ่อย ๆ",
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

        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
          <div className="container mx-auto max-w-4xl space-y-8">
            {/* Introduction Card */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/antibiotic/antibiotics.jpg"
                  alt="Antibiotics pills"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                  <h1 className="text-3xl font-bold text-white">ยาฆ่าเชื้อแบคทีเรีย (Antibiotics)</h1>
                </div>
              </div>
              <CardContent className="p-6 text-lg text-gray-700">
                <p>
                  ยาที่ใช้ ฆ่า หรือ ยับยั้งการเจริญเติบโตของแบคทีเรีย โดยไม่ออกฤทธิ์ต่อไวรัสหรือเชื้อราส่วนใหญ่
                </p>
              </CardContent>
            </Card>

            {/* Mechanism Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Microscope icon"
                    width={24}
                    height={24}
                  />
                  กลไกการออกฤทธิ์หลักของ Antibiotics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="w-[30%] font-bold text-gray-700">กลไก</TableHead>
                      <TableHead className="w-[30%] font-bold text-gray-700">ผล</TableHead>
                      <TableHead className="w-[40%] font-bold text-gray-700">ตัวยาตัวอย่าง</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mechanisms.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.mechanism}</TableCell>
                        <TableCell>{item.effect}</TableCell>
                        <TableCell>{item.example}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Examples Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Medicine bottle icon"
                    width={24}
                    height={24}
                  />
                  ตัวอย่างยาฆ่าเชื้อแบคทีเรียที่ใช้บ่อย
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="w-[25%] font-bold text-gray-700">ชื่อสามัญ</TableHead>
                      <TableHead className="w-[35%] font-bold text-gray-700">ชื่อการค้า (บางยี่ห้อ)</TableHead>
                      <TableHead className="w-[40%] font-bold text-gray-700">ใช้รักษาอะไร</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {examples.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.genericName}</TableCell>
                        <TableCell>{item.tradeName}</TableCell>
                        <TableCell>{item.treats}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Precautions Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Warning sign icon"
                    width={24}
                    height={24}
                  />
                  ข้อควรระวังในการใช้ยาฆ่าเชื้อ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  {precautions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="bg-green-50 border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-green-800">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Checkmark icon"
                    width={24}
                    height={24}
                  />
                  สรุปผลของยา antibiotics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-medium text-green-700">
                <p>
                  “Antibiotics = ยาฆ่าแบคทีเรีย ไม่ฆ่าไวรัส ใช้เฉพาะเมื่อจำเป็น และต้องใช้ให้ครบ”
                </p>
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
