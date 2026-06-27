## Deploy Flask and Express on EC2

## Objective

Deploy a Flask backend and an Express frontend on a single Amazon EC2 instance.

## Prerequisites

* Amazon EC2 Instance
* Python
* Node.js
* Git
* PM2

## Deployment Steps

1. Launch an EC2 instance.
2. Install Python, Node.js, Git, and PM2.
3. Clone the Flask and Express repositories.
4. Install Flask dependencies:

   ```
   pip install -r requirements.txt
   ```
5. Install Express dependencies:

   ```
   npm install
   ```
6. Start both applications using PM2:

   ```
   pm2 start
   ```
7. Verify both applications are running.

## Architecture

GitHub → EC2 Instance → Flask Backend & Express Frontend (Managed by PM2)