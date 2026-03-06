import { RateRequest, RateResponse } from "./rate.interface.js" 

export interface CarrierProvider {
  getRates(request: RateRequest): Promise<RateResponse[]>
}