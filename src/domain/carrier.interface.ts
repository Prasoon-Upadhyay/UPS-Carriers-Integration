import { RateRequest, RateResponse } from "./rate.interface" 

export interface CarrierProvider {
  getRates(request: RateRequest): Promise<RateResponse[]>
}