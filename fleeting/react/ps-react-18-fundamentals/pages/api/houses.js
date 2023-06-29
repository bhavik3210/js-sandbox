// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import houses from "../api/data/houses.json" assert { type: "json" };

export default function handler(req, res) {
  res.status(200).json(houses);
}
