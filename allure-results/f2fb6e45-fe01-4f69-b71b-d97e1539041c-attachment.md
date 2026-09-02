# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-2.spec.ts >> Update phone number
- Location: tests\test-2.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#profilePhoneDetailsId').locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')

```

# Page snapshot

```yaml
- generic [ref=f5e6]:
  - banner [ref=f5e7]:
    - generic [ref=f5e8]:
      - link "Go to home" [ref=f5e9] [cursor=pointer]:
        - /url: /
        - img "John Deere Logo" [ref=f5e10]
      - button [ref=f5e13] [cursor=pointer]
  - generic [ref=f5e20]:
    - heading "Manage Account" [level=3] [ref=f5e21]
    - separator [ref=f5e22]
    - generic [ref=f5e23]:
      - generic [ref=f5e24]:
        - paragraph [ref=f5e25]: sign-in information
        - paragraph [ref=f5e26]: Username
        - paragraph [ref=f5e27]: sunil.yadav@yopmail.com
        - paragraph [ref=f5e28]: Want to change your password?
        - button "Change Password" [ref=f5e29] [cursor=pointer]
      - separator [ref=f5e30]
    - generic [ref=f5e31]:
      - paragraph [ref=f5e33]: Personal Information
      - generic [ref=f5e36]:
        - generic [ref=f5e37]:
          - generic [ref=f5e38]:
            - paragraph [ref=f5e39]: First Name *
            - textbox [ref=f5e42]: Sunil singh12
          - generic [ref=f5e43]:
            - paragraph [ref=f5e44]: Last Name *
            - textbox [ref=f5e47]: yadav
        - generic [ref=f5e48]:
          - generic [ref=f5e50]:
            - paragraph [ref=f5e51]: Country *
            - combobox [ref=f5e52]:
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
          - generic [ref=f5e54]:
            - paragraph [ref=f5e55]: Address line 1 *
            - textbox [ref=f5e58]: magarpatta
          - generic [ref=f5e60]:
            - paragraph [ref=f5e61]: City *
            - textbox [ref=f5e64]: PUNE
          - generic [ref=f5e66]:
            - paragraph [ref=f5e67]: Postal Code *
            - textbox [ref=f5e70]: "411027"
          - generic [ref=f5e71]:
            - button "Cancel" [disabled] [ref=f5e72]
            - button "Save" [disabled] [ref=f5e73]
      - separator [ref=f5e74]
      - alert [ref=f5e75]:
        - img "Info:" [ref=f5e77]
        - generic [ref=f5e79]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
      - generic [ref=f5e85]:
        - generic [ref=f5e86]:
          - paragraph [ref=f5e87]: Phone Number
          - img [ref=f5e88] [cursor=pointer]
        - generic [ref=f5e92]:
          - textbox "1 (702) 123-4567" [active] [ref=f5e93]: "+919876543229"
          - 'button "India: + 91" [ref=f5e95]'
      - separator [ref=f5e98]
    - generic [ref=f5e103]:
      - paragraph [ref=f5e104]: Email Address *
      - textbox [disabled] [ref=f5e108]: sunil.yadav@yopmail.com
      - generic [ref=f5e111]: Edit or change of email address is not allowed if Username is an email address.
    - separator [ref=f5e112]
    - button "Back to previous page" [ref=f5e113] [cursor=pointer]
  - generic [ref=f5e114]:
    - contentinfo [ref=f5e115]:
      - navigation "footer navigation" [ref=f5e116]:
        - list [ref=f5e117]:
          - listitem [ref=f5e118]:
            - link "Privacy and Data" [ref=f5e119] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f5e120]:
            - link "Terms of Use" [ref=f5e121] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f5e122]:
            - link "Contact Us" [ref=f5e123] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f5e124]: Copyright © 2026 Deere & Company. All Rights Reserved.
    - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Update phone number', async ({ page }) => {
  4  |   await page.goto(
  5  |     'https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=25gZWrE3NcZq6F0zLCuh_pZZwCKYD28hkGnSkI3yWkw&code_challenge_method=S256&nonce=1eYvjiTY4fTjqzcxsNIo6VYOe3PZHZl6B98qyK2RTiie6dZguffvX2qT9UROShXu&redirect_uri=https%3A%2F%2Faccount.deere.com%2Factmgmt%2Fcallback&response_type=code&state=xM0KtArkiY2i8JLEuxhkyPPhN5zVV92cgIbgnJQZhV2A5N1w0tkAstQXrFga1kIC&scope=profile%20openid'
  6  |   );
  7  | 
  8  |   await page.getByRole('textbox', { name: 'Username' }).fill('sunil.yadav@yopmail.com');
  9  |   await page.getByRole('button', { name: 'Next' }).click();
  10 | 
  11 |   await page.getByRole('textbox', { name: 'Password' }).fill('Testingqaengineer123@');
  12 | 
  13 |   await Promise.all([
  14 |     page.waitForLoadState('networkidle'),
  15 |     page.getByRole('button', { name: 'Sign In' }).click(),
  16 |   ]);
  17 | 
  18 |   // Wait a bit for SSO redirects to finish
  19 |   await page.waitForLoadState('networkidle');
  20 | 
  21 | await page.waitForURL('**account.deere.com/**', {
  22 | 
  23 | timeout: 60000,
  24 | 
  25 | });
  26 | 
  27 |   await page.goto(
  28 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/',
  29 |     {
  30 |       waitUntil: 'networkidle',
  31 |     }
  32 |   );
  33 | 
  34 |   const phoneTextbox = page.getByRole('textbox', {
  35 |     name: /1 \(702\) 123-/,
  36 |   });
  37 | 
  38 |   await phoneTextbox.waitFor({ state: 'visible' });
  39 |   await phoneTextbox.fill('+919876543229');
  40 | 
  41 |   await page
  42 |     .locator('#profilePhoneDetailsId')
> 43 |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]').click();
     |                                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  44 |    
  45 | 
  46 |   await page.getByRole('button', { name: /close/i }).click();
  47 | });
```