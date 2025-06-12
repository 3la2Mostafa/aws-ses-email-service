# 📧 AWS SES Email Microservice

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![AWS SDK](https://img.shields.io/badge/AWS_SDK-v3-orange)](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/)

A Node.js microservice for sending emails through Amazon Simple Email Service (SES) using AWS SDK v3.

## Table of Contents
- [📧 AWS SES Email Microservice](#-aws-ses-email-microservice)
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
  - [🛠 Prerequisites](#-prerequisites)
  - [⚡ Installation](#-installation)
  - [👨‍💻 Author (Alaa Mostafa)](#-author-alaa-mostafa)

## ✨ Features
- ✅ AWS SES email delivery
- 🏗 Modular service architecture
- ⚡ Fast and lightweight
- 🔒 Secure configuration management

## 🛠 Prerequisites
- Node.js 18+
- AWS account with SES access
- Verified SES email identities
- AWS IAM credentials with SES permissions

## ⚡ Installation
```bash
# Clone the repository
git clone https://github.com/your-username/aws-ses-email-service.git
cd aws-ses-email-service

# Install dependencies
npm install
```

🔧 Configuration
Rename .env.example to .env
Configure your AWS credentials.

```bash
AWS_REGION=your-region (e.g., us-east-1)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
PORT=3000
```
📚 API Documentation
Send Email
Endpoint: POST /email/send

Request Body:

```json
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "body": "<h1>Hello</h1><p>Email content</p>"
}
```
🏗 Project Structure
```
aws-ses-email-service/
├── src/
│   ├── config/
│   │   └── config.js         # AWS configuration
│   ├── routes/
│   │   └── email.js          # API routes
│   ├── services/
│   │   └── emailService.js   # Business logic
│   └── app.js                # Main application
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 👨‍💻 Author (Alaa Mostafa)

  ![Coder](https://img.shields.io/badge/👨‍💻-Full_Stack_Developer-blueviolet)
