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
  - waiting for locator('//input[@id="mobile" and @type="tel"]')
    - locator resolved to <input disabled type="tel" required="" id="mobile" name="mobile" maxlength="26" class="form-control " value="+919976543289" placeholder="1 (702) 123-4567"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms

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
        - paragraph [ref=f4e29]: Your personal information is saved.
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
              - textbox [ref=f4e62]: Sunil S
            - generic [ref=f4e63]:
              - paragraph [ref=f4e64]: Last Name *
              - textbox [ref=f4e67]: yadav
          - generic [ref=f4e68]:
            - generic [ref=f4e70]:
              - paragraph [ref=f4e71]: Country *
              - combobox [ref=f4e72]:
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
              - textbox [ref=f4e78]: magarpatta
            - generic [ref=f4e80]:
              - paragraph [ref=f4e81]: City *
              - textbox [ref=f4e84]: PUNE
            - generic [ref=f4e86]:
              - paragraph [ref=f4e87]: Postal Code *
              - textbox [ref=f4e90]: "411027"
            - generic [ref=f4e91]:
              - button "Cancel" [ref=f4e92] [cursor=pointer]
              - button "Save" [ref=f4e93] [cursor=pointer]
        - separator [ref=f4e94]
        - alert [ref=f4e95]:
          - img "Info:" [ref=f4e97]
          - generic [ref=f4e99]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
        - generic [ref=f4e105]:
          - generic [ref=f4e106]:
            - paragraph [ref=f4e107]: Phone Number
            - img [ref=f4e108] [cursor=pointer]
          - generic [ref=f4e112]:
            - textbox "1 (702) 123-4567" [disabled] [ref=f4e113]: "+919976543289"
            - 'button "India: + 91" [ref=f4e115]'
        - separator [ref=f4e118]
      - generic [ref=f4e123]:
        - paragraph [ref=f4e124]: Email Address *
        - textbox [disabled] [ref=f4e128]: sunil.yadav@yopmail.com
        - generic [ref=f4e131]: Edit or change of email address is not allowed if Username is an email address.
      - separator [ref=f4e132]
      - button "Back to previous page" [ref=f4e133] [cursor=pointer]
  - generic [ref=f4e134]:
    - contentinfo [ref=f4e135]:
      - navigation "footer navigation" [ref=f4e136]:
        - list [ref=f4e137]:
          - listitem [ref=f4e138]:
            - link "Privacy and Data" [ref=f4e139] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f4e140]:
            - link "Terms of Use" [ref=f4e141] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f4e142]:
            - link "Contact Us" [ref=f4e143] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f4e144]: Copyright © 2026 Deere & Company. All Rights Reserved.
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
  53  |   ).toBeVisible({ timeout: 30000 });
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
> 69  |   await mobileField.click();
      |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  70  |   await mobileField.press('Control+A');
  71  |   await mobileField.press('Backspace');
  72  |   await mobileField.fill('9876543222');
  73  |   await page.keyboard.press('Tab');
  74  | 
  75  |   // Step 9: Save Mobile Number
  76  |   await page
  77  |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  78  |     .click();
  79  | 
  80  |   // Step 10: Verify Success Message
  81  |   await expect(
  82  |     page.getByText(/Updated Successfully/i)
  83  |   ).toBeVisible({ timeout: 30000 });
  84  | 
  85  |   // Close Success Popup if displayed
  86  |   // await page.locator("//*[@id=':ru:']/button").click();
  87  | 
  88  | 
  89  | 
  90  |   // Step 11: Scroll Up
  91  |   await page.mouse.wheel(0, -1000);
  92  | 
  93  |   // Step 12: Click Change Password
  94  |   await page.getByRole('button', { name: /change password/i }).click();
  95  | 
  96  |   // Step 13: Enter Current Password
  97  |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  98  | 
  99  |   // Step 14: Enter New Password
  100 |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  101 | 
  102 |   // Step 15: Enter Confirm Password
  103 |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  104 | 
  105 |   // Step 16: Verify Password Guideline
  106 |   await expect(
  107 |     page.getByText(/password/i)
  108 |   ).toBeVisible();
  109 | 
  110 |   // Step 17: Save Password
  111 |   await page.getByRole('button', { name: /^Save$/ }).click();
  112 | 
  113 |   // Step 18: Verify Password Changed Successfully
  114 |   await expect(
  115 |     page.getByText(/success/i)
  116 |   ).toBeVisible({ timeout: 30000 });
  117 | 
  118 |   // Step 19: Logout
  119 |   await page.getByRole('button', { name: /logout/i }).click();
  120 | 
  121 |   // Step 20: Open URL Again
  122 |   await page.goto(
  123 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  124 |   );
  125 | 
  126 |   // Step 21: Login with New Password
  127 |   await page.locator('#input28').fill(email);
  128 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  129 | 
  130 |   await page.locator('#input54').fill(newPassword);
  131 |   await page.locator("#form46 input[type='submit']").click();
  132 | 
  133 |   await page.waitForLoadState('networkidle');
  134 | 
  135 |   await expect(
  136 |     page.getByText(/Personal Information/i)
  137 |   ).toBeVisible({ timeout: 60000 });
  138 | 
  139 | });
```