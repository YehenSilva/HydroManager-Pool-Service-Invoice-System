#!/usr/bin/env python3
"""
HydroManager — Professional Service Management System
A lightweight Flask & Excel-based CRM for service businesses.
"""

import json, os, sys
from datetime import datetime
from openpyxl import load_workbook, Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

try:
    from flask import Flask, request, jsonify, send_file
except ImportError:
    os.system(f"{sys.executable} -m pip install flask -q")
    from flask import Flask, request, jsonify, send_file

# Configuration - Change these for your own branding
APP_NAME = "HydroManager"
EXCEL_FILE = "service_records.xlsx"
DEFAULT_PERSONS = ['Staff A', 'Staff B', 'Staff C']

app = Flask(__name__)

# --- Excel helpers (Styles maintained for professional look) ---
def thin_border():
    t = Side(style='thin')
    return Border(left=t, right=t, top=t, bottom=t)

def h_style(cell, bg="00509D", fg="FFFFFF"):
    cell.font = Font(bold=True, color=fg, name='Arial', size=11)
    cell.fill = PatternFill("solid", start_color=bg)
    cell.alignment = Alignment(horizontal='center', vertical='center')
    cell.border = thin_border()

def d_style(cell, even=True):
    cell.font = Font(name='Arial', size=10)
    cell.border = thin_border()
    cell.alignment = Alignment(vertical='center')
    cell.fill = PatternFill("solid", start_color="F0F7FF" if even else "FFFFFF")

def ensure_workbook():
    if not os.path.exists(EXCEL_FILE):
        wb = Workbook()
        ws = wb.active
        ws.title = "Client Details"
        ws.merge_cells('A1:C1')
        ws['A1'] = f'{APP_NAME} — Service Records'
        h_style(ws['A1'], bg="002855")
        ws.row_dimensions[1].height = 36
        for col, h in enumerate(['Location', 'Client Name', 'Assigned Tech'], 1):
            h_style(ws.cell(row=2, column=col, value=h))
        ws.column_dimensions['A'].width = 25
        ws.column_dimensions['B'].width = 30
        ws.column_dimensions['C'].width = 20
        wb.save(EXCEL_FILE)

# [Logic for get_clients, add_entry, etc. remains the same as your original 
# but uses the sanitized APP_NAME and EXCEL_FILE variables]

# ... (Insert your logic functions here, keeping the sanitization)

@app.route('/')
def index():
    return HTML_PAGE.replace("Waterqo", APP_NAME)

# ... (Insert your Flask Routes here)

if __name__ == '__main__':
    ensure_workbook()
    print(f"Running {APP_NAME} on http://localhost:5050")
    app.run(host='0.0.0.0', port=5050, debug=False)
