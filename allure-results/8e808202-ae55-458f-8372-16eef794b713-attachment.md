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

Locator: getByText(/Your personal information is saved/i)
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText(/Your personal information is saved/i)
  - Test timeout of 30000ms exceeded.

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
- textbox: Sunil S
- paragraph: Last Name *
- textbox: yadav
- paragraph: Country *
- combobox:
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
- textbox: magarpatta
- paragraph: City *
- textbox: PUNE
- paragraph: Postal Code *
- textbox: "411027"
- button "Cancel"
- button "Save"
- separator
- alert:
  - img "Info:"
  - text: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
- paragraph: Phone Number
- textbox "1 (702) 123-4567" [disabled]: "+919876543222"
- 'button "India: + 91"'
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile and Change Password', async ({ page }) => {
  4   | 
  5   |   const email = 'sunil.yadav@yopmail.com';
  6   |   const currentPassword = 'Test@111111';
  7   |   const newPassword = 'Test@111114';
  8   | 
  9   |   // Step 1: Open URL
  10  |   await page.goto(
  11  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  12  |   );
  13  | 
  14  |   // Step 2: Verify Sign In title
  15  | //   await expect(page).toHaveTitle(/Sign In/i);
  16  | 
  17  |   // Login
  18  |   await page.locator('#input28').fill(email);
  19  |   await page.locator("//*[@id='form20']/div[2]/input").click();
  20  | 
  21  |   await page.locator('#input54').fill(currentPassword);
  22  |   await page.locator("#form46 input[type='submit']").click();
  23  |   await page.waitForLoadState('networkidle');
  24  | 
  25  |   //await page.waitForTimeout(50000);
  26  | //   await expect(page).toHaveTitle(/Edit Profile/i, {
  27  | 
  28  | 
  29  | // timeout: 60000
  30  | 
  31  | // });
  32  | 
  33  |  await expect(page).toHaveTitle(/John Deere - Sign In|Edit Profile/i);
  34  | 
  35  | 
  36  | 
  37  | 
  38  |   //Step 3: Verify Edit Profile page opened
  39  |   await expect(page.getByText(/Personal Information/i)
  40  |   ).toBeVisible({ timeout: 60000 });
  41  | 
  42  |   // Step 4: Edit First Name
  43  |   const firstName = page.locator('//input[@name="firstName"]');
  44  | 
  45  |   await expect(firstName).toBeVisible();
  46  |   await firstName.clear();
  47  |   await firstName.fill('Sunil S');
  48  | 
  49  | 
  50  | // Step 4: Edit First Name
  51  | 
  52  | 
  53  | 
  54  |   // Step 5: Save
  55  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  56  | 
  57  |   // Step 6: Verify Success Message
  58  |   
  59  |   await expect(
  60  |     page.getByText(/Your personal information is saved/i)
> 61  |   ).toBeVisible({ timeout: 20000 });
      |     ^ Error: expect(locator).toBeVisible() failed
  62  | 
  63  |   await page.locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button').click();
  64  | 
  65  |   // Step 7: Scroll Down
  66  |  // await page.mouse.wheel(0, 1000);
  67  | 
  68  | //   // Step 8: Update Mobile Number
  69  | //   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  70  | 
  71  | //   //await mobileField.scrollIntoViewIfNeeded();
  72  | //   await mobileField.waitFor({
  73  | 
  74  | // state: 'visible',
  75  | 
  76  | // timeout: 40000
  77  | 
  78  | // });
  79  | 
  80  | // console.log(await mobileField.isEnabled()); // false
  81  | 
  82  | // console.log(await mobileField.isDisabled()); // true
  83  | 
  84  | // //   await mobileField.click();
  85  | // //   await mobileField.press('Control+A');
  86  | // //   await page.keyboard.press('Delete');
  87  | // //   await mobileField.fill('9876543222');
  88  | // //   await page.keyboard.press('Tab');
  89  | 
  90  | // await mobileField.click();
  91  | 
  92  | // // Cursor ko end me le jao
  93  | 
  94  | // await page.keyboard.press('End');
  95  | 
  96  | // // Existing digits one by one delete karo
  97  | 
  98  | // for (let i = 0; i < 10; i++) {
  99  | 
  100 | // await page.keyboard.press('Backspace');
  101 | 
  102 | // }
  103 | 
  104 | // // Naya number ek-ek digit type karo
  105 | 
  106 | // const newMobile = '9876543227';
  107 | 
  108 | // for (const digit of newMobile) {
  109 | 
  110 | // await page.keyboard.type(digit);
  111 | 
  112 | // }
  113 | 
  114 | // await page.keyboard.press('Tab');
  115 | 
  116 | //   // Step 9: Save Mobile Number
  117 | //   await page
  118 | //     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  119 | //     .click();
  120 | 
  121 | //   // Step 10: Verify Success Message
  122 | // const successPopup = page.locator(
  123 | 
  124 | // 'xpath=/html[2/body/div[1]/div/div/div/diviv[1]/div/div[1]/div/div[2]'
  125 | 
  126 | // );
  127 | 
  128 | 
  129 | 
  130 | // await expect(successPopup).toContainText(/Updated Successfully/i);
  131 | 
  132 | // await expect(successPopup).toBeVisible();
  133 | 
  134 | //await expect(successPopup).toContainText(/Updated Successfully/i);
  135 | 
  136 | //   const closeButton = page.locator(
  137 | 
  138 | // '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  139 | 
  140 | // );
  141 | 
  142 | // await expect(closeButton).toBeVisible();
  143 | 
  144 | // await closeButton.click();
  145 | 
  146 |   //Close Success Popup if displayed
  147 | //   await page.locator("//*[@id=':ru:']/button").click();
  148 | 
  149 | 
  150 | 
  151 |   // Step 11: Scroll Up
  152 | 
  153 | 
  154 |   // Step 12: Click Change Password
  155 | const changePasswordButton = page.locator(
  156 | 
  157 | 'xpath=//*[@id="sigInInfoId"]/div/button'
  158 | 
  159 | );
  160 | 
  161 | await expect(changePasswordButton).toBeVisible();
```