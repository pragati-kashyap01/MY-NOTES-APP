const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Note = require('../models/note');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  try {
    const filter = { owner: req.user.id };
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } }
      ];
    }
    const notes = await Note.find(filter).sort({ isPinned: -1, updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/', [
  auth,
  body('title').trim().notEmpty().withMessage('Title required'),
  body('content').trim().notEmpty().withMessage('Content required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { title, content } = req.body;
  try {
    const note = new Note({ owner: req.user.id, title, content });
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.put('/:id', [
  auth,
  body('title').optional().trim(),
  body('content').optional().trim(),
  body('isPinned').optional().isBoolean()
], async (req, res) => {
  const { id } = req.params;
  const updates = {};
  if (req.body.title !== undefined) updates.title = req.body.title;
  if (req.body.content !== undefined) updates.content = req.body.content;
  if (req.body.isPinned !== undefined) updates.isPinned = req.body.isPinned;

  try {
    let note = await Note.findOne({ _id: id, owner: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found' });

    note = await Note.findByIdAndUpdate(id, { $set: updates }, { new: true });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOneAndDelete({ _id: id, owner: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/:id/pin', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOne({ _id: id, owner: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found' });

    note.isPinned = !note.isPinned;
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
