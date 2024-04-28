const express = require("express");
const app = express();

app.get("/login", (req, res) => {
    const htmlContent = `
    <style>
      button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;
      }
    </style>
    <body>
        <div class="content">
          <h1>This is Login Button</h1>
          <button onclick="redirectToLogin()">Go to Login</button>
        </div>

        <script>
          function redirectToLogin() {
            window.location.href = '/krish';
          }
        </script>
      </body>
    </html>
    `;
    res.send(htmlContent);
});

app.get("/*", (req, res) => {
    const htmlContent = `
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .content {
            text-align: center;
          }
          h1 {
            margin-bottom: 20px; /* Add space below h1 */
          }
          button {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>404 Page not found</h1>
          <button onclick="redirectToLogin()">Go to Login</button>
        </div>

        <script>
          function redirectToLogin() {
            window.location.href = '/login';
          }
        </script>
      </body>
    </html>
  `;

    res.send(htmlContent);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
