import { Page, Locator, expect } from '@playwright/test';

export class AddressPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipCode: Locator;
  readonly address: Locator;
  readonly savePersonalInfoButton: Locator;
  readonly useaddressbutton: Locator;
  readonly profileDropdown: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');

    this.country = page.locator(
      'xpath=//*[@id="addressDetailsId"]/div[1]/div/select'
    );

    this.address = page.locator('input[name="1"]');
    this.city = page.locator('input[name="3"]');
    this.state = page.locator('select[name="4"]');
    this.zipCode = page.locator('input[name="5"]');

    this.savePersonalInfoButton = page.locator(
      'xpath=//div[@id="addressDetailsId"]//button[2]'
    );
    
    this.useaddressbutton = page.locator(
      'xpath=/html/body/div[2]/div[3]/div/div/div[2]/div[2]/button'
    );

    this.profileDropdown = page.locator(
      '//*[@id="root"]/div/div/div/div/header/div/div/div/button'
    );

    this.logoutButton = page.locator('xpath=/html/body/div[2]/div[3]/ul/li');
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
    state: string,
    beforeSave?: () => Promise<unknown>
  ): Promise<unknown> {
    // First Name
    await this.firstName.clear();
    await this.firstName.fill(firstName);

    // Last Name
    await this.lastName.clear();
    await this.lastName.fill(lastName);

    // Country
    await this.country.scrollIntoViewIfNeeded();
    await expect(this.country).toBeVisible();
    await this.country.selectOption({ label: country });

    // // State (Optional)
    // const stateVisible = await this.state
    //   .isVisible()
    //   .catch(() => false);

    // if (stateVisible && state) {
    //   const options = await this.state
    //     .locator('option')
    //     .allTextContents();

    //   console.log('Available State Options:', options);
    //   console.log('State Passed:', state);

    //   if (options.includes(state)) {
    //     await this.state.selectOption({ label: state });
    //   } else {
    //     console.log(
    //       `State "${state}" not found. Skipping state selection.`
    //     );
    //   }
    // } else {
    //   console.log(
    //     `State dropdown not available for country: ${country}`
    //   );
    // }
    // Select Country


// Wait for State dropdown to load
await this.state.waitFor({
  state: 'visible',
  timeout: 10000
}).catch(() => {});

// State (Optional)
const stateVisible = await this.state
  .isVisible()
  .catch(() => false);

if (stateVisible && state) {

  const options = await this.state
    .locator('option')
    .allTextContents();

  console.log('Available State Options:', options);
  console.log('State Passed:', state);

  if (
    options.some(
      option =>
        option.trim() === state.trim()
    )
  ) {
    await this.state.selectOption({
      label: state
    });
  } else {
    console.log(
      `State "${state}" not found. Available states: ${options.join(', ')}`
    );
  }
} else {
  console.log(
    `State dropdown not available for country: ${country}`
  );
}


    // Address
    await this.address.scrollIntoViewIfNeeded();
    await expect(this.address).toBeVisible();

    await this.address.click();
    await this.address.press('Control+A');
    await this.address.press('Backspace');
    await this.address.fill(address);

    // City
    await this.city.scrollIntoViewIfNeeded();
    await expect(this.city).toBeVisible();

    await this.city.click();
    await this.city.press('Control+A');
    await this.city.press('Backspace');
    await this.city.fill(city);

    // Zip Code
    await this.zipCode.scrollIntoViewIfNeeded();
    await expect(this.zipCode).toBeVisible();

    await this.zipCode.click();
    await this.zipCode.press('Control+A');
    await this.zipCode.press('Backspace');
    await this.zipCode.fill(zipCode);

    console.log('Address:', await this.address.inputValue());
    console.log('City:', await this.city.inputValue());
    console.log('Zip:', await this.zipCode.inputValue());

    // Save
    const saveResponsePromise = beforeSave?.();
    await this.savePersonalInfoButton.click();
  
    const successMessage = this.page.getByText(/success|updated|saved/i);

if (await successMessage.isVisible().catch(() => false)) {
  console.log('Success message displayed');

  await this.page.keyboard.press('Escape');

  await successMessage
    .waitFor({
      state: 'hidden',
      timeout: 10000
    })
    .catch(() => {});

  console.log('Success message closed');
}
try {
  await this.useaddressbutton.waitFor({
    state: 'visible',
    timeout: 10000,
  });

  await this.useaddressbutton.scrollIntoViewIfNeeded();

  await expect(this.useaddressbutton).toBeEnabled();

  await this.useaddressbutton.click();

  console.log('Address validation popup handled');
} catch (error) {
  console.log('No address validation popup displayed');
}

    // Address validation popup
  //   const popupVisible = await this.useaddressbutton
  //     .isVisible()
  //     .catch(() => false);

  //   if (popupVisible) {
  //     await this.useaddressbutton.click();
  //     console.log('Address validation popup handled');
  //   } else {
  //     console.log('No address validation popup displayed');
  //   }

    const saveResponse = await saveResponsePromise;

    // Wait for save completion
    console.log('Profile saved successfully');
    return saveResponse;
   }
  
   async logout() {
    await expect(this.profileDropdown).toBeVisible();

    await this.profileDropdown.click();

    await expect(this.logoutButton).toBeVisible();

    await this.logoutButton.click();
  }
}