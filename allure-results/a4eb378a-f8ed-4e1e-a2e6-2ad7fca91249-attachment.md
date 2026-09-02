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
    - locator resolved to <input disabled type="tel" required="" id="mobile" name="mobile" maxlength="26" class="form-control " value="+919976543283" placeholder="1 (702) 123-4567"/>
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
    - progressbar [ref=f4e24]
    - generic [ref=f4e28]:
      - heading "Manage Account" [level=3] [ref=f4e29]
      - separator [ref=f4e30]
      - generic [ref=f4e31]:
        - generic [ref=f4e32]:
          - paragraph [ref=f4e33]: sign-in information
          - paragraph [ref=f4e34]: Username
          - paragraph [ref=f4e35]: sunil.yadav@yopmail.com
          - paragraph [ref=f4e36]: Want to change your password?
          - button "Change Password" [ref=f4e37] [cursor=pointer]
        - separator [ref=f4e38]
      - generic [ref=f4e39]:
        - paragraph [ref=f4e41]: Personal Information
        - generic [ref=f4e44]:
          - generic [ref=f4e45]:
            - generic [ref=f4e46]:
              - paragraph [ref=f4e47]: First Name *
              - textbox [ref=f4e50]: Sunil S
            - generic [ref=f4e51]:
              - paragraph [ref=f4e52]: Last Name *
              - textbox [ref=f4e55]: yadav
          - generic [ref=f4e56]:
            - generic [ref=f4e58]:
              - paragraph [ref=f4e59]: Country *
              - combobox [ref=f4e60]:
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
            - generic [ref=f4e62]:
              - paragraph [ref=f4e63]: Address line 1 *
              - textbox [ref=f4e66]: magarpatta
            - generic [ref=f4e68]:
              - paragraph [ref=f4e69]: City *
              - textbox [ref=f4e72]: PUNE
            - generic [ref=f4e74]:
              - paragraph [ref=f4e75]: Postal Code *
              - textbox [ref=f4e78]: "411027"
            - generic [ref=f4e79]:
              - button "Cancel" [ref=f4e80] [cursor=pointer]
              - button "Save" [ref=f4e81] [cursor=pointer]
        - separator [ref=f4e82]
        - alert [ref=f4e83]:
          - img "Info:" [ref=f4e85]
          - generic [ref=f4e87]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
        - generic [ref=f4e93]:
          - generic [ref=f4e94]:
            - paragraph [ref=f4e95]: Phone Number
            - img [ref=f4e96] [cursor=pointer]
          - generic [ref=f4e100]:
            - textbox "1 (702) 123-4567" [disabled] [ref=f4e101]: "+919976543283"
            - 'button "India: + 91" [ref=f4e103]'
        - separator [ref=f4e106]
      - generic [ref=f4e111]:
        - paragraph [ref=f4e112]: Email Address *
        - textbox [disabled] [ref=f4e116]: sunil.yadav@yopmail.com
        - generic [ref=f4e119]: Edit or change of email address is not allowed if Username is an email address.
      - separator [ref=f4e120]
      - button "Back to previous page" [ref=f4e121] [cursor=pointer]
  - generic [ref=f4e122]:
    - contentinfo [ref=f4e123]:
      - navigation "footer navigation" [ref=f4e124]:
        - list [ref=f4e125]:
          - listitem [ref=f4e126]:
            - link "Privacy and Data" [ref=f4e127] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f4e128]:
            - link "Terms of Use" [ref=f4e129] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f4e130]:
            - link "Contact Us" [ref=f4e131] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f4e132]: Copyright © 2026 Deere & Company. All Rights Reserved.
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
> 82  | await mobileField.click();
      |                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  114 |   await expect(
  115 |     page.getByText(/Updated Successfully/i)
  116 |   ).toBeVisible({ timeout: 30000 });
  117 | 
  118 |   const closeButton = page.locator(
  119 | 
  120 | '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  121 | 
  122 | );
  123 | 
  124 | await expect(closeButton).toBeVisible();
  125 | 
  126 | await closeButton.click();
  127 | 
  128 |   // Close Success Popup if displayed
  129 |   // await page.locator("//*[@id=':ru:']/button").click();
  130 | 
  131 | 
  132 | 
  133 |   // Step 11: Scroll Up
  134 |   await page.mouse.wheel(0, -1000);
  135 | 
  136 |   // Step 12: Click Change Password
  137 |   await page.getByRole('button', { name: /change password/i }).click();
  138 | 
  139 |   // Step 13: Enter Current Password
  140 |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  141 | 
  142 |   // Step 14: Enter New Password
  143 |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  144 | 
  145 |   // Step 15: Enter Confirm Password
  146 |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  147 | 
  148 |   // Step 16: Verify Password Guideline
  149 |   await expect(
  150 |     page.getByText(/password/i)
  151 |   ).toBeVisible();
  152 | 
  153 |   // Step 17: Save Password
  154 |   await page.getByRole('button', { name: /^Save$/ }).click();
  155 | 
  156 |   // Step 18: Verify Password Changed Successfully
  157 |   await expect(
  158 |     page.getByText(/success/i)
  159 |   ).toBeVisible({ timeout: 30000 });
  160 | 
  161 |   // Step 19: Logout
  162 |   await page.getByRole('button', { name: /logout/i }).click();
  163 | 
  164 |   // Step 20: Open URL Again
  165 |   await page.goto(
  166 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  167 |   );
  168 | 
  169 |   // Step 21: Login with New Password
  170 |   await page.locator('#input28').fill(email);
  171 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  172 | 
  173 |   await page.locator('#input54').fill(newPassword);
  174 |   await page.locator("#form46 input[type='submit']").click();
  175 | 
  176 |   await page.waitForLoadState('networkidle');
  177 | 
  178 |   await expect(
  179 |     page.getByText(/Personal Information/i)
  180 |   ).toBeVisible({ timeout: 60000 });
  181 | 
  182 | });
```