import z from "zod";
import { rateRequestSchema } from "../core/validation/schema.js";

export interface Address {
  postalCode: string;           
  countryCode: string;          
  city?: string;                
  state?: string;               
  residential?: boolean;        
}

export interface PackageDetails {
  weight: number;               
  unit?: "LBS" | "KGS";         
  length?: number;              
  width?: number;               
  height?: number;
}

export interface RateResponse {
  carrier: string;              
  service: string;              
  price: number;                
  currency: string;             
  estimatedDays: number;       
}


export type RateRequest = z.infer<typeof rateRequestSchema>;