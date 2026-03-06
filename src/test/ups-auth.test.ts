import axios from "axios";
import { UPSAuthService } from "../providers/ups/upsAuth.service";
import { getCacheInstance } from "../core/cache/index";

jest.mock("axios");
jest.mock("../core/cache/index");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UPSAuthService", () => {
  let service: UPSAuthService;
  let mockCache: any;

  beforeEach(() => {
    mockCache = {
      get: jest.fn(),
      set: jest.fn(),
    };

    (getCacheInstance as jest.Mock).mockReturnValue(mockCache);

    service = new UPSAuthService();
    jest.clearAllMocks();
  });

  test("returns cached token when not expired", async () => {
    const token = {
      access_token: "cached-token",
      expires_in: 3600,
      expires_at: Date.now() + 100000,
    };

    mockCache.get.mockResolvedValue(token);

    const result = await service.getAuthToken();

    expect(result).toBe("cached-token");
    expect(mockedAxios.post).not.toHaveBeenCalled();
  });

  test("refreshes token when cached token expired", async () => {
    const oldToken = {
      access_token: "old-token",
      expires_in: 3600,
      expires_at: Date.now() - 1000,
    };

    mockCache.get.mockResolvedValue(oldToken);

    mockedAxios.post.mockResolvedValue({
      data: {
        access_token: "new-token",
        expires_in: 3600,
      },
    });

    const result = await service.getAuthToken();

    expect(result).toBe("new-token");

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(mockCache.set).toHaveBeenCalledWith(
      "ups:token",
      expect.objectContaining({
        access_token: "new-token",
      }),
      3600
    );
  });

  test("generates new token when no cached token exists", async () => {
    mockCache.get.mockResolvedValue(null);

    mockedAxios.post.mockResolvedValue({
      data: {
        access_token: "generated-token",
        expires_in: 3600,
      },
    });

    const result = await service.getAuthToken();

    expect(result).toBe("generated-token");

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(mockCache.set).toHaveBeenCalledWith(
      "ups:token",
      expect.objectContaining({
        access_token: "generated-token",
      }),
      3600
    );
  });
});