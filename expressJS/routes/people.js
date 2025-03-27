const express = require("express");
const router = express.Router();

let { people } = require("./routes.people");

router.get("/api/people", (req, res) => {
  res.status(200).json({ success: "true", data: people });
});
router.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provode a name value" });
  }
  res.status(201).send({ success: "true", person: name });
});

router.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("please provide a name value");
  }

  res.status(201).send({ success: true, data: [...people, name] });
});

//put method

router.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(401)
      .json({ success: false, msg: `no person with ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).json({ success: true, data: newPeople });
});

router.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(401)
      .json({ success: false, msg: `no person with ${req.params.id}` });
  }
  const newpeople = people.filter((person) => {
    person.id !== Number(req.params.id);
  });

  return res.status(201).json({ success: true, data: newpeople });
});

module.exports = router;
