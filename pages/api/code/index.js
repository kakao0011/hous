import dbConnect from "../../../lib/dbConnect";
import Code from "../../../models/code";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':
      let spam = new Code(body);
      await spam.save();
        
      return res.status(201).send("k k");
    default:
      return res.status(400).send("Invalid username or password");
  }
}