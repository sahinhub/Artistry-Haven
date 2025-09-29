# Artistry Haven 🎨

**Artistry Haven** is a modern and responsive Art & Craft Store website focused on **Painting & Drawing**. This platform allows users to browse, add, and manage artworks, providing a seamless experience for art lovers and creators alike.

---

## 🌐 Live Website
[Add your live website URL here]

---

## 🛠 Features

- **User Authentication**: Email/password registration & login with Google social login.
- **Private Routes**: Add Craft Item, My Art & Craft List, View & Update Details pages are protected.
- **Responsive Design**: Works flawlessly on mobile, tablet, and desktop.
- **CRUD Operations**: Users can add, view, update, and delete their artworks.
- **Art & Craft Categories**: Explore artworks by 6 subcategories (Landscape, Portrait, Watercolour, Oil, Charcoal, Cartoon).
- **Interactive UI**: Banner/slider, featured artworks, testimonials, and extra sections.
- **Theme Toggle**: Dark and Light mode support across the website.
- **Loading & Alerts**: Shows loading spinner while fetching data and displays meaningful success/error messages using toast/SweetAlert.
- **Environment Security**: Firebase config and MongoDB credentials hidden using environment variables.
- **Reusable Components**: Navbar, Footer, Cards, Modals, and Forms for consistent design.

---

## 🗂 Pages & Routes

| Path | Page | Access |
|------|------|--------|
| `/` | Home | Public |
| `/all-art-craft-items` | All Art & Craft Items | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/add-craft-item` | Add Craft Item | Private |
| `/my-art-craft-list` | My Art & Craft List | Private |
| `/craft-item/:id` | View Craft Item | Private |
| `/update-craft-item/:id` | Update Craft Item | Private |
| `/categories/:subcategory` | Subcategory Page | Public |
| `*` | 404 Not Found | Public |

---

## 💻 Technologies Used

- **Frontend**: React.js, Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express.js, MongoDB  
- **Authentication**: Firebase Authentication (Email/Password + Google)  
- **Extras**: React Router DOM, Lottie React, React Awesome Reveal, React Simple Typewriter, SweetAlert/Toast  

---

## 🖌 Art & Craft Focus

- **Category**: Painting & Drawing 🎨  
- **Subcategories**:
  - Landscape Painting
  - Portrait Drawing
  - Watercolour Painting
  - Oil Painting
  - Charcoal Sketching
  - Cartoon Drawing

All items, pages, and sections are based on this category only.

---

## 📂 Project Structure

- **Client**: React components, pages, routes, context, hooks, assets  
- **Server**: Express routes, controllers, models, MongoDB connection  
- **Shared**: Environment variables for Firebase & MongoDB  

---

## ✅ How to Run Locally

1. Clone the client and server repositories.  
2. Install dependencies: `npm install`  
3. Create `.env` files for Firebase config and MongoDB URI.  
4. Start the server: `npm run dev` (or `node index.js`)  
5. Start the client: `npm start`  

---

## 📌 Notes

- No Lorem Ipsum text used; all content is meaningful and related to Painting & Drawing.  
- All routes are properly protected for private access.  
- CRUD operations provide feedback via toast or SweetAlert messages.  
- Fully responsive and interactive UI with dark/light theme toggle.

---

© 2025 Artistry Haven. All Rights Reserved.

