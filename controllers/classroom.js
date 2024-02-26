const ClassroomModel = require("../models/Classroom");

async function addClassroom(req, res) {
    try {
        const {capacity, class: className} = req.body;
        const Classroom = new ClassroomModel({
            capacity,
            class: className
        });
        const savedClassroom = await Classroom.save();
        return res.json(savedClassroom);
    } catch (error) {
        console.log('🚀 ~ router.get ~ error:', error.message);
        return res.status(400).send({
            error,
        });
    }
}

async function updateClassroom(req, res) {
    try {
        const {id} = req.params;
        const {capacity, class: className} = req.body;
        const updatedClassroom = await ClassroomModel.findByIdAndUpdate(
            id,
            {capacity, class: className},
            {new: true}
        );
        return res.json(updatedClassroom);
    } catch (error) {
        console.log('🚀 ~ router.put ~ error:', error.message);
        return res.status(400).send({
            error,
        });
    }
}

async function deleteClassroom(req, res) {
    try {
        const {id} = req.params;
        const deletedClassroom = await ClassroomModel.findByIdAndDelete(id);
        return res.json(deletedClassroom);
    } catch (error) {
        console.log('🚀 ~ router.delete ~ error:', error.message);
        return res.status(400).send({
            error,
        });
    }
}


async function getClassrooms(req, res) {
    try {
        const Classrooms = await ClassroomModel.find();
        return res.json(Classrooms);
    } catch (error) {
        console.log('🚀 ~ router.get ~ error:', error.message);
        return res.status(400).send({
            error,
        });
    }
}

module.exports = {
    addClassroom,
    updateClassroom,
    deleteClassroom,
    getClassrooms,
};