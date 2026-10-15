// config.js - Configuration Template
// INSTRUCTIONS:
// 1. Copy this file to config.js
// 2. Replace placeholder values with your actual credentials
// 3. Add config.js to .gitignore (NEVER commit this file)

const CONFIG = {
  // ====== SUPABASE CONFIGURATION ======
  // Get these from: https://supabase.com/dashboard/project/<your-project>/settings/api
  SUPABASE_URL: 'https://koavtkpwqzimkebvtgga.supabase.co', // Your Supabase project URL
  SUPABASE_ANON_KEY: 'sb_publishable_RmVnq8G63bXG379Bpj6UrA_45hkSJT8', // ⚠️ ROTATE THE OLD EXPOSED KEY FIRST!

  // ====== SESSION MANAGEMENT ======
  SESSION_TIMEOUT_MS: 30 * 60 * 1000, // 30 minutes of inactivity
  SESSION_WARNING_MS: 25 * 60 * 1000,  // Warn 5 minutes before timeout

  // ====== AUTHENTICATION & RATE LIMITING ======
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATIONS: [
    5 * 60 * 1000,   // 5 minutes after 5 attempts
    15 * 60 * 1000,  // 15 minutes after 10 attempts
    60 * 60 * 1000   // 1 hour after 15 attempts
  ],

  // ====== SECURITY ======
  ENABLE_ENCRYPTION: true,        // Encrypt sensitive localStorage data
  CSRF_TOKEN_LENGTH: 32,          // Length of CSRF tokens
  ENABLE_SESSION_VALIDATION: true, // Validate session on critical operations

  // ====== VALIDATION LIMITS ======
  MAX_INVOICE_AMOUNT: 10000000,   // Rs. 10 million
  MIN_INVOICE_AMOUNT: -1000000,   // Allow deductions up to Rs. 1 million
  MAX_DISCOUNT_PERCENT: 100,
  MAX_ADVANCE_PAYMENT: 10000000,
  MAX_ITEMS_PER_INVOICE: 100,

  // ====== BACKUP ENCRYPTION ======
  BACKUP_PBKDF2_ITERATIONS: 600000, // OWASP recommended for PBKDF2-SHA256

  // ====== FEATURE FLAGS ======
  ENABLE_AUTO_LOGOUT: true,
  ENABLE_ACTIVITY_TRACKING: true,
  ENABLE_AUDIT_LOG: true
};

// Validate configuration on load
(function validateConfig() {
  if (CONFIG.SUPABASE_ANON_KEY === 'YOUR_NEW_ROTATED_KEY_HERE') {
    console.error('⚠️ SECURITY WARNING: Please configure your Supabase credentials in config.js');
  }
  if (!CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_URL.includes('supabase.co')) {
    console.error('⚠️ Invalid SUPABASE_URL configuration');
  }
})();
