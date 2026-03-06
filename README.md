# UPS Carrier Integration Service

A modular **carrier rate aggregation service** designed to fetch,
normalize, and serve shipping rates from UPS.\
Built with **TypeScript, Node.js, Express, and Jest**, focusing on clean
architecture and extensibility.

------------------------------------------------------------------------

# Overview

This service exposes an API to retrieve shipping rates.

Example response:

\[ { "carrier": "UPS", "service": "UPS Ground", "price": 12.5,
"currency": "USD", "estimatedDays": 3 }\]

------------------------------------------------------------------------

# Architecture

Client Request
     │
     ▼
Express Router
     │
     ▼
Rate Limiter
     │
     ▼
Rates Controller
     │
     ▼
UPS Carrier Service
     │
     ▼
UPS Auth Service
     │
     ▼
UPS API
     │
     ▼
Response Normalizer
     │
     ▼
Unified Response

------------------------------------------------------------------------

# Design Principles

## Separation of Concerns

The system is structured so that each layer is responsible for a single, well-defined responsibility. This improves maintainability, testability, and extensibility.

The architecture separates the application into the following logical layers:

### API Layer

- Responsible for handling HTTP requests and responses.
- Performs request validation using Zod schemas.
- Converts HTTP input into structured internal request objects.
- Returns normalized API responses to the client.

### Service Layer

The service layer implements the core business logic of the system. It coordinates between:

- Carrier Clients
- Authentication Services
- Caching

### Integration Layer

Each shipping carrier integration is isolated into its own module.

Example:

```src/carriers/ups/```

Responsibilities include:

- Interacting with Carrier APIs
- Handling carrier-specific Authentication
- Mapping Carrier Response formats

This prevents carrier-specific logic from leaking into the rest of the system

## Extensible Carrier Integrations

The system is designed so that adding a new carrier requires minimal changes to the existing codebase.
Each carrier is implemented as an independent module that adheres to a common internal interface.

src/carriers
   ├── ups
   │   ├── UPSAuthService.ts
   │   ├── UPSRateService.ts
   │   └── UPSClient.ts
   │
   ├── fedex
   │   ├── FedexAuthService.ts
   │   └── FedexRateService.ts


Every carrier implementation performs the following steps:
- Authenticate with the carrier API
- Construct the carrier-specific request payload
- Call the Carrier API
- Convert the response into the internal normalized format

## Unified Response Format

Different shipping carriers return vastly different response structures. To provide a consistent API experience, the system normalizes all responses into a common format.

- Example: 
```
[
  {
    "carrier": "UPS",
    "service": "UPS Ground",
    "price": 14.22,
    "currency": "USD",
    "estimatedDays": 3
  }
]
```

------------------------------------------------------------------------

# API Endpoint

POST /api/rates

Request:

{ "origin": "10001", "destination": "90001", "packages": \[ { "weight":
2 } \] }

------------------------------------------------------------------------

# Authentication

UPS OAuth2 Client Credentials Flow.

Token is cached in Redis to avoid repeated authentication requests.

------------------------------------------------------------------------

# Rate Processing Flow

Request → Validation → Auth → UPS API (Mocked) → Normalize → Response

------------------------------------------------------------------------

# Validation

Request validation implemented with **Zod**.

Example error:

{ "error": "Invalid request payload" }

------------------------------------------------------------------------

# Testing

Testing is implemented with **Jest**.

Test coverage includes:

- API endpoint tests
- Request validation tests
- Rate normalization tests
- Carrier service tests
- Rate limiting behavior

------------------------------------------------------------------------

# Running the Project

Install dependencies:

- npm install

## Run development server using Docker:

- docker compose build
- docker compose up

Make sure you have all the env-vars set in the .env


------------------------------------------------------------------------

# Running Tests

npm test

------------------------------------------------------------------------

# Future Improvements

- Multi‑carrier support (FedEx, DHL)\
- Retry logic\
- Observability and Metrics
- Request caching
- Distributed Rate Limiting
- Observability (metrics, logging, tracing)
- Parallel rate aggregation across carriers
