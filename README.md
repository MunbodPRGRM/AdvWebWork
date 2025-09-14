# 🌐 Advanced Website Work
งานทั้งหมดในรายวิชา **1204208 - การพัฒนาและจัดการเว็บขั้นสูง**  
รวมทั้งงานที่ทำในคาบเรียนและการบ้าน

---

## 📚 Table of Contents
- [เนื้อหางานเบื้องต้น](#-เนื้อหางานเบื้องต้น)
  - [เนื้อหาสำหรับเรียน](#-เนื้อหาสำหรับเรียน)
  - [การบ้าน](#-การบ้าน)
  - [อื่น ๆ](#-อื่น-ๆ)
- [API ที่ใช้](#-api-ที่ใช้)
- [วิธีใช้งานโปรเจ็ค](#-วิธีใช้งานโปรเจ็ค)
- [วิธีใช้งาน API](#-วิธีใช้งาน-api)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## 📘 เนื้อหางานเบื้องต้น

### 📚 เนื้อหาสำหรับเรียน
- **app-4** : เรียนเกี่ยวกับ **Router** – การไปยังหน้าต่าง ๆ ที่มีอยู่ในแอป  
- **app-5** : เรียนเกี่ยวกับ **Event Binding**  
- **app-6** : เรียนเกี่ยวกับการ **เรียกใช้งาน API**  

### 🏠 การบ้าน
- **app-hw1** : ใช้ **Angular Material** เพื่อตกแต่งเว็บ  
- **app-hw3** : ทำเว็บไซต์ **แนะนำหนัง (IMDb)**  
- **app-hw-apicalling** : ทำเว็บที่เรียกใช้ API พร้อมฟังก์ชัน **CRUD**  

### ☕ อื่น ๆ
- **app-cafe** : ทำเว็บสำหรับ **ร้านกาแฟ**

---

## 🔗 API ที่ใช้
- **tripbooking_nodejs_sqlite-main** : สำหรับทดลองใช้ในเนื้อหาสำหรับเรียน (บางส่วน)  
- **trips_bk_api-main** : สำหรับใช้ในการบ้าน **app-hw-apicalling**  

---

## 🚀 วิธีใช้งานโปรเจ็ค
```bash
# เข้าโฟลเดอร์ที่ต้องการ
cd app-4   # หรือเปลี่ยนเป็นโฟลเดอร์อื่น เช่น app-hw3

# ติดตั้ง dependency
npm install

# รันโปรเจ็ค
ng serve
`````

---

## 🔌 วิธีใช้งาน API

```bash
# เข้าไปในโฟลเดอร์ API ที่ต้องการ
cd tripbooking_nodejs_sqlite-main   # หรือ trips_bk_api-main

# ติดตั้ง dependency
npm init -y
npm install express sqlite3
npm install -D typescript ts-node-dev
npm install nodemon

# รันเซิร์ฟเวอร์ สามารถเลือกใช้ได้
node server.js              # หรือ server.ts
npx nodemon server.js       # หรือ server.ts
`````

---

## 🛠 Tech Stack
- Angular
- TypeScript
- Node.js API (Backend สำหรับทดลอง)

---

## 📄 License
This project is for educational purposes only.

