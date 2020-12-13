import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { authenticate } from "./middleware";

import PhonesDATA from "./mobiles.json";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(authenticate);

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

app.all("*", (_, res) => {
  try {
    throw new Error("Bad request");
  } catch (e) {
    res.status(400).send({ error: { msg: e.message } });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
