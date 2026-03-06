// import axios from 'axios';
// import { Address, PackageDetails } from '../../domain/rate.interface.js';
import { UPSAuthService } from "./upsAuth.service.js";
import { config } from "../../config/config.js";
import { CarrierProvider } from "../../domain/carrier.interface.js";
import { RateRequest, RateResponse } from "../../domain/rate.interface.js";
import { MOCK_RATES } from "../../test/mock.js";
import { CURRENCY, PROVIDERS } from "./ups.constant.js";

export class UPSProvider implements CarrierProvider {
  private authService = new UPSAuthService();

  constructor(
    private carrier: string = PROVIDERS.UPS,
    private currency: string = CURRENCY.USD
  ) {}

  /**
   * Fetch shipping rates from UPS
   * @param request RateRequest containing origin, destination, packages, serviceLevel
   * @returns RateResponse[] object containing rates for all the packages
   */
  async getRates(request: RateRequest): Promise<RateResponse[]> {

    // UPS OAuth 2.0
    // const token = await this.authService.getAuthToken();

    // UPS Rate Fetch
    // const ratePayload = {
    //   Shipment: {
    //     Shipper: {
    //       AccountNumber: config.merchantId,
    //     },
    //     ShipFrom: {
    //       Address: {
    //         PostalCode: request.origin.postalCode,
    //         CountryCode: request.origin.countryCode,
    //         City: request.origin?.city,
    //         StateProvinceCode: request.origin?.state,
    //         ResidentialAddressIndicator: request.origin?.residential || false,
    //       }
    //     },
    //     ShipTo: {
    //       Address: {
    //         PostalCode: request.destination.postalCode,
    //         CountryCode: request.destination.countryCode,
    //         City: request.destination?.city,
    //         StateProvinceCode: request.destination?.state,
    //         ResidentialAddressIndicator: request.destination?.residential || false,
    //       }
    //     },
    //     Package: request.packages.map((pkg: PackageDetails) => ({
    //       PackagingType: { Code: "02" },
    //       Dimensions: pkg.length && pkg.width && pkg.height ? {
    //         UnitOfMeasurement: { Code: pkg.unit || "LBS" },
    //         Length: pkg?.length,
    //         Width: pkg?.width,
    //         Height: pkg?.height
    //       } : undefined,
    //       PackageWeight: {
    //         UnitOfMeasurement: { Code: pkg.unit || "LBS" },
    //         Weight: pkg.weight
    //       }
    //     })),
    //     Service: request?.serviceLevel ? { Code: request.serviceLevel } : undefined
    //   }
    // };
    // const response = await axios.post(
    //   'https://wwwcie.ups.com/rest/Rate',
    //   ratePayload,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'Content-Type': 'application/json',
    //     },
    //     timeout: 5000,
    //   }
    // );

    // Mocked UPS response for testing / assignment
    const upsData = MOCK_RATES.RateResponse;

    const normalizedRates: RateResponse[] = upsData.RatedShipment.map(rs => ({
        carrier: this.carrier,
        service: rs.Service.Description,
        price: parseFloat(rs.TotalCharges.MonetaryValue),
        currency: rs.TotalCharges.CurrencyCode,
        estimatedDays: parseInt(rs.TimeInTransit.ServiceSummary.EstimatedArrival.BusinessDaysInTransit)
    }));

    return normalizedRates;
  }
}