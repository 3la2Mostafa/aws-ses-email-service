import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new SESClient({
  region: "us-east-1", 
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});



export async function sendEmail({ to, subject, body }) {
  const command = new SendEmailCommand({
    Source: process.env.SENDER_EMAIL, // Replace with your verified SES email
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: { Data: subject },
      Body: {
        Html: { Data: body },
      },
    },
  });

  try {
    const response = await client.send(command);
    return response;
  } catch (err) {
    console.error("SES send error:", err);
    throw err;
  }
}
