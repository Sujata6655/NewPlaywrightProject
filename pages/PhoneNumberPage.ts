import { Page, Locator, expect } from '@playwright/test';

export class PhoneNumberPage {
  readonly page: Page;

  // Mobile Number
  readonly phoneTextbox: Locator;
  readonly savePhoneButton: Locator;
  readonly verifyPhoneCloseButton: Locator;
  readonly close1button: Locator;
  readonly okButton: Locator;
  readonly profileDropdown: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.phoneTextbox = page.locator(
      'xpath=//*[@id="profilePhoneDetailsId"]//input'
    );

    this.savePhoneButton = page.locator(
      'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
    );

    this.verifyPhoneCloseButton = page.locator(
      'xpath=//*[@id=":ru:"]/button'
    );
    this.close1button = page.locator('xpath=//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
    );
     this.okButton = page.locator(
      '//button[contains(.,"ok")]'
    );

    this.profileDropdown = page.locator('//*[@id="root"]/div/div/div/div/header/div/div/div/button');
    this.logoutButton = page.locator('xpath=/html/body/div[2]/div[3]/ul/li');
    
  }

  // ==========================================
  // MOBILE NUMBER
  // ==========================================

  
  async updateMobileNumber(phoneNumber: string) {
    await this.phoneTextbox.scrollIntoViewIfNeeded();

    await this.phoneTextbox.waitFor({
      state: 'visible',
    });

    await this.phoneTextbox.click();

    const currentValue =
      await this.phoneTextbox.inputValue();

    for (let i = 0; i < currentValue.length + 5; i++) {
      await this.page.keyboard.press('Backspace');
    }

    await this.phoneTextbox.type(phoneNumber);

    await this.page.keyboard.press('Tab');

    await expect(this.savePhoneButton).toBeVisible({
      timeout: 30000,
    });

    await this.savePhoneButton.click();
    await this.close1button.waitFor({
      state: 'visible',
      timeout: 10000,
    });
    

 
  await this.close1button.click


    console.log('Updated Successfully');
  }

  // ==========================================
//   // CLOSE VERIFY PHONE POPUP
async closeVerifyPhonePopup() {
  try {
    const closeButton = this.page.locator(
      'xpath=//*[@aria-label="close"]/parent::button'
    );

    await closeButton.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    await closeButton.click({
      force: true,
    });

    console.log('Verify Phone Number Popup Closed');
  } catch (error) {
    console.log('Failed to close popup:', error);
  }
 
  }
async logout() {
    await expect(this.profileDropdown).toBeVisible();

    await this.profileDropdown.click();

    await expect(this.logoutButton).toBeVisible();

    await this.logoutButton.click();
  }

}

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

