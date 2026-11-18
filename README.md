# Lab 05 – Code-Along: Node.js & Express

This repo contains the code we build together in Lab 05.

| Folder | What it is |
|---|---|
| `part-a/` | Plain Node.js: running JavaScript outside the browser and a tiny HTTP server |
| `notice-api/` | A small REST API built with Express (routes, controllers, middleware) |

---

## 1. Prerequisites

Install these before the lab:

- **Node.js** (LTS version, 18 or newer): https://nodejs.org
- **A code editor**, e.g. VS Code: https://code.visualstudio.com
- **Git** (optional, only needed if you clone): https://git-scm.com

Check your installation in a terminal:

```bash
node -v
npm -v
```

Both commands should print a version number.

---

## 2. Get the code

**Option A: Download ZIP (easiest).**
Click the green **Code** button on this page, choose **Download ZIP**, and extract it.

**Option B: Clone with Git.**

```bash
git clone https://github.com/izharulislam4209/lab-5.git
cd lab-5
```

---

## 3. Part A: Node.js basics

```bash
cd part-a
```

**Run a script outside the browser:**

```bash
node hi.js
```

Expected output:

```
Running on my laptop, not in Chrome
5
```

**Start a basic HTTP server:**

```bash
node server.js
```

Open http://localhost:3000 in your browser. You should see `Hello from my laptop!`.
Any other path (e.g. http://localhost:3000/abc) returns `Not found`.

Press `Ctrl + C` in the terminal to stop the server.

---

## 4. Notice API (Express)

```bash
cd notice-api
npm install
```

> `npm install` downloads Express and nodemon into `node_modules/`. That folder is not in this repo, so you must run this command once after downloading.

**Start the server:**

```bash
npm start      # runs: node app.js
# or
npm run dev    # runs with nodemon; restarts automatically when you save a file
```

You should see: `Demo API on http://localhost:3000`

### Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/notices` | Get all notices |
| POST | `/notices` | Create a notice. Body: `{ "title": "..." }` |

### Try it

**GET:** open http://localhost:3000/notices in your browser.

**POST:** use Postman or Thunder Client (VS Code extension), or run curl:

```bash
curl -X POST http://localhost:3000/notices \
  -H "Content-Type: application/json" \
  -d '{"title": "Quiz on Friday"}'
```

Response (`201 Created`):

```json
{ "id": 3, "title": "Quiz on Friday" }
```

Sending a request without a `title` returns `400` with `{ "message": "Title is required" }`.

> Notices are stored in memory, so they reset every time you restart the server.

### Project structure

```
notice-api/
├── app.js                       # connects everything: middleware → routes → listen
├── routes/noticeRoutes.js       # maps method + URL to a controller function
├── controllers/noticeController.js  # the logic: read / create notices
└── middleware/logger.js         # logs every request, then calls next()
```

How a request flows through the app:

```
Request → logger (middleware) → express.json() → /notices router → controller → Response
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `'node' is not recognized` | Install Node.js and restart your terminal |
| `Cannot find module 'express'` | Run `npm install` inside `notice-api/` |
| `EADDRINUSE: address already in use :::3000` | Another server is still running. Stop it with `Ctrl + C`, or close the other terminal |
| `req.body` is `undefined` / title missing | Make sure your POST sends the header `Content-Type: application/json` |
| `nodemon` not found | Run `npm install` first, then use `npm run dev` (not `nodemon` directly) |
