import { RateRequest } from "../../domain/rate.interface";
import { CarrierProvider } from "../../domain/carrier.interface"; 

export class RateService {

  constructor(private carrierProvider: CarrierProvider) {}

  async getRates(request: RateRequest) {
    return this.carrierProvider.getRates(request);
  }

}