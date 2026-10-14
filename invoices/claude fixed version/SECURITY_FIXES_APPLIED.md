<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <!-- Content Security Policy: Blocks unauthorized script origins and external data exfiltration -->
  <meta http-equiv="Content-Security-Policy" content="
    default-src 'self' data: blob:;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: blob: https:;
    connect-src 'self' https://koavtkpwqzimkebvtgga.supabase.co wss://koavtkpwqzimkebvtgga.supabase.co https://poolservice-cef5b.web.app;
    frame-src 'self' blob:;
    object-src 'none';
  ">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.6/purify.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <link href="wqlogo.png" rel="icon" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+3:wght@400;600&display=swap');

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* TAB SYSTEM */
    .tab-container {
      width: 210mm;
      max-width: 100%;
      margin: 0 auto 0;
    }

    .tab-buttons {
      display: flex;
      gap: 0;
      width: 100%;
      align-items: stretch;
    }

    .tab-btn {
      flex: 1;
      padding: 11px 10px;
      border: none;
      cursor: pointer;
      font-family: 'Source Sans 3', sans-serif;
      font-size: 13.5px;
      font-weight: 700;
      letter-spacing: 0.2px;
      transition: all .2s;
      border-radius: 0;
      border-bottom: 3px solid transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      box-sizing: border-box;
      line-height: 1.2;
    }

    .tab-btn.invoice-btn {
      background: #e8f5fb;
      color: #0077aa;
      border-top: 3px solid #0099cc;
      border-left: 3px solid #0099cc;
      border-right: 1px solid #c0e0f0;
    }

    .tab-btn.quotation-btn,
    .tab-btn.delivery-btn,
    .tab-btn.handing-btn {
      background: #e8f5fb;
      color: #0077aa;
      border-top: 3px solid #0099cc;
      border-left: 1px solid #c0e0f0;
      border-right: 1px solid #c0e0f0;
    }

    .checklist-pen-box {
      width: 28px;
      height: 28px;
      border: 1.8px solid #2d3748;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: #ffffff;
      cursor: pointer;
      user-select: none;
      transition: all .15s ease-in-out;
