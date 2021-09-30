export const questions = {
    applicant: {
        header: "Applicant (Borrower)",
        inputs: [
            {
                label: "First & Last Name",
                field: "input",
                type: "text",
                forName: "fullName",
                name: "fullName",
                required: true
            },
            {
                label: "Address",
                field: "input",
                type: "text",
                forName: "address",
                name: "address",
                required: true
            },
            {
                label: "City/Town",
                field: "input",
                type: "text",
                forName: "city",
                name: "city",
                required: true
            },
            {
                label: "State/Province",
                field: "select",
                type: "dropdown",
                options: [
                "NA",
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
                'North Carolina',
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
                required: true
            },
            {
                label: "ZIP/Postal Code",
                field: "input",
                type: "text",
                forName: "zipcode",
                name: "zipcode",
                required: true
            },
            {
                label: "Email Address",
                field: "input",
                type: "text",
                forName: "email",
                name: "email",
                required: true
            },
            {
                label: "Phone Number",
                field: "input",
                type: "text",
                forName: "phoneNum",
                name: "phoneNum",
                required: true
            }
        ]
    },
    coApplicant: {
        header: "Co-Applicant (co-borrower) Partner or other adult whom will be living in the house",
        inputs: [
            {
                label: "First & Last Name",
                field: "input",
                type: "text",
                forName: "coFullName",
                name: "coFullName",
                required: true
            },
            {
                label: "Address",
                field: "input",
                type: "text",
                forName: "coAddress",
                name: "coAddress",
                required: true
            },
            {
                label: "City/Town",
                field: "input",
                type: "text",
                forName: "coCity",
                name: "coCity",
                required: true
            },
            {
                label: "State/Province",
                field: "select",
                type: "dropdown",
                options: [
                "NA",
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
                'North Carolina',
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
                required: true
            },
            {
                label: "ZIP/Postal Code",
                field: "input",
                type: "text",
                forName: "coZipcode",
                name: "coZipcode",
                required: true
            },
            {
                label: "Email Address",
                field: "input",
                type: "text",
                forName: "coEmail",
                name: "coEmail",
                required: true
            },
            {
                label: "Phone Number",
                field: "input",
                type: "text",
                forName: "coPhoneNum",
                name: "coPhoneNum",
                required: true
            }
        ]
    },
    countryOrigin: {
        header: "Country of Origin",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "countryOrigin",
                name: "countryOrigin",
                required: true
            }
        ]
    },
    coApplicantIncluded: {
        header: "Will Person in Question 2 be included on the determination?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIncluded",
                name: "coApplicantIncluded",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIncluded",
                name: "coApplicantIncluded",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIncluded",
                name: "coApplicantIncluded",
                value: "",
                answer: "Not applicable",
                required: true
            },
        ]
    },
    foreclosureHearingDate: {
        header: "Do you have a pending Foreclosure Hearing date?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureHearingDate",
                name: "foreclosureHearingDate",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureHearingDate",
                name: "foreclosureHearingDate",
                value: "yes",
                answer: "Yes (If yes, please enter the date and provide copy of the documentation.)",
                moreAnswer: true,
                required: true
            },
        ]
    },
    foreclosureSaleDate: {
        header: "Do you have a pending Foreclosure Sale date?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureSaleDate",
                name: "foreclosureSaleDate",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "foreclosureSaleDate",
                name: "foreclosureSaleDate",
                value: "yes",
                answer: "Yes (If yes, please enter the date and provide copy of the documentation.)",
                moreAnswer: true,
                required: true
            },
        ]
    },
    countryResideIn: {
        header: "What country do you live in?",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "countryResideIn",
                name: "countryResideIn",
                required: true
            }
        ]
    },
    ruralAreaStatus: {
        header: "Rural Area Status",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "ruralAreaStatus",
            name: "ruralAreaStatus",
            value: true,
            answer: "Household lives in rural area",
            required: true
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "ruralAreaStatus",
            name: "ruralAreaStatus",
            value: false,
            answer: "Household does not live in rural area",
            required: true
            },
        ]
    },
    residencyStatus: {
        header: "Residency Status",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "own",
            answer: "Own",
            required: true
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "rent",
            answer: "Rent",
            required: true
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "",
            answer: "Other (please specify)",
            moreAnswer: true,
            required: true
            },
        ]
    },
    monthlyHousePayment: {
        header: "What is your monthly house payment?",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "monthlyHousePayment",
                name: "monthlyHousePayment",
                required: true
            },
        ]
    }, 
    applicantCurrentOnHousePayment: {
        header: "Are you current on your house payment?",
        inputs: [
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "yes",
            answer: "Yes",
            required: true
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "no",
            answer: "No",
            required: true
            },
            {
            label: "",
            field: "radio",
            type: "radio",
            forName: "residencyStatus",
            name: "residencyStatus",
            value: "",
            answer: "If no, provide and \"estimate\" of how many months behind and the dollar amount as of today's date?",
            moreAnswer: true,
            required: true
            },
        ]
    },
    timeAtCurrentAddress: {
        header: "How long have you lived at the current address?",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "timeAtCurrentAddress",
                name: "timeAtCurrentAddress",
                required: true
            },
        ]
    },
    applicantRace: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "black/african american",
                answer: "Black or African American",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "asian/asian american",
                answer: "Asian or Asian American",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "american indian/alaska native",
                answer: "American Indian or Alaska Native",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "native hawaiian/other pacific islander",
                answer: "Native Hawaiian or other Pacific Islander",
                required: true
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRace",
                name: "applicantRace",
                value: "NA",
                answer: "Choose not to respond",
                required: true
            },
        ]
    },
    coApplicantRace: {
        header: "Race - Co-Borrower/Applicant/Partner: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "white/caucasian",
                answer: "White or Caucasian",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "black/african american",
                answer: "Black or African American",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "asian/asian american",
                answer: "Asian or Asian American",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "american indian/alaska native",
                answer: "American Indian or Alaska Native",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "native hawaiian/other pacific islander",
                answer: "Native Hawaiian or other Pacific Islander",
                required: true
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantRace",
                name: "coApplicantRace",
                value: "NA",
                answer: "Choose not to respond",
                required: true
            },
        ]
    },
    applicantEthnicity: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "not hispanic/latino",
                answer: "Not Hispanic/Latino",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "choose not to respond",
                answer: "Choose not to respond",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantEthnicity",
                name: "applicantEthnicity",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantEthnicity: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "not hispanic/latino",
                answer: "Not Hispanic/Latino",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "choose not to respond",
                answer: "Choose not to respond",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantEthnicity",
                name: "coApplicantEthnicity",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantDoB: {
        header: "Date of Birth - Borrower/Applicant: ",
        inputs: [
            {
                label: "",
                field: "date",
                type: "date",
                forName: "applicantDoB",
                name: "applicantDoB",
                value: "applicantDoB",
                answer: "",
                required: true
            },
        ]
    },
    coApplicantDoB: {
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
                required: true
            },
        ]
    },
    applicantGender: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantGender",
                name: "applicantGender",
                value: "female",
                answer: "Female",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantGender",
                name: "applicantGender",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantGender: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantGender",
                name: "coApplicantGender",
                value: "female",
                answer: "Female",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantGender",
                name: "coApplicantGender",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantMaritalStatus: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "separated",
                answer: "Separated",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "divorced",
                answer: "Divorced",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "never been married",
                answer: "Never been married",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "domestic partners",
                answer: "Domestic Partners",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMaritalStatus",
                name: "applicantMaritalStatus",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantMaritalStatus: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "separated",
                answer: "Separated",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "divorced",
                answer: "Divorced",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "never been married",
                answer: "Never been married",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "domestic partners",
                answer: "Domestic Partners",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantMaritalStatus",
                name: "coApplicantMaritalStatus",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantCitizenship: {
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
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "us citizen",
                answer: "US Citizen",
                info: "Please provide Social Security Card & Driver's License",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "permanent resident",
                answer: "Permanent Resident",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCitizenship",
                name: "applicantCitizenship",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantCitizenship: {
        header: "Citizenship - Applicant: ",
        inputs: [
             {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "non resident alien",
                answer: "Non-Resident Alien",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "us citizen",
                answer: "US Citizen",
                info: "Please provide Social Security Card & Driver's License",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "permanent resident",
                answer: "Permanent Resident",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCitizenship",
                name: "coApplicantCitizenship",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantBornInUS: {
        header: "Citizenship - Co-Applicant: ",
        inputs: [
             {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: "non resident alien",
                answer: "Non-Resident Alien",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: "us citizen",
                answer: "US Citizen",
                info: "Please provide Social Security Card & Driver's License",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: "permanent resident",
                answer: "Permanent Resident",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantBornInUS",
                name: "applicantBornInUS",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantBornInUS: {
        header: "Were you born in the United States (Applicant)?",
        info: "If no, pleas provide a copy of your residency documentation.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantBornInUS",
                name: "coApplicantBornInUS",
                value: "yes",
                answer: "Yes",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantBornInUS",
                name: "coApplicantBornInUS",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    bornInUSCoApplicant: {
        header: "Were you born in the United States (Co-Applicant)?",
        info: "If no, pleas provide a copy of your residency documentation.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "bornInUSCoApplicant",
                name: "bornInUSCoApplicant",
                value: "yes",
                answer: "Yes",
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "bornInUSCoApplicant",
                name: "bornInUSCoApplicant",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    dependants: {
        header: "List Dependent(s) - Birth dates (MM/DD/YYYY) and Age",
        info: "Example: Jane Doe - 01/01/2015 - 5 (add N/A if not applicable)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent1",
                name: "dependent1",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent2",
                name: "dependent2",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent3",
                name: "dependent3",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent4",
                name: "dependent4",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent5",
                name: "dependent5",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent6",
                name: "dependent6",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent7",
                name: "dependent7",
                required: true
            },
            {
                label: "",
                field: "input",
                type: "text",
                forName: "dependent8",
                name: "dependent8",
                required: true
            },
        ]
    },
    preferredLanguage: {
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
                info: "Please provide documentation",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "preferredLanguage",
                name: "preferredLanguage",
                value: "spanish",
                answer: "Spanish",
                required: true
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
                required: true
            },
        ]
    },
    applicantHighestEducation: {
        header: "What is the highest level of education you have completed (Applicant)?",
        inputs: [
            {
                label: "",
                field: "select",
                type: "dropdown",
                forName: "applicantHighestEducation",
                name: "applicantHighestEducation",
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
    coApplicantHighestEducation: {
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
            }
        ]
    },
    applicantDisabled: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabled",
                name: "applicantDisabled",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    coApplicantDisabled: {
        header: "Disabled (Co-Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDisabled",
                name: "coApplicantDisabled",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDisabled",
                name: "coApplicantDisabled",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    applicantVeteran: {
        header: "Veteran/Military (Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantVeteran",
                name: "applicantVeteran",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantVeteran",
                name: "applicantVeteran",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantVeteran: {
        header: "Veteran/Military (Co-Applicant): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantVeteran",
                name: "coApplicantVeteran",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantTaxRepayment: {
        header: "Are you currently in an IRS or State tax repayment plan (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantTaxRepayment",
                name: "applicantTaxRepayment",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantTaxRepayment",
                name: "applicantTaxRepayment",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantTaxRepayment",
                name: "applicantTaxRepayment",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantTaxRepayment: {
        header: "Are you currently in an IRS or State tax repayment plan (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantTaxRepayment",
                name: "coApplicantTaxRepayment",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantTaxRepayment",
                name: "coApplicantTaxRepayment",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantTaxRepayment",
                name: "coApplicantTaxRepayment",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantTaxRepaymentAmount: {
        header: "If the answer to quesion 36 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantTaxRepaymentAmount",
                name: "applicantTaxRepaymentAmount",
                required: true
            },
        ]
    },
    coApplicantTaxRepaymentAmount: {
        header: "If the answer to quesion 37 is 'Yes', what is the amount (Co-Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantTaxRepaymentAmount",
                name: "coApplicantTaxRepaymentAmount",
                required: true
            },
        ]
    },
    applicantReceiveChildSupport: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantReceiveChildSupport",
                name: "applicantReceiveChildSupport",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantReceiveChildSupport",
                name: "applicantReceiveChildSupport",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantReceiveChildSupport: {
        header: "Do you receive child support (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantReceiveChildSupport",
                name: "coApplicantReceiveChildSupport",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantReceiveChildSupport",
                name: "coApplicantReceiveChildSupport",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantReceiveChildSupport",
                name: "coApplicantReceiveChildSupport",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantChildSupportReceiveAmount: {
        header: "If the answer to quesion 40 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantChildSupportReceiveAmount",
                name: "coApplicantChildSupportReceiveAmount",
                required: true
            },
        ]
    },
    coApplicantChildSupportReceiveAmount: {
        header: "If the answer to quesion 41 is 'Yes', what is the amount (Co-Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantChildSupportReceiveAmount",
                name: "coApplicantChildSupportReceiveAmount",
                required: true
            },
        ]
    },
    applicantPayChildSupport: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantPayChildSupport: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantPayChildSupportAmount: {
        header: "If the answer to quesion 44 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantPayChildSupportAmount",
                name: "coApplicantPayChildSupportAmount",
                required: true
            },
        ]
    },
    coApplicantPayChildSupportAmount: {
        header: "If the answer to quesion 45 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantPayChildSupportAmount",
                name: "coApplicantPayChildSupportAmount",
                required: true
            },
        ]
    },
    applicantDisabilitySocialSecurity: {
        header: "Do you receive Disability/Social Security (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantDisabilitySocialSecurity: {
        header: "Do you receive Disability/Social Security (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDisabilitySocialSecurity",
                name: "applicantDisabilitySocialSecurity",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantDisabilitySocialSecurityAmount: {
        header: "If the answer to quesion 44 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantDisabilitySocialSecurityAmount",
                name: "coApplicantDisabilitySocialSecurityAmount",
                required: true
            },
        ]
    },
    coApplicantDisabilitySocialSecurityAmount: {
        header: "If the answer to quesion 44 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantDisabilitySocialSecurityAmount",
                name: "coApplicantDisabilitySocialSecurityAmount",
                required: true
            },
        ]
    },
    applicantRetirementOther: {
        header: "Do you receive Disability/Social Security (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantRetirementOther: {
        header: "Do you receive Disability/Social Security (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantRetirementOtherAmount: {
        header: "If the answer to quesion 44 is 'Yes', what is the amount (Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantRetirementOtherAmount",
                name: "coApplicantRetirementOtherAmount",
                required: true
            },
        ]
    },
    coApplicantRetirementOtherAmount: {
        header: "If the answer to quesion 44 is 'Yes', what is the amount (Co-Applicant)?",
        inputs: [
             {
                label: "",
                field: "input",
                type: "text",
                forName: "coApplicantRetirementOtherAmount",
                name: "coApplicantRetirementOtherAmount",
                required: true
            },
        ]
    },
    applicantEmploymentHistory: {
        header: "What is the Borrower/Applicant employment history?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer",
                name: "applicantEmployer",
                required: true
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition",
                name: "applicantEmployerPosition",
                required: true
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerStartDate",
                name: "applicantEmployerStartDate",
                required: true
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerEndDate",
                name: "applicantEmployerEndDate",
                required: true
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHourlyRate",
                name: "applicantEmployerHourlyRate",
                required: true
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHoursPerWeek",
                name: "applicantEmployerHoursPerWeek",
                required: true
            },
        ]
    },
    applicantPayFrequency: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "biweekly",
                answer: "Bi-Weekly",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "semimonthly",
                answer: "Semi-Monthly",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayFrequency",
                name: "applicantPayFrequency",
                value: "monthly",
                answer: "Monthly",
                required: true
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
                required: true,
            },
        ]
    },
    applicantEmploymentHistory2: {
        header: "What is the Borrower/Applicant employment history if less than two years in Question '56' or second job?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer2",
                name: "applicantEmploye2r",
                required: true
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition2",
                name: "applicantEmployerPosition2",
                required: true
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerStartDate2",
                name: "applicantEmployerStartDate2",
                required: true
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerEndDate2",
                name: "applicantEmployerEndDate2",
                required: true
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHourlyRate2",
                name: "applicantEmployerHourlyRate2",
                required: true
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHoursPerWeek2",
                name: "applicantEmployerHoursPerWeek2",
                required: true
            },
        ]
    },
    coApplicantEmploymentHistory: {
        header: "What is the Co-Borrower/Co-Applicant employment history?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer",
                name: "applicantEmployer",
                required: true
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition",
                name: "applicantEmployerPosition",
                required: true
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerStartDate",
                name: "applicantEmployerStartDate",
                required: true
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerEndDate",
                name: "applicantEmployerEndDate",
                required: true
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHourlyRate",
                name: "applicantEmployerHourlyRate",
                required: true
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHoursPerWeek",
                name: "applicantEmployerHoursPerWeek",
                required: true
            },
        ]
    },
    coApplicantPayFrequency: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "biweekly",
                answer: "Bi-Weekly",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "semimonthly",
                answer: "Semi-Monthly",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayFrequency",
                name: "coApplicantPayFrequency",
                value: "monthly",
                answer: "Monthly",
                required: true
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
                required: true,
            },
        ]
    },
    coApplicantEmploymentHistory2: {
        header: "What is the Co-Borrower/Co-Applicant employment history if less than two years in Question '58' or second job?",
        inputs: [
            {
                label: "Employer/Income Source: ",
                field: "input",
                type: "text",
                forName: "applicantEmployer2",
                name: "applicantEmployer2",
                required: true
            },
            {
                label: "Position/Title: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerPosition2",
                name: "applicantEmployerPosition2",
                required: true
            },
            {
                label: "Start Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerStartDate2",
                name: "applicantEmployerStartDate2",
                required: true
            },
            {
                label: "End Date: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerEndDate2",
                name: "applicantEmployerEndDate2",
                required: true
            },
            {
                label: "Hourly Rate: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHourlyRate2",
                name: "applicantEmployerHourlyRate2",
                required: true
            },
            {
                label: "# of hours per week: ",
                field: "input",
                type: "text",
                forName: "applicantEmployerHoursPerWeek2",
                name: "applicantEmployerHoursPerWeek2",
                required: true
            },
        ]
    },
    applicantCertification: {
        header: "Please read carefully - Applicant Certification: All of the information that I/We provided in this application for assistance is correct, complete and factual.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing inaccurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.\t",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantPayChildSupport",
                name: "applicantPayChildSupport",
                value: "no",
                answer: "No. I realize that some services may not be available.",
                required: true
            },
        ]
    },
    coApplicantCertification: {
        header: "Please read carefully - Applicant Certification: All of the information that I/We provided in this application for assistance is correct, complete and factual.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing inaccurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayChildSupport",
                name: "coApplicantPayChildSupport",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantPayChildSupport",
                name: "coApplicantPayChildSupport",
                value: "no",
                answer: "No. I realize that some services may not be available.",
                required: true
            },
        ]
    },
    applicantIsBankrupt: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsBankrupt",
                name: "applicantIsBankrupt",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsBankrupt",
                name: "applicantIsBankrupt",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsBankrupt: {
        header: "As of today, are you actively in a Ch.7 or Ch.13 bankruptcy (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantRetirementOther",
                name: "applicantRetirementOther",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIsPrimaryResidence: {
        header: "I certify the property is my primary residence (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsPrimaryResidence",
                name: "applicantIsPrimaryResidence",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsPrimaryResidence",
                name: "applicantIsPrimaryResidence",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsPrimaryResidence",
                name: "applicantIsPrimaryResidence",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsPrimaryResidence: {
        header: "I certify the property is my primary residence (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsPrimaryResidence",
                name: "coApplicantIsPrimaryResidence",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsPrimaryResidence",
                name: "coApplicantIsPrimaryResidence",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsPrimaryResidence",
                name: "coApplicantIsPrimaryResidence",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIsEmployed: {
        header: "Are you currently employed (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsEmployed",
                name: "applicantIsEmployed",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsEmployed",
                name: "applicantIsEmployed",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsEmployed",
                name: "applicantIsEmployed",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsEmployed: {
        header: "Are you currently employed (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsEmployed",
                name: "coApplicantIsEmployed",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsEmployed",
                name: "coApplicantIsEmployed",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsEmployed",
                name: "coApplicantIsEmployed",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIsRetiredAndReceivingIncome: {
        header: "Are you currently retired and receiving retirement income (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsRetiredAndReceivingIncome",
                name: "applicantIsRetiredAndReceivingIncome",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsRetiredAndReceivingIncome",
                name: "applicantIsRetiredAndReceivingIncome",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsRetiredAndReceivingIncome",
                name: "applicantIsRetiredAndReceivingIncome",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsRetiredAndReceivingIncome: {
        header: "Are you currently retired and receiving retirement income (Co-Applicant)??",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsRetiredAndReceivingIncome",
                name: "coApplicantIsRetiredAndReceivingIncome",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsRetiredAndReceivingIncome",
                name: "coApplicantIsRetiredAndReceivingIncome",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsRetiredAndReceivingIncome",
                name: "coApplicantIsRetiredAndReceivingIncome",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIsActiveOrPastMilitary: {
        header: "Are you an active or past member of the military (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsActiveOrPastMilitary",
                name: "applicantIsActiveOrPastMilitary",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsActiveOrPastMilitary",
                name: "applicantIsActiveOrPastMilitary",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsActiveOrPastMilitary",
                name: "applicantIsActiveOrPastMilitary",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsActiveOrPastMilitary: {
        header: "Are you an active or past member of the military (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsActiveOrPastMilitary",
                name: "coApplicantIsActiveOrPastMilitary",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsActiveOrPastMilitary",
                name: "coApplicantIsActiveOrPastMilitary",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsActiveOrPastMilitary",
                name: "coApplicantIsActiveOrPastMilitary",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIsCurrentOnUtilities: {
        header: "Are you current on electricity, water, and telephone expense (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsCurrentOnUtilities",
                name: "applicantIsCurrentOnUtilities",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsCurrentOnUtilities",
                name: "applicantIsCurrentOnUtilities",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIsCurrentOnUtilities",
                name: "applicantIsCurrentOnUtilities",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantIsCurrentOnUtilities: {
        header: "Are you current on electricity, water, and telephone expense (Co-Applicant)??",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsCurrentOnUtilities",
                name: "coApplicantIsCurrentOnUtilities",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsCurrentOnUtilities",
                name: "coApplicantIsCurrentOnUtilities",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantIsCurrentOnUtilities",
                name: "coApplicantIsCurrentOnUtilities",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantWorkingWithOtherAgency: {
        header: "Are you working with another agency (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantWorkingWithOtherAgency",
                name: "applicantWorkingWithOtherAgency",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Which agency or agencies?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantWorkingWithOtherAgency",
                name: "applicantWorkingWithOtherAgency",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantWorkingWithOtherAgency",
                name: "applicantWorkingWithOtherAgency",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantWorkingWithOtherAgency: {
        header: "Are you working with another agency (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantWorkingWithOtherAgency",
                name: "coApplicantWorkingWithOtherAgency",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Which agency or agencies?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantWorkingWithOtherAgency",
                name: "coApplicantWorkingWithOtherAgency",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantWorkingWithOtherAgency",
                name: "coApplicantWorkingWithOtherAgency",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantDuplicationBenefits: {
        header: " Duplication of Benefits:  Have you received assistance or received a commitment for assistance related to COVID- 19 from any other source? If yes, for what debt and/or expenses and from whom. If yes, be aware that you may or may not be eligible to receive duplicate CARES funding under this program (Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDuplicationBenefits",
                name: "applicantDuplicationBenefits",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What expense/debt have you received assistance and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDuplicationBenefits",
                name: "applicantDuplicationBenefits",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDuplicationBenefits",
                name: "applicantDuplicationBenefits",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantDuplicationBenefits: {
        header: " Duplication of Benefits:  Have you received assistance or received a commitment for assistance related to COVID- 19 from any other source? If yes, for what debt and/or expenses and from whom. If yes, be aware that you may or may not be eligible to receive duplicate CARES funding under this program (Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDuplicationBenefits",
                name: "coApplicantDuplicationBenefits",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "What expense/debt have you received assistance and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDuplicationBenefits",
                name: "coApplicantDuplicationBenefits",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDuplicationBenefits",
                name: "coApplicantDuplicationBenefits",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantCovidAffected: {
        header: "Have you been affected by COVID-19 (Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCovidAffected",
                name: "applicantCovidAffected",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCovidAffected",
                name: "applicantCovidAffected",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCovidAffected",
                name: "applicantCovidAffected",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantCovidAffected: {
        header: "Have you been affected by COVID-19 (Co-Applicant)?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCovidAffected",
                name: "coApplicantCovidAffected",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCovidAffected",
                name: "coApplicantCovidAffected",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCovidAffected",
                name: "coApplicantCovidAffected",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipIncomeReduction: {
        header: "Hardship: Income Reduction",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncomeReduction",
                name: "applicantHardshipIncomeReduction",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncomeReduction",
                name: "applicantHardshipIncomeReduction",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncomeReduction",
                name: "applicantHardshipIncomeReduction",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipJobLoss: {
        header: "Hardship: Job Loss",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipJobLoss",
                name: "applicantHardshipJobLoss",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipJobLoss",
                name: "applicantHardshipJobLoss",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipJobLoss",
                name: "applicantHardshipJobLoss",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipDivorce: {
        header: "Hardship: Divorce",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipDivorce",
                name: "applicantHardshipDivorce",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipDivorce",
                name: "applicantHardshipDivorce",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipDivorce",
                name: "applicantHardshipDivorce",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipFamilyDeath: {
        header: "Hardship: Family Death",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipFamilyDeath",
                name: "applicantHardshipFamilyDeath",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipFamilyDeath",
                name: "applicantHardshipFamilyDeath",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipFamilyDeath",
                name: "applicantHardshipFamilyDeath",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipIllness: {
        header: "Hardship: Illness",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIllness",
                name: "applicantHardshipIllness",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIllness",
                name: "applicantHardshipIllness",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIllness",
                name: "applicantHardshipIllness",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipCarRepairs: {
        header: "Hardship: Car Repairs",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipCarRepairs",
                name: "applicantHardshipCarRepairs",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipCarRepairs",
                name: "applicantHardshipCarRepairs",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipCarRepairs",
                name: "applicantHardshipCarRepairs",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipIncreaseInExpenses: {
        header: "Hardship: Increase in expenses",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncreaseInExpenses",
                name: "applicantHardshipIncreaseInExpenses",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncreaseInExpenses",
                name: "applicantHardshipIncreaseInExpenses",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipIncreaseInExpenses",
                name: "applicantHardshipIncreaseInExpenses",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipHomeRepairs: {
        header: "Hardship: Home Repairs",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipHomeRepairs",
                name: "applicantHardshipHomeRepairs",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipHomeRepairs",
                name: "applicantHardshipHomeRepairs",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipHomeRepairs",
                name: "applicantHardshipHomeRepairs",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipMedicalExpenses: {
        header: "Hardship: Medical Expenses",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipMedicalExpenses",
                name: "applicantHardshipMedicalExpenses",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipMedicalExpenses",
                name: "applicantHardshipMedicalExpenses",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipMedicalExpenses",
                name: "applicantHardshipMedicalExpenses",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantHardshipOther: {
        header: "Hardship: Other",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipOther",
                name: "applicantHardshipOther",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Briefly explain the hardship: ",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipOther",
                name: "applicantHardshipOther",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantHardshipOther",
                name: "applicantHardshipOther",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantFinancialAssistance: {
        header: "Interested in Financial Assistance (If available)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFinancialAssistance",
                name: "applicantFinancialAssistance",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFinancialAssistance",
                name: "applicantFinancialAssistance",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFinancialAssistance",
                name: "applicantFinancialAssistance",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantMortgageAssistance: {
        header: "Interested in Mortgage Asistance (Working to provide loss mitigation to servicer/lender)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMortgageAssistance",
                name: "applicantMortgageAssistance",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMortgageAssistance",
                name: "applicantMortgageAssistance",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantMortgageAssistance",
                name: "applicantMortgageAssistance",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantCrisisBudgeting: {
        header: "Interested in Crisis Budgeting",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCrisisBudgeting",
                name: "applicantCrisisBudgeting",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCrisisBudgeting",
                name: "applicantCrisisBudgeting",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCrisisBudgeting",
                name: "applicantCrisisBudgeting",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantLegalReferral: {
        header: "Interested in Legal Referral",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLegalReferral",
                name: "applicantLegalReferral",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "Comments and if you have received assistance, how much and from whom?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLegalReferral",
                name: "applicantLegalReferral",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLegalReferral",
                name: "applicantLegalReferral",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantFundsAvailable: {
        header: "Do you have any funds available to use toward the house payment (Applicant)? (Bank statements are included as a required documentation).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFundsAvailable",
                name: "applicantFundsAvailable",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFundsAvailable",
                name: "applicantFundsAvailable",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantFundsAvailable",
                name: "applicantFundsAvailable",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    coApplicantFundsAvailable: {
        header: "Do you have any funds available to use toward the house payment (Co-Applicant)? (Bank statements are included as a required documentation).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantFundsAvailable",
                name: "coApplicantFundsAvailable",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantFundsAvailable",
                name: "coApplicantFundsAvailable",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantFundsAvailable",
                name: "coApplicantFundsAvailable",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantIfBroughtCurrent: {
        header: "If you were brought current, will you be able to continue to make on time payments?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIfBroughtCurrent",
                name: "applicantIfBroughtCurrent",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIfBroughtCurrent",
                name: "applicantIfBroughtCurrent",
                value: "no",
                answer: "No",
                moreAnswer: true,
                moreLabel: "If no, please explain why?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantIfBroughtCurrent",
                name: "applicantIfBroughtCurrent",
                value: "NA",
                answer: "N/A",
                required: true
            },
        ]
    },
    applicantActivelyMakeFullPayments: {
        header: "Are you actively making full current payment?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePayments",
                name: "applicantActivelyMakePayments",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePayments",
                name: "applicantActivelyMakePayments",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    applicantActivelyMakePartialPayments: {
        header: "Are you actively making partial current payment?",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePartialPayments",
                name: "applicantActivelyMakePartialPayments",
                value: "yes",
                answer: "Yes",
                moreAnswer: true,
                moreLabel: "How much?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantActivelyMakePartialPayments",
                name: "applicantActivelyMakePartialPayments",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    applicantLenderToOutstandingBalance: {
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
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "no",
                answer: "No",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantLenderToOutstandingBalance",
                name: "applicantLenderToOutstandingBalance",
                value: "dont know",
                answer: "Don't Know",
                required: true
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
                required: true
            },
        ]
    },
    applicantCharlotteResidents: {
        header: "For Charlotte residents only: ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCharlotteResidents",
                name: "applicantCharlotteResidents",
                value: "not applicable",
                answer: "Not Applicable",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCharlotteResidents",
                name: "applicantCharlotteResidents",
                value: "dream key partners/charlotte-mecklenburg housing partnership",
                answer: " Yes, I have applied and been approved for the COVID-19 funds from DreamKey Partners formerly known as the Charlotte-Mecklenburg Housing Partnership",
                moreAnswer: true,
                moreLabel: "if you received assistance, how much?",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCharlotteResidents",
                name: "applicantCharlotteResidents",
                value: "no",
                answer: "No, I have applied and was not approved for the COVID-19 funds from DreamKey Partners formerly known as the Charlotte-Mecklenburg Housing Partnership",
                required: true
            },
        ]
    },
    applicantUSStatus: {
        header: "I certify that I am one of the following: A US Citizen, permanent resident, have eligible immigration status or have Deferred Action for Childhood Arrival (DACA) status.",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantUSStatus",
                name: "applicantUSStatus",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantUSStatus",
                name: "applicantUSStatus",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    applicantCourseAcknowledgement: {
        header: "I acknowledge the FREE Foreclosure Education Course is required. The website for the course is: https://www.ehomeamerica.org/prosperitycdc\n Please take the course as soon as possible after submitting this application as it will help you to understand the Foreclosure Preventing Stages and Options (Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCourseAcknowledgement",
                name: "applicantCourseAcknowledgement",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantCourseAcknowledgement",
                name: "applicantCourseAcknowledgement",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    coApplicantCourseAcknowledgement: {
        header: "I acknowledge the FREE Foreclosure Education Course is required. The website for the course is: https://www.ehomeamerica.org/prosperitycdc\n Please take the course as soon as possible after submitting this application as it will help you to understand the Foreclosure Preventing Stages and Options (Co-Applicant).",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCourseAcknowledgement",
                name: "coApplicantCourseAcknowledgement",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantCourseAcknowledgement",
                name: "coApplicantCourseAcknowledgement",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    lenderInfo: {
        header: "Lender/Mortgager Information",
        inputs: [
            {
                label: "Name of lender/mortgage servicer: ",
                field: "input",
                type: "text",
                forName: "mortgageName",
                name: "mortgageName",
                required: true
            },
            {
                label: "Website Address: ",
                field: "input",
                type: "text",
                forName: "mortgageWebAddress",
                name: "mortgageWebAddress",
                required: true
            },
            {
                label: "Telephone: ",
                field: "input",
                type: "text",
                forName: "mortgageTelephone",
                name: "mortgageTelephone",
                required: true
            },
            {
                label: "Mortgage Loan Account #",
                field: "input",
                type: "text",
                forName: "mortgageAccountNum",
                name: "mortgageAccountNum",
                required: true
            },
        ]
    },
    applicantDeclaration: {
        header: "DECLARATION: By signing this application I certify that the information I/We provided in this application for assistance is CORRECT and FACTUAL.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing accurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file. (Applicant)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDeclaration",
                name: "applicantDeclaration",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantDeclaration",
                name: "applicantDeclaration",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    coApplicantDeclaration: {
        header: "DECLARATION: By signing this application I certify that the information I/We provided in this application for assistance is CORRECT and FACTUAL.  No information has been withheld.  We understand the necessity for accurate and complete information and we will provide any needed information to complete this application.  We understand that deliberately providing accurate information or an unwillingness to timely provide the counselor with the necessary information or documents to assist us will result in a closing of our file. (Co-Applicant)",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDeclaration",
                name: "coApplicantDeclaration",
                value: "yes",
                answer: "Yes",
                required: true
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "coApplicantDeclaration",
                name: "coApplicantDeclaration",
                value: "no",
                answer: "No",
                required: true
            },
        ]
    },
    applicantMonthlyNetIncome: {
        header: "Monthly Net Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantMonthlyNetIncome",
                name: "applicantMonthlyNetIncome",
                required: true
            },
        ]
    },
    applicantSpouseMonthlyNetIncome: {
        header: "Monthly Spouse Net Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantSpouseMonthlyNetIncome",
                name: "applicantSpouseMonthlyNetIncome",
                required: false
            },
        ]
    },
    applicantChildSupport: {
        header: "Child Support",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantChildSupport",
                name: "applicantChildSupport",
                required: true
            },
        ]
    },
    applicantSpousalSupport: {
        header: "Spousal Support Received",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantSpousalSupport",
                name: "applicantSpousalSupport",
                required: false
            },
        ]
    },
    applicantRetirementIncome: {
        header: "Retirement Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantRetirementIncome",
                name: "applicantRetirementIncome",
                required: true
            },
        ]
    },
    applicantSocialSecurityIncome: {
        header: "Social Security/Disability Income",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantSocialSecurityIncome",
                name: "applicantSocialSecurityIncome",
                required: false
            },
        ]
    },
    applicantOtherIncome: {
        header: "Other Income (how often): ",
        inputs: [
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantOtherIncome",
                name: "applicantOtherIncome",
                value: "monthly",
                answer: "Monthly",
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantOtherIncome",
                name: "applicantOtherIncome",
                value: "twice annually",
                answer: "Twice Annually",
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantOtherIncome",
                name: "applicantOtherIncome",
                value: "quarterly",
                answer: "Quarterly",
                required: false
            },
            {
                label: "",
                field: "radio",
                type: "radio",
                forName: "applicantOtherIncome",
                name: "applicantOtherIncome",
                value: "annually",
                answer: "Annually",
                required: false
            },
        ]
    },
    applicantOtherMonthlyIncome1: {
        header: "Other Monthly Income #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherMonthlyIncome1",
                name: "applicantOtherMonthlyIncome1",
                required: false
            },
        ]
    },
    applicantOtherMonthlyIncome2: {
        header: "Other Monthly Income #2",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherMonthlyIncome2",
                name: "applicantOtherMonthlyIncome2",
                required: false
            },
        ]
    },
    applicantMortgagePayment: {
        header: "Rent or Mortgage Payment",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantMortgagePayment",
                name: "applicantMortgagePayment",
                required: false
            },
        ]
    },
    applicantAutoLoanPayment: {
        header: "Auto Loan/Lease Payment #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantAutoLoanPayment",
                name: "applicantAutoLoanPayment",
                required: false
            },
        ]
    },
    applicantDebtConsolidation: {
        header: "Debt Consolidation/Other Loan",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantDebtConsolidation",
                name: "applicantDebtConsolidation",
                required: false
            },
        ]
    },
    applicantStudentLoanPayment: {
        header: "Debt Consolidation/Other Loan",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantStudentLoanPayment",
                name: "applicantStudentLoanPayment",
                required: false
            },
        ]
    },
    applicantHomeownerAssocFee: {
        header: "Condo or Homeowner Association Fee",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantHomeownerAssocFee",
                name: "applicantHomeownerAssocFee",
                required: false
            },
        ]
    },
    applicantElectricityPayment: {
        header: "Electricity",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantElectricityPayment",
                name: "applicantElectricityPayment",
                required: false
            },
        ]
    },
    applicantOilPayment: {
        header: "Electricity",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOilPayment",
                name: "applicantOilPayment",
                required: false
            },
        ]
    },
    applicantWaterPayment: {
        header: "Water/Sewer",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantWaterPayment",
                name: "applicantWaterPayment",
                required: false
            },
        ]
    },
    applicantGarbagePayment: {
        header: "Garbage Collection",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantGarbagePayment",
                name: "applicantGarbagePayment",
                required: false
            },
        ]
    },
    applicantLandPhonePayment: {
        header: "Phone (Land line)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantLandPhonePayment",
                name: "applicantLandPhonePayment",
                required: false
            },
        ]
    },
    applicantMobilePayment: {
        header: "Phone(s) (mobile)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantMobilePayment",
                name: "applicantMobilePayment",
                required: false
            },
        ]
    },
    applicantCablePayment: {
        header: "Cable/Satellite",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCablePayment",
                name: "applicantCablePayment",
                required: false
            },
        ]
    },
    applicantStreamingPayment: {
        header: "Streaming (Netflix, Hulu, Disney+, AppleTV, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantStreamingPayment",
                name: "applicantStreamingPayment",
                required: false
            },
        ]
    },
    applicantCarInsurancePayment1: {
        header: "Car Insurance #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCarInsurancePayment1",
                name: "applicantCarInsurancePayment1",
                required: false
            },
        ]
    },
    applicantCarInsurancePayment2: {
        header: "Car Insurance #2",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCarInsurancePayment2",
                name: "applicantCarInsurancePayment2",
                required: false
            },
        ]
    },
    applicantHealthInsurancePayment: {
        header: "Health Insurance (If it is not deducted from your paycheck)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantHealthInsurancePayment",
                name: "applicantHealthInsurancePayment",
                required: false
            },
        ]
    },
    applicantChildSupportPayment: {
        header: "Child Support (If paying)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantChildSupportPayment",
                name: "applicantChildSupportPayment",
                required: false
            },
        ]
    },
    applicantAlimonyPayment: {
        header: "Alimony (If paying)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantAlimonyPayment",
                name: "applicantAlimonyPayment",
                required: false
            },
        ]
    },
    applicantRetirementSavings: {
        header: "Retirement Savings (If not included)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantRetirementSavings",
                name: "applicantRetirementSavings",
                required: false
            },
        ]
    },
    applicantEmergencyFundsSavings: {
        header: "Emergency Funds Savings",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantEmergencyFundsSavings",
                name: "applicantEmergencyFundsSavings",
                required: false
            },
        ]
    },
    applicantCreditCard1: {
        header: "Credit Card #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard1",
                name: "applicantCreditCard1",
                required: false
            },
        ]
    },
    applicantCreditCard2: {
        header: "Credit Card #2",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard2",
                name: "applicantCreditCard2",
                required: false
            },
        ]
    },
    applicantCreditCard3: {
        header: "Credit Card #3",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard3",
                name: "applicantCreditCard3",
                required: false
            },
        ]
    },
    applicantCreditCard4: {
        header: "Credit Card #4",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard4",
                name: "applicantCreditCard4",
                required: false
            },
        ]
    },
    applicantCreditCard5: {
        header: "Credit Card #5",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard5",
                name: "applicantCreditCard5",
                required: false
            },
        ]
    },
    applicantOtherCredit: {
        header: "Other",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantCreditCard5",
                name: "applicantCreditCard5",
                required: false
            },
        ]
    },
    applicantOtherCreditLine1: {
        header: "Other Line of Credit #1",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherCreditLine1",
                name: "applicantOtherCreditLine1",
                required: false
            },
        ]
    },
    applicantOtherCreditLine2: {
        header: "Other Line of Credit #2",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherCreditLine2",
                name: "applicantOtherCreditLine2",
                required: false
            },
        ]
    },
    applicantFoodDeliveries: {
        header: "Food - Deliveries (Pizza, DoorDash, HomeChef, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantFoodDeliveries",
                name: "applicantFoodDeliveries",
                required: false
            },
        ]
    },
    applicantFoodGroceries: {
        header: "Food - Deliveries (That you cook at home)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantFoodGroceries",
                name: "applicantFoodGroceries",
                required: false
            },
        ]
    },
    applicantGasToolsParking: {
        header: "Gasoline, Tools, Parking",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantGasToolsParking",
                name: "applicantGasToolsParking",
                required: false
            },
        ]
    },
    applicantPublicTransportation: {
        header: "Public Transportation - bus, train",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantPublicTransportation",
                name: "applicantPublicTransportation",
                required: false
            },
        ]
    },
    applicantHealthClubMembership: {
        header: "Health Club Membership",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantHealthClubMembership",
                name: "applicantHealthClubMembership",
                required: false
            },
        ]
    },
    applicantDailySnack: {
        header: "Daily Coffee/Snack",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantDailySnack",
                name: "applicantDailySnack",
                required: false
            },
        ]
    },
    applicantLaundry: {
        header: "Laundry/Dry Cleaning",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantLaundry",
                name: "applicantLaundry",
                required: false
            },
        ]
    },
    applicantHouseholdItems: {
        header: "Household Items (Not groceries - Ex. paper towels, toilet paper, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantHouseholdItems",
                name: "applicantHouseholdItems",
                required: false
            },
        ]
    },
    applicantPetCare: {
        header: "Pet Care and supplies",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantPetCare",
                name: "applicantPetCare",
                required: false
            },
        ]
    },
    applicantOtherPeople: {
        header: "Other people (Helping out families and friends)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOtherPeople",
                name: "applicantOtherPeople",
                required: false
            },
        ]
    },
    applicantBabyItems: {
        header: "Baby Items",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantBabyItems",
                name: "applicantBabyItems",
                required: false
            },
        ]
    },
    applicantChildrenAllowances: {
        header: "Children's Allowances",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantChildrenAllowances",
                name: "applicantChildrenAllowances",
                required: false
            },
        ]
    },
    applicantGrooming: {
        header: "Hair Cuts/Grooming/Manicures, etc.",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantGrooming",
                name: "applicantGrooming",
                required: false
            },
        ]
    },
    applicantClothes: {
        header: "Clothes (Paid for by cash)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantClothes",
                name: "applicantClothes",
                required: false
            },
        ]
    },
    applicantBabysitterDaycare: {
        header: "Babysitter/Daycare",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantBabysitterDaycare",
                name: "applicantBabysitterDaycare",
                required: false
            },
        ]
    },
    applicantExpensesForChildren: {
        header: "Expenses for Children (Music lessons, dance, sports, field trips, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantExpensesForChildren",
                name: "applicantExpensesForChildren",
                required: false
            },
        ]
    },
    applicantATMFees: {
        header: "ATM Fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantATMFees",
                name: "applicantATMFees",
                required: false
            },
        ]
    },
    applicantBankFees: {
        header: "Bank Fees (NSF, overdreaft, excessive withdrawals, etc.)",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantBankFees",
                name: "applicantBankFees",
                required: false
            },
        ]
    },
    applicantDonations: {
        header: "Tithes, Charitable Donations",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantDonations",
                name: "applicantDonations",
                required: false
            },
        ]
    },
    applicantOccupationalFees: {
        header: "Occupational Licenses/Fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantOccupationalFees",
                name: "applicantOccupationalFees",
                required: false
            },
        ]
    },
    applicantEmergencySavings: {
        header: "Emergency Savings",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantEmergencySavings",
                name: "applicantEmergencySavings",
                required: false
            },
        ]
    },
    applicantMiscSpending: {
        header: "Miscellaneous spending money",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantMiscSpending",
                name: "applicantMiscSpending",
                required: false
            },
        ]
    },
    applicantPostageFees: {
        header: "Postage/Money Order fees",
        inputs: [
            {
                label: "",
                field: "input",
                type: "text",
                forName: "applicantPostageFees",
                name: "applicantPostageFees",
                required: false
            },
        ]
    },
}