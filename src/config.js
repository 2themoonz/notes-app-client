const dev = {
  STRIPE_KEY:
    "pk_test_51NfN1yBfwMjAXQQV2rkldDhdqL1WBjTrQX3p9Xy9cSy2RPDa3r6C0LoiW18PCK8RJXQiXAEaCrMH6iTN8pCcbXPG00215DU79R",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-prod-attachmentsbucket-1eil5wellx7jv",
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://2l1tkmxz78.execute-api.ap-southeast-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_xg8Amdz5b",
    APP_CLIENT_ID: "2ok5ibmiclua5c9g70lbove14c",
    IDENTITY_POOL_ID: "ap-southeast-1:76f306b2-5b09-4d1f-a46b-01b506878778",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51NfN1yBfwMjAXQQV2rkldDhdqL1WBjTrQX3p9Xy9cSy2RPDa3r6C0LoiW18PCK8RJXQiXAEaCrMH6iTN8pCcbXPG00215DU79R",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-prod-attachmentsbucket-1eil5wellx7jv",
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://2l1tkmxz78.execute-api.ap-southeast-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_xg8Amdz5b",
    APP_CLIENT_ID: "2ok5ibmiclua5c9g70lbove14c",
    IDENTITY_POOL_ID: "ap-southeast-1:76f306b2-5b09-4d1f-a46b-01b506878778",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
