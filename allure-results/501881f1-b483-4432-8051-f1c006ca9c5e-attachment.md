# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forgotpassward.spec.ts >> Forgot password
- Location: tests\Forgotpassward.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - main [ref=f2e3]:
    - heading [level=1] [ref=f2e5]:
      - img "John Deere logo logo" [ref=f2e6]
    - generic [ref=f2e9]:
      - generic [ref=f2e11]:
        - generic [ref=f2e12]:
          - heading "Sign In" [level=2] [ref=f2e13]
          - alert
          - generic [ref=f2e15]:
            - generic [ref=f2e16]: Username
            - textbox "Username" [ref=f2e19]:
              - /placeholder: ""
        - button "Next" [ref=f2e21]
      - generic [ref=f2e22]:
        - generic [ref=f2e23]:
          - link "Forgot Username or Password" [active] [ref=f2e24] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://operationscenter.deere.com
          - link "Create New Customer Account" [ref=f2e25] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/onboarding/registration?TARGET=https://operationscenter.deere.com
        - generic [ref=f2e26]:
          - text: Your use of this account is governed by our
          - link "*Terms of Use" [ref=f2e27] [cursor=pointer]:
            - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - text: and
          - link "*Privacy Notice" [ref=f2e28] [cursor=pointer]:
            - /url: https://www.johndeere.com/trust
          - text: .
        - generic [ref=f2e29]: "*Last updated : June 1, 2024 to support launch of service into several countries."
  - generic [ref=f2e31]:
    - link "Contact Us" [ref=f2e33] [cursor=pointer]:
      - /url: "https://account-helppages.deere.com/signin-help "
    - generic [ref=f2e34]: Copyright © 2026 Deere & Company. All Rights Reserved.
```