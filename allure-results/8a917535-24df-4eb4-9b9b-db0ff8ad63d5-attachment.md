# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Updated Successfully/i)
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByText(/Updated Successfully/i)

```

```yaml
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil S"
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
- textbox "1 (702) 123-4567": "+91997654329"
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
  23  |   //await page.waitForLoadState('networkidle');
  24  | 
  25  |   //await page.waitForTimeout(60000);
  26  |   await expect(page).toHaveTitle(/Edit Profile/i, {
  27  | 
  28  | timeout: 60000
  29  | 
  30  | });
  31  | 
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
  58  |   await page.mouse.wheel(0, 1000);
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
  71  | await page.pause();
  72  |   await mobileField.click();
  73  |   await mobileField.press('Control+A');
  74  |   await page.keyboard.press('Delete');
  75  |   await mobileField.fill('9876543222');
  76  |   await page.keyboard.press('Tab');
  77  | 
  78  |   // Step 9: Save Mobile Number
  79  |   await page
  80  |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  81  |     .click();
  82  | 
  83  |   // Step 10: Verify Success Message
  84  |   await expect(
  85  |     page.getByText(/Updated Successfully/i)
> 86  |   ).toBeVisible({ timeout: 30000 });
      |     ^ Error: expect(locator).toBeVisible() failed
  87  | 
  88  |   // Close Success Popup if displayed
  89  |   // await page.locator("//*[@id=':ru:']/button").click();
  90  | 
  91  | 
  92  | 
  93  |   // Step 11: Scroll Up
  94  |   await page.mouse.wheel(0, -1000);
  95  | 
  96  |   // Step 12: Click Change Password
  97  |   await page.getByRole('button', { name: /change password/i }).click();
  98  | 
  99  |   // Step 13: Enter Current Password
  100 |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  101 | 
  102 |   // Step 14: Enter New Password
  103 |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  104 | 
  105 |   // Step 15: Enter Confirm Password
  106 |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  107 | 
  108 |   // Step 16: Verify Password Guideline
  109 |   await expect(
  110 |     page.getByText(/password/i)
  111 |   ).toBeVisible();
  112 | 
  113 |   // Step 17: Save Password
  114 |   await page.getByRole('button', { name: /^Save$/ }).click();
  115 | 
  116 |   // Step 18: Verify Password Changed Successfully
  117 |   await expect(
  118 |     page.getByText(/success/i)
  119 |   ).toBeVisible({ timeout: 30000 });
  120 | 
  121 |   // Step 19: Logout
  122 |   await page.getByRole('button', { name: /logout/i }).click();
  123 | 
  124 |   // Step 20: Open URL Again
  125 |   await page.goto(
  126 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  127 |   );
  128 | 
  129 |   // Step 21: Login with New Password
  130 |   await page.locator('#input28').fill(email);
  131 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  132 | 
  133 |   await page.locator('#input54').fill(newPassword);
  134 |   await page.locator("#form46 input[type='submit']").click();
  135 | 
  136 |   await page.waitForLoadState('networkidle');
  137 | 
  138 |   await expect(
  139 |     page.getByText(/Personal Information/i)
  140 |   ).toBeVisible({ timeout: 60000 });
  141 | 
  142 | });
```