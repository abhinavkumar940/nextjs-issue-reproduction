import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method.toLowerCase() !== "post") {
    return res.status(405).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const data = {
    list_ids: [process.env.SENDGRID_LIST_ID],
    contacts: [{ email }],
  };

  try {
    await client.request({
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data,
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
