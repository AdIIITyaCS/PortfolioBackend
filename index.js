const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Profile = require('./models/Profile');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allows cross-origin requests (from your frontend)
app.use(express.json()); // Allows parsing of JSON in request bodies

// --- Database Connection ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('Connection error', err));

// --- API Endpoints ---

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Get Profile Endpoint
app.get('/profile', async (req, res) => {
  try {
    // Since there's only one profile, we can use findOne
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Get Projects (with filtering) Endpoint
app.get('/projects', async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    let projects = profile.projects;

    if (skill) {
      // Filter projects to include only those that have the specified skill in their 'technologies' array
      projects = projects.filter(project => 
        project.technologies.some(tech => tech.toLowerCase() === skill.toLowerCase())
      );
    }
    
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});