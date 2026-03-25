🎯 Hackathon-Feast – Full-Stack Event Booking Platform

Hackathon-Feast is a full-stack MERN application designed for managing and booking events seamlessly. It allows users to explore, register, and securely confirm bookings using built-in authentication and OTP verification—without relying on third-party payment tools.

The platform also includes a powerful admin dashboard for organizers to create, monitor, and manually manage both free and paid events.

🔥 Features
🔐 Authentication & Security
Secure login & registration using JWT and bcrypt
2FA Email OTP Verification:
Required during account activation
Required to confirm event bookings
👥 Role-Based Access Control
Admin
Create, update, and delete events
Approve/reject booking requests
Mark bookings as Paid or Not Paid
Access restricted via database-controlled roles
User
Browse available events
Book tickets using OTP verification
Track booking status in dashboard
Cancel booking requests
📅 Event Management
Create free & paid events
Add:
Event descriptions
External image URLs
Dates & categories
Seating capacity
🎟️ Smart Booking System
OTP-based secure booking authorization
All bookings go into a Pending Queue for admin approval
Real-time seat validation to prevent overbooking
📊 Admin Analytics Dashboard
Monitor:
Pending booking requests
Total revenue
Confirmed paid users
📧 Email Notifications
Automated emails using Nodemailer
Triggered after booking confirmation
🎨 UI/UX
Built with React + Tailwind CSS
Smooth micro-interactions for better user experience
