import { RateRequest } from "../../domain/rate.interface.js";
import { CarrierProvider } from "../../domain/carrier.interface.js"; 

export class RateService {

  constructor(private carrierProvider: CarrierProvider) {}

  async getRates(request: RateRequest) {
    return this.carrierProvider.getRates(request);
  }

}