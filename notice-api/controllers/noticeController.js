
const notices = [
  { id: 1, title: "Midterm schedule announced" },
  { id: 2, title: "Lab 05 starts this week" }
];
let nextId = 3;


const getNotices = (req, res) => {
  res.json(notices);
};


const createNotice = (req, res) => {
  const { title } = req.body || {};
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const notice = { id: nextId++, title };
  notices.push(notice);
  res.status(201).json(notice);
};


module.exports = { getNotices, createNotice };
