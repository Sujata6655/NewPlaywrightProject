# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button')
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- progressbar:
  - img
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil S"
- progressbar:
  - img
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
- textbox [disabled]: Sunil S
- paragraph: Last Name *
- textbox [disabled]: yadav
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
- textbox [disabled]: magarpatta
- paragraph: City *
- textbox [disabled]: PUNE
- paragraph: Postal Code *
- textbox [disabled]: "411027"
- button "Cancel" [disabled]
- button "Save" [disabled]
- separator
- alert:
  - img "Info:"
  - text: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
- paragraph: Phone Number
- textbox "1 (702) 123-4567": "+919876543222"
- 'button "India: + 91"'
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
  32  | 
  33  | 
  34  | 
  35  |   // Step 3: Verify Edit Profile page opened
  36  |   await expect(
  37  |     page.getByText(/Personal Information/i)
  38  |   ).toBeVisible({ timeout: 60000 });
  39  | 
  40  |   // Step 4: Edit First Name
  41  |   const firstName = page.locator('//input[@name="firstName"]');
  42  | 
  43  |   await expect(firstName).toBeVisible();
  44  |   await firstName.clear();
  45  |   await firstName.fill('Sunil S');
  46  | 
  47  |   // Step 5: Save
  48  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  49  | 
  50  |   // Step 6: Verify Success Message
  51  |   await expect(
  52  |     page.getByText(/Your personal information is saved/i)
  53  |   ).toBeVisible({ timeout: 20000 });
  54  | 
  55  |   await page.locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button').click();
  56  | 
  57  |   // Step 7: Scroll Down
  58  |  // await page.mouse.wheel(0, 1000);
  59  | 
  60  |   // Step 8: Update Mobile Number
  61  |   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  62  | 
  63  |   await mobileField.scrollIntoViewIfNeeded();
  64  |   await mobileField.waitFor({
  65  | 
  66  | state: 'visible',
  67  | 
  68  | timeout: 30000
  69  | 
  70  | });
  71  | 
  72  | console.log(await mobileField.isEnabled()); // false
  73  | 
  74  | console.log(await mobileField.isDisabled()); // true
  75  | 
  76  | //   await mobileField.click();
  77  | //   await mobileField.press('Control+A');
  78  | //   await page.keyboard.press('Delete');
  79  | //   await mobileField.fill('9876543222');
  80  | //   await page.keyboard.press('Tab');
  81  | 
  82  | await mobileField.click();
  83  | 
  84  | // Cursor ko end me le jao
  85  | 
  86  | await page.keyboard.press('End');
  87  | 
  88  | // Existing digits one by one delete karo
  89  | 
  90  | for (let i = 0; i < 10; i++) {
  91  | 
  92  | await page.keyboard.press('Backspace');
  93  | 
  94  | }
  95  | 
  96  | // Naya number ek-ek digit type karo
  97  | 
  98  | const newMobile = '9876543222';
  99  | 
  100 | for (const digit of newMobile) {
  101 | 
  102 | await page.keyboard.press(digit);
  103 | 
  104 | }
  105 | 
  106 | await page.keyboard.press('Tab');
  107 | 
  108 |   // Step 9: Save Mobile Number
  109 |   await page
  110 |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  111 |     .click();
  112 | 
  113 |   // Step 10: Verify Success Message
  114 | const successPopup = page.locator(
  115 | 
  116 | 'xpath=/html[2/body/div[1]/div/div/div/diviv[1]/div/div[1]/div/div[2]'
  117 | 
  118 | );
  119 | 
  120 | // await expect(successPopup).toContainText(/Updated Successfully/i);
  121 | 
  122 | // await expect(successPopup).toBeVisible();
  123 | 
  124 | //await expect(successPopup).toContainText(/Updated Successfully/i);
  125 | 
  126 |   const closeButton = page.locator(
  127 | 
  128 | '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  129 | 
  130 | );
  131 | 
> 132 | await expect(closeButton).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  133 | 
  134 | await closeButton.click();
  135 | 
  136 |   // Close Success Popup if displayed
  137 |   // await page.locator("//*[@id=':ru:']/button").click();
  138 | 
  139 | 
  140 | 
  141 |   // Step 11: Scroll Up
  142 |   await page.mouse.wheel(0, -1000);
  143 | 
  144 |   // Step 12: Click Change Password
  145 |   await page.getByRole('button', { name: /change password/i }).click();
  146 | 
  147 |   // Step 13: Enter Current Password
  148 |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  149 | 
  150 |   // Step 14: Enter New Password
  151 |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  152 | 
  153 |   // Step 15: Enter Confirm Password
  154 |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  155 | 
  156 |   // Step 16: Verify Password Guideline
  157 |   await expect(
  158 |     page.getByText(/password/i)
  159 |   ).toBeVisible();
  160 | 
  161 |   // Step 17: Save Password
  162 |   await page.getByRole('button', { name: /^Save$/ }).click();
  163 | 
  164 |   // Step 18: Verify Password Changed Successfully
  165 |   await expect(
  166 |     page.getByText(/success/i)
  167 |   ).toBeVisible({ timeout: 30000 });
  168 | 
  169 |   // Step 19: Logout
  170 |   await page.getByRole('button', { name: /logout/i }).click();
  171 | 
  172 |   // Step 20: Open URL Again
  173 |   await page.goto(
  174 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  175 |   );
  176 | 
  177 |   // Step 21: Login with New Password
  178 |   await page.locator('#input28').fill(email);
  179 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  180 | 
  181 |   await page.locator('#input54').fill(newPassword);
  182 |   await page.locator("#form46 input[type='submit']").click();
  183 | 
  184 |   await page.waitForLoadState('networkidle');
  185 | 
  186 |   await expect(
  187 |     page.getByText(/Personal Information/i)
  188 |   ).toBeVisible({ timeout: 60000 });
  189 | 
  190 | });
```