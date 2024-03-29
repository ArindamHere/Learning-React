const express = require("express");
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');


//ROUTE 1 : Get all the notes using : GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server  error");
    }

})

//ROUTE 2 : Add new notes using : POST "/api/notes/addnote". Login required
router.post('/addnote', fetchUser, [
    body("title", "Enter a Valid Title").isLength({ min: 3 }),
    body("description", "description must be atleast of 5 character").isLength({ min: 5 }),
], async (req, res) => {

    const { title, description, tag } = req.body;

    try {
        //If there are errors, return bad request and the errors
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ result: result.array });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote);

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server  error");
    }
})

//ROUTE 3 : Update notes using : PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        //Create a newNote object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        //Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if (!note) res.status(404).send("Not Found");

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server  error");
    }

})

//ROUTE 4 : Delete an existing notes using : DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {

    try {
        //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) res.status(404).send("Not Found");

        //Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);

        res.json({ "Success": "Note has been deleted", note: note });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server  error");
    }

})

module.exports = router;