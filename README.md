# Room Booking Service

A **room booking service** for travel enthusiasts that allows users to explore, view, and filter rooms based on different capacities. This project is built with **Next.js**, **MongoDB**, and **Tailwind CSS**, focusing on server-rendered pages and dynamic data fetching.

---
## 🔐 User Authentication

The project uses **NextAuth.js** with the **Credentials Provider** to handle user signup and login securely.

### ✨Login SignUp Features

- Secure **Signup** and **Login** system using **NextAuth (Credentials Provider)**
- Passwords are **hashed with `bcrypt`** before being stored in MongoDB
- Authentication uses **JWT-based sessions**
- Fully integrated with **Next.js App Router**
- Session state available through:
  - `auth()` in server components  
  - `useSession()` in client components
## Features (Current)

- **Fetch All Rooms**: Display a list of all available rooms.
- **View Room Details**: Click on a room to see detailed information including title, description, capacity, guest count, pricing, and location.
- **Filter by Capacity**: Users can filter rooms based on their capacity (`small`, `medium`, `large`) using query parameters.  
  *(More filters coming soon)*

---

## Tech Stack

- **Next.js 16 (App Router)** – Server-side rendering and API routes
- **MongoDB** – Database for storing room information
- **Mongoose** – ODM for MongoDB
- **Tailwind CSS** – Styling and responsive UI
- **ShadCN / ShadUI** – UI components (optional)

---

## Data Model (Room)

Each room contains the following properties:

```json
{
  "title": "Cozy Riverside Cottage",
  "description": "A peaceful cottage by the river with a beautiful view and private garden.",
  "capacity": "small", 
  "totalGuestCapacity": 2,
  "regularPrice": 80,
  "discountedPrice": 60,
  "isDiscountApplicable": true,
  "location": "Sundarbans, Bangladesh",
  "imageUrl": "https://example.com/images/riverside-cottage.jpg"
}
