export const MOCK_RATES = {
  RateResponse: {
    Response: {
      ResponseStatus: {
        Code: "1",
        Description: "Success"
      },
      Alert: [
        {
          Code: "110971",
          Description: "Rate returned successfully"
        }
      ],
      AlertDetail: [
        {
          Code: "110971",
          Description: "Rate returned successfully",
          ElementLevelInformation: {
            Level: "Shipment",
            ElementIdentifier: [
              {
                Code: "SHIPMENT",
                Value: "1"
              }
            ]
          }
        }
      ],
      TransactionReference: {
        CustomerContext: "CyberShip Test Request"
      }
    },

    RatedShipment: [
      {
        Disclaimer: [
          {
            Code: "DISC01",
            Description: "Rates are estimates only"
          }
        ],

        Service: {
          Code: "03",
          Description: "UPS Ground"
        },

        RateChart: "RateChart1",
        Zone: "2",

        RatedShipmentAlert: [
          {
            Code: "RATE_INFO",
            Description: "Standard rate applied"
          }
        ],

        BillableWeightCalculationMethod: "Dimensional",
        RatingMethod: "Account",

        BillingWeight: {
          UnitOfMeasurement: {
            Code: "LBS",
            Description: "Pounds"
          },
          Weight: "5"
        },

        TransportationCharges: {
          CurrencyCode: "USD",
          MonetaryValue: "10.50"
        },

        BaseServiceCharge: {
          CurrencyCode: "USD",
          MonetaryValue: "10.50"
        },

        ItemizedCharges: [
          {
            Code: "FUEL",
            Description: "Fuel surcharge",
            CurrencyCode: "USD",
            MonetaryValue: "1.25",
            SubType: "Fuel"
          }
        ],

        FRSShipmentData: {
          TransportationCharges: {
            GrossCharge: {
              CurrencyCode: "USD",
              MonetaryValue: "11.75"
            },
            DiscountAmount: {
              CurrencyCode: "USD",
              MonetaryValue: "0.50"
            },
            DiscountPercentage: "5",
            NetCharge: {
              CurrencyCode: "USD",
              MonetaryValue: "11.25"
            }
          },

          FreightDensityRate: {
            Density: "12",
            TotalCubicFeet: "1.5"
          },

          HandlingUnits: [
            {
              Quantity: "1",
              Type: {
                Code: "BOX",
                Description: "Box"
              },
              Dimensions: {
                UnitOfMeasurement: "IN",
                Length: "10",
                Width: "8",
                Height: "6"
              },
              AdjustedHeight: {
                Value: "6",
                UnitOfMeasurement: "IN"
              }
            }
          ]
        },

        ServiceOptionsCharges: {
          CurrencyCode: "USD",
          MonetaryValue: "0.00"
        },

        TaxCharges: [
          {
            Type: "SalesTax",
            MonetaryValue: "0.75"
          }
        ],

        TotalCharges: {
          CurrencyCode: "USD",
          MonetaryValue: "12.50"
        },

        TotalChargesWithTaxes: {
          CurrencyCode: "USD",
          MonetaryValue: "13.25"
        },

        NegotiatedRateCharges: {
          BaseServiceCharge: [
            {
              CurrencyCode: "USD",
              MonetaryValue: "9.75"
            }
          ],

          RateModifier: [
            {
              ModifierType: "Discount",
              ModifierDesc: "Account Discount",
              Amount: "0.75"
            }
          ],

          ItemizedCharges: [
            {
              Code: "FUEL",
              Description: "Fuel surcharge",
              CurrencyCode: "USD",
              MonetaryValue: "1.00",
              SubType: "Fuel"
            }
          ],

          TaxCharges: [
            {
              Type: "SalesTax",
              MonetaryValue: "0.70"
            }
          ],

          TotalCharge: {
            CurrencyCode: "USD",
            MonetaryValue: "11.45"
          },

          TotalChargesWithTaxes: {
            CurrencyCode: "USD",
            MonetaryValue: "12.15"
          }
        },

        RatedPackage: [
          {
            BaseServiceCharge: {
              CurrencyCode: "USD",
              MonetaryValue: "10.50"
            },

            TransportationCharges: {
              CurrencyCode: "USD",
              MonetaryValue: "10.50"
            },

            ServiceOptionsCharges: {
              CurrencyCode: "USD",
              MonetaryValue: "0.00"
            },

            TotalCharges: {
              CurrencyCode: "USD",
              MonetaryValue: "12.50"
            },

            Weight: "5",

            BillingWeight: {
              UnitOfMeasurement: {
                Code: "LBS",
                Description: "Pounds"
              },
              Weight: "5"
            },

            Accessorial: [
              {
                Code: "FUEL",
                Description: "Fuel surcharge"
              }
            ],

            ItemizedCharges: [
              {
                Code: "FUEL",
                Description: "Fuel surcharge",
                CurrencyCode: "USD",
                MonetaryValue: "1.25",
                SubType: "Fuel"
              }
            ],

            NegotiatedCharges: {
              RateModifier: [
                {
                  ModifierType: "Discount",
                  ModifierDesc: "Account Discount",
                  Amount: "0.75"
                }
              ],
              ItemizedCharges: []
            },

            SimpleRate: {
              Code: "SR"
            },

            RateModifier: [
              {
                ModifierType: "Discount",
                ModifierDesc: "Account Discount",
                Amount: "0.75"
              }
            ]
          }
        ],

        TimeInTransit: {
          PickupDate: "20260306",
          DocumentsOnlyIndicator: "N",
          PackageBillType: "03",

          ServiceSummary: {
            Service: {
              Description: "UPS Ground"
            },

            GuaranteedIndicator: "N",
            Disclaimer: "Delivery time not guaranteed",

            EstimatedArrival: {
              Arrival: {
                Date: "20260309",
                Time: "180000"
              },

              BusinessDaysInTransit: "3",

              Pickup: {
                Date: "20260306",
                Time: "150000"
              },

              DayOfWeek: "Monday",
              CustomerCenterCutoff: "170000",
              DelayCount: "0",
              HolidayCount: "0",
              RestDays: "0",
              TotalTransitDays: "3"
            },

            SaturdayDelivery: "N",
            SaturdayDeliveryDisclaimer: "",
            SundayDelivery: "N",
            SundayDeliveryDisclaimer: ""
          },

          AutoDutyCode: "00",
          Disclaimer: ""
        },

        GuaranteedDelivery: {
          BusinessDaysInTransit: "3",
          DeliveryByTime: "18:00",
          ScheduledDeliveryDate: "2026-03-09"
        },

        RoarRatedIndicator: "N"
      }
    ]
  }
};