# Notesjp - JLPT Learning Platform

A comprehensive Japanese language learning platform with integrated payment processing.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Then edit `.env` and add your PayMongo API keys:
```
PAYMONGO_SECRET_KEY=sk_test_your_key_here
PAYMONGO_PUBLIC_KEY=pk_test_your_key_here
```

Get your keys from: https://dashboard.paymongo.com/

### 3. Start the Payment Server
```bash
npm start
```

The server will run on http://localhost:3000

### 4. Open the Website
Open `index.html` in your browser or use a local server:
```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js (install first: npm install -g http-server)
http-server -p 8000
```

Then visit: http://localhost:8000

## 📋 Testing Payments

### Test Cards (PayMongo Test Mode)

**Successful Payment:**
- Card: `4343 4343 4343 4345`
- Expiry: Any future date (e.g., `12/25`)
- CVC: Any 3 digits (e.g., `123`)

**Failed Payment:**
- Card: `4571 7360 0000 0002`

## 🌐 Deployment

See `PAYMENT_INTEGRATION_GUIDE.md` for detailed deployment instructions.

### Quick Deploy to Railway
1. Push code to GitHub
2. Go to https://railway.app/
3. Create new project from GitHub repo
4. Add environment variables
5. Deploy!

## 💰 Pricing

- Monthly: ₱275 ($5 USD)
- Yearly: ₱1,650 ($30 USD)

## 📁 Project Structure

```
JLPT/
├── index.html              # Landing page
├── login.html              # Login page
├── register.html           # Registration page
├── subscription.html       # Plan selection
├── payment.html            # Payment processing
├── home.html               # Learning dashboard
├── profile.html            # User profile
├── server.js               # Payment backend
├── package.json            # Dependencies
├── .env                    # Environment variables (not in git)
└── PAYMENT_INTEGRATION_GUIDE.md  # Detailed setup guide
```

## 🔒 Security

- Never commit `.env` file
- Use test keys for development
- Switch to live keys only in production
- Always use HTTPS in production

## 📞 Support

For PayMongo support: support@paymongo.com
