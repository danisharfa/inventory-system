# Project Setup Guide

Dokumen ini menjelaskan kebutuhan dan langkah-langkah untuk menjalankan proyek (backend, web, dan mobile).

---

## Requirements

Pastikan sudah menginstall:

- Node.js (v18+ direkomendasikan)
- npm
- MySQL
- Flutter SDK (untuk mobile)
- Git

---

## Setup Awal
Clone repository:

```
git clone <repo-url>
cd <project-folder>
```
## Environment Configuration
### Backend (NestJS)
Buat file .env di folder /web/backend:

```
DATABASE_URL="mysql://username:password@localhost:3306/db_name"
```

### Frontend Web (Next.js)
Buat file .env di folder /web/frontend:

```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```
URL ini digunakan untuk mengakses backend API.

---

## Install Dependencies
### Backend (NestJS)

```
cd web/backend
npm install
```

### Frontend Web (Next.js)

```
cd web/frontend
npm install
```

### Mobile (Flutter)

```
cd mobile/inventory_mobile_app
flutter pub get
```

## Menjalankan Backend (NestJS)

```
cd web/backend
npm run start:dev
```
Backend akan berjalan di:
```
http://localhost:8080
```
## Menjalankan Migration Database

```
cd web/backend
npx prisma migrate deploy
npx prisma generate
```

## Menjalankan Frontend Web (Next.js)

```
cd web/frontend
npm run dev
```
Frontend Web akan berjalan di:
```
http://localhost:3000
```

## Menjalankan Mobile (flutter)

```
cd mobile/inventory_mobile_app
flutter run
```
Pastikan emulator atau device sudah aktif.