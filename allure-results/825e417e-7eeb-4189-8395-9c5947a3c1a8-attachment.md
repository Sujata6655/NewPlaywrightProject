# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - banner [ref=e7]:
    - link "Go to home" [ref=e9] [cursor=pointer]:
      - /url: /
      - img "John Deere Logo" [ref=e10]
  - progressbar [ref=e12]
  - generic [ref=e15]:
    - contentinfo [ref=e16]:
      - navigation "footer navigation" [ref=e17]:
        - list [ref=e18]:
          - listitem [ref=e19]:
            - link "Privacy and Data" [ref=e20] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=e21]:
            - link "Terms of Use" [ref=e22] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=e23]:
            - link "Contact Us" [ref=e24] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=e25]: Copyright © 2026 Deere & Company. All Rights Reserved.
    - list
```