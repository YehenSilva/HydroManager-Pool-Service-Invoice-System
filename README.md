# HydroManager: Pool Service & Invoice System

A lightweight, full-stack Python application designed for small to medium-sized service businesses. It combines a **Flask-based web dashboard** with an **Excel backend** to manage client records, service history, and professional PDF invoice generation.

## 🚀 Features
- **Client Management:** Easily add, edit, or delete client profiles and service locations.
- **Service Logging:** Track technician visits, pricing, and chemical usage per month.
- **Dynamic Excel Backend:** Data is stored in a structured `.xlsx` file, making it accessible even without the app running.
- **Professional Invoicing:** Built-in invoice generator that converts web forms into formatted PDF documents using `html2canvas` and `jsPDF`.
- **Payment Tracking:** Status badges for "Paid", "Partial", and "Unpaid" monthly accounts.

## 🛠️ Tech Stack
- **Backend:** Python 3, Flask
- **Excel Logic:** OpenPyXL
- **Frontend:** HTML5, CSS3 (Modern UI), JavaScript (ES6)
- **PDF Generation:** jsPDF, html2canvas

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/HydroManager.git](https://github.com/yourusername/HydroManager.git)

2. Install dependencies:
  ```bash
  pip install flask openpyxl

3.Run the application:
   ```bash
  python service.py
