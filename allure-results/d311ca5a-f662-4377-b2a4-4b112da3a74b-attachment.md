# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Address.spec.ts >> Update address details twice and logout
- Location: tests\Address.spec.ts:8:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//li[contains(.,"Logout")]')

```

# Test source

```ts
  98  |       );
  99  |     }
  100 | 
  101 |     // Address
  102 |     await this.address.scrollIntoViewIfNeeded();
  103 |     await expect(this.address).toBeVisible();
  104 | 
  105 |     await this.address.click();
  106 |     await this.address.press('Control+A');
  107 |     await this.address.press('Backspace');
  108 |     await this.address.fill(address);
  109 | 
  110 |     // City
  111 |     await this.city.scrollIntoViewIfNeeded();
  112 |     await expect(this.city).toBeVisible();
  113 | 
  114 |     await this.city.click();
  115 |     await this.city.press('Control+A');
  116 |     await this.city.press('Backspace');
  117 |     await this.city.fill(city);
  118 | 
  119 |     // Zip Code
  120 |     await this.zipCode.scrollIntoViewIfNeeded();
  121 |     await expect(this.zipCode).toBeVisible();
  122 | 
  123 |     await this.zipCode.click();
  124 |     await this.zipCode.press('Control+A');
  125 |     await this.zipCode.press('Backspace');
  126 |     await this.zipCode.fill(zipCode);
  127 | 
  128 |     console.log('Address:', await this.address.inputValue());
  129 |     console.log('City:', await this.city.inputValue());
  130 |     console.log('Zip:', await this.zipCode.inputValue());
  131 | 
  132 |     // Save
  133 |     await this.savePersonalInfoButton.click();
  134 |   
  135 |     const successMessage = this.page.getByText(/success|updated|saved/i);
  136 | 
  137 | if (await successMessage.isVisible().catch(() => false)) {
  138 |   console.log('Success message displayed');
  139 | 
  140 |   await this.page.keyboard.press('Escape');
  141 | 
  142 |   await successMessage
  143 |     .waitFor({
  144 |       state: 'hidden',
  145 |       timeout: 10000
  146 |     })
  147 |     .catch(() => {});
  148 | 
  149 |   console.log('Success message closed');
  150 | }
  151 | 
  152 |     // Address validation popup
  153 |     const popupVisible = await this.useaddressbutton
  154 |       .isVisible()
  155 |       .catch(() => false);
  156 | 
  157 |     if (popupVisible) {
  158 |       await this.useaddressbutton.click();
  159 |       console.log('Address validation popup handled');
  160 |     } else {
  161 |       console.log('No address validation popup displayed');
  162 |     }
  163 | 
  164 |     // Wait for save completion
  165 |     console.log('Profile saved successfully');
  166 |   }
  167 |   
  168 |    async logout() {
  169 |     await expect(this.profileDropdown).toBeVisible();
  170 | 
  171 |     await this.profileDropdown.click();
  172 | 
  173 |     await expect(this.logoutButton).toBeVisible();
  174 | 
  175 |     await this.logoutButton.click();
  176 |   }
  177 | }
      |                             ^ Error: locator.click: Test ended.
```