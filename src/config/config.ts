import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  ups: {
    oAuthUrl: process.env.UPS_OAUTH_URL!,
    merchantId: process.env.UPS_MERCHANT_ID!,
    clientId: process.env.UPS_CLIENT_ID!,
    clientSecret: process.env.UPS_CLIENT_SECRET!
  },
  redisUrl: process.env.REDIS_URL!
};