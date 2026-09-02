# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Address.spec.ts >> Update address details twice and logout
- Location: tests\Address.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="firstName"]')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('input[name="firstName"]')
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- main:
  - heading "John Deere logo logo" [level=1]:
    - img "John Deere logo logo"
  - heading "Sign In" [level=2]
  - text: sunil.yadav@yopmail.com
  - alert:
    - alert:
      - text: 
      - paragraph: Unable to sign in
  - text: Password
  - textbox "Password":
    - /placeholder: ""
    - text: Testingqaengineer1218@
  - text: 
  - button "Sign In"
  - link "Forgot Username or Password":
    - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
  - link "Back to sign in":
    - /url: "#"
- link "Contact Us":
  - /url: "https://account-helppages.deere.com/signin-help "
- text: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | 
  4   | export class AddressPage {
  5   |   readonly page: Page;
  6   |   readonly firstName: Locator;
  7   |   readonly lastName: Locator;
  8   |   //readonly email: Locator;
  9   |   readonly country: Locator;
  10  |   readonly state: Locator;
  11  |   readonly city: Locator;
  12  |   readonly zipCode: Locator;
  13  |   readonly address: Locator;
  14  |   readonly savePersonalInfoButton: Locator;
  15  |   readonly useaddressbutton: Locator;
  16  |   readonly changePasswordButton: Locator;
  17  |   readonly profileDropdown: Locator;
  18  |   readonly logoutButton: Locator;
  19  | 
  20  |   constructor(page: Page) {
  21  |     this.page = page;
  22  | 
  23  |     this.firstName = page.locator('input[name="firstName"]');
  24  |     
  25  |     this.lastName = page.locator('input[name="lastName"]');
  26  | 
  27  |     this.country = page.locator('//*[@id="addressDetailsId"]/div[1]/div/select');
  28  |      this.address = page.locator('input[name="1"]');
  29  |      this.city = page.locator('input[name="3"]');
  30  |     this.state = page.locator('//*[@id="addressDetailsId"]/div[5]/div/select')
  31  |     this.zipCode = page.locator('input[name="5"]');
  32  |  
  33  | 
  34  |     this.savePersonalInfoButton = page.locator(
  35  |       'xpath=//div[@id="addressDetailsId"]//button[2]'
  36  |     );
  37  | 
  38  |     this.useaddressbutton = page.locator(
  39  |         'xpath=/html/body/div[2]/div[3]/div/div/div[2]/div[2]/button'
  40  |     );
  41  | 
  42  |     this.changePasswordButton = page.locator(
  43  |       'xpath=//*[@id="sigInInfoId"]/div/button'
  44  |     );
  45  | 
  46  |     this.profileDropdown = page.locator(
  47  |       'xpath=//*[@id="root"]/div/div/div/div/header/div/div/div/button'
  48  |     );
  49  | 
  50  |     this.logoutButton = page.locator(
  51  |       'xpath=/html/body/div[2]/div[3]/ul/li'
  52  |     );
  53  |   }
  54  | 
  55  |   async verifyProfileLoaded() {
> 56  |     await expect(this.firstName).toBeVisible({
      |                                  ^ Error: expect(locator).toBeVisible() failed
  57  |       timeout: 60000,
  58  |     });
  59  |   }
  60  | async updatePersonalInfo(
  61  |   firstName: string,
  62  |   lastName: string,
  63  |   country: string,
  64  |   city: string,
  65  |   zipCode: string,
  66  |   address: string,
  67  |   state: string
  68  | ) {
  69  |   await this.firstName.fill(firstName);
  70  |   await this.lastName.fill(lastName);
  71  | await this.country.scrollIntoViewIfNeeded();
  72  | await expect(this.country).toBeVisible();
  73  | await this.country.selectOption({ label: country });
  74  | await this.state.scrollIntoViewIfNeeded();
  75  | await expect(this.state).toBeVisible();
  76  | 
  77  | const options = await this.state.locator('option').allTextContents();
  78  | console.log('Available options:', options);
  79  | console.log('State value passed:', state);
  80  | 
  81  | await this.state.selectOption({ label: state });
  82  | 
  83  | // Wait for form refresh/API call after state selection
  84  | await this.page.waitForLoadState('networkidle');
  85  | await this.address.click();
  86  | await this.address.press('Control+A');
  87  | await this.address.press('Backspace');
  88  | await this.address.fill(address);
  89  | 
  90  | 
  91  | await this.city.scrollIntoViewIfNeeded();
  92  | await expect(this.city).toBeVisible();
  93  | await this.city.fill(city);
  94  | 
  95  | await expect(this.city).toHaveValue(city, { timeout: 10000 });
  96  | 
  97  | await this.zipCode.scrollIntoViewIfNeeded();
  98  | await expect(this.zipCode).toBeVisible();
  99  | await this.zipCode.fill(zipCode);
  100 | 
  101 | await expect(this.zipCode).toHaveValue(zipCode, { timeout: 10000 });
  102 | 
  103 | console.log('Address:', await this.address.inputValue());
  104 | console.log('City:', await this.city.inputValue());
  105 | console.log('Zip:', await this.zipCode.inputValue());
  106 | 
  107 | await this.savePersonalInfoButton.click();
  108 | await this.useaddressbutton.waitFor({ state: 'visible', timeout: 10000 });
  109 | await this.useaddressbutton.click();
  110 |  
  111 | }
  112 | 
  113 | async updatePersonalInfo1(
  114 |   firstName1: string,
  115 |   lastName1: string,
  116 |   country1: string,
  117 |   city1: string,
  118 |   zipCode1: string,
  119 |   address1: string,
  120 |   state1: string
  121 | ) {
  122 |   await this.firstName.fill(firstName1);
  123 |   await this.lastName.fill(lastName1);
  124 | await this.country.scrollIntoViewIfNeeded();
  125 | await expect(this.country).toBeVisible();
  126 | await this.country.selectOption({ label: country1 });
  127 | await this.state.scrollIntoViewIfNeeded();
  128 | await expect(this.state).toBeVisible();
  129 | 
  130 | const options = await this.state.locator('option').allTextContents();
  131 | console.log('Available options:', options);
  132 | console.log('State value passed:', state1);
  133 | 
  134 | await this.state.selectOption({ label: state1 });
  135 | 
  136 | // Wait for form refresh/API call after state selection
  137 | await this.page.waitForLoadState('networkidle');
  138 | await this.address.click();
  139 | await this.address.press('Control+A');
  140 | await this.address.press('Backspace');
  141 | await this.address.fill(address1);
  142 | 
  143 | 
  144 | await this.city.scrollIntoViewIfNeeded();
  145 | await expect(this.city).toBeVisible();
  146 | await this.city.fill(city1);
  147 | 
  148 | await expect(this.city).toHaveValue(city1, { timeout: 10000 });
  149 | 
  150 | await this.zipCode.scrollIntoViewIfNeeded();
  151 | await expect(this.zipCode).toBeVisible();
  152 | await this.zipCode.fill(zipCode1);
  153 | 
  154 | await expect(this.zipCode).toHaveValue(zipCode1, { timeout: 10000 });
  155 | 
  156 | console.log('Address:', await this.address.inputValue());
```