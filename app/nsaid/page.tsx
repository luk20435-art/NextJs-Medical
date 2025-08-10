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
import { Pill, Target, ListChecks, ClipboardCheck, Lightbulb } from 'lucide-react' 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


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

      <main className="container mx-auto py-8 px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center mb-8">ข้อมูลยาต้านการอักเสบที่ไม่ใช่สเตียรอยด์ (NSAIDs)</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Introduction Card */}
            <Card className="bg-blue-50">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Image
                  alt="Pills and medication"
                  className="rounded-md object-cover"
                  height="150"
                  src="images/nsaid/nsaid.jpg"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <div className="flex flex-row items-center space-x-4 w-full">
                  <Pill className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">ยาต้านการอักเสบที่ไม่ใช่สเตียรอยด์ (NSAIDs)</CardTitle>
                    <CardDescription>ยาที่ช่วยลดอาการ ปวด บวม อักเสบ และไข้ โดยไม่ใช่สารสเตียรอยด์</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NSAIDs (Non-Steroidal Anti-Inflammatory Drugs) เป็นกลุ่มยาที่ใช้กันอย่างแพร่หลายเพื่อบรรเทาอาการปวด ลดการอักเสบ ลดไข้ และลดอาการบวม โดยไม่จัดอยู่ในกลุ่มยาคอร์ติโคสเตียรอยด์
                </p>
              </CardContent>
            </Card>

            {/* Mechanism of Action Card */}
            <Card className="bg-blue-50">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Image
                  alt="Molecular structure or enzyme diagram"
                  className="rounded-md object-cover"
                  height="150"
                  src="images/nsaid/glip.png"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <div className="flex flex-row items-center space-x-4 w-full">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">กลไกการออกฤทธิ์</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    NSAIDs จะยับยั้งเอนไซม์ COX (Cyclooxygenase) ซึ่งเป็นเอนไซม์สำคัญในการสร้างสาร Prostaglandin
                  </li>
                  <li>
                    COX มี 2 แบบหลัก:
                    <ul className="list-circle pl-5 mt-1">
                      <li>
                        <span className="font-medium">COX-1:</span> ควบคุมการทำงานของกระเพาะอาหาร, ไต, และเกล็ดเลือด
                      </li>
                      <li>
                        <span className="font-medium">COX-2:</span> กระตุ้นการสร้าง Prostaglandin ที่ทำให้เกิดการอักเสบ ปวด บวม และไข้
                      </li>
                    </ul>
                  </li>
                  <li>
                    เมื่อยับยั้ง COX จะลดการสร้าง Prostaglandin ส่งผลให้ลดการอักเสบและอาการปวด
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Effects of NSAIDs Card */}
            <Card className="bg-blue-50">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Image
                  alt="Pain relief and anti-inflammatory effects"
                  className="rounded-md object-cover"
                  height="150"
                  src="/images/nsaid/antipy.jpg"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <div className="flex flex-row items-center space-x-4 w-full">
                  <HeartPulse className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">ฤทธิ์ของ NSAIDs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>ลดปวด (Analgesic)</li>
                  <li>ลดไข้ (Antipyretic)</li>
                  <li>ลดการอักเสบ (Anti-inflammatory)</li>
                  <li>บางชนิดยับยั้งเกล็ดเลือด (เช่น Aspirin ในขนาดต่ำ)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Examples of NSAIDs Card */}
            <Card className="md:col-span-2 lg:col-span-3 bg-stone-100">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2"> 
                <div className="flex flex-row items-center space-x-4 w-full">
                  <ListChecks className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">ตัวอย่างยากลุ่ม NSAIDs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">ยา</TableHead>
                      <TableHead>จุดเด่น</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Ibuprofen</TableCell>
                      <TableCell>นิยมใช้มาก ปวดทั่วไป เด็กก็ใช้ได้</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Diclofenac</TableCell>
                      <TableCell>แรงกว่า Ibuprofen นิยมใช้กับปวดข้อ</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Naproxen</TableCell>
                      <TableCell>ออกฤทธิ์นาน เหมาะกับปวดเรื้อรัง</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Meloxicam</TableCell>
                      <TableCell>ออกฤทธิ์เลือก COX-2 มากกว่า ลดผลข้างเคียงกระเพาะ</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Celecoxib</TableCell>
                      <TableCell>ยับยั้งเฉพาะ COX-2 เหมาะกับคนที่มีปัญหาท้อง</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Aspirin</TableCell>
                      <TableCell>ใช้ลดไข้ ลดเกล็ดเลือด ป้องกันโรคหัวใจ (ขนาดต่ำ)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Common Side Effects Card */}
            <Card className="bg-yellow-100">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Image
                  alt="Stomach pain or warning sign"
                  className="rounded-md object-cover"
                  height="150"
                  src="/images/nsaid/saeb.jpg"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <div className="flex flex-row items-center space-x-4 w-full">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <CardTitle className="text-xl">ผลข้างเคียงที่พบบ่อย</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>ระคายเคืองกระเพาะ → ปวดท้อง, แสบท้อง, แผลในกระเพาะ</li>
                  <li>เลือดออกในทางเดินอาหาร</li>
                  <li>บวมน้ำ, ความดันสูง, ไตทำงานลดลง</li>
                  <li>
                    <span className="font-medium text-destructive">ห้ามใช้ในคนแพ้ NSAIDs / โรคกระเพาะ / ไตเสื่อม</span>
                  </li>
                  <li>
                    <span className="font-medium text-destructive">ห้ามใช้ในหญิงตั้งครรภ์ไตรมาส 3</span> (เพราะอาจปิดหลอดเลือดหัวใจเด็ก)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Usage Recommendations Card */}
            <Card className="bg-lime-100">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Image
                  alt="Person taking medicine with water"
                  className="rounded-md object-cover"
                  height="150"
                  src="/images/nsaid/tanti.jpg"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <div className="flex flex-row items-center space-x-4 w-full">
                  <ClipboardCheck className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">ข้อแนะนำในการใช้</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>ควรกินหลังอาหารทันที</li>
                  <li>ควรกินร่วมกับยาลดกรดถ้ามีปัญหาเรื่องกระเพาะ</li>
                  <li>ไม่ควรใช้ติดต่อกันนานโดยไม่ปรึกษาแพทย์</li>
                  <li>แจ้งแพทย์หากมีโรคประจำตัว (หัวใจ, ไต, เบาหวาน)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="bg-blue-100">
              <CardHeader className="flex flex-col items-center space-y-4 pb-2"> 
                <div className="flex flex-row items-center space-x-4 w-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">สรุปเนื้อหายาต้านการอักเสบที่ไม่ใช่สเตียรอยด์</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  “NSAIDs ยับยั้ง COX → ลด prostaglandin → ลดปวด บวม อักเสบ แต่ระวังกระเพาะ/ไต”
                </p>
              </CardContent>
            </Card>
          </div>
      </main>
           
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
