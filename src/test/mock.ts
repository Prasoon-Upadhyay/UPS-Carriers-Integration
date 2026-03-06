export const MOCK_RATES = {
  "RateResponse": {
    "Response": {
      "ResponseStatus": {
        "Code": "s",
        "Description": "string"
      },
      "Alert": [
        {
          "Code": "string",
          "Description": "string"
        }
      ],
      "AlertDetail": [
        {
          "Code": "string",
          "Description": "string",
          "ElementLevelInformation": {
            "Level": "s",
            "ElementIdentifier": [
              {
                "Code": null,
                "Value": null
              }
            ]
          }
        }
      ],
      "TransactionReference": {
        "CustomerContext": "string"
      }
    },
    "RatedShipment": [
      {
        "Disclaimer": [
          {
            "Code": "st",
            "Description": "string"
          }
        ],
        "Service": {
          "Code": "str",
          "Description": "string"
        },
        "RateChart": "s",
        "Zone": "stri",
        "RatedShipmentAlert": [
          {
            "Code": "string",
            "Description": "string"
          }
        ],
        "BillableWeightCalculationMethod": "st",
        "RatingMethod": "st",
        "BillingWeight": {
          "UnitOfMeasurement": {
            "Code": "str",
            "Description": "string"
          },
          "Weight": "strin"
        },
        "TransportationCharges": {
          "CurrencyCode": "str",
          "MonetaryValue": "string"
        },
        "BaseServiceCharge": {
          "CurrencyCode": "str",
          "MonetaryValue": "string"
        },
        "ItemizedCharges": [
          {
            "Code": "str",
            "Description": "string",
            "CurrencyCode": "str",
            "MonetaryValue": "string",
            "SubType": "string"
          }
        ],
        "FRSShipmentData": {
          "TransportationCharges": {
            "GrossCharge": {
              "CurrencyCode": "str",
              "MonetaryValue": "string"
            },
            "DiscountAmount": {
              "CurrencyCode": "str",
              "MonetaryValue": "string"
            },
            "DiscountPercentage": "st",
            "NetCharge": {
              "CurrencyCode": "str",
              "MonetaryValue": "string"
            }
          },
          "FreightDensityRate": {
            "Density": "strin",
            "TotalCubicFeet": "string"
          },
          "HandlingUnits": [
            {
              "Quantity": "string",
              "Type": {
                "Code": null,
                "Description": null
              },
              "Dimensions": {
                "UnitOfMeasurement": null,
                "Length": null,
                "Width": null,
                "Height": null
              },
              "AdjustedHeight": {
                "Value": null,
                "UnitOfMeasurement": null
              }
            }
          ]
        },
        "ServiceOptionsCharges": {
          "CurrencyCode": "str",
          "MonetaryValue": "string"
        },
        "TaxCharges": [
          {
            "Type": "string",
            "MonetaryValue": "string"
          }
        ],
        "TotalCharges": {
          "CurrencyCode": "str",
          "MonetaryValue": "string"
        },
        "TotalChargesWithTaxes": {
          "CurrencyCode": "str",
          "MonetaryValue": "string"
        },
        "NegotiatedRateCharges": {
          "BaseServiceCharge": [
            {
              "CurrencyCode": "str",
              "MonetaryValue": "string"
            }
          ],
          "RateModifier": [
            {
              "ModifierType": "str",
              "ModifierDesc": "string",
              "Amount": "string"
            }
          ],
          "ItemizedCharges": [
            {
              "Code": "str",
              "Description": "string",
              "CurrencyCode": "str",
              "MonetaryValue": "string",
              "SubType": "string"
            }
          ],
          "TaxCharges": [
            {
              "Type": "string",
              "MonetaryValue": "string"
            }
          ],
          "TotalCharge": {
            "CurrencyCode": "string",
            "MonetaryValue": "string"
          },
          "TotalChargesWithTaxes": {
            "CurrencyCode": "string",
            "MonetaryValue": "string"
          }
        },
        "RatedPackage": [
          {
            "BaseServiceCharge": {
              "CurrencyCode": "str",
              "MonetaryValue": "string"
            },
            "TransportationCharges": {
              "CurrencyCode": "string",
              "MonetaryValue": "string"
            },
            "ServiceOptionsCharges": {
              "CurrencyCode": "string",
              "MonetaryValue": "string"
            },
            "TotalCharges": {
              "CurrencyCode": "string",
              "MonetaryValue": "string"
            },
            "Weight": "string",
            "BillingWeight": {
              "UnitOfMeasurement": {
                "Code": null,
                "Description": null
              },
              "Weight": "string"
            },
            "Accessorial": [
              {
                "Code": null,
                "Description": null
              }
            ],
            "ItemizedCharges": [
              {
                "Code": null,
                "Description": null,
                "CurrencyCode": null,
                "MonetaryValue": null,
                "SubType": null
              }
            ],
            "NegotiatedCharges": {
              "RateModifier": [
                null
              ],
              "ItemizedCharges": [
                null
              ]
            },
            "SimpleRate": {
              "Code": "st"
            },
            "RateModifier": [
              {
                "ModifierType": null,
                "ModifierDesc": null,
                "Amount": null
              }
            ]
          }
        ],
        "TimeInTransit": {
          "PickupDate": "stringst",
          "DocumentsOnlyIndicator": "string",
          "PackageBillType": "st",
          "ServiceSummary": {
            "Service": {
              "Description": "string"
            },
            "GuaranteedIndicator": "string",
            "Disclaimer": "string",
            "EstimatedArrival": {
              "Arrival": {
                "Date": null,
                "Time": null
              },
              "BusinessDaysInTransit": "strin",
              "Pickup": {
                "Date": null,
                "Time": null
              },
              "DayOfWeek": "string",
              "CustomerCenterCutoff": "string",
              "DelayCount": "str",
              "HolidayCount": "st",
              "RestDays": "st",
              "TotalTransitDays": "strin"
            },
            "SaturdayDelivery": "string",
            "SaturdayDeliveryDisclaimer": "string",
            "SundayDelivery": "string",
            "SundayDeliveryDisclaimer": "string"
          },
          "AutoDutyCode": "st",
          "Disclaimer": "string"
        },
        "GuaranteedDelivery": {
          "BusinessDaysInTransit": "string",
          "DeliveryByTime": "string",
          "ScheduledDeliveryDate": "string"
        },
        "RoarRatedIndicator": "string"
      }
    ]
  }
}