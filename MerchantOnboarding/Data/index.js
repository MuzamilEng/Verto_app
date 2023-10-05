import React from "react"
import { Icon } from '@iconify/react';


export const merchantCategory = [
    {
        title: "Become A Merchant",
        form: [
            {
                label: "Merchant Category",
                type: "select",
                placeholder: "Select Category",
                options: [
                    {
                        label: "Health", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "Doctor", value: "Doctor" },
                            { label: "Hospital", value: "Hospital" },
                            { label: "Pharmacy", value: "Pharmacy" },
                            { label: "Lab Services", value: "Lab Services" },
                            { label: "veterinary", value: "veterinary" },
                        ]
                    },
                    {
                        label: "Agriculture", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "Farmer", value: "Farmer" },
                            { label: "Corps Production", value: "Corps Production" },
                            { label: "Livestock", value: "Livestock" },
                            { label: "Fishing", value: "Fishing" },
                        ]
                    },
                    {
                        label: "Education", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "School", value: "School" },
                            { label: "Training Services", value: "Training Services" },
                            { label: "University", value: "University" },
                        ]
                    },
                    {
                        label: "Real Estate", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "House Owner", value: "House Owner" },
                            { label: "Estate Manager", value: "Estate Manager" },
                        ]
                    },
                    {
                        label: "Restaurant", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "Food Owner", value: "Food Owner" },
                            { label: "Fresh Farm Product", value: "Fresh Farm Product" },
                        ]
                    },
                    {
                        label: "Transportation", type: 'select', placeholder: "Select Category",
                        option: [
                            { label: "Driver", value: "Driver" },
                            { label: "Rider", value: "Rider" },
                            { label: "Vehicle Owner", value: "Vehicle Owner" },
                        ]
                    },
                ]
            },
        ],
         form2 : [
                {label: "Business Description", type: 'textarea', placeholder: "Enter Description"},
                {label: "Business Address", type: 'text', placeholder: "Enter Address"},
                {label: "Upload ID Card", type: 'file'},
            ]
    }
]

export const businessRequired = [
    {
        title: "Become A Merchant",
        label: "Is Business Registered?",
        label2: 'Do you Intend to register your business now?',
        form: [
            {
                label: "Business Registration Type", type: 'select', placeholder: "Select Type",
                options: [
                    { label: "Limited Liability", value: "Limited Liability" },
                    { label: "NGO", value: "NGO" },
                    { label: "Trustee", value: "Trustee" },
                ]
            },
        ],
        form2: [
            {label: "Company Registration Number", type: 'text', placeholder: "Enter Registration Number"},
            {label: "Business Details", type: 'textarea', placeholder: "Enter Details"},
            {label: "Business Address", type: 'text', placeholder: "Enter Address"},
        ]
    }
]
export const businessDetails = [
    {
        title: "Become A Merchant",
        label: "Is Business Registered?",
        label2: 'Do you Intend to register your business now?',
        form: [
            {label: "Enter Preferred Business Name", type: 'text', placeholder: "Business Name"},
            {label: "Business Details", type: 'textarea', placeholder: "Enter Details"},
            {label: "Business Address", type: 'text', placeholder: "Enter Address"},
        ]
    }
]
export const bankAccount = [
    {
        title: "Become A Merchant",
        label: "Do you have bank account on this company name?",
        label2: "Do you want to use existing company bank account ",
        form: [
            {label: "Enter Company Bank account Name", type: 'text', placeholder: "Enter Bank Name"},
            {label: "Select Bank", type: 'select', placeholder: "Select Bank",
             options: [{ label: "Select Bank", value: "Select Bank"}, { label: "Bank 1", value: "Bank 1"}] },
            {label: "Bank Name", type: 'text', placeholder: "Bank Name"},
        ]
    }
]

export const yourBankAccount = [
    {
        title: "Require Virtual Bank Account",
        label: "PayMax offers Real banking virtual account in multiple local and Foreign currencies. Select Your desired Virtual account ",
        label2: "Do you want to use existing company bank account ",
        form: [
            {label: "Naira Virtual Account (Requires BVN)", type: 'checkbox'},
            {label: "USD/EURO Virtual Account (Requires Dob)", type: 'checkbox'},
        ]
    }
]

export const virtualBank = [
    {
        title: 'Require Virtual Bank Account ?',
        para: 'PayMax offers Real banking virtual account in multiple local and Foreign currencies.',
        info: 'Select Your desired Virtual account',
        form: [
            {
                label: "Naira Virtual Account (Requires BVN)",
                placeholder: 'Enter BVN Number',
                type: "number",
            },
            {
                label : "$BVN_Name",
                placeholder: 'Enter $BVN_Name',
                type: 'number',
            },
        ],
        currency: [
            { 
                label :'USD/EURO Virtual Account ',
                type: 'checkbox',
                form: [
                    {
                        label : "USD",
                        type: 'checkbox',
                    },
                    {
                        label : "GBP",
                        type: 'checkbox',
                    },
                    {
                        label : "EURO",
                        type: 'checkbox',
                    },
                ],
                form2: [
                    {
                        label: "Select Channel",
                        type: 'select', placeholder: "Select Channel",
                        options: [
                            { label: "Select channel", value: ""},
                            { label: "OceanView Retreat", value: "oceanView" },
                            { label: "987 Cantebury Drive", value: "987"},
                            { label: "Serene Heaven", value: "serene"}
                        ]
                    },
                    {
                        label: "Select Account Type",
                        type: 'select', placeholder: "Select Account Type",
                        options: [
                            { label: "Select type", value: ""},
                            { label: "OceanView Retreat", value: "oceanView"},
                            { label: "987 Cantebury Drive", value: "987"},
                            { label: "Serene Heaven", value:"serene" }
                        ]
                    },
                    {
                        type: 'date', label: "Select Date of Birth", placeholder: "Select Date of Birth", icon : <Icon icon="simple-line-icons:calender" />
                    }
                ]
        },
        ],
    },
]