# Payment Integration Guide - Notesjp

## Overview
This guide will help you integrate real payment processing using PayMongo (Philippine payment gateway).

## Prerequisites

### 1. Create a PayMongo Account
1. Go to https://dashboard.paymongo.com/signup
2. Sign up with your business details
3. Complete verification (may take 1-2 business days)
4. Get your API keys from the dashboard

### 2. Install Node.js (if not already installed)
1. Download from https://nodejs.org/
2. Install the LTS version
3. Verify installation: `node --version` and `npm --version`

## Setup Instructions

### Step 1: Initialize Backend
```bash
cd /Users/abhijeetanand/Documents/JLPT/JLPT
npm init -y
npm install express paymongo-node dotenv cors
```

### Step 2: Create Environment Variables
Create a `.env` file in your project root with:
```
PAYMONGO_SECRET_KEY=sk_test_your_secret_key_here
PAYMONGO_PUBLIC_KEY=pk_test_your_public_key_here
PORT=3000
```

**IMPORTANT**: Replace the keys with your actual PayMongo API keys from the dashboard.

### Step 3: Start the Server
```bash
node server.js
```

The server will run on http://localhost:3000

### Step 4: Deploy (Production)

#### Option A: Deploy to Railway (Recommended - Free)
1. Go to https://railway.app/
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your JLPT repository
5. Add environment variables in Railway dashboard
6. Railway will auto-deploy your backend

#### Option B: Deploy to Render (Free)
1. Go to https://render.com/
2. Sign up and create a new "Web Service"
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `node server.js`
6. Add environment variables
7. Deploy

### Step 5: Update Frontend
Once deployed, update the `API_URL` in `payment.html` from:
```javascript
const API_URL = 'http://localhost:3000';
```
to your deployed URL:
```javascript
const API_URL = 'https://your-app-name.railway.app';
```

## Testing

### Test Cards (PayMongo Test Mode)
Use these cards to test payments:

**Successful Payment:**
- Card: 4343 4343 4343 4345
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits (e.g., 123)

**Failed Payment:**
- Card: 4571 7360 0000 0002
- Expiry: Any future date
- CVC: Any 3 digits

## Going Live

1. Complete PayMongo verification
2. Switch from test keys to live keys in `.env`
3. Update `PAYMONGO_SECRET_KEY` and `PAYMONGO_PUBLIC_KEY`
4. Redeploy your backend
5. Test with a real small transaction

## Security Notes

- ✅ Never commit `.env` file to GitHub (already in .gitignore)
- ✅ Never expose secret keys in frontend code
- ✅ Always use HTTPS in production
- ✅ Validate all payments on the backend

## Support

- PayMongo Docs: https://developers.paymongo.com/docs
- PayMongo Support: support@paymongo.com
- Test Dashboard: https://dashboard.paymongo.com/

## Fees

PayMongo charges:
- Cards: 3.5% + ₱15 per transaction
- GCash/Maya: 2.5% + ₱15 per transaction

Example: ₱150 monthly subscription = ₱5.25 + ₱15 = ₱20.25 fee (you receive ₱129.75)
