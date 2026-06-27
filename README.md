# Deploy Flask and Express on EC2

## Objective

Deploy the Flask backend and Express frontend on a single Amazon EC2 instance.

## Prerequisites

* AWS EC2 Instance
* Python
* Node.js
* Git
* GitHub Actions

## Deployment Steps

1. Launch an EC2 instance.
2. Install Python, Node.js, and Git.
3. Clone the Flask and Express repositories from GitHub.
4. Install Flask dependencies:

   ```
   pip install -r requirements.txt
   ```
5. Install Express dependencies:

   ```
   npm install
   ```
6. Configure both applications to run on different ports.
7. Configure GitHub Actions to automatically deploy the latest code to the EC2 instance whenever changes are pushed to GitHub.
8. Verify that both applications are accessible through the EC2 public IP.

## Technologies Used

* AWS EC2
* Python (Flask)
* Node.js (Express)
* Git
* GitHub Actions

## Repository Structure

* Backend 
* Frontend
* GitHub Actions Workflow