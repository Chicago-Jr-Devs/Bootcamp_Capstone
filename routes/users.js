export const persistentLogin = (req, res, next) => {
    // Authenicate the cookie sent on the req object.
    passport.authenticate('jwt', { session: false }, async (authErr, user) => {
      // If there is an system error, send 500 error
      if (authErr) return res.sendStatus(500);
  
      // If no user is returned, send response showing failure.
      if (!user) {
        return res.status(200).json({
          success: 'false',
        });
      }
    })(req, res, next);
  };