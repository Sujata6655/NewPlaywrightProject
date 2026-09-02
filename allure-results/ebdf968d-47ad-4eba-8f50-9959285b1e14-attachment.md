# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PhoneNumber.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\PhoneNumber.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Your personal information is saved.')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Your personal information is saved.')

```

```yaml
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil"
- heading "Manage Account" [level=3]
- separator
- paragraph: sign-in information
- paragraph: Username
- paragraph: sunil.yadav@yopmail.com
- paragraph: Want to change your password?
- button "Change Password"
- separator
- paragraph: Personal Information
- paragraph: First Name *
- textbox [disabled]: Sunil
- paragraph: Last Name *
- textbox [disabled]: Yadav
- paragraph: Country *
- combobox [disabled]:
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
- paragraph: Address line 1 *
- textbox [disabled]: Magarpatta City, Hadapsar, Pune, Maharashtra 411028
- paragraph: City *
- textbox [disabled]: Magarpatta
- paragraph: Postal Code *
- textbox [disabled]: "411028"
- button "Cancel" [disabled]
- button "Save" [disabled]
- separator
- alert:
  - img "Info:"
  - text: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
- paragraph: Phone Number
- textbox "1 (702) 123-4567": "+9119876543229"
- 'button "India: + 91"'
- text: Invalid format, please re-enter phone.
- button "Cancel"
- button "Save"
- separator
- paragraph: Email Address *
- textbox [disabled]: sunil.yadav@yopmail.com
- text: Edit or change of email address is not allowed if Username is an email address.
- separator
- button "Back to previous page"
- contentinfo:
  - navigation "footer navigation":
    - list:
      - listitem:
        - link "Privacy and Data":
          - /url: https://www.deere.com/en/privacy-and-data/
      - listitem:
        - link "Terms of Use":
          - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
      - listitem:
        - link "Contact Us":
          - /url: https://account-helppages.deere.com/contact-us
  - text: Copyright © 2026 Deere & Company. All Rights Reserved.
- list
```

# Test source

```ts
  23  |     this.phoneTextbox = page.locator(
  24  |       'xpath=//*[@id="profilePhoneDetailsId"]//input'
  25  |     );
  26  | 
  27  |     this.savePhoneButton = page.locator(
  28  |       'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  29  |     );
  30  | 
  31  |     // Verify Phone Popup Close
  32  |     this.verifyPhoneCloseButton = page.locator(
  33  |       'xpath=//*[@id=":r2k:"]/button'
  34  |     );
  35  | 
  36  |     // Change Password
  37  |     this.changePasswordButton = page.locator(
  38  |       'xpath=//*[@id="sigInInfoId"]/div/button'
  39  |     );
  40  | 
  41  |     this.currentPasswordField = page.locator(
  42  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  43  |     );
  44  | 
  45  |     this.newPasswordField = page.locator(
  46  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  47  |     );
  48  | 
  49  |     this.confirmPasswordField = page.locator(
  50  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  51  |     );
  52  | 
  53  |     this.savePasswordButton = page.locator(
  54  |       'xpath=//*[@id="credentialsForm"]/button[2]'
  55  |     );
  56  | 
  57  |     this.guidelines = page.getByText(
  58  |       'Password Guidelines'
  59  |     );
  60  | 
  61  |     this.passwordChangedMsg = page.getByText(
  62  |       'password is changed'
  63  |     );
  64  | 
  65  |     this.okButton = page.locator(
  66  |       '//button[contains(.,"ok")]'
  67  |     );
  68  | this.operationsEmailInput = page.locator(
  69  |   'xpath=//*[@id="input28"]'
  70  | );
  71  | 
  72  | this.operationsNextButton = page.locator(
  73  |   'xpath=//*[@id="form20"]/div[2]/input'
  74  | );
  75  | 
  76  | this.operationsPasswordInput = page.locator(
  77  |   'xpath=//*[@id="input54"]'
  78  | );
  79  | 
  80  | this.operationsSignInButton = page.locator(
  81  |   'xpath=//*[@id="form46"]/div[2]/input'
  82  | );
  83  | this.operationsCenterButton = page.locator(
  84  |   'xpath=//*[@id="app-mount"]/div/div/div[1]/div[1]/a[1]/button'
  85  | );
  86  | 
  87  |   }
  88  | 
  89  |   // ==========================================
  90  |   // MOBILE NUMBER
  91  |   // ==========================================
  92  | 
  93  |   async updateMobileNumber(phoneNumber: string) {
  94  |     await this.phoneTextbox.scrollIntoViewIfNeeded();
  95  | 
  96  |     await this.phoneTextbox.waitFor({
  97  |       state: 'visible',
  98  |     });
  99  | 
  100 |     await this.phoneTextbox.click();
  101 | 
  102 |     const currentValue =
  103 |       await this.phoneTextbox.inputValue();
  104 | 
  105 |     for (let i = 0; i < currentValue.length + 5; i++) {
  106 |       await this.page.keyboard.press('Backspace');
  107 |     }
  108 | 
  109 |     await this.phoneTextbox.type(phoneNumber);
  110 | 
  111 |     await this.page.keyboard.press('Tab');
  112 | 
  113 |     await expect(this.savePhoneButton).toBeVisible({
  114 |       timeout: 30000,
  115 |     });
  116 | 
  117 |     await this.savePhoneButton.click();
  118 | 
  119 |     await expect(
  120 |       this.page.getByText(
  121 |         'Your personal information is saved.'
  122 |       )
> 123 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  124 |       timeout: 15000,
  125 |     });
  126 | 
  127 |     console.log('Mobile Number Updated Successfully');
  128 |   }
  129 | 
  130 |   // ==========================================
  131 |   // CLOSE VERIFY PHONE POPUP
  132 | async closeVerifyPhonePopup() {
  133 |   try {
  134 |     const closeButton = this.page.locator(
  135 |       'xpath=//*[@aria-label="close"]/parent::button'
  136 |     );
  137 | 
  138 |     await closeButton.waitFor({
  139 |       state: 'visible',
  140 |       timeout: 10000,
  141 |     });
  142 | 
  143 |     await closeButton.click({
  144 |       force: true,
  145 |     });
  146 | 
  147 |     console.log('Verify Phone Number Popup Closed');
  148 |   } catch (error) {
  149 |     console.log('Failed to close popup:', error);
  150 |   }
  151 | }
  152 | 
  153 | }
  154 | 
  155 | 
```