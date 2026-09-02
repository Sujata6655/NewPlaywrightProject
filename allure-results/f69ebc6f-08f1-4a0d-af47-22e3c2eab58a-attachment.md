# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PhoneNumber.spec.ts >> Update Mobile Number Successfully
- Location: tests\PhoneNumber.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Your personal information is saved.')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText('Your personal information is saved.')

```

```yaml
- dialog "Verify Phone Number close":
  - heading "Verify Phone Number close" [level=2]:
    - text: Verify Phone Number
    - button "close":
      - img "close"
  - paragraph: Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.
  - paragraph: Confirm the number you want to have verified for this account. Verification requires a valid phone number capable of receiving SMS text notifications.
  - text: Phone Number *
  - textbox "1 (702) 123-4567": "+91919876543229"
  - 'button "India: + 91"'
  - text: Standard carrier rates apply.
  - button "Continue"
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class PhoneNumberPage {
  4  |   readonly page: Page;
  5  | 
  6  |   // Mobile Number
  7  |   readonly phoneTextbox: Locator;
  8  |   readonly savePhoneButton: Locator;
  9  |   readonly verifyPhoneCloseButton: Locator;
  10 |   readonly closebutton: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 | 
  15 |     this.phoneTextbox = page.locator(
  16 |       'xpath=//*[@id="profilePhoneDetailsId"]//input'
  17 |     );
  18 | 
  19 |     this.savePhoneButton = page.locator(
  20 |       'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  21 |     );
  22 | 
  23 |     this.verifyPhoneCloseButton = page.locator(
  24 |       'xpath=//*[@id=":ru:"]/button'
  25 |     );
  26 |     this.closebutton = page.locator('xpath=//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  27 |     );
  28 |   }
  29 | 
  30 |   // ==========================================
  31 |   // MOBILE NUMBER
  32 |   // ==========================================
  33 | 
  34 |   async updateMobileNumber(phoneNumber: string) {
  35 |     await this.phoneTextbox.scrollIntoViewIfNeeded();
  36 | 
  37 |     await this.phoneTextbox.waitFor({
  38 |       state: 'visible',
  39 |     });
  40 | 
  41 |     await this.phoneTextbox.click();
  42 | 
  43 |     const currentValue =
  44 |       await this.phoneTextbox.inputValue();
  45 | 
  46 |     for (let i = 0; i < currentValue.length + 5; i++) {
  47 |       await this.page.keyboard.press('Backspace');
  48 |     }
  49 | 
  50 |     await this.phoneTextbox.type(phoneNumber);
  51 | 
  52 |     await this.page.keyboard.press('Tab');
  53 | 
  54 |     await expect(this.savePhoneButton).toBeVisible({
  55 |       timeout: 30000,
  56 |     });
  57 | 
  58 |     await this.savePhoneButton.click();
  59 | 
  60 |     await expect(
  61 |       this.page.getByText(
  62 |         'Your personal information is saved.'
  63 |       )
> 64 |     ).toBeVisible({
     |       ^ Error: expect(locator).toBeVisible() failed
  65 |       timeout: 20000,
  66 |     });
  67 | 
  68 |     console.log('Updated Successfully');
  69 |   }
  70 | 
  71 |   // ==========================================
  72 |   // CLOSE VERIFY PHONE POPUP
  73 | async closeVerifyPhonePopup() {
  74 |   try {
  75 |     const closeButton = this.page.locator(
  76 |       'xpath=//*[@aria-label="close"]/parent::button'
  77 |     );
  78 | 
  79 |     await closeButton.waitFor({
  80 |       state: 'visible',
  81 |       timeout: 10000,
  82 |     });
  83 | 
  84 |     await closeButton.click({
  85 |       force: true,
  86 |     });
  87 | 
  88 |     console.log('Verify Phone Number Popup Closed');
  89 |   } catch (error) {
  90 |     console.log('Failed to close popup:', error);
  91 |   }
  92 | }
  93 | 
  94 |   // ==========================================
  95 |   // CHANGE PASSWORD
  96 |   // ==========================================
  97 | 
  98 | }
```