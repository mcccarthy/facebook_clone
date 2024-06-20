const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const oauth_link = 'https://developers.google.com/oauthplayground';

const auth = new OAuth2(
  MAILING_ID,
  MAILING_REFRESH,
  MAILING_SECRET,
  oauth_link
);

exports.sendVerificationEmail = async (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH
  });
  const accessToken = await auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    }
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: 'Account Verification Link',
    html: `
      <h1>Hi ${name}</h1>
      <h2>Please click on the following link to verify your account</h2>
      <a href=${url}>${url}</a>
    `
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;

  });
};
