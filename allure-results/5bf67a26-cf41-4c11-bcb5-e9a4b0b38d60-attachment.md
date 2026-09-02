# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: changepassword.spec.ts >> Edit Profile and Change Password
- Location: tests\changepassword.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator:  locator('//*[@id="credentialsForm"]/button[2]')
Expected: enabled
Received: disabled
Timeout:  30000ms

Call log:
  - Expect "toBeEnabled" with timeout 30000ms
  - waiting for locator('//*[@id="credentialsForm"]/button[2]')
    62 × locator resolved to <button disabled tabindex="-1" type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary Mui-disabled MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary ml-3 mt-2 mb-2 css-5rc0w6">Save</button>
       - unexpected value "disabled"

```

```yaml
- button "Save" [disabled]
```

```
Tearing down "context" exceeded the test timeout of 180000ms.
```