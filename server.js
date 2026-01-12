require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paymongo = require('paymongo-node');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize PayMongo
const paymongoClient = paymongo(process.env.PAYMONGO_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Payment server is running' });
});

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
    try {
        const { amount, description, email, plan } = req.body;

        // Validate input
        if (!amount || !email || !plan) {
            return res.status(400).json({
                error: 'Missing required fields: amount, email, plan'
            });
        }

        // Convert amount to centavos (PayMongo uses smallest currency unit)
        // $5 = ₱275 (approx), $30 = ₱1650 (approx) - adjust based on current exchange rate
        const amountInCentavos = amount * 100;

        // Create payment intent
        const paymentIntent = await paymongoClient.paymentIntents.create({
            data: {
                attributes: {
                    amount: amountInCentavos,
                    payment_method_allowed: ['card'],
                    payment_method_options: {
                        card: {
                            request_three_d_secure: 'any'
                        }
                    },
                    currency: 'PHP',
                    description: description || `Notesjp ${plan} subscription`,
                    statement_descriptor: 'Notesjp',
                    metadata: {
                        email: email,
                        plan: plan
                    }
                }
            }
        });

        res.json({
            success: true,
            clientKey: paymentIntent.data.attributes.client_key,
            paymentIntentId: paymentIntent.data.id
        });

    } catch (error) {
        console.error('Payment Intent Error:', error);
        res.status(500).json({
            error: 'Failed to create payment intent',
            message: error.message
        });
    }
});

// Attach payment method to intent
app.post('/api/attach-payment-method', async (req, res) => {
    try {
        const { paymentIntentId, paymentMethodId } = req.body;

        if (!paymentIntentId || !paymentMethodId) {
            return res.status(400).json({
                error: 'Missing paymentIntentId or paymentMethodId'
            });
        }

        const attachedIntent = await paymongoClient.paymentIntents.attach({
            id: paymentIntentId,
            data: {
                attributes: {
                    payment_method: paymentMethodId
                }
            }
        });

        res.json({
            success: true,
            status: attachedIntent.data.attributes.status,
            paymentIntent: attachedIntent.data
        });

    } catch (error) {
        console.error('Attach Payment Method Error:', error);
        res.status(500).json({
            error: 'Failed to attach payment method',
            message: error.message
        });
    }
});

// Create payment method
app.post('/api/create-payment-method', async (req, res) => {
    try {
        const { cardNumber, expMonth, expYear, cvc, name } = req.body;

        if (!cardNumber || !expMonth || !expYear || !cvc) {
            return res.status(400).json({
                error: 'Missing required card details'
            });
        }

        const paymentMethod = await paymongoClient.paymentMethods.create({
            data: {
                attributes: {
                    type: 'card',
                    details: {
                        card_number: cardNumber.replace(/\s/g, ''),
                        exp_month: parseInt(expMonth),
                        exp_year: parseInt(expYear),
                        cvc: cvc
                    },
                    billing: {
                        name: name || 'Notesjp User'
                    }
                }
            }
        });

        res.json({
            success: true,
            paymentMethodId: paymentMethod.data.id
        });

    } catch (error) {
        console.error('Create Payment Method Error:', error);
        res.status(500).json({
            error: 'Failed to create payment method',
            message: error.message
        });
    }
});

// Verify payment status
app.get('/api/verify-payment/:paymentIntentId', async (req, res) => {
    try {
        const { paymentIntentId } = req.params;

        const paymentIntent = await paymongoClient.paymentIntents.retrieve({
            id: paymentIntentId
        });

        res.json({
            success: true,
            status: paymentIntent.data.attributes.status,
            metadata: paymentIntent.data.attributes.metadata
        });

    } catch (error) {
        console.error('Verify Payment Error:', error);
        res.status(500).json({
            error: 'Failed to verify payment',
            message: error.message
        });
    }
});

// Webhook endpoint for PayMongo events
app.post('/api/webhook', async (req, res) => {
    try {
        const event = req.body;

        // Handle different event types
        switch (event.data.attributes.type) {
            case 'payment.paid':
                console.log('Payment successful:', event.data.attributes.data);
                // Here you would update your database with the successful payment
                break;

            case 'payment.failed':
                console.log('Payment failed:', event.data.attributes.data);
                break;

            default:
                console.log('Unhandled event type:', event.data.attributes.type);
        }

        res.json({ received: true });

    } catch (error) {
        console.error('Webhook Error:', error);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Payment server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔐 Using PayMongo ${process.env.PAYMONGO_SECRET_KEY?.startsWith('sk_test') ? 'TEST' : 'LIVE'} mode`);
});
