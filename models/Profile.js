const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  portfolio: String,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
});

const EducationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  cgpaOrPercentage: String,
  duration: String,
});

const CertificateSchema = new mongoose.Schema({
  name: String,
  year: String,
  link: String,   // ✅ Added certificate link
});

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  location: String,
  bio: String,
  links: LinkSchema,
  skills: [String],
  projects: [ProjectSchema],
  education: [EducationSchema],
  certificates: [CertificateSchema],  // ✅ Includes certificate with link
});

module.exports = mongoose.model('Profile', ProfileSchema);
