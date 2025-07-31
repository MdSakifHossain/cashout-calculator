// src/utils/seoConfig.js

const Title = "Cashout Calc*";
const Description =
  "Easily calculate bKash cash out charges with this simple and accurate tool. Just enter your amount, and instantly see how much will be deducted based on the latest bKash cash out rates. Perfect for users in Bangladesh who want to avoid surprise fees and manage their money better.";
const ImageLink =
  "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?_gl=1*swegll*_ga*NDM0NjQ0MTAwLjE3NTM5MzcyMDE.*_ga_8JE65Q40S6*czE3NTM5NDIyNjMkbzIkZzEkdDE3NTM5NDIyODMkajQwJGwwJGgw";
const githubUrl = "https://github.com/MdSakifHossain/cashout-calculator";

export const seoConfig = {
  title: Title,
  description: Description,
  ogTitle: Title,
  ogImage: ImageLink,
  ogUrl: githubUrl,
  // You can add more specific twitter fields here if needed
  twitterImage: undefined,
  // Will fallback to ogTitle or title if undefined
  twitterTitle: undefined,
  // Will fallback to description if undefined
  twitterDescription: undefined,
  // Will fallback to ogUrl if undefined
  twitterUrl: undefined,
};
