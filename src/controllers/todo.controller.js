const express = require("express")
const router = express.Router()

const Todos = require("../models/todo.model")


router.get("/", async(req, res) => {
    try{
        const todos = await Todos.find().lean().exec()
        return res.status(200).send(todos)
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

router.post("/", async(req, res) => {
    try{
        const todo = await Todos.create(req.body)
        return res.status(200).send({message: "success fully updated todo"})
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})


router.delete("/:id", async(req, res) => {
  try{
      const todo = await Todos.deleteOne({id: req.params.id})
      return res.status(200).send({message: "success fully deleted todo"})
  }catch(e){
      return res.status(500).json({message: e.message, status: "Failed"})
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const comment = await Todos.findOneAndUpdate({id: req.params.id}, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send({message: "success fully updated todo"})
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router