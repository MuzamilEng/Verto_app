import React from "react"
import { Icon } from '@iconify/react';


export const login = [
    {
       title : 'Welcome',
       form : [
           {
            label: 'Eamil Address',
               placeholder: "Enter Eamil Address",
               type: "email",
           },
           {
            label: 'Enter Password',
               placeholder: "Enter Password",
               type: "password",
           }
       ],
       register: 'Click here to Register an Account or Recover password',
       url: '/register'
    }
   ]
   export const loginByphone = [
    {
       title : 'Welcome',
       country_code:  {
           type: "select",
           options: [{label: 'Pak', value: 'PAN'}, {label: 'Ind', value: 'Ind'}, {label: 'Nig', value: 'Nig'}, {label: 'Viet', value: 'Viet'}],
       },
       phone: {
               label: "Login with your Phone Number",
               placeholder: "Enter your phone number",
               type: "number",
           },
       email: {
           label: "Login with your Email",
           placeholder: "Enter your email address",
           type: "email",
       },
       register: 'Click here to Register an Account or Recover password',
       url: '/register'
    }
   ]

   export const forgotPassword = [
    {
       title : 'Forgot Password ?',
       para: "Don't worry! It occurs. Please enter the email address linked with your account.",
       country_code:  {
        type: "select",
        options: [{label: 'Select', value: 'Select'},{label: 'Pak', value: 'PAN'}, {label: 'Ind', value: 'Ind'}, {label: 'Nig', value: 'Nig'}, {label: 'Viet', value: 'Viet'}],
    },
    phone: {
            label: "Enter Phone Number",
            placeholder: "Enter your phone number",
            type: "number",
        },
    email: {
        label: "Enter your Email",
        placeholder: "Enter your email address",
        type: "email",
    },
       register: 'Click here to Register an Account or Recover password',
       url: '/register'
    }
   ]
export const signup = [
 {
    title : 'Sign Up',
    country_code:  {
        type: "select",
        options: [{label: 'Pak', value: 'PAN'}, {label: 'Ind', value: 'Ind'}, {label: 'Nig', value: 'Nig'}, {label: 'Viet', value: 'Viet'}],
    },
    phone: {
            label: "Sign up with your Phone Number",
            placeholder: "Enter your phone number",
            type: "number",
        },
    email: {
        label: "Sign up with your Email",
        placeholder: "Enter your email address",
        type: "email",
    },
    form : [
        {
            label : "Customer",
            type: 'checkbox',
        },
        {
            label : "Merchant",
            type: 'checkbox',
        },
    ],
    privacy: {
        label: "I accept the terms and privacy policy",
        type: "checkbox",
    }
 }
]


export const otp = [
    {
        title: "OTP verification code",
        para: 'We have sent a 4 digit verification code to phone number 0901000999',
        type: "text",
    }
]

export const success = [
    {
        icon: <Icon icon="fluent-emoji:party-popper" color="green" />,
       para: 'Welcome to PayMax, where Magic happens....'
    }
]
export const recoverEmail = [
    {
        icon: <Icon icon="fluent-emoji:party-popper" color="green" />,
       para: 'Recovery Password Email Sent '
    }
]
export const verifyAccount = [
    {
        icon: <Icon icon="fluent-emoji:party-popper" color="green" />,
       para: 'PayMax will verify your details. This can take 12-48 hours. If there is any problem, we will notify you.'
    }
]
export const accountSuccess = [
    {
        icon: <Icon icon="fluent-emoji:party-popper" color="green" />,
        para: 'Your Virtual Account for has been created: Currency: $currency Bank name: $bank Account Number: 2873823323',
        currency: '$ currency',
        bankname: '$bank',
        accountnumber: '2873823323',
    }
]
export const newPassword = [
    {
        title: "Create New Password",
        para: 'Your new password must be unique from those previously used.',
        form: [
            {
                label: "New Password",
                placeholder: "Enter new password",
                type: "password",
            },
            {
                label: "Confirm Password",
                placeholder: "Confirm your password",
                type: "password",
            },
            {
                label: 'Referral Code',
                placeholder: 'Referal code',
                type: 'text',
            }
        ]
    }
]

export const virtualBankInfo =[
    {
        title: 'Require Virtual Bank Account ?',
        form: [
            {info: 'PayMax offers Real banking virtual account in multiple local and Foreign currencies' },
            {info:'Gain access to world-class Cross-border payment and collection service in almost 50 international currencies'},
            {info:'Perform investment in multiple major international currencies, purchase global stock trading with ease.'}
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
                type: 'text',
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