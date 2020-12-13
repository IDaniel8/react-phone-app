import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import PhonesDATA from "./mobiles.json";
import { nextTick } from "process";

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// API calls
app.get("/api/phones", async (req, res) => {
  const delay = req.query.delay ?? 0;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(PhonesDATA);
    }, [delay]);
  });
  res.status(200).send(data);
});

app.get("/api/phone/:id", async (req, res) => {
  const delay = req.query.delay ?? 0;
  const id = req.params.id;

  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(PhonesDATA.find((phone) => phone.id === id));
      }, [delay]);
    });
    if (!data) throw new Error("Not found");
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send({ error: { msg: e.message } });
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.all("*", (_, res) => {
  try {
    throw new Error("Bad request");
  } catch (e) {
    res.status(400).send({ error: { msg: e.message } });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
