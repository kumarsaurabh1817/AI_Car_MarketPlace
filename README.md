<br/>
<div align="center">
<a href="https://github.com/kumarsaurabh1817/AI_Car_MarketPlace">
<img src="public/logo-white.svg" alt="AutoAI Market Logo" width="200" height="60">
</a>
<h3 align="center">AutoAI Market</h3>
<p align="center">
AI-Powered Car Marketplace with Smart Search and Test Drive Booking
<br/>
<br/>
</p>
</div>

## Contact

**Project Link**: [https://github.com/kumarsaurabh1817/AI_Car_MarketPlace](https://github.com/kumarsaurabh1817/AI_Car_MarketPlace)

**Live Demo**: [https://ai-powered-car-market-place.vercel.app/](https://ai-powered-car-market-place.vercel.app/)


## About The Project

![AutoAI Market Screenshot](/public/SSS%20for%20car%20market.png)

AutoAI Market is a comprehensive car marketplace platform that revolutionizes how people buy and sell vehicles. With AI-powered search capabilities, seamless test drive booking, and an intuitive admin panel, it provides a complete solution for both customers and dealerships.

**Key Features:**
- 🔍 **AI-Powered Search**: Advanced image-based car search using Google Gemini AI
- 📅 **Test Drive Booking**: Easy online scheduling with time slot management
- 👤 **User Management**: Secure authentication with Clerk
- 🛡️ **Admin Dashboard**: Comprehensive management tools for cars, bookings, and users
- 💾 **Wishlist System**: Save and manage favorite vehicles
- 📱 **Responsive Design**: Optimized for all devices
- 🏢 **Multi-Role System**: Separate interfaces for customers and administrators

### Built With

This project is built using modern web technologies for optimal performance and user experience:

- [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
- [![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
- [![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

## Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher)
  ```sh
  node --version
  ```
- **npm** (latest version)
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   [git clone https://github.com/kumarsaurabh1817/AI_Car_MarketPlace.git](https://github.com/kumarsaurabh1817/AI_Car_MarketPlace)
   cd AI_Car_MarketPlace_Latest
   ```

2. **Install dependencies**
   ```sh
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your-postgresql-database-url"
   DIRECT_URL=""
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   
   # Supabase (for image storage)
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   
   # Google AI (for image search)
   GOOGLE_AI_API_KEY="your-google-ai-api-key"

   # Arjet
   ARCJET_KEY=""
   ```

4. **Set up the database**
   ```sh
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### For Customers

1. **Browse Cars**: Explore our extensive car inventory with advanced filtering options
2. **AI Search**: Upload an image to find similar vehicles using AI
3. **Save Favorites**: Create a wishlist of your preferred cars
4. **Book Test Drives**: Schedule convenient test drive appointments
5. **Manage Reservations**: View and manage your test drive bookings

### For Administrators

Access the admin panel at `/admin` to:

1. **Dashboard**: View key metrics and analytics
2. **Car Management**: Add, edit, and manage vehicle listings
3. **Test Drive Management**: Handle booking requests and status updates
4. **User Management**: Promote users to admin roles
5. **Settings**: Configure working hours and dealership information

### Key Features in Detail

#### AI-Powered Car Search
- Upload images to find similar vehicles
- Advanced filtering by make, model, price, and more
- Smart recommendations based on user preferences

#### Test Drive Booking System
- Real-time availability checking
- Flexible time slot management
- Automated confirmation and reminders
- Admin tools for managing bookings

#### Admin Dashboard
- Comprehensive analytics and reporting
- User role management
- Inventory management tools
- Booking status tracking

## Project Structure

```
ai-car-marketplace/
├── app/                          # Next.js app directory
│   ├── (admin)/                  # Admin panel routes
│   │   └── admin/               
│   │       ├── cars/            # Car management
│   │       ├── test-drives/     # Booking management
│   │       └── settings/        # Admin settings
│   ├── (auth)/                  # Authentication pages
│   ├── (main)/                  # Main application routes
│   │   ├── cars/               # Car listings and details
│   │   ├── reservations/       # User reservations
│   │   ├── saved-cars/         # User wishlist
│   │   └── test-drive/         # Test drive booking
│   └── globals.css             # Global styles
├── components/                  # Reusable UI components
│   ├── ui/                     # shadcn/ui components
│   ├── car-card.jsx           # Car display component
│   ├── header.jsx             # Navigation header
│   └── test-drive-card.jsx    # Booking display
├── actions/                    # Server actions
│   ├── admin.js               # Admin operations
│   ├── car-listing.js         # Car CRUD operations
│   ├── settings.js            # App settings
│   └── test-drive.js          # Booking operations
├── lib/                       # Utility libraries
├── prisma/                    # Database schema
└── public/                    # Static assets
```

## Roadmap

- [x] **Phase 1: Core Features**
  - [x] User authentication system
  - [x] Car listing and browsing
  - [x] Basic admin panel
  
- [x] **Phase 2: Enhanced Features**
  - [x] AI-powered image search
  - [x] Test drive booking system
  - [x] User wishlist functionality
  
- [ ] **Phase 3: Advanced Features**
  - [ ] Payment integration
  - [ ] Advanced analytics dashboard
  - [ ] Mobile app development
  - [ ] Multi-language support
  
- [ ] **Phase 4: Marketplace Expansion**
  - [ ] Multi-dealer platform
  - [ ] Car financing options
  - [ ] Insurance integration
  - [ ] Vehicle history reports




<div align="center">
  <p>Made By Saurabh Kumar</p>
</div>
