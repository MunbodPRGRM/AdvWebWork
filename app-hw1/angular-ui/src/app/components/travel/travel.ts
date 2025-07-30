import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-travel',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule,             // เพิ่ม Tooltip
    MatBadgeModule,               // เพิ่ม Badge
    MatPaginatorModule,           // เพิ่ม Paginator
    MatMenuModule,                // เพิ่ม Menu
    MatSlideToggleModule          // เพิ่ม Slide Toggle
  ],
  templateUrl: './travel.html',
  styleUrl: './travel.scss'
})
export class Travel {
  landmarks = [
    {
      "idx": 1,
      "name": "วัดอรุณราชวรารามราชวรมหาวิหาร",
      "country": "ประเทศไทย",
      "detail": "วัดอรุณราชวรารามราชวรมหาวิหาร หรือที่นิยมเรียกว่า วัดอรุณ เป็นวัดโบราณสร้างในสมัยอยุธยา ตั้งอยู่ริมฝั่งแม่น้ำเจ้าพระยาฝั่งธนบุรี โดดเด่นด้วยพระปรางค์สูงสง่า ประดับด้วยกระเบื้องเคลือบและเครื่องถ้วยเบญจรงค์ยามต้องแสงอาทิตย์จะเปล่งประกายงดงาม",
      "url": "https://img.kapook.com/u/2023/sireeporn/Travel-04/wat-arun15.jpg"
    },
    {
      "idx": 2,
      "name": "พระบรมมหาราชวัง",
      "country": "ประเทศไทย",
      "detail": "พระบรมมหาราชวัง เป็นที่ประทับของพระมหากษัตริย์ไทยในอดีต และเป็นสถานที่จัดพระราชพิธีสำคัญต่างๆ ปัจจุบันเป็นสถานที่ท่องเที่ยวสำคัญที่แสดงถึงสถาปัตยกรรมไทยอันวิจิตรงดงาม รวมถึงวัดพระศรีรัตนศาสดาราม (วัดพระแก้ว) ที่ประดิษฐานพระพุทธมหามณีรัตนปฏิมากร (พระแก้วมรกต)",
      "url": "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/62/2023/02/07105213/rsz_wat-phra-kaew-temple-emerald-buddha-grand-palace-bangkok.jpg"
    },
    {
      "idx": 3,
      "name": "อุทยานประวัติศาสตร์อยุธยา",
      "country": "ประเทศไทย",
      "detail": "อุทยานประวัติศาสตร์อยุธยา ครอบคลุมพื้นที่ของเมืองหลวงเก่าของราชอาณาจักรอยุธยา ซึ่งเคยเป็นศูนย์กลางความรุ่งเรืองทางเศรษฐกิจ การค้า และศิลปวัฒนธรรม ภายในประกอบด้วยโบราณสถานสำคัญหลายแห่ง เช่น วัดพระศรีสรรเพชญ์ วัดราชบูรณะ และวัดมหาธาตุ",
      "url": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_1961/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ukaisbzlxij5tlqxt2b9/%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2%E2%80%93%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99-Klook%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg"
    },
    {
      "idx": 4,
      "name": "ตลาดน้ำดำเนินสะดวก",
      "country": "ประเทศไทย",
      "detail": "ตลาดน้ำดำเนินสะดวก เป็นตลาดน้ำที่มีชื่อเสียงและเป็นที่รู้จักของนักท่องเที่ยวทั้งชาวไทยและต่างชาติ สัมผัสวิถีชีวิตริมคลอง การค้าขายสินค้าบนเรือ รวมถึงอาหารและผลไม้ท้องถิ่นหลากหลายชนิด",
      "url": "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/05/IMG_8151-1200.jpg"
    },
    {
      "idx": 5,
      "name": "ดอยอินทนนท์",
      "country": "ประเทศไทย",
      "detail": "ดอยอินทนนท์ เป็นยอดเขาที่สูงที่สุดในประเทศไทย ตั้งอยู่ในจังหวัดเชียงใหม่ เป็นที่ตั้งของสถานีรายงานสภาพอากาศ จุดชมวิวที่สวยงาม น้ำตกหลายแห่ง และโครงการหลวงอินทนนท์",
      "url": "https://image-tc.galaxy.tf/wijpeg-sxrfid5inslt46adwg0pwpho/intanon.jpg"
    },
    {
      "idx": 6,
      "name": "เชียงใหม่",
      "country": "ประเทศไทย",
      "detail": "จังหวัดเชียงใหม่ เป็นเมืองท่องเที่ยวสำคัญทางภาคเหนือของประเทศไทย ที่อุดมไปด้วยวัฒนธรรมล้านนาอันเป็นเอกลักษณ์ วัดวาอารามเก่าแก่สวยงาม ธรรมชาติอันงดงาม และเป็นแหล่งรวมงานฝีมือ หัตถกรรม และอาหารพื้นเมือง",
      "url": "https://cms.dmpcdn.com/travel/2020/05/26/750380d0-9f2d-11ea-8b02-cdf01bd388b1_original.JPG"
    },
    {
      "idx": 7,
      "name": "ภูเก็ต",
      "country": "ประเทศไทย",
      "detail": "ภูเก็ต หรือที่รู้จักกันในนาม 'ไข่มุกอันดามัน' เป็นเกาะที่ใหญ่ที่สุดในประเทศไทย มีชื่อเสียงระดับโลกในด้านชายหาดที่สวยงาม น้ำทะเลใสสะอาด กิจกรรมทางน้ำหลากหลาย และมีสถานบันเทิงยามค่ำคืนคึกคัก",
      "url": "https://www.pullmanphuketkaron.com/wp-content/uploads/sites/292/2023/11/Beach-in-Phuket.jpg"
    },
    {
      "idx": 8,
      "name": "เกาะพีพี",
      "country": "ประเทศไทย",
      "detail": "หมู่เกาะพีพี ตั้งอยู่ในจังหวัดกระบี่ เป็นหมู่เกาะที่มีชื่อเสียงระดับโลกในด้านความงดงามของทิวทัศน์หินปูนสูงชัน หาดทรายขาวละเอียด น้ำทะเลสีมรกต และโลกใต้ทะเลที่อุดมสมบูรณ์ เหมาะสำหรับการดำน้ำตื้นและดำน้ำลึก",
      "url": "https://www.trip-attractive.com/wp-content/uploads/2017/04/phi-phi-island-960x530.jpg"
    },
    {
      "idx": 9,
      "name": "อุทยานแห่งชาติเขาใหญ่",
      "country": "ประเทศไทย",
      "detail": "อุทยานแห่งชาติเขาใหญ่ เป็นอุทยานแห่งชาติแห่งแรกของประเทศไทย และได้รับการขึ้นทะเบียนเป็นแหล่งมรดกโลกจาก UNESCO มีความหลากหลายทางชีวภาพสูง ทั้งป่าไม้ สัตว์ป่า และน้ำตกหลายแห่ง เช่น น้ำตกเหวนรก น้ำตกเหวสุวัต",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Haew_Suwat_Waterfall_Khao-Yai02.jpg/1200px-Haew_Suwat_Waterfall_Khao-Yai02.jpg"
    },
    {
      "idx": 10,
      "name": "สุโขทัย",
      "country": "ประเทศไทย",
      "detail": "อุทยานประวัติศาสตร์สุโขทัย อดีตราชธานีแห่งแรกของอาณาจักรไทย มีโบราณสถานที่งดงามและสำคัญมากมาย เช่น วัดมหาธาตุ วัดศรีชุม และวัดสรศักดิ์ สะท้อนถึงความเจริญรุ่งเรืองของศิลปะสุโขทัยและพุทธศาสนา",
      "url": "https://itp1.itopfile.com/ImageServer/8f076727c807c7c8/0/0/2014120931418097158281297z-z64748869979.webp"
    }
  ]
}
