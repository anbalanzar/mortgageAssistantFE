export const questions = {
    applicant: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Applicant (Borrower)",
        inputs: [
            {
                label: "First Name",
                field: "input",
                type: "text",
                forName: "firstName",
                name: "firstName",
                bind: "applicantFirstName",
                displayLabel: true,
                required: true
            },
            {
                label: "Last Name",
                field: "input",
                type: "text",
                forName: "lastName",
                name: "lastName",
                bind: "applicantLastName",
                displayLabel: true,
                required: true
            },
            {
                label: "Address",
                field: "input",
                type: "text",
                forName: "address",
                name: "address",
                bind: "applicantAddress",
                displayLabel: true,
                required: true
            },
            {
                label: "City/Town",
                field: "input",
                type: "text",
                forName: "city",
                name: "city",
                bind: "applicantCity",
                displayLabel: true,
                required: true
            },
            {
                label: "State/Province",
                field: "select",
                type: "dropdown",
                options: [
                'North Carolina',
                'Alabama',
                'Alaska',
                'American Samoa',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District of Columbia',
                'Federated States of Micronesia',
                'Florida',
                'Georgia',
                'Guam',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Marshall Islands',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Dakota',
                'Northern Mariana Islands',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Palau',
                'Pennsylvania',
                'Puerto Rico',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virgin Island',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'
                ],
                forName: "state",
                name: "state",
                bind: "applicantState",
                displayLabel: true,
                required: true
            },
            {
                label: "ZIP/Postal Code",
                field: "input",
                type: "number",
                forName: "zipcode",
                name: "zipcode",
                bind: "applicantZipcode",
                displayLabel: true,
                required: true
            },
            {
                label: "Email Address",
                field: "input",
                type: "text",
                forName: "email",
                name: "email",
                bind: "applicantEmail",
                displayLabel: true,
                required: true
            },
            {
                label: "Phone Number",
                field: "input",
                type: "number",
                forName: "phoneNum",
                name: "phoneNum",
                bind: "applicantPhoneNum",
                displayLabel: true,
                required: true
            }
        ]
    },
    countryOfigin: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Country of Origin",
        inputs: [
            {
                label: "",
                field: "select",
                type: "dropdown",
                options: [
                    "United States of America",
                    "Afganistan",
                    "Albania",
                    "Algeria",
                    "American Samoa",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antigua & Barbuda",
                    "Argentina",
                    "Armenia",
                    "Aruba",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia",
                    "Bonaire",
                    "Bosnia & Herzegovina",
                    "Botswana",
                    "Brazil",
                    "British Indian Ocean Ter",
                    "Brunei",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burundi",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Canary Islands",
                    "Cape Verde",
                    "Cayman Islands",
                    "Central African Republic",
                    "Chad",
                    "Channel Islands",
                    "Chile",
                    "China",
                    "Christmas Island",
                    "Cocos Island",
                    "Colombia",
                    "Comoros",
                    "Congo",
                    "Cook Islands",
                    "Costa Rica",
                    "Cote DIvoire",
                    "Croatia",
                    "Cuba",
                    "Curaco",
                    "Cyprus",
                    "Czech Republic",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "Dominican Republic",
                    "East Timor",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Estonia",
                    "Ethiopia",
                    "Falkland Islands",
                    "Faroe Islands",
                    "Fiji",
                    "Finland",
                    "France",
                    "French Guiana",
                    "French Polynesia",
                    "French Southern Ter",
                    "Gabon",
                    "Gambia",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Gibraltar",
                    "Great Britain",
                    "Greece",
                    "Greenland",
                    "Grenada",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guinea",
                    "Guyana",
                    "Haiti",
                    "Hawaii",
                    "Honduras",
                    "Hong Kong",
                    "Hungary",
                    "Iceland",
                    "Indonesia",
                    "India",
                    "Iran",
                    "Iraq",
                    "Ireland",
                    "Isle of Man",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Korea North",
                    "Korea Sout",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Laos",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macau",
                    "Macedonia",
                    "Madagascar",
                    "Malaysia",
                    "Malawi",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall Islands",
                    "Martinique",
                    "Mauritania",
                    "Mauritius",
                    "Mayotte",
                    "Mexico",
                    "Midway Islands",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montserrat",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Nambia",
                    "Nauru",
                    "Nepal",
                    "Netherland Antilles",
                    "Netherlands",
                    "Nevis",
                    "New Caledonia",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Niue",
                    "Norfolk Island",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau Island",
                    "Palestine",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Phillipines",
                    "Pitcairn Island",
                    "Poland",
                    "Portugal",
                    "Puerto Rico",
                    "Qatar",
                    "Republic of Montenegro",
                    "Republic of Serbia",
                    "Reunion",
                    "Romania",
                    "Russia",
                    "Rwanda",
                    "St Barthelemy",
                    "St Eustatius",
                    "St Helena",
                    "St Kitts-Nevis",
                    "St Lucia",
                    "St Maarten",
                    "St Pierre & Miquelon",
                    "St Vincent & Grenadines",
                    "Saipan",
                    "Samoa",
                    "Samoa American",
                    "San Marino",
                    "Sao Tome & Principe",
                    "Saudi Arabia",
                    "Senegal",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Slovakia",
                    "Slovenia",
                    "Solomon Islands",
                    "Somalia",
                    "South Africa",
                    "Spain",
                    "Sri Lanka",
                    "Sudan",
                    "Suriname",
                    "Swaziland",
                    "Sweden",
                    "Switzerland",
                    "Syria",
                    "Tahiti",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania",
                    "Thailand",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Trinidad & Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Turks & Caicos Is",
                    "Tuvalu",
                    "Uganda",
                    "United Kingdom",
                    "Ukraine",
                    "United Arab Erimates",
                    "Uraguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Vatican City State",
                    "Venezuela",
                    "Vietnam",
                    "Virgin Islands (Brit)",
                    "Virgin Islands (USA)",
                    "Wake Island",
                    "Wallis & Futana Is",
                    "Yemen",
                    "Zaire",
                    "Zambia",
                    "Zimbabwe",
            ],
                forName: "countryOfOrigin",
                name: "countryOfOfigin",
                bind: "applicantCountryOfOrigin",
                displayLabel: false,
                required: false
            },
        ]
    },
    foreclosureHearingDate: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you have a pending Foreclosure Hearing date?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureHearingDate",
                name: "foreclosureHearingDate",
                value: false,
                answer: "No",
                bind: "applicantHasForeclosureHearingDate",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureHearingDate",
                name: "foreclosureHearingDate",
                value: true,
                bind: "applicantHasForeclosureHearingDate",
                answer: "Yes (If yes, please enter the date and provide copy of the documentation.)",
                moreAnswer: true,
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        value: "",
                        bind: "applicantForeclosureHearingDate",
                        displayLabel: false,
                        required: false,
                    }
                ],
                displayLabel: false,
                required: false
            },
        ]
    },
    foreclosureSaleDate: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you have a pending Foreclosure Sale date?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureSaleDate",
                name: "foreclosureSaleDate",
                value: false,
                answer: "No",
                bind: "applicantHasForeclosureSaleDate",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureSaleDate",
                name: "foreclosureSaleDate",
                value: true,
                answer: "Yes (If yes, please enter the date and provide copy of the documentation.)",
                bind: "applicantHasForeclosureSaleDate",
                moreAnswer: true,
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantForeclosureSaleDate",
                        displayLabel: false,
                        required: false,
                    }
                ],
                displayLabel: false,
                required: false
            },
        ]
    },
    countryResideIn: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What country do you live in?",
        inputs: [
            {
                label: "",
                field: "select",
                type: "dropdown",
                bind: "applicantCountryResideIn",
                options: [
                    "United States of America",
                    "Afganistan",
                    "Albania",
                    "Algeria",
                    "American Samoa",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antigua & Barbuda",
                    "Argentina",
                    "Armenia",
                    "Aruba",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia",
                    "Bonaire",
                    "Bosnia & Herzegovina",
                    "Botswana",
                    "Brazil",
                    "British Indian Ocean Ter",
                    "Brunei",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burundi",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Canary Islands",
                    "Cape Verde",
                    "Cayman Islands",
                    "Central African Republic",
                    "Chad",
                    "Channel Islands",
                    "Chile",
                    "China",
                    "Christmas Island",
                    "Cocos Island",
                    "Colombia",
                    "Comoros",
                    "Congo",
                    "Cook Islands",
                    "Costa Rica",
                    "Cote DIvoire",
                    "Croatia",
                    "Cuba",
                    "Curaco",
                    "Cyprus",
                    "Czech Republic",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "Dominican Republic",
                    "East Timor",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Estonia",
                    "Ethiopia",
                    "Falkland Islands",
                    "Faroe Islands",
                    "Fiji",
                    "Finland",
                    "France",
                    "French Guiana",
                    "French Polynesia",
                    "French Southern Ter",
                    "Gabon",
                    "Gambia",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Gibraltar",
                    "Great Britain",
                    "Greece",
                    "Greenland",
                    "Grenada",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guinea",
                    "Guyana",
                    "Haiti",
                    "Hawaii",
                    "Honduras",
                    "Hong Kong",
                    "Hungary",
                    "Iceland",
                    "Indonesia",
                    "India",
                    "Iran",
                    "Iraq",
                    "Ireland",
                    "Isle of Man",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Korea North",
                    "Korea Sout",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Laos",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macau",
                    "Macedonia",
                    "Madagascar",
                    "Malaysia",
                    "Malawi",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall Islands",
                    "Martinique",
                    "Mauritania",
                    "Mauritius",
                    "Mayotte",
                    "Mexico",
                    "Midway Islands",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montserrat",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Nambia",
                    "Nauru",
                    "Nepal",
                    "Netherland Antilles",
                    "Netherlands",
                    "Nevis",
                    "New Caledonia",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Niue",
                    "Norfolk Island",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau Island",
                    "Palestine",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Phillipines",
                    "Pitcairn Island",
                    "Poland",
                    "Portugal",
                    "Puerto Rico",
                    "Qatar",
                    "Republic of Montenegro",
                    "Republic of Serbia",
                    "Reunion",
                    "Romania",
                    "Russia",
                    "Rwanda",
                    "St Barthelemy",
                    "St Eustatius",
                    "St Helena",
                    "St Kitts-Nevis",
                    "St Lucia",
                    "St Maarten",
                    "St Pierre & Miquelon",
                    "St Vincent & Grenadines",
                    "Saipan",
                    "Samoa",
                    "Samoa American",
                    "San Marino",
                    "Sao Tome & Principe",
                    "Saudi Arabia",
                    "Senegal",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Slovakia",
                    "Slovenia",
                    "Solomon Islands",
                    "Somalia",
                    "South Africa",
                    "Spain",
                    "Sri Lanka",
                    "Sudan",
                    "Suriname",
                    "Swaziland",
                    "Sweden",
                    "Switzerland",
                    "Syria",
                    "Tahiti",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania",
                    "Thailand",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Trinidad & Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Turks & Caicos Is",
                    "Tuvalu",
                    "Uganda",
                    "United Kingdom",
                    "Ukraine",
                    "United Arab Erimates",
                    "Uraguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Vatican City State",
                    "Venezuela",
                    "Vietnam",
                    "Virgin Islands (Brit)",
                    "Virgin Islands (USA)",
                    "Wake Island",
                    "Wallis & Futana Is",
                    "Yemen",
                    "Zaire",
                    "Zambia",
                    "Zimbabwe",
            ],
                forName: "countryResideIn",
                name: "countryResideIn",
                displayLabel: false,
                required: false
            },
        ]
    },
    ruralAreaStatus: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Rural Area Status",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "ruralAreaStatus",
            name: "ruralAreaStatus",
            value: true,
            bind: "applicantRuralAreaStatus",
            answer: "Household lives in rural area",
            displayLabel: false,
            required: false
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "ruralAreaStatus",
            name: "ruralAreaStatus",
            value: false,
            bind: "applicantRuralAreaStatus",
            answer: "Household does not live in rural area",
            displayLabel: false,
            required: false
            },
        ]
    },
    residencyStatus: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Residency Status",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "own",
            bind: "applicantResidencyStatus",
            answer: "Own",
            displayLabel: false,
            required: false
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "rent",
            bind: "applicantResidencyStatus",
            answer: "Rent",
            displayLabel: false,
            required: false
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "other",
            bind: "applicantResidencyStatus",
            answer: "Other (please specify)",
            moreAnswer: true,
            moreInput: [
                {
                    label: "",
                    type: "text",
                    bind: "applicantResidencyStatusOther",
                    displayLabel: false,
                    required: false,
                }
            ],
            displayLabel: false,
            required: false
            },
        ]
    },
    monthlyHousePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What is your monthly house payment?",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "monthlyHousePayment",
                name: "monthlyHousePayment",
                bind: "applicantMonthlyHousePayment",
                displayLabel: false,
                required: false
            },
        ]
    }, 
    applicantCurrentOnHousePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you current on your house payment?",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: true,
            bind: "applicantIsCurrentOnHousePayment",
            answer: "Yes",
            displayLabel: false,
            required: false
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: false,
            bind: "applicantIsCurrentOnHousePayment",
            answer: "If No, provide and \"estimate\" of how many months behind and the dollar amount as of today's date?",
            moreAnswer: true,
            moreInput: [
                {
                    label: "",
                    type: "text",
                    bind: "applicantIsCurrentOnHousePaymentStatement"
                }
            ],
            displayLabel: false,
            required: false,
            },
        ]
    },
    timeAtCurrentAddress: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "How long have you lived at the current address?",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "timeAtCurrentAddress",
                name: "timeAtCurrentAddress",
                bind: "applicantTimeAtCurrentAddress",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantRace: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Race - Borrower/Applicant: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "white/caucasian",
                answer: "White or Caucasian",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "black/african american",
                answer: "Black or African American",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "asian/asian american",
                answer: "Asian or Asian American",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "american indian/alaska native",
                answer: "American Indian or Alaska Native",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "native hawaiian/other pacific islander",
                answer: "Native Hawaiian or other Pacific Islander",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "NA",
                answer: "Choose not to respond",
                bind: "applicantRace",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantEthnicity: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Ethnicity - Borrower/Applicant: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "hispanic/latino",
                answer: "Hispanic/Latino",
                bind: "applicantEthnicity",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "not hispanic/latino",
                answer: "Not Hispanic/Latino",
                bind: "applicantEthnicity",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "choose not to respond",
                answer: "Choose not to respond",
                bind: "applicantEthnicity",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDoB: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Date of Birth - Borrower/Applicant: ",
        inputs: [
            {
                label: "",
                field: "date",
                type: "date",
                forName: "applicantDoB",
                name: "applicantDoB",
                bind: "applicantDoB",
                answer: "",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantGender: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Gender - Borrower/Applicant",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantGender",
                name: "applicantGender",
                value: "male",
                answer: "Male",
                bind: "applicantGender",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantGender",
                name: "applicantGender",
                value: "female",
                answer: "Female",
                bind: "applicantGender",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantMaritalStatus: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Marital Status - Applicant: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "married",
                answer: "Married",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "separated",
                answer: "Separated",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "divorced",
                answer: "Divorced",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "never been married",
                answer: "Never been married",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "domestic partners",
                answer: "Domestic Partners",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "widowed",
                answer: "Widowed",
                bind: "applicantMaritalStatus",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCitizenship: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Citizenship - Applicant: ",
        inputs: [
             {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "non resident alien",
                answer: "Non-Resident Alien",
                bind: "applicantCitezenship",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "us citizen",
                answer: "US Citizen",
                bind: "applicantCitezenship",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "permanent resident",
                answer: "Permanent Resident",
                bind: "applicantCitezenship",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantBornInUS: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Were you born in the United States (Applicant)?",
        info: "If no, pleas provide a copy of your residency documentation.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: true,
                answer: "Yes",
                bind: "applicantBornInUS",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: false,
                answer: "No",
                bind: "applicantBornInUS",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDependents: {
        isIncrement: {
            bool: true,
            arrKey: "applicantDependents",
            template: {
                schema: {
                    firstName: "",
                    lastName: "",
                    DoB: ""
                },
                name: "Dependent",
                label: "",
                inputs: [
                    {
                        label: "First Name",
                        field: "input",
                        type: "text",
                        bind: "firstName",
                        displayLabel: true,
                        required: false
                    },
                    {
                        label: "Last Name",
                        field: "input",
                        type: "text",
                        bind: "lastName",
                        displayLabel: true,
                        required: false
                    },
                    {
                        label: "Date of birth",
                        field: "input",
                        type: "text",
                        bind: "DoB",
                        displayLabel: true,
                        required: false
                    }
                ],
            },
            incrementBtn: "Add",
            decrementBtn: "Remove"
        },
        isCoApplicant: false,
        header: "List Dependent(s) - Birth dates (MM/DD/YYYY)",
        inputs: []
    },
    preferredLanguage: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Preferred Language: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "preferredLanguage",
                name: "preferredLanguage",
                value: "english",
                answer: "English",
                bind: "applicantPreferredLanguage",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "preferredLanguage",
                name: "preferredLanguage",
                value: "spanish",
                answer: "Spanish",
                bind: "applicantPreferredLanguage",

                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "preferredLanguage",
                name: "preferredLanguage",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                bind: "applicantPreferredLanguage",
                moreInput: [
                    {
                        type: "text",
                        forName: "preferred language",
                        name: "preferred language",
                        value: "spanish",
                        answer: "Spanish",
                        bind: "applicantPreferredLanguageOther",
                    }
                ],
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHighestEducation: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What is the highest level of education you have completed (Applicant)?",
        inputs: [
            {
                label: "",
                field: "select",
                type: "dropdown",
                forName: "applicantHighestEducation",
                name: "applicantHighestEducation",
                bind: "applicantHighestEducation",
                options: [
                "",
                "No formal education",
                "Primary education",
                "Secondary education",
                "GED",
                "Vocational qualification",
                "Bachelor's degree",
                "Master's degree",
                "Doctorate or higher",
                ],
            }
        ]
    },
    applicantDisabled: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Disabled (Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabled",
                name: "applicantDisabled",
                value: "yes",
                answer: "Yes",
                bind: "applicantIsDisabled",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabled",
                name: "applicantDisabled",
                value: "no",
                answer: "No",
                bind: "applicantIsDisabled",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantVeteran: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Veteran/Military (Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantVeteran",
                name: "applicantVeteran",
                value: true,
                answer: "Yes",
                bind: "applicantVeteran",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantVeteran",
                name: "applicantVeteran",
                value: false,
                answer: "No",
                bind: "applicantVeteran",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantTaxRepayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you currently in an IRS or State tax repayment plan (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantTaxRepayment",
                name: "applicantTaxRepayment",
                value: true,
                answer: "Yes",
                bind: "applicantTaxRepayment",
                moreAnswer: true,
                moreLabel: "What amount?",
                moreInput: [
                    {
                    label: "",
                    type: "number",
                    value: "",
                    bind: "applicantTaxRepaymentAmount"
                    },
                ],
                displayLabel: false,
                required: false,
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantTaxRepayment",
                name: "applicantTaxRepayment",
                value: false,
                answer: "No",
                bind: "applicantTaxRepayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantReceiveChildSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you receive child support (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantReceiveChildSupport",
                name: "applicantReceiveChildSupport",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "applicantReceiveChildSupport",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "applicantReceiveChildSupportAmount",
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantReceiveChildSupport",
                name: "applicantReceiveChildSupport",
                value: "no",
                answer: "No",
                bind: "applicantReceiveChildSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantPayChildSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you pay child support (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "applicantPayChildSupport",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "applicantPayChildSupportAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "no",
                answer: "No",
                bind: "applicantPayChildSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDisabilitySocialSecurity: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you receive Disability/Social Security (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: true,
                bind: "applicantDisabilitySocialSecurity",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                moreInput: [
                    {
                        label: "",
                        bind: "applicantDisabilitySocialSecurityAmount",
                        type: "number"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: false,
                bind: "applicantDisabilitySocialSecurity",
                answer: "No",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantRetirementOther: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you receive Retirement/Other Income (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "applicantRetirementOther",
                moreInput: [
                    {
                        lable: "",
                        type: "number",
                        bind: "applicantRetirementOtherAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: false,
                answer: "No",
                bind: "applicantRetirementOther",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIsEmployed: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you currently employed (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsEmployed",
                name: "applicantIsEmployed",
                value: true,
                bind: "applicantIsEmployed",
                answer: "Yes",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsEmployed",
                name: "applicantIsEmployed",
                value: false,
                bind: "applicantIsEmployed",
                answer: "No",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantEmploymentHistory: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What is the Borrower/Applicant employment history?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer",
                name: "applicantEmployer",
                bind: "applicantEmployer",
                displayLabel: true,
                required: false
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition",
                name: "applicantEmployerPosition",
                bind: "applicantEmployerPosition",
                displayLabel: true,
                required: false
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "number",
                forName: "applicantEmployerHourlyRate",
                name: "applicantEmployerHourlyRate",
                bind: "applicantEmployerHourlyRate",
                displayLabel: true,
                required: false
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "number",
                forName: "applicantEmployerHoursPerWeek",
                name: "applicantEmployerHoursPerWeek",
                bind: "applicantEmployerHoursPerWeek",
                displayLabel: true,
                required: false
            },
            {
                label: "Start Date: ",
                field: "date",
                type: "date",
                forName: "applicantEmployerStartDate",
                name: "applicantEmployerStartDate",
                bind: "applicantEmployerStartDate",
                displayLabel: false,
                required: false
            },
            {
                label: "End Date: ",
                field: "date",
                type: "date",
                forName: "applicantEmployerEndDate",
                name: "applicantEmployerEndDate",
                bind: "applicantEmployerEndDate",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantPayFrequency: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What is the frequency of your pay period (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "weekly",
                answer: "Weekly",
                bind: "applicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "biweekly",
                answer: "Bi-Weekly",
                bind: "applicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "semimonthly",
                answer: "Semi-Monthly",
                bind: "applicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "monthly",
                answer: "Monthly",
                bind: "applicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                bind: "applicantPayFrequency",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantPayFrequencyOther"
                    }
                ],
                displayLabel: false,
                required: false,
            },
        ]
    },
    applicantEmploymentHistory2: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "What is the Borrower/Applicant employment history if less than two years in previous question or second job?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer2",
                bind: "applicantEmployer2",
                name: "applicantEmployer2",
                displayLabel: true,
                required: false
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition2",
                bind: "applicantEmployerPosition2",
                name: "applicantEmployerPosition2",
                displayLabel: true,
                required: false
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "number",
                forName: "applicantEmployerHourlyRate2",
                bind: "applicantEmployerHourlyRate2",
                name: "applicantEmployerHourlyRate2",
                displayLabel: true,
                required: false
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "number",
                forName: "applicantEmployerHoursPerWeek2",
                bind: "applicantEmployerHoursPerWeek2",
                name: "applicantEmployerHoursPerWeek2",
                displayLabel: true,
                required: false
            },
            {
                label: "Start Date: ",
                field: "date",
                type: "date",
                forName: "applicantEmployerStartDate2",
                bind: "applicantEmployerStartDate2",
                name: "applicantEmployerStartDate2",
                displayLabel: false,
                required: false
            },
            {
                label: "End Date: ",
                field: "date",
                type: "date",
                forName: "applicantEmployerEndDate2",
                bind: "applicantEmployerEndDate2",
                name: "applicantEmployerEndDate2",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIsBankrupt: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "As of today, are you actively in a Ch.7 or Ch.13 bankruptcy (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsBankrupt",
                name: "applicantIsBankrupt",
                value: "yes",
                answer: "Yes",
                bind: "applicantIsBankrupt",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsBankrupt",
                name: "applicantIsBankrupt",
                value: "no",
                answer: "No",
                bind: "applicantIsBankrupt",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIsPrimaryResidence: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "I certify the property is my primary residence (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsPrimaryResidence",
                name: "applicantIsPrimaryResidence",
                value: true,
                answer: "Yes",
                bind: "applicantIsPrimaryResidence",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsPrimaryResidence",
                name: "applicantIsPrimaryResidence",
                value: false,
                answer: "No",
                bind: "applicantIsPrimaryResidence",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIsRetiredAndReceivingIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you currently retired and receiving retirement income (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsRetiredAndReceivingIncome",
                name: "applicantIsRetiredAndReceivingIncome",
                value: true,
                answer: "Yes",
                bind: "applicantIsRetiredAndReceivingIncome",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsRetiredAndReceivingIncome",
                name: "applicantIsRetiredAndReceivingIncome",
                value: false,
                answer: "No",
                bind: "applicantIsRetiredAndReceivingIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIsCurrentOnUtilities: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you current on electricity, water, and telephone expense (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsCurrentOnUtilities",
                name: "applicantIsCurrentOnUtilities",
                value: true,
                answer: "Yes",
                bind: "applicantIsCurrentOnUtilities",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsCurrentOnUtilities",
                name: "applicantIsCurrentOnUtilities",
                value: false,
                answer: "No",
                bind: "applicantIsCurrentOnUtilities",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantWorkingWithOtherAgency: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you working with another agency (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantWorkingWithOtherAgency",
                name: "applicantWorkingWithOtherAgency",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Which agency or agencies?",
                bind: "applicantWorkingWithOtherAgency",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantOtherAgency"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantWorkingWithOtherAgency",
                name: "applicantWorkingWithOtherAgency",
                value: false,
                answer: "No",
                bind: "applicantWorkingWithOtherAgency",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDuplicationBenefits: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: " Duplication of Benefits:  Have you received assistance or received a commitment for assistance related to COVID- 19 from any other source? If yes, for what debt and/or expenses and from whom. If yes, be aware that you may or may not be eligible to receive duplicate CARES funding under this program (Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDuplicationBenefits",
                name: "applicantDuplicationBenefits",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What expense/debt have you received assistance for and from whom?",
                bind: "applicantDuplicationBenefits",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantDuplicationBenefitsAssistance"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDuplicationBenefits",
                name: "applicantDuplicationBenefits",
                value: false,
                answer: "No",
                bind: "applicantDuplicationBenefits",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCovidAffected: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Have you been affected by COVID-19 (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCovidAffected",
                name: "applicantCovidAffected",
                value: true,
                answer: "Yes",
                bind: "applicantCovidAffected",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCovidAffected",
                name: "applicantCovidAffected",
                value: false,
                answer: "No",
                bind: "applicantCovidAffected",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipIncomeReduction: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Income Reduction",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncomeReduction",
                name: "applicantHardshipIncomeReduction",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipIncomeReduction",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipIncomeReductionExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncomeReduction",
                name: "applicantHardshipIncomeReduction",
                value: false,
                answer: "No",
                bind: "applicantHardshipIncomeReduction",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipJobLoss: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Job Loss",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipJobLoss",
                name: "applicantHardshipJobLoss",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipJobLoss",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipJobLossExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipJobLoss",
                name: "applicantHardshipJobLoss",
                value: false,
                answer: "No",
                bind: "applicantHardshipJobLoss",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipDivorce: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Divorce",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipDivorce",
                name: "applicantHardshipDivorce",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipDivorce",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipDivorceExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipDivorce",
                name: "applicantHardshipDivorce",
                value: false,
                answer: "No",
                bind: "applicantHardshipDivorce",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipFamilyDeath: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Family Death",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipFamilyDeath",
                name: "applicantHardshipFamilyDeath",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipFamilyDeath",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipFamilyDeathExplanation",
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipFamilyDeath",
                name: "applicantHardshipFamilyDeath",
                value: false,
                answer: "No",
                bind: "applicantHardshipFamilyDeath",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipIllness: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Illness",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIllness",
                name: "applicantHardshipIllness",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipIllness",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipIllnessExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIllness",
                name: "applicantHardshipIllness",
                value: false,
                answer: "No",
                bind: "applicantHardshipIllness",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipCarRepairs: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Car Repairs",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipCarRepairs",
                name: "applicantHardshipCarRepairs",
                value: false,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipCarRepairsExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipCarRepairs",
                name: "applicantHardshipCarRepairs",
                value: false,
                answer: "No",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipIncreaseInExpenses: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Increase in expenses",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncreaseInExpenses",
                name: "applicantHardshipIncreaseInExpenses",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipIncreaseInExpenses",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipIncreaseInExpensesExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncreaseInExpenses",
                name: "applicantHardshipIncreaseInExpenses",
                value: false,
                answer: "No",
                bind: "applicantHardshipIncreaseInExpenses",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipHomeRepairs: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Home Repairs",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipHomeRepairs",
                name: "applicantHardshipHomeRepairs",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipHomeRepairs",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipHomeRepairsExplanation",
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipHomeRepairs",
                name: "applicantHardshipHomeRepairs",
                value: false,
                answer: "No",
                bind: "applicantHardshipHomeRepairs",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipMedicalExpenses: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Medical Expenses",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipMedicalExpenses",
                name: "applicantHardshipMedicalExpenses",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipMedicalExpenses",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipMedicalExpensesExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipMedicalExpenses",
                name: "applicantHardshipMedicalExpenses",
                value: false,
                answer: "No",
                bind: "applicantHardshipMedicalExpenses",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHardshipOther: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hardship: Other",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipOther",
                name: "applicantHardshipOther",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                bind: "applicantHardshipOther",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantHardshipOtherExplanation"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipOther",
                name: "applicantHardshipOther",
                value: false,
                answer: "No",
                bind: "applicantHardshipOther",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantFinancialAssistance: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Interested in Financial Assistance (If available)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFinancialAssistance",
                name: "applicantFinancialAssistance",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantFinancialAssistanceComments"
                    }
                ],
                bind: "applicantFinancialAssistance",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFinancialAssistance",
                name: "applicantFinancialAssistance",
                value: false,
                answer: "No",
                bind: "applicantFinancialAssistance",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantMortgageAssistance: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Interested in Mortgage Asistance (Working to provide loss mitigation to servicer/lender)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMortgageAssistance",
                name: "applicantMortgageAssistance",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantMortgageAssistanceComments"
                    }
                ],
                bind: "applicantMortgageAssistance",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMortgageAssistance",
                name: "applicantMortgageAssistance",
                value: false,
                answer: "No",
                bind: "applicantMortgageAssistance",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCrisisBudgeting: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Interested in Crisis Budgeting",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCrisisBudgeting",
                name: "applicantCrisisBudgeting",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                bind: "applicantCrisisBudgeting",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantCrisisBudgetingComments"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCrisisBudgeting",
                name: "applicantCrisisBudgeting",
                value: true,
                answer: "No",
                bind: "applicantCrisisBudgeting",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantLegalReferral: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Interested in Legal Referral",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLegalReferral",
                name: "applicantLegalReferral",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                bind: "applicantLegalReferral",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantLegalReferralComments"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLegalReferral",
                name: "applicantLegalReferral",
                value: false,
                answer: "No",
                bind: "applicantLegalReferral",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantFundsAvailable: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you have any funds available to use toward the house payment (Applicant)? (Bank statements are included as a required documentation).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFundsAvailable",
                name: "applicantFundsAvailable",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                bind: "applicantFundsAvailable",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantFundsAvailableAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFundsAvailable",
                name: "applicantFundsAvailable",
                value: false,
                answer: "No",
                bind: "applicantFundsAvailable",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantIfBroughtCurrent: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "If you were brought current, will you be able to continue to make on time payments?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIfBroughtCurrent",
                name: "applicantIfBroughtCurrent",
                value: true,
                answer: "Yes",
                bind: "applicantIfBroughtCurrent",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIfBroughtCurrent",
                name: "applicantIfBroughtCurrent",
                value: false,
                answer: "No",
                moreAnswer: true,
                moreLabel: "If no, please explain why?",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantIfBroughtCurrentExplanation"
                    }
                ],
                bind: "applicantIfBroughtCurrent",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantActivelyMakeFullPayments: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you actively making full current payment?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePayments",
                name: "applicantActivelyMakePayments",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                bind: "applicantActivelyMakeFullPayments",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantActivelyMakeFullPaymentsAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePayments",
                name: "applicantActivelyMakePayments",
                value: false,
                answer: "No",
                bind: "applicantActivelyMakeFullPayments",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantActivelyMakePartialPayments: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Are you actively making partial current payment?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePartialPayments",
                name: "applicantActivelyMakePartialPayments",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                bind: "applicantActivelyMakePartialPayments",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantActivelyMakePartialPaymentsAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePartialPayments",
                name: "applicantActivelyMakePartialPayments",
                value: false,
                answer: "No",
                bind: "applicantActivelyMakePartialPayments",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantLenderToOutstandingBalance: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you have any funds available to use toward the house payment (Applicant)? (Bank statements are included as a required documentation).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "yes",
                answer: "Yes",
                bind: "applicantLenderToOutstandingBalance",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "no",
                answer: "No",
                bind: "applicantLenderToOutstandingBalance",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "dont know",
                answer: "Don't Know",
                bind: "applicantLenderToOutstandingBalance",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                moreLabel: "Please specify",
                bind: "applicantLenderToOutstandingBalance",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "applicantLenderToOutstandingBalanceOther"
                    }
                ],
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantUSStatus: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "I certify that I am one of the following: A US Citizen, permanent resident, have eligible immigration status or have Deferred Action for Childhood Arrival (DACA) status.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantUSStatus",
                name: "applicantUSStatus",
                value: true,
                answer: "Yes",
                bind: "applicantUSStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantUSStatus",
                name: "applicantUSStatus",
                value: false,
                answer: "No",
                bind: "applicantUSStatus",
                displayLabel: false,
                required: false
            },
        ]
    },
    lenderInfo: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Lender/Mortgager Information",
        inputs: [
            {
                label: "Name of lender/mortgage servicer: ",
                field: "input",
                type: "text",
                forName: "mortgageName",
                name: "mortgageName",
                bind: "mortgageName",
                displayLabel: true,
                required: false
            },
            {
                label: "Website Address: ",
                field: "input",
                type: "text",
                forName: "mortgageWebAddress",
                name: "mortgageWebAddress",
                bind: "mortgageWebAddress",
                displayLabel: true,
                required: false
            },
            {
                label: "Telephone: ",
                field: "input",
                type: "text",
                forName: "mortgageTelephone",
                name: "mortgageTelephone",
                bind: "mortgageTelephone",
                displayLabel: true,
                required: false
            },
            {
                label: "Mortgage Loan Account #",
                field: "input",
                type: "text",
                forName: "mortgageAccountNum",
                name: "mortgageAccountNum",
                bind: "mortgageAccountNum",
                displayLabel: true,
                required: false
            },
        ]
    },
    applicantMonthlyNetIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Monthly Net Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantMonthlyNetIncome",
                name: "applicantMonthlyNetIncome",
                bind: "applicantMonthlyNetIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantSpouseMonthlyNetIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Monthly Spouse Net Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantSpouseMonthlyNetIncome",
                name: "applicantSpouseMonthlyNetIncome",
                bind: "applicantSpouseMonthlyNetIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantChildSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Child Support",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantChildSupport",
                name: "applicantChildSupport",
                bind: "applicantChildSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantSpousalSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Spousal Support Received",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantSpousalSupport",
                name: "applicantSpousalSupport",
                bind: "applicantSpousalSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantRetirementIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Retirement Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantRetirementIncome",
                name: "applicantRetirementIncome",
                bind: "applicantRetirementIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantSocialSecurityIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Social Security/Disability Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantSocialSecurityIncome",
                name: "applicantSocialSecurityIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantOtherIncome: {
        isIncrement: {
            bool: true,
            arrKey: "applicantOtherIncome",
            template: {
                schema: {
                    amount: null,
                    frequency: ""
                },
                name: "Other Monthly Income",
                label: "",
                inputs: [
                    {
                        label: "Other Income Amount",
                        forName: "other income amount",
                        field: "input",
                        type: "number",
                        bind: "amount",
                        displayLabel: true,
                        required: false
                    },
                    {
                        label: "How Frequent?",
                        forName: "other income amount",
                        field: "select",
                        type: "string",
                        bind: "frequency",
                        displayLabel: true,
                        required: false,
                        options: [
                            "monthly",
                            "quarterly",
                            "twice annually",
                            "annually"
                        ]
                    },
                ],
            },
            incrementBtn: "Add",
            decrementBtn: "Remove"
        },
        isCoApplicant: false,
        header: "Other Income",
        inputs: []
    },
    applicantMortgagePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Rent or Mortgage Payment",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantMortgagePayment",
                name: "applicantMortgagePayment",
                bind: "applicantMortgagePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantAutoLoanPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Auto Loan/Lease Payment",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantAutoLoanPayment",
                name: "applicantAutoLoanPayment",
                bind: "applicantAutoLoanPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDebtConsolidation: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Debt Consolidation/Other Loan",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantDebtConsolidation",
                name: "applicantDebtConsolidation",
                bind: "applicantDebtConsolidation",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantStudentLoanPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Debt Consolidation/Other Loan",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantStudentLoanPayment",
                name: "applicantStudentLoanPayment",
                bind: "applicantStudentLoanPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHomeownerAssocFee: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Condo or Homeowner Association Fee",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantHomeownerAssocFee",
                name: "applicantHomeownerAssocFee",
                bind: "applicantHomeownerAssocFee",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantElectricityPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Electricity",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantElectricityPayment",
                name: "applicantElectricityPayment",
                bind: "applicantElectricityPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantOilPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Oil or Gas",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantOilPayment",
                name: "applicantOilPayment",
                bind: "applicantOilPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantWaterPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Water/Sewer",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantWaterPayment",
                name: "applicantWaterPayment",
                bind: "applicantWaterPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantGarbagePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Garbage Collection",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantGarbagePayment",
                name: "applicantGarbagePayment",
                bind: "applicantGarbagePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantLandPhonePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Phone (Land line)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantLandPhonePayment",
                name: "applicantLandPhonePayment",
                bind: "applicantLandPhonePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantMobilePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Phone(s) (mobile)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantMobilePayment",
                name: "applicantMobilePayment",
                bind: "applicantMobilePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCablePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Cable/Satellite",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantCablePayment",
                name: "applicantCablePayment",
                bind: "applicantCablePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantStreamingPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Streaming (Netflix, Hulu, Disney+, AppleTV, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantStreamingPayment",
                name: "applicantStreamingPayment",
                bind: "applicantStreamingPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCarInsurancePayment: {
        isIncrement: {
            bool: true,
            arrKey: "applicantCarInsurancePayment",
            template: {
                schema: {
                    amount: null
                },
                name: "Car Insurance",
                label: "",
                inputs: [
                    {
                        label: "Car Insurance Amount",
                        forName: "car insurance amount",
                        field: "input",
                        type: "number",
                        bind: "amount",
                        displayLabel: true,
                        required: false
                    },
                ],
            },
            incrementBtn: "Add",
            decrementBtn: "Remove"
        },
        isCoApplicant: false,
        header: "Car Insurance",
        inputs: []
    },
    applicantHealthInsurancePayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Health Insurance (If it is not deducted from your paycheck)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantHealthInsurancePayment",
                name: "applicantHealthInsurancePayment",
                bind: "applicantHealthInsurancePayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantChildSupportPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Child Support (If paying)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantChildSupportPayment",
                name: "applicantChildSupportPayment",
                bind: "applicantChildSupportPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantAlimonyPayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Alimony (If paying)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantAlimonyPayment",
                name: "applicantAlimonyPayment",
                bind: "applicantAlimonyPayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantRetirementSavings: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Retirement Savings (If not included)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantRetirementSavings",
                name: "applicantRetirementSavings",
                bind: "applicantRetirementSavings",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantEmergencyFundsSavings: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Emergency Funds Savings",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantEmergencyFundsSavings",
                name: "applicantEmergencyFundsSavings",
                bind: "applicantEmergencyFundsSavings",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCreditCards: {
        isIncrement: {
            bool: true,
            arrKey: "applicantCreditCards",
            template: {
                schema: {
                    cardBalance: ""
                },
                name: "Credit Card",
                label: "",
                inputs: [
                    {
                        label: "Balance",
                        field: "input",
                        type: "number",
                        bind: "cardBalance",
                        displayLabel: true,
                        required: false
                    },
                ],
            },
            incrementBtn: "Add",
            decrementBtn: "Remove"
        },
        isCoApplicant: false,
        header: "Credit Cards",
        inputs: []
    },
    applicantOtherCreditLine1: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Other Line of Credit #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherCreditLine1",
                name: "applicantOtherCreditLine1",
                bind: "applicantOtherCreditLine1",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantOtherCreditLine2: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Other Line of Credit #2",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherCreditLine2",
                name: "applicantOtherCreditLine2",
                bind: "applicantOtherCreditLine2",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantFoodDeliveries: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Food - Deliveries (Pizza, DoorDash, HomeChef, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantFoodDeliveries",
                name: "applicantFoodDeliveries",
                bind: "applicantFoodDeliveries",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantFoodGroceries: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Food - Deliveries (That you cook at home)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantFoodGroceries",
                name: "applicantFoodGroceries",
                bind: "applicantFoodGroceries",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantGasToolsParking: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Gasoline, Tools, Parking",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantGasToolsParking",
                name: "applicantGasToolsParking",
                bind: "applicantGasToolsParking",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantPublicTransportation: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Public Transportation - bus, train",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantPublicTransportation",
                name: "applicantPublicTransportation",
                bind: "applicantPublicTransportation",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHealthClubMembership: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Health Club Membership",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantHealthClubMembership",
                name: "applicantHealthClubMembership",
                bind: "applicantHealthClubMembership",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDailySnack: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Daily Coffee/Snack",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantDailySnack",
                name: "applicantDailySnack",
                bind: "applicantDailySnack",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantLaundry: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Laundry/Dry Cleaning",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantLaundry",
                name: "applicantLaundry",
                bind: "applicantLaundry",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantHouseholdItems: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Household Items (Not groceries - Ex. paper towels, toilet paper, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantHouseholdItems",
                name: "applicantHouseholdItems",
                bind: "applicantHouseholdItems",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantPetCare: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Pet Care and supplies",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantPetCare",
                name: "applicantPetCare",
                bind: "applicantPetCare",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantOtherPeople: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Other people (Helping out families and friends)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantOtherPeople",
                name: "applicantOtherPeople",
                bind: "applicantOtherPeople",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantBabyItems: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Baby Items",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantBabyItems",
                name: "applicantBabyItems",
                bind: "applicantBabyItems",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantChildrenAllowances: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Children's Allowances",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantChildrenAllowances",
                name: "applicantChildrenAllowances",
                bind: "applicantChildrenAllowances",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantGrooming: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Hair Cuts/Grooming/Manicures, etc.",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantGrooming",
                name: "applicantGrooming",
                bind: "applicantGrooming",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantClothes: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Clothes (Paid for by cash)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantClothes",
                name: "applicantClothes",
                bind: "applicantClothes",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantBabysitterDaycare: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Babysitter/Daycare",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantBabysitterDaycare",
                name: "applicantBabysitterDaycare",
                bind: "applicantBabysitterDaycare",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantExpensesForChildren: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Expenses for Children (Music lessons, dance, sports, field trips, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantExpensesForChildren",
                name: "applicantExpensesForChildren",
                bind: "applicantExpensesForChildren",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantATMFees: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "ATM Fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantATMFees",
                name: "applicantATMFees",
                bind: "applicantATMFees",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantBankFees: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Bank Fees (NSF, overdreaft, excessive withdrawals, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantBankFees",
                name: "applicantBankFees",
                bind: "applicantBankFees",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDonations: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Tithes, Charitable Donations",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantDonations",
                name: "applicantDonations",
                bind: "applicantDonations",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantOccupationalFees: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Occupational Licenses/Fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantOccupationalFees",
                name: "applicantOccupationalFees",
                bind: "applicantOccupationalFees",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantEmergencySavings: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Emergency Savings",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantEmergencySavings",
                name: "applicantEmergencySavings",
                bind: "applicantEmergencySavings",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantMiscSpending: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Miscellaneous spending money",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantMiscSpending",
                name: "applicantMiscSpending",
                bind: "applicantMiscSpending",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantPostageFees: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Postage/Money Order fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "number",
                forName: "applicantPostageFees",
                name: "applicantPostageFees",
                bind: "applicantPostageFees",
                displayLabel: false,
                required: false
            },
        ]
    },
    isThereCoApplicant: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Do you have a Co-Applicant?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "isThereCoApplicant",
                name: "isThereCoApplicant",
                value: true,
                answer: "Yes",
                checked: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "isThereCoApplicant",
                name: "isThereCoApplicant",
                value: false,
                answer: "No",
                checked: true
            },
        ]
    },
    // coApplicantIncluded: {
    //     isIncrement: {
    //         bool: false,
    //     },
    //     isCoApplicant: true,
    //     header: "Will Person in previous question be included on the determination?",
    //     inputs: [
    //         {
    //             label: "",
    //             field: "radio",
    //             type: "radio",
    //             forName: "coApplicantIncluded",
    //             name: "coApplicantIncluded",
    //             value: "no",
    //             answer: "No",
    //             
    //         },
    //         {
    //             label: "",
    //             field: "radio",
    //             type: "radio",
    //             forName: "coApplicantIncluded",
    //             name: "coApplicantIncluded",
    //             value: "yes",
    //             answer: "Yes",
    //             
    //         },
    //     ]
    // },
    coApplicant: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Co-Applicant (co-borrower) Partner or other adult whom will be living in the house",
        inputs: [
            {
                label: "First Name",
                field: "input",
                type: "text",
                forName: "coFirstName",
                name: "coFirstName",
                bind: "coFirstName",
                displayLabel: false,
                required: false
            },
            {
                label: "Last Name",
                field: "input",
                type: "text",
                forName: "coLastName",
                name: "coLastName",
                bind: "coLastName",
                displayLabel: false,
                required: false
            },
            {
                label: "Address",
                field: "input",
                type: "text",
                forName: "coAddress",
                name: "coAddress",
                bind: "coAddress",
                displayLabel: false,
                required: false
            },
            {
                label: "City/Town",
                field: "input",
                type: "text",
                forName: "coCity",
                name: "coCity",
                bind: "coCity",
                displayLabel: false,
                required: false
            },
            {
                label: "State/Province",
                field: "select",
                type: "dropdown",
                options: [
                'North Carolina',
                'Alabama',
                'Alaska',
                'American Samoa',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District of Columbia',
                'Federated States of Micronesia',
                'Florida',
                'Georgia',
                'Guam',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Marshall Islands',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Dakota',
                'Northern Mariana Islands',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Palau',
                'Pennsylvania',
                'Puerto Rico',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virgin Island',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'
            ],
                forName: "coState",
                name: "coState",
                bind: "costate",
                displayLabel: false,
                required: false
            },
            {
                label: "ZIP/Postal Code",
                field: "input",
                type: "text",
                forName: "coZipcode",
                name: "coZipcode",
                bind: "coZipcode",
                displayLabel: false,
                required: false
            },
            {
                label: "Email Address",
                field: "input",
                type: "text",
                forName: "coEmail",
                name: "coEmail",
                bind: "coEmail",
                displayLabel: false,
                required: false
            },
            {
                label: "Phone Number",
                field: "input",
                type: "text",
                forName: "coPhoneNum",
                name: "coPhoneNum",
                bind: "coPhoneNum",
                displayLabel: false,
                required: false
            }
        ]
    },
    coApplicantRace: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Race - Co-Borrower/Co-Applicant/Partner: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "white/caucasian",
                answer: "White or Caucasian",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "black/african american",
                answer: "Black or African American",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "asian/asian american",
                answer: "Asian or Asian American",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "american indian/alaska native",
                answer: "American Indian or Alaska Native",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "native hawaiian/other pacific islander",
                answer: "Native Hawaiian or other Pacific Islander",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                bind: "coApplicantRace",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "coApplicantRaceOther"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "NA",
                answer: "Choose not to respond",
                bind: "coApplicantRace",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantEthnicity: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Ethnicity - Co-Borrower/Co-Applicant: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "hispanic/latino",
                answer: "Hispanic/Latino",
                bind: "coApplicantEthnicity",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "not hispanic/latino",
                answer: "Not Hispanic/Latino",
                bind: "coApplicantEthnicity",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "choose not to respond",
                answer: "Choose not to respond",
                bind: "coApplicantEthnicity",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantDoB: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Date of Birth - Co-Borrower/Co-Applicant: ",
        inputs: [
            {
                label: "",
                field: "date",
                type: "date",
                forName: "coApplicantDoB",
                name: "coApplicantDoB",
                value: "coApplicantDoB",
                answer: "",
                bind: "coApplicantDoB",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantGender: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Gender - Co-Borrower/Co-Applicant",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantGender",
                name: "coApplicantGender",
                value: "male",
                answer: "Male",
                bind: "coApplicantGender",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantGender",
                name: "coApplicantGender",
                value: "female",
                answer: "Female",
                bind: "coApplicantGender",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantMaritalStatus: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Marital Status - Co-Applicant: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "married",
                answer: "Married",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "separated",
                answer: "Separated",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "divorced",
                answer: "Divorced",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "never been married",
                answer: "Never been married",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "domestic partners",
                answer: "Domestic Partners",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "widowed",
                answer: "Widowed",
                bind: "coApplicantMaritalStatus",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantCitizenship: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Citizenship (Co-Applicant: ",
        inputs: [
             {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "non resident alien",
                answer: "Non-Resident Alien",
                bind: "coApplicantCitizenship",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "us citizen",
                answer: "US Citizen",
                bind: "coApplicantCitizenship",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "permanent resident",
                answer: "Permanent Resident",
                bind: "coApplicantCitizenship",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantBornInUS: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Were you born in the United States (Co-Applicant)?",
        info: "If no, pleas provide a copy of your residency documentation.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantBornInUS",
                name: "coApplicantBornInUS",
                value: true,
                answer: "Yes",
                bind: "coApplicantBornInUS",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantBornInUS",
                name: "coApplicantBornInUS",
                value: false,
                answer: "No",
                bind: "coApplicantBornInUS",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantHighestEducation: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "What is the highest level of education you have completed (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "select",
                type: "dropdown",
                forName: "coApplicantHighestEducation",
                name: "coApplicantHighestEducation",
                options: [
                "",
                "No formal education",
                "Primary education",
                "Secondary education",
                "GED",
                "Vocational qualification",
                "Bachelor's degree",
                "Master's degree",
                "Doctorate or higher",
                ],
                bind: "coApplicantHighestEducation",
                displayLabel: false,
                required: false,
            }
        ]
    },
    coApplicantDisabled: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Disabled (Co-Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDisabled",
                name: "coApplicantDisabled",
                value: true,
                answer: "Yes",
                bind: "coApplicantDisabled",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDisabled",
                name: "coApplicantDisabled",
                value: false,
                answer: "No",
                bind: "coApplicantDisabled",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantVeteran: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Veteran/Military (Co-Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: true,
                answer: "Yes",
                bind: "coApplicantVeteran",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: false,
                answer: "No",
                bind: "coApplicantVeteran",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantTaxRepayment: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you currently in an IRS or State tax repayment plan (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantTaxRepayment",
                name: "coApplicantTaxRepayment",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "coApplicantTaxRepayment",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantTaxRepaymentAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantTaxRepayment",
                name: "coApplicantTaxRepayment",
                value: false,
                answer: "No",
                bind: "coApplicantTaxRepayment",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantReceiveChildSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Do you receive child support (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantReceiveChildSupport",
                name: "coApplicantReceiveChildSupport",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "coApplicantReceiveChildSupport",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantReceiveChildSupportAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantReceiveChildSupport",
                name: "coApplicantReceiveChildSupport",
                value: false,
                answer: "No",
                bind: "coApplicantReceiveChildSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantPayChildSupport: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Do you pay child support (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "coApplicantPayChildSupport",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantPayChildSupportAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: false,
                answer: "No",
                bind: "coApplicantPayChildSupport",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantDisabilitySocialSecurity: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Do you receive Disability/Social Security (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "coApplicantDisabilitySocialSecurity",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantDisabilitySocialSecurityAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: false,
                answer: "No",
                bind: "coApplicantDisabilitySocialSecurity",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantRetirementOther: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Do you receive Retirement/Other Income (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What amount?",
                bind: "coApplicantRetirementOther",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantRetirementOtherAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: false,
                answer: "No",
                bind: "coApplicantRetirementOther",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsEmployed: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you currently employed (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsEmployed",
                name: "coApplicantIsEmployed",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsEmployed",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsEmployed",
                name: "coApplicantIsEmployed",
                value: false,
                answer: "No",
                bind: "coApplicantIsEmployed",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantEmploymentHistory: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "What is the Co-Borrower/Co-Applicant employment history?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployer",
                name: "coApplicantEmployer",
                bind: "coApplicantEmployer",
                displayLabel: false,
                required: false
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerPosition",
                name: "coApplicantEmployerPosition",
                bind: "coApplicantEmployerPosition",
                displayLabel: false,
                required: false
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerStartDate",
                name: "coApplicantEmployerStartDate",
                bind: "coApplicantEmployerStartDate",
                displayLabel: false,
                required: false
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerEndDate",
                name: "coApplicantEmployerEndDate",
                bind: "coApplicantEmployerEndDate",
                displayLabel: false,
                required: false
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerHourlyRate",
                name: "coApplicantEmployerHourlyRate",
                bind: "coApplicantEmployerHourlyRate",
                displayLabel: false,
                required: false
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerHoursPerWeek",
                name: "coApplicantEmployerHoursPerWeek",
                bind: "coApplicantEmployerHoursPerWeek",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantPayFrequency: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "What is the frequency of your pay period (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "weekly",
                answer: "Weekly",
                bind: "coApplicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "biweekly",
                answer: "Bi-Weekly",
                bind: "coApplicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "semimonthly",
                answer: "Semi-Monthly",
                bind: "coApplicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "monthly",
                answer: "Monthly",
                bind: "coApplicantPayFrequency",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "other",
                answer: "Other",
                moreAnswer: true,
                bind: "coApplicantPayFrequency",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "coApplicantPayFrequencyOther"
                    }
                ],
                displayLabel: false,
                required: false,
            },
        ]
    },
    coApplicantEmploymentHistory2: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "What is the Co-Borrower/Co-Applicant employment history if less than two years in previous question or second job?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployer2",
                name: "coApplicantEmployer2",
                bind: "coApplicantEmployer2",
                displayLabel: false,
                required: false
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerPosition2",
                name: "coApplicantEmployerPosition2",
                bind: "coApplicantEmployerPosition2",
                displayLabel: false,
                required: false
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerStartDate2",
                name: "coApplicantEmployerStartDate2",
                bind: "coApplicantEmployerStartDate2",
                displayLabel: false,
                required: false
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerEndDate2",
                name: "coApplicantEmployerEndDate2",
                bind: "coApplicantEmployerEndDate2",
                displayLabel: false,
                required: false
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerHourlyRate2",
                name: "coApplicantEmployerHourlyRate2",
                bind: "coApplicantEmployerHourlyRate2",
                displayLabel: false,
                required: false
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "coApplicantEmployerHoursPerWeek2",
                name: "coApplicantEmployerHoursPerWeek2",
                bind: "coApplicantEmployerHoursPerWeek2",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsBankrupt: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "As of today, are you actively in a Ch.7 or Ch.13 bankruptcy (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsBankrupt",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: false,
                answer: "No",
                bind: "coApplicantIsBankrupt",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsPrimaryResidence: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "I certify the property is my primary residence (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsPrimaryResidence",
                name: "coApplicantIsPrimaryResidence",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsPrimaryResidence",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsPrimaryResidence",
                name: "coApplicantIsPrimaryResidence",
                value: false,
                answer: "No",
                bind: "coApplicantIsPrimaryResidence",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsRetiredAndReceivingIncome: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you currently retired and receiving retirement income (Co-Applicant)??",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsRetiredAndReceivingIncome",
                name: "coApplicantIsRetiredAndReceivingIncome",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsRetiredAndReceivingIncome",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsRetiredAndReceivingIncome",
                name: "coApplicantIsRetiredAndReceivingIncome",
                value: false,
                answer: "No",
                bind: "coApplicantIsRetiredAndReceivingIncome",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsActiveOrPastMilitary: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you an active or past member of the military (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsActiveOrPastMilitary",
                name: "coApplicantIsActiveOrPastMilitary",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsActiveOrPastMilitary",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsActiveOrPastMilitary",
                name: "coApplicantIsActiveOrPastMilitary",
                value: false,
                answer: "No",
                bind: "coApplicantIsActiveOrPastMilitary",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantIsCurrentOnUtilities: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you current on electricity, water, and telephone expense (Co-Applicant)??",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsCurrentOnUtilities",
                name: "coApplicantIsCurrentOnUtilities",
                value: true,
                answer: "Yes",
                bind: "coApplicantIsCurrentOnUtilities",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsCurrentOnUtilities",
                name: "coApplicantIsCurrentOnUtilities",
                value: false,
                answer: "No",
                bind: "coApplicantIsCurrentOnUtilities",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantWorkingWithOtherAgency: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Are you working with another agency (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantWorkingWithOtherAgency",
                name: "coApplicantWorkingWithOtherAgency",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Which agency or agencies?",
                bind: "coApplicantWorkingWithOtherAgency",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "coApplicantOtherAgency"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantWorkingWithOtherAgency",
                name: "coApplicantWorkingWithOtherAgency",
                value: false,
                answer: "No",
                bind: "coApplicantWorkingWithOtherAgency",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantDuplicationBenefits: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: " Duplication of Benefits:  Have you received assistance or received a commitment for assistance related to COVID- 19 from any other source? If yes, for what debt and/or expenses and from whom. If yes, be aware that you may or may not be eligible to receive duplicate CARES funding under this program (Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDuplicationBenefits",
                name: "coApplicantDuplicationBenefits",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What expense/debt have you received assistance and from whom?",
                bind: "coApplicantDuplicationBenefits",
                moreInput: [
                    {
                        label: "",
                        type: "text",
                        bind: "coApplicantDuplicationBenefitsAssistance"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDuplicationBenefits",
                name: "coApplicantDuplicationBenefits",
                value: false,
                answer: "No",
                bind: "coApplicantDuplicationBenefits",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantCovidAffected: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Have you been affected by COVID-19 (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCovidAffected",
                name: "coApplicantCovidAffected",
                value: true,
                answer: "Yes",
                bind: "coApplicantCovidAffected",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCovidAffected",
                name: "coApplicantCovidAffected",
                value: false,
                answer: "No",
                bind: "coApplicantCovidAffected",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantFundsAvailable: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Do you have any funds available to use toward the house payment (Co-Applicant)? (Bank statements are included as a required documentation).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantFundsAvailable",
                name: "coApplicantFundsAvailable",
                value: true,
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                bind: "coApplicantFundsAvailable",
                moreInput: [
                    {
                        label: "",
                        type: "number",
                        bind: "coApplicantFundsAvailableAmount"
                    }
                ],
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantFundsAvailable",
                name: "coApplicantFundsAvailable",
                value: false,
                answer: "No",
                bind: "coApplicantFundsAvailable",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCourseAcknowledgement: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        link: "https://www.ehomeamerica.org/prosperitycdc",
        hyperlinkText: "Click here for course",
        header: "(Applicant) I acknowledge the FREE Foreclosure Education Course is required. The website for the course is provided. Please take the course as soon as possible after submitting this application as it will help you to understand the Foreclosure Preventing Stages and Options.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCourseAcknowledgement",
                name: "applicantCourseAcknowledgement",
                value: true,
                answer: "Yes",
                bind: "applicantCourseAcknowledgement",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCourseAcknowledgement",
                name: "applicantCourseAcknowledgement",
                value: false,
                answer: "No",
                bind: "applicantCourseAcknowledgement",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantCourseAcknowledgement: {
        isIncrement: {
            bool: false,
        },
        link: "https://www.ehomeamerica.org/prosperitycdc",
        hyperlinkText: "Click here for course",
        isCoApplicant: true,
        header: "(Co-Applicant) I acknowledge the FREE Foreclosure Education Course is required. The website for the course is provided. Please take the course as soon as possible after submitting this application as it will help you to understand the Foreclosure Preventing Stages and Options.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCourseAcknowledgement",
                name: "coApplicantCourseAcknowledgement",
                value: true,
                answer: "Yes",
                bind: "coApplicantCourseAcknowledgement",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCourseAcknowledgement",
                name: "coApplicantCourseAcknowledgement",
                value: false,
                answer: "No",
                bind: "coApplicantCourseAcknowledgement",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantDeclaration: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "DECLARATION (Applicant): By signing this application I certify that the information I/We provided in this application for assistance is CORRECT and FACTUAL.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing accurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDeclaration",
                name: "applicantDeclaration",
                value: true,
                answer: "Yes",
                bind: "applicantDeclaration",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDeclaration",
                name: "applicantDeclaration",
                value: false,
                answer: "No",
                bind: "applicantDeclaration",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantDeclaration: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "DECLARATION (Co-Applicant): By signing this application I certify that the information I/We provided in this application for assistance is CORRECT and FACTUAL.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing accurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDeclaration",
                name: "coApplicantDeclaration",
                value: true,
                answer: "Yes",
                bind: "coApplicantDeclaration",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDeclaration",
                name: "coApplicantDeclaration",
                value: false,
                answer: "No",
                bind: "coApplicantDeclaration",
                displayLabel: false,
                required: false
            },
        ]
    },
    applicantCertification: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: false,
        header: "Please read carefully - Applicant Certification: All of the information that I/We provided in this application for assistance is correct, complete and factual.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing inaccurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.\t",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: true,
                answer: "Yes",
                bind: "applicantCertification",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: false,
                answer: "No. I realize that some services may not be available.",
                bind: "applicantCertification",
                displayLabel: false,
                required: false
            },
        ]
    },
    coApplicantCertification: {
        isIncrement: {
            bool: false,
        },
        isCoApplicant: true,
        header: "Please read carefully - Co-Applicant Certification: All of the information that I/We provided in this application for assistance is correct, complete and factual.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing inaccurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayChildSupport",
                name: "coApplicantPayChildSupport",
                value: true,
                answer: "Yes",
                bind: "coApplicantCertification",
                displayLabel: false,
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayChildSupport",
                name: "coApplicantPayChildSupport",
                value: false,
                answer: "No. I realize that some services may not be available.",
                bind: "coApplicantCertification",
                displayLabel: false,
                required: false
            },
        ]
    },
}