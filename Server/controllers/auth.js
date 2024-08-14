const firebase = require("./../config/firebase");
const path = require('path');
require('firebase/auth'); 

// signup
exports.signup = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).json({
      email: "email is required",
      password: "password is required",
    });
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((userCredential) => {
      // Successfully created user, now trigger email verification
      const user = userCredential.user;
      
      // Send email verification
      return user.sendEmailVerification()
        .then(() => {
          // Email verification sent, return success response
          return res.status(201).json({
            message: "User registered successfully. Verification email sent.",
            user: userCredential.user,
          });
        })
        .catch((error) => {
          // Handle any errors during email verification
          console.error("Error sending verification email:", error.message);
          return res.status(500).json({ error: "Failed to send verification email." });
        });
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error("Signup failed:", errorMessage);

      return res.status(500).json({ error: errorMessage });
    });
};


// signin
exports.signin = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).json({
      email: "Email is required",
      password: "Password is required",
    });
  }

  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ error: 'Please verify your email first.' });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in failed:", errorMessage);
      res.status(500).json({ error: errorMessage });
    });
};

exports.logout = (req, res) => {
  firebase.auth().signOut()
    .then(() => {
      res.status(200).json({ message: 'Logout successful!' });
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error("Logout failed:", errorMessage);
      res.status(500).json({ error: errorMessage });
    });
};



// verify email
// this work after signup & signin
exports.verifyEmail = (req, res) => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(function () {
      return res.status(200).json({ status: "Email Verification Sent!" });
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/too-many-requests") {
        return res.status(500).json({ error: errorMessage });
      }
    });
};

// forget password
exports.forgetPassword = (req, res) => {
  if (!req.body.email) {
    return res.status(422).json({ email: "email is required" });
  }
  firebase
    .auth()
    .sendPasswordResetEmail(req.body.email)
    .then(function () {
      return res.status(200).json({ status: "Password Reset Email Sent" });
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == "auth/invalid-email") {
        return res.status(500).json({ error: errorMessage });
      } else if (errorCode == "auth/user-not-found") {
        return res.status(500).json({ error: errorMessage });
      }
    });
};
