const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AfNO_BCvQ73Qs6PvxBxrkw8EWb4pZbFNUzt4tG1tkJKnGxwUO0gu3qp0KMEUH6YwuLl3a6rXE1liHa36",
  client_secret:
    "EFWEwfdu0CEMgZlUNHSRdlVfS6h7ePjrGLq9izIoGNV_12zM1a4enYdwETr6KQcbH-ofVAScQgOpNaW7",
});

module.exports = paypal;
