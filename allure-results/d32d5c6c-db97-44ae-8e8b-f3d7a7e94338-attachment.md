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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')

```

# Page snapshot

```yaml
- generic [ref=f4e6]:
  - banner [ref=f4e7]:
    - generic [ref=f4e8]:
      - link "Go to home" [ref=f4e9] [cursor=pointer]:
        - /url: /
        - img "John Deere Logo" [ref=f4e10]
      - button [ref=f4e13] [cursor=pointer]
  - generic [ref=f4e18]:
    - status [ref=f4e19]:
      - img "Success:" [ref=f4e21]
      - generic [ref=f4e23]:
        - paragraph [ref=f4e24]: Success
        - paragraph [ref=f4e25]: Your personal information is saved.
      - button "Close" [ref=f4e28] [cursor=pointer]
    - generic [ref=f4e32]:
      - heading "Manage Account" [level=3] [ref=f4e33]
      - separator [ref=f4e34]
      - generic [ref=f4e35]:
        - generic [ref=f4e36]:
          - paragraph [ref=f4e37]: sign-in information
          - paragraph [ref=f4e38]: Username
          - paragraph [ref=f4e39]: sunil.yadav@yopmail.com
          - paragraph [ref=f4e40]: Want to change your password?
          - button "Change Password" [ref=f4e41] [cursor=pointer]
        - separator [ref=f4e42]
      - generic [ref=f4e43]:
        - paragraph [ref=f4e45]: Personal Information
        - generic [ref=f4e48]:
          - generic [ref=f4e49]:
            - generic [ref=f4e50]:
              - paragraph [ref=f4e51]: First Name *
              - textbox [ref=f4e54]: Sunil S
            - generic [ref=f4e55]:
              - paragraph [ref=f4e56]: Last Name *
              - textbox [ref=f4e59]: yadav
          - generic [ref=f4e60]:
            - generic [ref=f4e62]:
              - paragraph [ref=f4e63]: Country *
              - combobox [ref=f4e64]:
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
            - generic [ref=f4e66]:
              - paragraph [ref=f4e67]: Address line 1 *
              - textbox [ref=f4e70]: magarpatta
            - generic [ref=f4e72]:
              - paragraph [ref=f4e73]: City *
              - textbox [ref=f4e76]: PUNE
            - generic [ref=f4e78]:
              - paragraph [ref=f4e79]: Postal Code *
              - textbox [ref=f4e82]: "411027"
            - generic [ref=f4e83]:
              - button "Cancel" [disabled] [ref=f4e84]
              - button "Save" [disabled] [ref=f4e85]
        - separator [ref=f4e86]
        - alert [ref=f4e87]:
          - img "Info:" [ref=f4e89]
          - generic [ref=f4e91]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
        - generic [ref=f4e97]:
          - generic [ref=f4e98]:
            - paragraph [ref=f4e99]: Phone Number
            - img [ref=f4e100] [cursor=pointer]
          - generic [ref=f4e104]:
            - textbox "1 (702) 123-4567" [ref=f4e105]: "+919976543289"
            - 'button "India: + 91" [ref=f4e107]'
        - separator [ref=f4e110]
      - generic [ref=f4e115]:
        - paragraph [ref=f4e116]: Email Address *
        - textbox [disabled] [ref=f4e120]: sunil.yadav@yopmail.com
        - generic [ref=f4e123]: Edit or change of email address is not allowed if Username is an email address.
      - separator [ref=f4e124]
      - button "Back to previous page" [ref=f4e125] [cursor=pointer]
  - generic [ref=f4e126]:
    - contentinfo [ref=f4e127]:
      - navigation "footer navigation" [ref=f4e128]:
        - list [ref=f4e129]:
          - listitem [ref=f4e130]:
            - link "Privacy and Data" [ref=f4e131] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f4e132]:
            - link "Terms of Use" [ref=f4e133] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f4e134]:
            - link "Contact Us" [ref=f4e135] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f4e136]: Copyright © 2026 Deere & Company. All Rights Reserved.
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
  55  |   // Step 7: Scroll Down
  56  |   await page.mouse.wheel(0, 1000);
  57  | 
  58  |   // Step 8: Update Mobile Number
  59  |   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  60  | 
  61  |   await mobileField.scrollIntoViewIfNeeded();
  62  |   await mobileField.waitFor({
  63  | 
  64  | state: 'visible',
  65  | 
  66  | timeout: 30000
  67  | 
  68  | });
  69  | 
  70  | await mobileField.focus();
  71  | await page.keyboard.press('Control+A');
  72  | 
  73  | await page.keyboard.press('Delete');
  74  | await mobileField.type('9876543222');
  75  | //   await mobileField.click();
  76  | //   await mobileField.press('Control+A');
  77  | //   await mobileField.press('Backspace');
  78  | //   await mobileField.fill('9876543222');
  79  | //   await page.keyboard.press('Tab');
  80  | 
  81  |   // Step 9: Save Mobile Number
  82  |   await page
  83  |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
> 84  |     .click();
      |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  85  | 
  86  |   // Step 10: Verify Success Message
  87  |   await expect(
  88  |     page.getByText(/Updated Successfully/i)
  89  |   ).toBeVisible({ timeout: 30000 });
  90  | 
  91  |   // Close Success Popup if displayed
  92  |   // await page.locator("//*[@id=':ru:']/button").click();
  93  | 
  94  | 
  95  | 
  96  |   // Step 11: Scroll Up
  97  |   await page.mouse.wheel(0, -1000);
  98  | 
  99  |   // Step 12: Click Change Password
  100 |   await page.getByRole('button', { name: /change password/i }).click();
  101 | 
  102 |   // Step 13: Enter Current Password
  103 |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  104 | 
  105 |   // Step 14: Enter New Password
  106 |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  107 | 
  108 |   // Step 15: Enter Confirm Password
  109 |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  110 | 
  111 |   // Step 16: Verify Password Guideline
  112 |   await expect(
  113 |     page.getByText(/password/i)
  114 |   ).toBeVisible();
  115 | 
  116 |   // Step 17: Save Password
  117 |   await page.getByRole('button', { name: /^Save$/ }).click();
  118 | 
  119 |   // Step 18: Verify Password Changed Successfully
  120 |   await expect(
  121 |     page.getByText(/success/i)
  122 |   ).toBeVisible({ timeout: 30000 });
  123 | 
  124 |   // Step 19: Logout
  125 |   await page.getByRole('button', { name: /logout/i }).click();
  126 | 
  127 |   // Step 20: Open URL Again
  128 |   await page.goto(
  129 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  130 |   );
  131 | 
  132 |   // Step 21: Login with New Password
  133 |   await page.locator('#input28').fill(email);
  134 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  135 | 
  136 |   await page.locator('#input54').fill(newPassword);
  137 |   await page.locator("#form46 input[type='submit']").click();
  138 | 
  139 |   await page.waitForLoadState('networkidle');
  140 | 
  141 |   await expect(
  142 |     page.getByText(/Personal Information/i)
  143 |   ).toBeVisible({ timeout: 60000 });
  144 | 
  145 | });
```