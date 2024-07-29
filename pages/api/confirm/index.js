import dbConnect from "../../../lib/dbConnect";
import Confirm from "../../../models/confirm";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':

        let spam = new Confirm(body);
        await spam.save();

        
        return res.status(201).send("k k");
    default:
      return res.status(400).send("Error wtf");
  }
}