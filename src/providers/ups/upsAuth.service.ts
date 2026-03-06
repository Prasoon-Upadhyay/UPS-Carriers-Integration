import axios from 'axios';
import { config } from '../../config/config';
import { getCacheInstance } from '../../core/cache/index';

interface UPSAuth {
  access_token: string;
  expires_in: number;
  expires_at: number;
}

export class UPSAuthService {
  private cache = getCacheInstance();
  private cacheKey = 'ups:token';

  private tokenUrl = `${config.ups.oAuthUrl}/token`;
  private refreshUrl = `${config.ups.oAuthUrl}/refresh`;

  private clientId = config.ups.clientId;
  private clientSecret = config.ups.clientSecret;

  /**
   * Public method to get a valid UPS token
   * Checks cache first, refreshes if expired, or generates new if none exists
   */
  async getAuthToken(): Promise<string> {
    const cached: UPSAuth | null = await this.cache.get(this.cacheKey);
    const now = Date.now();

    if (cached) {
      if (cached.expires_at > now) {
        return cached.access_token;
      } else {
        return this.refreshUPSAuth(cached);
      }
    }
    return this.generateUPSAuth();
  }

  /**
   * Generate a new UPS token from the /token endpoint
   */
  private async generateUPSAuth(): Promise<string> {
    const basicAuth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    const response = await axios.post(
      this.tokenUrl,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 5000,
      }
    );

    const { access_token, expires_in } = response.data;

    const token: UPSAuth = {
      access_token,
      expires_in,
      expires_at: Date.now() + expires_in,
    };

    await this.cache.set(this.cacheKey, token, expires_in);

    return token.access_token;
  }

  /**
   * Refresh an expired UPS token using the /refresh endpoint
   */
  private async refreshUPSAuth(oldToken: UPSAuth): Promise<string> {
    const response = await axios.post(
      this.refreshUrl,
      'grant_type=refresh_token',
      {
        headers: {
          Authorization: `Bearer ${oldToken.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 5000,
      }
    );

    const { access_token, expires_in } = response.data;

    const token: UPSAuth = {
      access_token,
      expires_in,
      expires_at: Date.now() + expires_in,
    };

    await this.cache.set(this.cacheKey, token, expires_in);

    return token.access_token;
  }
}