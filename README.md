# 🏡 Nivora — Verified Rental, Mess & Local Services Platform

> **Find. Verify. Live.** 💚
>
> A trusted, verified, and location-aware rental ecosystem built with **Expo React Native**, connecting students, bachelors, families, property owners, PG/Hostel owners, mess owners, and local service providers into one seamless living platform.

---

## 📱 Project Overview

**Nivora** is a smart rental and community platform designed to help users discover verified accommodations, nearby mess services, flatmates, and essential local services in one secure mobile application.

Every property or service goes through a **verification and admin approval process** before becoming publicly visible, ensuring a safe and genuine experience for users.

### 🌟 Vision

> One platform for **Stay • Rent • Eat • Connect • Services**

The platform is designed for:

* 🎓 Students
* 👨‍💼 Bachelors
* 👨‍👩‍👧 Families
* 🏠 Property Owners
* 🏢 PG & Hostel Owners
* 🍛 Mess Owners
* 🛠️ Local Service Providers *(Future Expansion)*

---

# ✨ Core Features

## 👤 Authentication

* Mobile OTP Login
* Google Login
* Email Verification
* Secure User Authentication

## 🏠 Rental Discovery

* Hostel Listings
* PG Listings
* Rental Flats
* Rooms
* Apartments
* Houses
* Hotels

## 🍽️ Mess Discovery

* Verified Mess Listings
* Menu
* Food Photos
* Monthly Pricing
* Ratings & Reviews

## 🤝 Flatmate Matching

* Find Compatible Flatmates
* Match Score
* Connection Requests
* Chat Support

## 📍 Smart Location Search

* Search by City
* Nearby Search
* Radius Search
* Map View
* Nearby Colleges
* Hospitals
* Grocery
* ATM
* Transport

## 🛡️ Verification System

* Property Verification
* Owner Verification
* Document Upload
* Admin Approval
* Verified Badge

## 💬 Community

* Owner Chat
* Inquiry Request
* Saved Listings
* Notifications
* Complaint & Support

## 🛠️ Future Features

* AI Chatbot
* Voice Search
* Local Services
* Featured Listings
* Subscription Plans
* Coupons & Offers

---

# 🧩 App Workflow

## User Journey

Splash Screen
⬇️

Onboarding
⬇️

Login / Sign Up
⬇️

OTP Verification
⬇️

Complete Profile
⬇️

Select User Type
⬇️

Home Dashboard
⬇️

Search → View Listing → Chat → Support

---

## Listing Verification Workflow

Create Listing
⬇️

Upload Documents
⬇️

Verification Review
⬇️

Admin Approval
⬇️

Verified Listing Published

> **No listing becomes publicly searchable until verification and admin approval are complete.**

---

# 🎨 UI Design Language

## Theme

* **Primary:** Emerald Green
* **Secondary:** White
* **Accent:** Teal & Light Green
* **Style:** Clean, Modern, Minimal, Trust-Focused

## Design Principles

* Rounded Cards
* Soft Shadows
* Glassmorphism Elements
* Smooth Animations
* Accessible Typography
* Responsive Layout

---

# 📂 Project Structure

```text
nivora-app-frontend/
│
├── app/                         # Expo Router Screens
│   ├── index.tsx
│   ├── splash.tsx
│   ├── onboarding.tsx
│   ├── login.tsx
│   ├── otp.tsx
│   ├── profile/
│   ├── home/
│   ├── property/
│   ├── mess/
│   ├── flatmate/
│   ├── owner/
│   ├── support/
│   └── settings/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logo/
│   ├── fonts/
│   └── illustrations/
│
├── components/                  # Reusable UI Components
├── constants/                   # Colors, Fonts, Strings
├── hooks/
├── services/                    # API Integration
├── utils/
├── types/
├── app.json
├── package.json
└── README.md
```

---

# 📱 Main UI Screens

### Authentication

* Splash Screen
* Onboarding (3 Screens)
* Login / Sign Up
* OTP Verification

### Profile

* Basic Details
* Additional Details
* User Type Selection

### Home

* Student Dashboard
* Bachelor Dashboard
* Family Dashboard
* Owner Dashboard

### Rental

* Property Listing
* Property Details
* Gallery
* Amenities
* Reviews
* Nearby Places

### Mess

* Mess Listing
* Mess Details
* Menu
* Ratings

### Flatmate

* Flatmate List
* Match Profile
* Chat Screen

### Owner Section

* Add Listing
* Upload Photos
* Review & Submit
* Listing Status

### Support

* Report Scam
* Complaint
* Ticket Status
* Help Center

---

# 🧑‍💻 Tech Stack

| Technology                     | Usage                  |
| ------------------------------ | ---------------------- |
| Expo                           | React Native Framework |
| React Native                   | Mobile UI Development  |
| Expo Router                    | Navigation             |
| TypeScript                     | Type Safety            |
| Expo Linear Gradient           | Beautiful Gradients    |
| React Native Reanimated        | Smooth Animations      |
| Expo Splash Screen             | Native Splash          |
| Expo Image                     | Optimized Images       |
| React Native Safe Area Context | Safe Layout            |

---

# 🎯 Frontend Responsibilities

This repository contains **Person 1 (UI/UX + Frontend)** implementation.

### Deliverables

* Complete Mobile UI
* Navigation Flow
* Responsive Layout
* Reusable Components
* Form Validation
* API Ready Screens
* Design System

Backend APIs and Database will be integrated separately.

---

# 📌 Development Roadmap

### Phase 1

* Splash Screen
* Onboarding
* Login / OTP
* Profile Setup

### Phase 2

* Home Dashboard
* Search & Filters
* Property Cards
* Property Details

### Phase 3

* Mess Module
* Flatmate Module
* Chat UI

### Phase 4

* Owner Listing Module
* Support Module
* Notifications
* Profile & Settings

### Phase 5

* API Integration
* Testing
* Deployment

---

# 🎨 Color Palette

| Color          | Hex       |
| -------------- | --------- |
| Primary Green  | `#10B981` |
| Dark Green     | `#065F46` |
| Light Green    | `#ECFDF5` |
| White          | `#FFFFFF` |
| Dark Text      | `#0F172A` |
| Secondary Text | `#64748B` |

---

# 🪄 Design Goals

* Safe & Verified Experience
* Modern Rental UI
* Premium Mobile Design
* Fast Navigation
* Smooth User Experience

---

# 📸 Screens Planned

* 30+ High-Quality Mobile Screens
* Modern Cards
* Search UI
* Map UI
* Chat UI
* Owner Dashboard
* Notifications
* Saved Listings
* Settings
* Support Center

---

# 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npx expo start
```

### Run Android

```bash
npx expo start --android
```

### Run iOS

```bash
npx expo start --ios
```

### Clear Metro Cache

```bash
npx expo start -c
```

---

# 👥 Team Collaboration

| Module             | Owner    |
| ------------------ | -------- |
| UI / UX + Frontend | Person 1 |
| Backend + APIs     | Person 2 |
| Database + Admin   | Person 3 |
| AI + Location + QA | Person 4 |

This repository focuses only on the **Frontend Application** and is designed to integrate seamlessly with backend APIs.

---

# 📍 Repository Information

**Repository Name**

```text
nivora-app-frontend
```

**Project Name**

> **Nivora — Verified Rental, Mess & Local Services Platform**

**Tagline**

> **Find. Verify. Live.**

---

<div align="center">

## 💚 Nivora

### More Than Rental. A Better Way To Live.

**Safe • Verified • Hassle Free**

</div>
