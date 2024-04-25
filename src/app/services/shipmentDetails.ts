export const Shipment = [
        {
            "AssignedToUserId": "user1",
            "Status": "In Transit",
            "DeliveryMethod": "SHP",
            "ExpectedShipmentDate": "01-02-2024",
            "OrderNo": "ORD100001",
            "ScacAndService": "UPSNGround",
            "ShipmentKey": "ORD100001_SHPKEY",
            "ShipmentNo": "ORD100001SHPNO",
            "BillToAddress": {
                "FirstName": "John",
                "LastName": "Doe",
                "EmailID": "john@example.com",
                "Phonenumber": "987654321",
                "AddressID": "100001",
                "AddressLine1": "123 Main Street",
                "AddressLine2": "",
                "City": "Anytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "12345",
                "PersonInfoKey": "100001"
            },
            "ToAddress": {
                "FirstName": "Jane",
                "LastName": "Smith",
                "EmailID": "jane@example.com",
                "DayPhone": "123456789",
                "AddressID": "100002",
                "AddressLine1": "456 Elm Street",
                "AddressLine2": "",
                "City": "Otherville",
                "Country": "US",
                "State": "NY",
                "ZipCode": "54321",
                "PersonInfoKey": "100002"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "4",
                "ShipmentLine": [
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100001SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product A",
                                "ImageUrl": "../../../assets/product_a.jpg",
                                "ItemID": "100001"
                            }
                        }
                    },
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100001SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product B",
                                "ImageUrl": "../../../assets/product_b.jpg",
                                "ItemID": "100002"
                            }
                        }
                    },
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100001SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product C",
                                "ImageUrl": "../../../assets/product_c.jpg",
                                "ItemID": "100003"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user2",
            "Status": "Ready for Pickup",
            "DeliveryMethod": "PICK",
            "ExpectedShipmentDate": "02-02-2024",
            "OrderNo": "ORD100002",
            "ScacAndService": "FedExGround",
            "ShipmentKey": "ORD100002_SHPKEY",
            "ShipmentNo": "ORD100002SHPNO",
            "BillToAddress": {
                "FirstName": "Alice",
                "LastName": "Johnson",
                "EmailID": "alice@example.com",
                "Phonenumber": "987654322",
                "AddressID": "100003",
                "AddressLine1": "456 Oak Street",
                "AddressLine2": "",
                "City": "Sometown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100003"
            },
            "ToAddress": {
                "FirstName": "Bob",
                "LastName": "Williams",
                "EmailID": "bob@example.com",
                "DayPhone": "123456780",
                "AddressID": "100004",
                "AddressLine1": "789 Pine Street",
                "AddressLine2": "",
                "City": "Anothertown",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100004"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "3",
                "ShipmentLine": [
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100002SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product X",
                                "ImageUrl": "../../../assets/product_x.jpg",
                                "ItemID": "100004"
                            }
                        }
                    },
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100002SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product Y",
                                "ImageUrl": "../../../assets/product_y.jpg",
                                "ItemID": "100005"
                            }
                        }
                    }
                ]
            }
        },
        // Add 8 more shipments here with similar structure but different values
        {
            "AssignedToUserId": "user3",
            "Status": "In Transit",
            "DeliveryMethod": "SHP",
            "ExpectedShipmentDate": "03-02-2024",
            "OrderNo": "ORD100003",
            "ScacAndService": "DHLExpress",
            "ShipmentKey": "ORD100003_SHPKEY",
            "ShipmentNo": "ORD100003SHPNO",
            "BillToAddress": {
                "FirstName": "Emily",
                "LastName": "Davis",
                "EmailID": "emily@example.com",
                "Phonenumber": "987654323",
                "AddressID": "100005",
                "AddressLine1": "123 Pine Street",
                "AddressLine2": "",
                "City": "Citytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100005"
            },
            "ToAddress": {
                "FirstName": "Charlie",
                "LastName": "Brown",
                "EmailID": "charlie@example.com",
                "DayPhone": "123456781",
                "AddressID": "100006",
                "AddressLine1": "456 Maple Street",
                "AddressLine2": "",
                "City": "Villagetown",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100006"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "2",
                "ShipmentLine": [
                    {
                        "Quantity": "3",
                        "ShipmentLineKey": "ORD100003SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product Z",
                                "ImageUrl": "../../../assets/product_z.jpg",
                                "ItemID": "100006"
                            }
                        }
                    }
                ]
            }
        },
        // Add 7 more shipments here with similar structure but different values
        {
            "AssignedToUserId": "user4",
            "Status": "Ready for Pickup",
            "DeliveryMethod": "PICK",
            "ExpectedShipmentDate": "04-02-2024",
            "OrderNo": "ORD100004",
            "ScacAndService": "USPS",
            "ShipmentKey": "ORD100004_SHPKEY",
            "ShipmentNo": "ORD100004SHPNO",
            "BillToAddress": {
                "FirstName": "David",
                "LastName": "Smith",
                "EmailID": "david@example.com",
                "Phonenumber": "987654324",
                "AddressID": "100007",
                "AddressLine1": "123 Oak Street",
                "AddressLine2": "",
                "City": "Towntown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100007"
            },
            "ToAddress": {
                "FirstName": "Emma",
                "LastName": "Johnson",
                "EmailID": "emma@example.com",
                "DayPhone": "123456782",
                "AddressID": "100008",
                "AddressLine1": "456 Elm Street",
                "AddressLine2": "",
                "City": "Anothercity",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100008"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "1",
                "ShipmentLine": [
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100004SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product D",
                                "ImageUrl": "../../../assets/product_d.jpg",
                                "ItemID": "100008"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user5",
            "Status": "In Transit",
            "DeliveryMethod": "SHP",
            "ExpectedShipmentDate": "05-02-2024",
            "OrderNo": "ORD100005",
            "ScacAndService": "UPS2ndDayAir",
            "ShipmentKey": "ORD100005_SHPKEY",
            "ShipmentNo": "ORD100005SHPNO",
            "BillToAddress": {
                "FirstName": "Olivia",
                "LastName": "Wilson",
                "EmailID": "olivia@example.com",
                "Phonenumber": "987654325",
                "AddressID": "100009",
                "AddressLine1": "123 Maple Street",
                "AddressLine2": "",
                "City": "Villagecity",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100009"
            },
            "ToAddress": {
                "FirstName": "Ethan",
                "LastName": "Brown",
                "EmailID": "ethan@example.com",
                "DayPhone": "123456783",
                "AddressID": "100010",
                "AddressLine1": "456 Oak Street",
                "AddressLine2": "",
                "City": "Yetanothercity",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100010"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "3",
                "ShipmentLine": [
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100005SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product E",
                                "ImageUrl": "../../../assets/product_e.jpg",
                                "ItemID": "100010"
                            }
                        }
                    },
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100005SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product F",
                                "ImageUrl": "../../../assets/product_f.jpg",
                                "ItemID": "100011"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user6",
            "Status": "Ready for Pickup",
            "DeliveryMethod": "PICK",
            "ExpectedShipmentDate": "06-02-2024",
            "OrderNo": "ORD100006",
            "ScacAndService": "FedEx2Day",
            "ShipmentKey": "ORD100006_SHPKEY",
            "ShipmentNo": "ORD100006SHPNO",
            "BillToAddress": {
                "FirstName": "Sophia",
                "LastName": "Garcia",
                "EmailID": "sophia@example.com",
                "Phonenumber": "987654326",
                "AddressID": "100011",
                "AddressLine1": "123 Pine Street",
                "AddressLine2": "",
                "City": "Cityville",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100011"
            },
            "ToAddress": {
                "FirstName": "William",
                "LastName": "Martinez",
                "EmailID": "william@example.com",
                "DayPhone": "123456784",
                "AddressID": "100012",
                "AddressLine1": "456 Oak Street",
                "AddressLine2": "",
                "City": "Townville",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100012"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "2",
                "ShipmentLine": [
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100006SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product G",
                                "ImageUrl": "../../../assets/product_g.jpg",
                                "ItemID": "100012"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user7",
            "Status": "In Transit",
            "DeliveryMethod": "SHP",
            "ExpectedShipmentDate": "07-02-2024",
            "OrderNo": "ORD100007",
            "ScacAndService": "UPSNextDayAir",
            "ShipmentKey": "ORD100007_SHPKEY",
            "ShipmentNo": "ORD100007SHPNO",
            "BillToAddress": {
                "FirstName": "Oliver",
                "LastName": "Lopez",
                "EmailID": "oliver@example.com",
                "Phonenumber": "987654327",
                "AddressID": "100013",
                "AddressLine1": "123 Maple Street",
                "AddressLine2": "",
                "City": "Citytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100013"
            },
            "ToAddress": {
                "FirstName": "Sophie",
                "LastName": "Wang",
                "EmailID": "sophie@example.com",
                "DayPhone": "123456785",
                "AddressID": "100014",
                "AddressLine1": "456 Oak Street",
                "AddressLine2": "",
                "City": "Townton",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100014"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "1",
                "ShipmentLine": [
                    {
                        "Quantity": "3",
                        "ShipmentLineKey": "ORD100007SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product H",
                                "ImageUrl": "../../../assets/product_h.jpg",
                                "ItemID": "100014"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user8",
            "Status": "Ready for Pickup",
            "DeliveryMethod": "PICK",
            "ExpectedShipmentDate": "08-02-2024",
            "OrderNo": "ORD100008",
            "ScacAndService": "USPSPriorityMail",
            "ShipmentKey": "ORD100008_SHPKEY",
            "ShipmentNo": "ORD100008SHPNO",
            "BillToAddress": {
                "FirstName": "Emma",
                "LastName": "Hernandez",
                "EmailID": "emma@example.com",
                "Phonenumber": "987654328",
                "AddressID": "100015",
                "AddressLine1": "123 Elm Street",
                "AddressLine2": "",
                "City": "Citytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100015"
            },
            "ToAddress": {
                "FirstName": "Michael",
                "LastName": "Young",
                "EmailID": "michael@example.com",
                "DayPhone": "123456786",
                "AddressID": "100016",
                "AddressLine1": "456 Pine Street",
                "AddressLine2": "",
                "City": "Towntown",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100016"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "1",
                "ShipmentLine": [
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100008SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product I",
                                "ImageUrl": "../../../assets/product_i.jpg",
                                "ItemID": "100016"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user9",
            "Status": "In Transit",
            "DeliveryMethod": "SHP",
            "ExpectedShipmentDate": "09-02-2024",
            "OrderNo": "ORD100009",
            "ScacAndService": "FedExGround",
            "ShipmentKey": "ORD100009_SHPKEY",
            "ShipmentNo": "ORD100009SHPNO",
            "BillToAddress": {
                "FirstName": "Laura",
                "LastName": "Wilson",
                "EmailID": "laura@example.com",
                "Phonenumber": "987654329",
                "AddressID": "100017",
                "AddressLine1": "123 Oak Street",
                "AddressLine2": "",
                "City": "Citytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100017"
            },
            "ToAddress": {
                "FirstName": "David",
                "LastName": "Roberts",
                "EmailID": "david@example.com",
                "DayPhone": "123456787",
                "AddressID": "100018",
                "AddressLine1": "456 Maple Street",
                "AddressLine2": "",
                "City": "Townton",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100018"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "2",
                "ShipmentLine": [
                    {
                        "Quantity": "1",
                        "ShipmentLineKey": "ORD100009SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product J",
                                "ImageUrl": "../../../assets/product_j.jpg",
                                "ItemID": "100018"
                            }
                        }
                    },
                    {
                        "Quantity": "3",
                        "ShipmentLineKey": "ORD100009SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product K",
                                "ImageUrl": "../../../assets/product_k.jpg",
                                "ItemID": "100019"
                            }
                        }
                    }
                ]
            }
        },
        {
            "AssignedToUserId": "user10",
            "Status": "Ready for Pickup",
            "DeliveryMethod": "PICK",
            "ExpectedShipmentDate": "10-02-2024",
            "OrderNo": "ORD100010",
            "ScacAndService": "FedExGround",
            "ShipmentKey": "ORD100010_SHPKEY",
            "ShipmentNo": "ORD100010SHPNO",
            "BillToAddress": {
                "FirstName": "Laura",
                "LastName": "Wilson",
                "EmailID": "laura@example.com",
                "Phonenumber": "987654330",
                "AddressID": "100019",
                "AddressLine1": "123 Pine Street",
                "AddressLine2": "",
                "City": "Citytown",
                "Country": "US",
                "State": "CA",
                "ZipCode": "54321",
                "PersonInfoKey": "100019"
            },
            "ToAddress": {
                "FirstName": "David",
                "LastName": "Roberts",
                "EmailID": "david@example.com",
                "DayPhone": "123456788",
                "AddressID": "100020",
                "AddressLine1": "456 Elm Street",
                "AddressLine2": "",
                "City": "Townton",
                "Country": "US",
                "State": "NY",
                "ZipCode": "12345",
                "PersonInfoKey": "100020"
            },
            "ShipmentLines": {
                "TotalNumberOfRecords": "2",
                "ShipmentLine": [
                    {
                        "Quantity": "2",
                        "ShipmentLineKey": "ORD100010SHPLINEKEY",
                        "OrderLine": {
                            "ItemDetails": {
                                "DisplayUnitOfMeasure": "Each",
                                "Description": "Product L",
                                "ImageUrl": "../../../assets/product_l.jpg",
                                "ItemID": "100020"
                            }
                        }
                    }
                ]
            }
        }
    ]

