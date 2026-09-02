import { Page, Locator, expect } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  //readonly email: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipCode: Locator;
  readonly address: Locator;
  readonly savePersonalInfoButton: Locator;
  readonly useaddressbutton: Locator;
  readonly changePasswordButton: Locator;
  readonly profileDropdown: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('input[name="firstName"]');
    
    this.lastName = page.locator('input[name="lastName"]');

    this.country = page.locator('//*[@id="addressDetailsId"]/div[1]/div/select');
     this.address = page.locator('input[name="1"]');
     this.city = page.locator('input[name="3"]');
    this.state = page.locator('//*[@id="addressDetailsId"]/div[5]/div/select')
    this.zipCode = page.locator('input[name="5"]');
 

    this.savePersonalInfoButton = page.locator(
      'xpath=//div[@id="addressDetailsId"]//button[2]'
    );

    this.useaddressbutton = page.locator(
        'xpath=/html/body/div[2]/div[3]/div/div/div[2]/div[2]/button'
    );

    this.changePasswordButton = page.locator(
      'xpath=//*[@id="sigInInfoId"]/div/button'
    );

    this.profileDropdown = page.locator(
      'xpath=//*[@id="root"]/div/div/div/div/header/div/div/div/button'
    );

    this.logoutButton = page.locator(
      'xpath=/html/body/div[2]/div[3]/ul/li'
    );
  }

  async verifyProfileLoaded() {
    await expect(this.firstName).toBeVisible({
      timeout: 60000,
    });
  }
async updatePersonalInfo(
  firstName: string,
  lastName: string,
  country: string,
  city: string,
  zipCode: string,
  address: string,
  state: string
) {
  await this.firstName.fill(firstName);
  await this.lastName.fill(lastName);
await this.country.scrollIntoViewIfNeeded();
await expect(this.country).toBeVisible();
await this.country.selectOption({ label: country });
await this.state.scrollIntoViewIfNeeded();
await expect(this.state).toBeVisible();

const options = await this.state.locator('option').allTextContents();
console.log('Available options:', options);
console.log('State value passed:', state);

await this.state.selectOption({ label: state });

// Wait for form refresh/API call after state selection
await this.page.waitForLoadState('networkidle');
await this.address.click();
await this.address.press('Control+A');
await this.address.press('Backspace');
await this.address.fill(address);


await this.city.scrollIntoViewIfNeeded();
await expect(this.city).toBeVisible();
await this.city.fill(city);

await expect(this.city).toHaveValue(city, { timeout: 10000 });

await this.zipCode.scrollIntoViewIfNeeded();
await expect(this.zipCode).toBeVisible();
await this.zipCode.fill(zipCode);

await expect(this.zipCode).toHaveValue(zipCode, { timeout: 10000 });

console.log('Address:', await this.address.inputValue());
console.log('City:', await this.city.inputValue());
console.log('Zip:', await this.zipCode.inputValue());

await this.savePersonalInfoButton.click();
await this.useaddressbutton.waitFor({ state: 'visible', timeout: 10000 });
await this.useaddressbutton.click();
 
}
  
    
  

  async openChangePassword() {
    await expect(this.changePasswordButton).toBeVisible({
      timeout: 30000,
    });

    await this.changePasswordButton.scrollIntoViewIfNeeded();
    await this.changePasswordButton.click();
  }

  async logout() {
    await expect(this.profileDropdown).toBeVisible();

    await this.profileDropdown.click();

    await expect(this.logoutButton).toBeVisible();

    await this.logoutButton.click();
  }
}