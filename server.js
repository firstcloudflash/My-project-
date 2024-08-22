const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const csrf = require('csurf');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/payments');

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(csrf({ cookie: true }));

// Routes
app.use('/api/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Blendify365 Backend API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
