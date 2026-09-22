import { Page, Locator, expect } from '@playwright/test';

export class PasswordChangePage {
  readonly page: Page;



  // Change Password
  readonly currentPasswordField: Locator;
  readonly newPasswordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly savePasswordButton: Locator;
  readonly changePasswordButton: Locator;
    readonly profileDropdown: Locator;
  readonly logoutButton: Locator;
 


  // Validation
  readonly guidelines: Locator;
  readonly passwordChangedMsg: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;

    

    // Change Password
    this.changePasswordButton = page.locator(
      'xpath=//*[@id="sigInInfoId"]/div/button'
    );

    this.currentPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
    );

    this.newPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
    );

    this.confirmPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
    );

    this.savePasswordButton = page.locator(
      'xpath=//*[@id="credentialsForm"]/button[2]'
    );

    this.guidelines = page.getByText(
      'Password Guidelines'
    );

    this.passwordChangedMsg = page.getByText(
      'password is changed'
    );

    this.okButton = page.locator(
      '//button[contains(.,"ok")]'
    );
    this.profileDropdown = page.locator('//*[@id="root"]/div/div/div/div/header/div/div/div/button');
    this.logoutButton = page.locator('xpath=/html/body/div[2]/div[3]/ul/li');

  }

 
 

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  // async openChangePassword() {
   

  //   await this.changePasswordButton.scrollIntoViewIfNeeded();

  //   await expect(
  //     this.changePasswordButton
  //   ).toBeVisible({
  //     timeout: 30000,
  //   });

  //   await this.changePasswordButton.click({
  //     force: true,
  //   });

    

// await expect(this.currentPasswordField).toBeVisible({

// timeout: 30000,

// });
//   }

// async openChangePassword() {

//   await this.changePasswordButton.scrollIntoViewIfNeeded();

//   await expect(this.changePasswordButton).toBeVisible({
//     timeout: 30000,
//   });

//   await this.changePasswordButton.click({
//     force: true,
//   });

//   // 👇 Add here
//   await this.page.waitForTimeout(5000);

//   console.log(
//     'Current Password Count:',
//     await this.currentPasswordField.count()
//   );

//   await this.page.screenshot({
//     path: 'change-password.png',
//     fullPage: true,
//   });

//   await expect(this.currentPasswordField).toBeVisible({
//     timeout: 30000,
//   });
// }

async openChangePassword() {
  await expect(this.changePasswordButton).toBeVisible({
    timeout: 30000,
  });

  await expect(this.changePasswordButton).toBeEnabled({
    timeout: 30000,
  });

  console.log(
    "Button visible:",
    await this.changePasswordButton.isVisible()
  );

  console.log(
    "Button enabled:",
    await this.changePasswordButton.isEnabled()
  );

  await this.changePasswordButton.scrollIntoViewIfNeeded();

  await this.changePasswordButton.click();

  await this.page.waitForTimeout(3000);
}

  async handlePopup() {
    try {
      await expect(this.okButton).toBeVisible({
        timeout: 5000,
      });

      await this.okButton.click();
    } catch {
      // The popup is optional and may not be shown for every account.
    }

    
  }

  async enterPasswords(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    await this.currentPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(currentPassword);

    await this.newPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(newPassword);

    await this.confirmPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(confirmPassword);

    await this.page.keyboard.press('Tab');
    await this.page.mouse.click(1200, 200);

    await this.page.waitForTimeout(3000);
  }

  async verifyGuidelinesDisplayed() {
    await expect(this.guidelines).toBeVisible({
      timeout: 30000,
    });
  }

  async savePassword() {
    await expect(
      this.savePasswordButton
    ).toBeEnabled({
      timeout: 60000,
    });

    await this.savePasswordButton.click();
  }

  async verifyPasswordChangedMessage() {
    await expect(
      this.passwordChangedMsg
    ).toBeVisible({
      timeout: 30000,
    });

    console.log(
      'Password Changed Successfully'
    );
  }

  async logout() {
    await expect(this.profileDropdown).toBeVisible();

    await this.profileDropdown.click();

    await expect(this.logoutButton).toBeVisible();

    await this.logoutButton.click();
  }

}
