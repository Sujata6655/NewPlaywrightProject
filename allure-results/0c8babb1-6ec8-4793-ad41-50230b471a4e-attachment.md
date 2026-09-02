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
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
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
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 | 
  14 |     this.phoneTextbox = page.locator(
  15 |       'xpath=//*[@id="profilePhoneDetailsId"]//input'
  16 |     );
  17 | 
  18 |     this.savePhoneButton = page.locator(
  19 |       'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  20 |     );
  21 | 
  22 |     this.verifyPhoneCloseButton = page.locator(
  23 |       'xpath=//*[@aria-label="close"]/parent::button'
  24 |     );
  25 |   }
  26 | 
  27 |   // ==========================================
  28 |   // MOBILE NUMBER
  29 |   // ==========================================
  30 | 
  31 |   async updateMobileNumber(phoneNumber: string) {
  32 |     await this.phoneTextbox.scrollIntoViewIfNeeded();
  33 | 
  34 |     await this.phoneTextbox.waitFor({
  35 |       state: 'visible',
  36 |     });
  37 | 
  38 |     await this.phoneTextbox.click();
  39 | 
  40 |     const currentValue =
  41 |       await this.phoneTextbox.inputValue();
  42 | 
  43 |     for (let i = 0; i < currentValue.length + 5; i++) {
  44 |       await this.page.keyboard.press('Backspace');
  45 |     }
  46 | 
  47 |     await this.phoneTextbox.type(phoneNumber);
  48 | 
  49 |     await this.page.keyboard.press('Tab');
  50 | 
  51 |     await expect(this.savePhoneButton).toBeVisible({
  52 |       timeout: 30000,
  53 |     });
  54 | 
  55 |     await this.savePhoneButton.click();
  56 | 
  57 |     await expect(
  58 |       this.page.getByText(
  59 |         'Your personal information is saved.'
  60 |       )
> 61 |     ).toBeVisible({
     |       ^ Error: expect(locator).toBeVisible() failed
  62 |       timeout: 15000,
  63 |     });
  64 | 
  65 |     console.log('Mobile Number Updated Successfully');
  66 |   }
  67 | 
  68 |   // ==========================================
  69 |   // CLOSE VERIFY PHONE POPUP
  70 | async closeVerifyPhonePopup() {
  71 |   try {
  72 |     const closeButton = this.page.locator(
  73 |       'xpath=//*[@aria-label="close"]/parent::button'
  74 |     );
  75 | 
  76 |     await closeButton.waitFor({
  77 |       state: 'visible',
  78 |       timeout: 10000,
  79 |     });
  80 | 
  81 |     await closeButton.click({
  82 |       force: true,
  83 |     });
  84 | 
  85 |     console.log('Verify Phone Number Popup Closed');
  86 |   } catch (error) {
  87 |     console.log('Failed to close popup:', error);
  88 |   }
  89 | }
  90 | 
  91 |   // ==========================================
  92 |   // CHANGE PASSWORD
  93 |   // ==========================================
  94 | 
  95 | }
```