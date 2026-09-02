# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PhoneNumber.spec.ts >> Update Mobile Number Successfully
- Location: tests\PhoneNumber.spec.ts:8:5

# Error details

```
TypeError: phoneNumberPage.handlePopup is not a function
```

# Page snapshot

```yaml
- generic [ref=f4e6]:
  - progressbar [ref=f4e8]
  - banner [ref=f4e11]:
    - generic [ref=f4e12]:
      - link "Go to home" [ref=f4e13] [cursor=pointer]:
        - /url: /
        - img "John Deere Logo" [ref=f4e14]
      - button [ref=f4e17] [cursor=pointer]
  - generic [ref=f4e22]:
    - status [ref=f4e23]:
      - img "Success:" [ref=f4e25]
      - generic [ref=f4e27]:
        - paragraph [ref=f4e28]: Success
        - paragraph [ref=f4e29]: Updated Successfully !
      - button "Close" [ref=f4e32] [cursor=pointer]
    - progressbar [ref=f4e36]
    - generic [ref=f4e40]:
      - heading "Manage Account" [level=3] [ref=f4e41]
      - separator [ref=f4e42]
      - generic [ref=f4e43]:
        - generic [ref=f4e44]:
          - paragraph [ref=f4e45]: sign-in information
          - paragraph [ref=f4e46]: Username
          - paragraph [ref=f4e47]: sunil.yadav@yopmail.com
          - paragraph [ref=f4e48]: Want to change your password?
          - button "Change Password" [ref=f4e49] [cursor=pointer]
        - separator [ref=f4e50]
      - generic [ref=f4e51]:
        - paragraph [ref=f4e53]: Personal Information
        - generic [ref=f4e56]:
          - generic [ref=f4e57]:
            - generic [ref=f4e58]:
              - paragraph [ref=f4e59]: First Name *
              - textbox [disabled] [ref=f4e62]: Sunil
            - generic [ref=f4e63]:
              - paragraph [ref=f4e64]: Last Name *
              - textbox [disabled] [ref=f4e67]: Yadav
          - generic [ref=f4e68]:
            - generic [ref=f4e70]:
              - paragraph [ref=f4e71]: Country *
              - combobox [disabled] [ref=f4e72]:
                - option "Afghanistan"
                - option "Albania"
                - option "Algeria"
                - option "American Samoa"
                - option "Andorra"
                - option "Angola"
                - option "Anguilla"
                - option "Antigua and Barbuda"
                - option "Argentina"
                - option "Armenia"
                - option "Australia"
                - option "Austria"
                - option "Azerbaijan"
                - option "Bahamas"
                - option "Bahrain"
                - option "Bailiwick of Jersey"
                - option "Bangladesh"
                - option "Barbados"
                - option "Belgium"
                - option "Belize"
                - option "Benin"
                - option "Bermuda"
                - option "Bhutan"
                - option "Bolivia"
                - option "Bosnia and Herzegovina"
                - option "Botswana"
                - option "Brazil"
                - option "Brunei Darussalam"
                - option "Bulgaria"
                - option "Burkina Faso"
                - option "Burundi"
                - option "Cabo Verde"
                - option "Cambodia"
                - option "Cameroon"
                - option "Canada"
                - option "Cayman Islands"
                - option "Central African Republic"
                - option "Chad"
                - option "Chile"
                - option "China"
                - option "Christmas Island"
                - option "Cocos (Keeling) Islands"
                - option "Colombia"
                - option "Comoros"
                - option "Congo"
                - option "Congo, The Democratic republic of the Congo"
                - option "Cook Islands"
                - option "Costa Rica"
                - option "Cote D'Ivoire"
                - option "Croatia"
                - option "Curacao"
                - option "Cyprus"
                - option "Czechia"
                - option "Denmark"
                - option "Djibouti"
                - option "Dominica"
                - option "Dominican Republic"
                - option "Ecuador"
                - option "Egypt"
                - option "El Salvador"
                - option "Equatorial Guinea"
                - option "Eritrea"
                - option "Estonia"
                - option "Eswatini"
                - option "Ethiopia"
                - option "Falkland Islands (Malvinas)"
                - option "Faroe Islands"
                - option "Fiji"
                - option "Finland"
                - option "France"
                - option "French Guiana"
                - option "French Polynesia"
                - option "Gabon"
                - option "Gambia"
                - option "Georgia"
                - option "Germany"
                - option "Ghana"
                - option "Gibraltar"
                - option "Greece"
                - option "Greenland"
                - option "Grenada"
                - option "Guadeloupe"
                - option "Guam"
                - option "Guatemala"
                - option "Guernsey"
                - option "Guinea"
                - option "Guinea-Bissau"
                - option "Guyana"
                - option "Haiti"
                - option "Holy See"
                - option "Honduras"
                - option "Hong Kong"
                - option "Hungary"
                - option "Iceland"
                - option "India" [selected]
                - option "Indonesia"
                - option "Iraq"
                - option "Ireland"
                - option "Isle of Man"
                - option "Israel"
                - option "Italy"
                - option "Jamaica"
                - option "Japan"
                - option "Jordan"
                - option "Kazakhstan"
                - option "Kenya"
                - option "Kiribati"
                - option "Korea, Republic of"
                - option "Kuwait"
                - option "Kyrgyzstan"
                - option "Lao People's Democratic Republic"
                - option "Latvia"
                - option "Lebanon"
                - option "Lesotho"
                - option "Liberia"
                - option "Libyan Arab Jamahiriya"
                - option "Liechtenstein"
                - option "Lithuania"
                - option "Luxembourg"
                - option "Madagascar"
                - option "Malawi"
                - option "Malaysia"
                - option "Maldives"
                - option "Mali"
                - option "Malta"
                - option "Marshall Islands"
                - option "Martinique"
                - option "Mauritania"
                - option "Mauritius"
                - option "Mayotte"
                - option "Mexico"
                - option "Micronesia"
                - option "Moldova"
                - option "Monaco"
                - option "Mongolia"
                - option "Montenegro"
                - option "Montserrat"
                - option "Morocco"
                - option "Mozambique"
                - option "Myanmar"
                - option "Namibia"
                - option "Nauru"
                - option "Nepal"
                - option "Netherlands"
                - option "New Caledonia"
                - option "New Zealand"
                - option "Nicaragua"
                - option "Niger"
                - option "Nigeria"
                - option "Niue"
                - option "Norfolk Island"
                - option "North Macedonia"
                - option "Northern Mariana Islands"
                - option "Norway"
                - option "Oman"
                - option "Pakistan"
                - option "Palau"
                - option "Palestinian"
                - option "Panama"
                - option "Papua New Guinea"
                - option "Paraguay"
                - option "Peru"
                - option "Philippines"
                - option "Poland"
                - option "Portugal"
                - option "Puerto Rico"
                - option "Qatar"
                - option "Reunion"
                - option "Romania"
                - option "Rwanda"
                - option "Saint Barthelemy"
                - option "Saint Helena"
                - option "Saint Kitts and Nevis"
                - option "Saint Lucia"
                - option "Saint Martin"
                - option "Saint Pierre and Miquelon"
                - option "Saint Vincent and the Grenadines"
                - option "Samoa"
                - option "San Marino"
                - option "Sao Tome and Principe"
                - option "Saudi Arabia"
                - option "Senegal"
                - option "Serbia"
                - option "Seychelles"
                - option "Sierra Leone"
                - option "Singapore"
                - option "Slovakia"
                - option "Slovenia"
                - option "Solomon Islands"
                - option "Somalia"
                - option "South Africa"
                - option "South Sudan"
                - option "Spain"
                - option "Sri Lanka"
                - option "Sudan"
                - option "Suriname"
                - option "Sweden"
                - option "Switzerland"
                - option "Taiwan, Province of China"
                - option "Tajikistan"
                - option "Tanzania"
                - option "Thailand"
                - option "Togo"
                - option "Tokelau"
                - option "Tonga"
                - option "Trinidad and Tobago"
                - option "Tunisia"
                - option "Turkey"
                - option "Turkmenistan"
                - option "Turks and Caicos Islands"
                - option "Tuvalu"
                - option "Uganda"
                - option "Ukraine"
                - option "United Arab Emirates"
                - option "United Kingdom"
                - option "United States"
                - option "United States Minor Outlying Islands"
                - option "Uruguay"
                - option "Uzbekistan"
                - option "Vanuatu"
                - option "Venezuela"
                - option "Vietnam"
                - option "Virgin Islands, British"
                - option "Virgin Islands, U.S."
                - option "Wallis and Futuna"
                - option "Western Sahara"
                - option "Yemen"
                - option "Zambia"
                - option "Zimbabwe"
            - generic [ref=f4e74]:
              - paragraph [ref=f4e75]: Address line 1 *
              - textbox [disabled] [ref=f4e78]: Magarpatta City, Hadapsar, Pune, Maharashtra 411028
            - generic [ref=f4e80]:
              - paragraph [ref=f4e81]: City *
              - textbox [disabled] [ref=f4e84]: Magarpatta
            - generic [ref=f4e86]:
              - paragraph [ref=f4e87]: Postal Code *
              - textbox [disabled] [ref=f4e90]: "411028"
            - generic [ref=f4e91]:
              - button "Cancel" [disabled] [ref=f4e92]
              - button "Save" [disabled] [ref=f4e93]
        - separator [ref=f4e94]
        - alert [ref=f4e95]:
          - img "Info:" [ref=f4e97]
          - generic [ref=f4e100]:
            - text: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
            - progressbar [ref=f4e102]
        - generic [ref=f4e109]:
          - generic [ref=f4e110]:
            - paragraph [ref=f4e111]: Phone Number
            - img [ref=f4e112] [cursor=pointer]
          - generic [ref=f4e116]:
            - textbox "1 (702) 123-4567" [ref=f4e117]: "+91919876543229"
            - 'button "India: + 91" [ref=f4e119]'
        - separator [ref=f4e122]
      - generic [ref=f4e127]:
        - paragraph [ref=f4e128]: Email Address *
        - textbox [disabled] [ref=f4e132]: sunil.yadav@yopmail.com
        - generic [ref=f4e135]: Edit or change of email address is not allowed if Username is an email address.
      - separator [ref=f4e136]
      - button "Back to previous page" [ref=f4e137] [cursor=pointer]
  - generic [ref=f4e138]:
    - contentinfo [ref=f4e139]:
      - navigation "footer navigation" [ref=f4e140]:
        - list [ref=f4e141]:
          - listitem [ref=f4e142]:
            - link "Privacy and Data" [ref=f4e143] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f4e144]:
            - link "Terms of Use" [ref=f4e145] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f4e146]:
            - link "Contact Us" [ref=f4e147] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f4e148]: Copyright © 2026 Deere & Company. All Rights Reserved.
    - list
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ProfilePage } from '../pages/profilePage';
  4  | import { PhoneNumberPage } from '../pages/PhoneNumberPage';
  5  | import testData from '../Fixtures/testData.json';
  6  | 
  7  | 
  8  | test('Update Mobile Number Successfully', async ({ page }) => {
  9  |   test.setTimeout(180000);
  10 |   const profilePage = new ProfilePage(page);
  11 | 
  12 |   const loginPage = new LoginPage(page);
  13 | 
  14 |   const phoneNumberPage = new PhoneNumberPage(page);
  15 | 
  16 |   await loginPage.navigate(testData.Url);
  17 | 
  18 |   await loginPage.login(
  19 |     testData.email,
  20 |     testData.currentPassword
  21 |   );
  22 | 
  23 |   await profilePage.verifyProfileLoaded();
  24 | 
  25 |   await phoneNumberPage.updateMobileNumber(
  26 |     testData.mobileNumber
  27 |   );
  28 | 
> 29 |   await phoneNumberPage.handlePopup();
     |                         ^ TypeError: phoneNumberPage.handlePopup is not a function
  30 | 
  31 |   await profilePage.logout();
  32 | });
```