# User Authentication System

A full-stack user authentication system built with Express, MongoDB, JWT, bcrypt.js, crypto, and React. This project provides a secure and efficient way to manage user authentication, handling everything from secure password storage to stateless session management.

## Features

- **User Registration & Login:** Secure endpoints for registering new users and authenticating existing users.
- **Password Hashing:** Uses bcrypt.js to securely hash passwords before storing them in MongoDB.
- **Session Management:** Utilizes JWT (JSON Web Token) to manage user sessions securely and ensure stateless, scalable authentication.
- **Token Generation:** Uses crypto to generate unique hexadecimal codes, adding an extra layer of security.
- **Frontend UI:** A React-based frontend that offers a clean and responsive user interface for seamless user interaction.

## Tech Stack


- **Frontend:** React
- **Backend:** Express, Node.js
- **Database:** MongoDB with Mongoose
- **Security:** bcrypt.js, JWT, and crypto

## Usage

- **Register a new user** by entering credentials on the registration page.
![Screenshot (217)](https://github.com/user-attachments/assets/67f18c5b-0e72-4137-b018-d1806f1c05f5)


- **Login** to receive a JWT token, which is stored for session management.
- **Secure Routes** are accessible only when authenticated, thanks to the JWT verification.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
---
