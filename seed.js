const mongoose = require('mongoose');
const Profile = require('./models/Profile');
require('dotenv').config();

// --- UPDATED DATA WITH CERTIFICATE LINKS ---
const myProfileData = {
  name: 'Aditya Vishwakarma',
  email: 'adityavishwa9450@gmail.com',
  location: 'Kalyani, West Bengal',
  bio: 'I am Aditya, a final-year Computer Science Engineering student with a strong foundation in software development, machine learning, and backend engineering. Passionate about solving real-world problems using technology, I enjoy working on projects that involve Python, databases, and AI/ML models, as well as exploring optimization techniques and system design.',
  links: {
    github: 'https://github.com/AdIIITyaCS',
    linkedin: 'https://www.linkedin.com/in/aditya-vishwakarma-099321265/',
  },
  skills: [
    'C', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'SQL',
    'React.js', 'Bootstrap', 'TensorFlow', 'VS Code', 'Git',
    'GitHub', 'Linux (Ubuntu)', 'Windows'
  ],
  projects: [
    {
      title: 'Countdown Timer',
      description: 'Developed a countdown timer application with customizable time settings, start/stop functionality, and responsive design for seamless usage.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      link: 'https://github.com/AdIIITyaCS/CountdownTimer',
    },
    {
      title: 'Cervical Cancer Detection, Cure, and Recovery',
      description: 'Implemented the mathematical model of cervical cancer as a college project under the guidance of a mathematics professor.',
      technologies: ['Mathematical Modeling'],
      link: 'https://github.com/AdIIITyaCS/Cervical-Cancer-Model',
    },
    {
      title: 'Signature Verification Using CNNs',
      description: 'Implemented a Convolutional Neural Network (CNN) model for signature verification, including preprocessing image data using OpenCV and optimizing the model with TensorFlow.',
      technologies: ['Python', 'TensorFlow'],
      link: 'https://github.com/AdIIITyaCS/Signature-Verification-',
    }
  ],
  education: [
    {
      institution: 'Indian Institute Of Information Technology, Kalyani',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      cgpaOrPercentage: 'CGPA: 8.14',
      duration: 'Nov 2022 - July 2026',
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Gajokhar, Varanasi',
      degree: 'C.B.S.E 12th Boards',
      cgpaOrPercentage: 'Percentage: 84',
      duration: 'June 2019 - April 2021',
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Kushinagar',
      degree: 'C.B.S.E 10th Boards',
      cgpaOrPercentage: 'Percentage: 95',
      duration: 'August 2014 - May 2019',
    },
  ],
  certificates: [
    {
      name: 'Oracle Cloud Infrastructure Certified Data Science Professional',
      year: '2025',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4515E7BA5BAD4A1C44661FEEE9E8DF0B09FF68CC64715BD83B2205FD54619BE2'
    },
    {
      name: 'Oracle Cloud Infrastructure Certified Generative AI Professional',
      year: '2025',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F585E7B4211A6010B5A69F19549738002D5BFAF66A8C3B6D17ED52DF731CC862'
    },
    {
      name: 'Develop GenAI Apps with Gemini and Streamlit',
      year: '2023',
      link: 'https://www.credly.com/badges/ef1051d6-b002-488b-b313-9e43b229f34b'
    },
    {
      name: 'Generative AI with Google Cloud Certification',
      year: '2023',
      link: 'https://www.cloudskillsboost.google/public_profiles/ecace82a-54fb-43e2-bc5a-79e9ff2c521f/badges/8857810?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    }
  ],
};
// --- END OF DATA ---

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing data
    await Profile.deleteMany({});
    console.log('Existing profiles deleted.');

    // Insert new data
    await Profile.create(myProfileData);
    console.log('Profile data has been seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
};

seedDatabase();
