const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');

// Multer setup to handle file/image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ✅ Add New Member (POST /members)
router.post('/members', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const image = req.file.filename;

    const newMember = new Member({ name, role, email, image });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: 'Error saving member', error });
  }
});

// ✅ Get All Members (GET /members)
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching members', error });
  }
});

// ✅ Get Member by ID (GET /members/:id)
router.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching member', error });
  }
});

module.exports = router;
