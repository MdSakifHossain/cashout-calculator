// src/utils/seoConfig.js

const Title = "Cashout Calc*";
const Description =
  "Easily calculate bKash cash out charges with this simple and accurate tool. Just enter your amount, and instantly see how much will be deducted based on the latest bKash cash out rates. Perfect for users in Bangladesh who want to avoid surprise fees and manage their money better.";
const ImageLink =
  "https://images.unsplash.com/photo-1618232731737-e1cd67c80bc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
