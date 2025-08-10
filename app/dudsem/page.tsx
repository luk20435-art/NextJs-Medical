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
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BatteryCharging, BoneIcon as Blood, PhoneIcon as Cell, WormIcon as Intestine, Key, Pill, Scale } from 'lucide-react'


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
 
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">กลไกการดูดซึมยา (Drug Absorption)</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                การที่ยาเข้าสู่กระแสเลือดจากตำแหน่งที่ให้ยา (โดยเฉพาะทางปาก)
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Key Absorption Point */}
            <Card className="col-span-full lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Intestine className="size-6 text-green-600" />
                  📍 จุดหลักที่ดูดซึมยา: ลำไส้เล็ก
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <Image
                  src="/images/dudsem/jejunum.jpg"
                  alt="Diagram of small intestine anatomy"
                  width={400}
                  height={300}
                  className="mb-4 w-full h-auto object-contain"
                />
                <p>
                  • ยาส่วนใหญ่กินแล้วถูกดูดซึมผ่าน{" "}
                  <span className="font-semibold text-foreground">ลำไส้เล็กส่วนต้น (duodenum)</span>
                </p>
                <p>
                  • เพราะมี <span className="font-semibold text-foreground">พื้นที่ผิวมาก</span>,{" "}
                  <span className="font-semibold text-foreground">เลือดไหลเวียนดี</span>, และ
                  <span className="font-semibold text-foreground">สภาพเป็นด่างอ่อน</span>
                </p>
                <p>
                  • <span className="font-semibold text-foreground">กระเพาะอาหาร</span> ดูดซึมได้น้อย (แค่บางชนิด เช่น
                  aspirin)
                </p>
              </CardContent>
            </Card>

            {/* Mechanisms of Drug Absorption */}
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Blood className="size-6 text-red-600" />
                  🧬 กลไกที่ใช้ดูดซึมยา
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/images/dudsem/konkai.png"
                  alt="Diagram of drug absorption mechanisms across cell membrane"
                  width={600}
                  height={400}
                  className="col-span-full mb-4 w-full h-auto object-contain"
                />
                {/* Passive Diffusion */}
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-green-700">
                    <ArrowRight className="size-5" />
                    1. Passive Diffusion (ส่วนใหญ่)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                      ยาเคลื่อนที่จาก <span className="font-medium text-foreground">ความเข้มข้นสูง → ต่ำ</span>
                    </li>
                    <li>ไม่ใช้พลังงาน</li>
                    <li>
                      ยาต้อง <span className="font-medium text-foreground">ละลายไขมันได้ดี (lipophilic)</span>
                    </li>
                    <li>พบมากกับ ยาส่วนใหญ่ที่ให้ทางปาก</li>
                  </ul>
                </div>

                {/* Facilitated Diffusion */}
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-blue-700">
                    <Key className="size-5" />
                    2. Facilitated Diffusion
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                      ใช้ <span className="font-medium text-foreground">โปรตีนพา (carrier protein)</span>
                    </li>
                    <li>ไม่ใช้พลังงาน</li>
                    <li>
                      มีการเลือกจำเพาะ (specificity) เช่น ยาบางชนิดที่คล้ายสารอาหาร
                    </li>
                  </ul>
                </div>

                {/* Active Transport */}
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-purple-700">
                    <BatteryCharging className="size-5" />
                    3. Active Transport
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                      ต้อง <span className="font-medium text-foreground">ใช้พลังงาน (ATP)</span>
                    </li>
                    <li>
                      ยาเคลื่อนจาก <span className="font-medium text-foreground">ความเข้มข้นต่ำ → สูง</span>
                    </li>
                    <li>ใช้ขนส่งยาเฉพาะบางชนิด เช่น Levodopa, 5-FU</li>
                    <li>มีอิ่มตัวได้ (saturable)</li>
                  </ul>
                </div>

                {/* Endocytosis / Pinocytosis */}
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-orange-700">
                    <Cell className="size-5" />
                    4. Endocytosis / Pinocytosis
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                      เซลล์ <span className="font-medium text-foreground">กลืนยาเข้าไป โดยห่อหุ้ม</span>
                    </li>
                    <li>ใช้กับยาขนาดใหญ่ เช่น วิตามิน B12 หรือ nanoparticles</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Factors Affecting Drug Absorption */}
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Scale className="size-6 text-yellow-600" />
                  🧠 ปัจจัยที่มีผลต่อการดูดซึมยา
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Image
                  src="/images/dudsem/abstrac.jpg"
                  alt="Abstract illustration of factors affecting drug absorption"
                  width={600}
                  height={200}
                  className="col-span-full mb-4 w-full h-auto object-contain"
                />
                <div className="flex items-start gap-3">
                  <Droplet className="mt-1 size-5 shrink-0 text-blue-500" />
                  <div>
                    <h4 className="font-semibold">ละลายน้ำ / ละลายไขมัน</h4>
                    <p className="text-sm text-muted-foreground">ยาที่ละลายไขมันดี → ดูดซึมง่ายกว่า</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="mt-1 size-5 shrink-0 text-gray-500" />
                  <div>
                    <h4 className="font-semibold">pKa ของยา และ pH ของลำไส้</h4>
                    <p className="text-sm text-muted-foreground">มีผลต่อการแตกตัวและการผ่านเยื่อเซลล์</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-purple-500" />
                  <div>
                    <h4 className="font-semibold">เวลาที่อาหารอยู่ในกระเพาะ</h4>
                    <p className="text-sm text-muted-foreground">
                      อาหารชะลอการดูดซึมบางชนิด หรือช่วยให้ยาบางตัวดูดซึมดีขึ้น
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="mt-1 size-5 shrink-0 text-red-500" />
                  <div>
                    <h4 className="font-semibold">การไหลเวียนเลือดที่ลำไส้</h4>
                    <p className="text-sm text-muted-foreground">ยิ่งเลือดไหลดี → ดูดซึมเร็วขึ้น</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Pill className="mt-1 size-5 shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">รูปแบบยา</h4>
                    <p className="text-sm text-muted-foreground">ยาเม็ด ยาน้ำ ยาเคลือบ อาจดูดซึมต่างกัน</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Separator orientation="vertical" className="h-6 w-1 rounded-full bg-primary" />
                  📌 สรุปขั้นตอนกลไกการดูดซึมของยา:
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-lg font-medium text-foreground">
                <p>“ยาเข้าลำไส้ → ผ่านเซลล์ด้วย Passive หรือ Active → เข้ากระแสเลือด → ส่งไปออกฤทธิ์”</p>
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
