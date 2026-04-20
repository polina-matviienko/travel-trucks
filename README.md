# TravelTrucks — Camper Rental Web Application

TravelTrucks is a comprehensive web application designed for a camper rental service. The platform allows users to browse a diverse catalog of campervans, filter them based on specific technical requirements, view detailed vehicle specifications, and book rentals through an integrated interface.

[View Live Application](https://travel-trucks-eta-ten.vercel.app/)

## Project Overview

The project focuses on delivering an intuitive and efficient user journey through three core interfaces:

- **Home Page**: A landing page featuring a primary call-to-action designed to introduce the service and drive user engagement.

- **Catalog Page**: A comprehensive listing of available campers with advanced server-side filtering and dynamic "Load More" pagination.

- **Camper Details Page**: An individual profile for each vehicle, providing deep insights through media galleries, user reviews, and an integrated booking form.

## Key Features

### Catalog & Filtering

- **Dynamic Listing**: Renders camper data fetched from a centralized API.
- **Server-side Filtering**: Implements search functionality via query parameters for location, vehicle type, engine type, and transmission.
- **Infinite Loading**: Utilizes a "Load More" mechanism to fetch 4 additional cards per request while maintaining active filter states.

### Camper Profiles

- **Detailed Information**: Displays complete vehicle specifications and equipment.
- **Review System**: Showcases user feedback with a synchronized five-star rating scale.
- **Interactive Gallery**: Features a professional image gallery built with **Swiper**, implementing a thumbnail-loop system for smooth navigation.

### Booking System

- **Validation**: An integrated form utilizing **Formik** and **Yup** for real-time data validation.
- **API Integration**: Sends reservation data to the backend endpoint and provides immediate user notifications upon successful submission.

## Technical Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **React**: Version 19 with **React Compiler** for optimized rendering.
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching**: [TanStack React Query v5](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Forms**: Formik & Yup
- **UI Components**: Swiper.js, React Icons, React Hot Toast, React Spinners.
- **Styling**: CSS Modules & Modern Normalize.

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/polina-matviienko/travel-trucks
cd project-campers
```

2. **Install dependencies:**

```Bash
npm install
```

3. **Run the application in development mode:**

```Bash
npm run dev
```

## Author

**Polina Matviienko**

This project was developed as part of the GoIT educational program. It demonstrates practical experience in building scalable and user-friendly web applications using modern technologies such as React, Next.js, and TypeScript.

### Contacts

- GitHub: [polina-matviienko](https://github.com/polina-matviienko)
- LinkedIn: [Polina Matviienko](https://www.linkedin.com/in/polina-matviienko-dev/)
