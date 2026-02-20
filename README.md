# BESOKLAGI™ — Urban Streetwear E-Commerce

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**BESOKLAGI™** is a high-concept, brutalist-inspired streetwear e-commerce interface built with modern web technologies. It features a unique "anti-design" aesthetic, smooth parallax animations, and a seamless "Checkout to WhatsApp" functionality tailored for local Indonesian markets.

## 🚀 Tech Stack

-   **Frontend:** React 18, TypeScript, Tailwind CSS v3
-   **Backend:** Node.js, Express (for API & serving)
-   **Database:** MySQL (via `mysql2` driver)
-   **Animations:** AOS (Animate On Scroll), Custom CSS Keyframes
-   **Build Tool:** Vite
-   **Icons:** FontAwesome

## ✨ Key Features

-   **Brutalist UI/UX:** A distinct, raw aesthetic with custom cursors, noise textures, and bold typography.
-   **Dark/Light Mode:** Fully responsive theme toggling with smooth transitions.
-   **Parallax Hero Section:** Interactive scroll-based animations for depth.
-   **Dynamic Cart System:**
    -   Add/Remove items.
    -   Adjust quantities (+/-).
    -   Real-time total calculation.
    -   Persistent cart state (during session).
-   **WhatsApp Checkout:** Automatically formats the order into a WhatsApp message and opens the chat with the seller.
-   **Responsive Design:** Optimized for mobile, tablet, and desktop.
-   **Database Integration:** Ready-to-use MySQL connection setup (configured for MAMP by default).

## 🛠️ Installation & Setup

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn
-   MySQL Server (e.g., MAMP, XAMPP, or standalone MySQL)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/besoklagi.git
cd besoklagi
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# APP_URL: The URL where this applet is hosted.
APP_URL="http://localhost:3000"

# Database Configuration (Default MAMP settings)
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="root"
DB_NAME="besoklagi"
DB_PORT="8889" 
```

> **Note:** If you are using standard MySQL, change `DB_PORT` to `3306` and update the user/password accordingly.

### 4. Database Setup

1.  Open your MySQL client (phpMyAdmin, Sequel Ace, etc.).
2.  Create a new database named `besoklagi`.
3.  (Optional) If you want to fetch products from the DB instead of the hardcoded array, create a `products` table:

```sql
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(255),
  tag VARCHAR(50),
  tagColor VARCHAR(50),
  description TEXT
);
```

### 5. Run Development Server

This command starts the Express server with Vite middleware for HMR (Hot Module Replacement).

```bash
npm run dev
```

Access the app at `http://localhost:3000`.

### 6. Build for Production

```bash
npm run build
```

## 📂 Project Structure

```
besoklagi/
├── dist/                   # Production build output
├── src/
│   ├── components/         # React Components
│   │   ├── CartDrawer.tsx  # Shopping cart sidebar
│   │   ├── Cursor.tsx      # Custom cursor logic
│   │   ├── DropSection.tsx # Product grid
│   │   ├── Footer.tsx      # Footer & Social links
│   │   ├── Hero.tsx        # Main landing area
│   │   ├── Manifesto.tsx   # Brand story section
│   │   └── Navbar.tsx      # Navigation & Theme toggle
│   ├── App.tsx             # Main application component
│   ├── db.ts               # MySQL connection pool configuration
│   ├── index.css           # Global styles & Tailwind directives
│   ├── main.tsx            # React entry point
│   └── vite-env.d.ts       # Vite type definitions
├── server.ts               # Express server entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies & scripts
```

## 🎨 Customization

### Changing the WhatsApp Number

Open `src/components/CartDrawer.tsx` and update the `WA_NUMBER` constant:

```typescript
const WA_NUMBER = "628123456789"; // Replace with your actual WhatsApp number
```

### Modifying Products

Currently, products are hardcoded in `src/components/DropSection.tsx`. You can edit the `products` array directly or uncomment the API fetching logic in `server.ts` and `DropSection.tsx` to use the database.

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**BESOKLAGI™** — *Future is Late.*
