# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Finalflow.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\Finalflow.spec.ts:7:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('#input28') to be visible
    - waiting for "https://operationscenter.deere.com/api/login" navigation to finish...

```

# Page snapshot

```yaml
- generic [ref=f12e3]:
  - generic:
    - link "Skip to main content":
      - /url: "#main-content"
  - generic [ref=f12e5]:
    - banner [ref=f12e6]:
      - generic "header-search-bar" [ref=f12e8]:
        - generic "search-bar" [ref=f12e10]:
          - generic [ref=f12e13]:
            - generic [ref=f12e14]: search
            - searchbox "Search" [ref=f12e16]
      - img "John Deere logo" [ref=f12e17]
      - generic [ref=f12e18]:
        - button "Find a Dealer" [ref=f12e21] [cursor=pointer]
        - link "account_circle Sign In" [ref=f12e26] [cursor=pointer]:
          - /url: /en-us/products-solutions/technology-solutions/digital-tools
          - generic [ref=f12e27]: account_circle
          - text: Sign In
    - navigation "Primary top navigation" [ref=f12e30]:
      - link "home Home" [ref=f12e31] [cursor=pointer]:
        - /url: /en-us
        - generic [ref=f12e32]: home
        - text: Home
      - button "Products & Solutions keyboard_arrow_down" [ref=f12e35] [cursor=pointer]:
        - text: Products & Solutions
        - generic [ref=f12e36]: keyboard_arrow_down
      - button "Industries keyboard_arrow_down" [ref=f12e39] [cursor=pointer]:
        - text: Industries
        - generic [ref=f12e40]: keyboard_arrow_down
      - button "Parts & Owner Support keyboard_arrow_down" [ref=f12e43] [cursor=pointer]:
        - text: Parts & Owner Support
        - generic [ref=f12e44]: keyboard_arrow_down
      - button "Financing keyboard_arrow_down" [ref=f12e47] [cursor=pointer]:
        - text: Financing
        - generic [ref=f12e48]: keyboard_arrow_down
      - button "Our Company keyboard_arrow_down" [ref=f12e51] [cursor=pointer]:
        - text: Our Company
        - generic [ref=f12e52]: keyboard_arrow_down
  - navigation [ref=f12e57]:
    - list [ref=f12e58]:
      - listitem [ref=f12e59]:
        - link "Home" [ref=f12e60] [cursor=pointer]:
          - /url: /en-us
      - listitem [ref=f12e61]: /
      - listitem [ref=f12e62]:
        - link "Technology Solutions" [ref=f12e63] [cursor=pointer]:
          - /url: /en-us/products-solutions/technology-solutions
      - listitem [ref=f12e64]: /
      - listitem [ref=f12e65]:
        - paragraph [ref=f12e66]: Digital Tools
  - generic [ref=f12e69]:
    - heading "Digital Tools" [level=1] [ref=f12e71]
    - link "Create an Account" [ref=f12e75] [cursor=pointer]:
      - /url: https://account.deere.com/actmgmt/onboarding/registration
  - generic [ref=f12e79]:
    - generic [ref=f12e81]:
      - img "Operations Center logo" [ref=f12e83]
      - generic [ref=f12e85]:
        - heading "John Deere Operations Center™" [level=2] [ref=f12e87]
        - paragraph [ref=f12e89]: Manage your farm or jobsite, including equipment, performance and more.
      - generic [ref=f12e92]:
        - link "Explore Operations Center PRO Service" [ref=f12e94] [cursor=pointer]:
          - /url: /en-us/products-solutions/technology-solutions/precision-agriculture-technology-solutions/john-deere-operations-center-pro-service-from-john-deere-operations-center-pro-ufjpu0vsvkldrtax
        - link "Sign in to Operations Center" [ref=f12e96] [cursor=pointer]:
          - /url: https://operationscenter.deere.com/
    - generic [ref=f12e98]:
      - img "Icon for Equipment Mobile" [ref=f12e100]
      - generic [ref=f12e102]:
        - heading "Equipment Mobile" [level=2] [ref=f12e104]
        - paragraph [ref=f12e106]: Setup, operate and maintain your equipment all from the palm of your hand with this FREE management app.
      - generic [ref=f12e109]:
        - link "Explore Equipment Mobile" [ref=f12e111] [cursor=pointer]:
          - /url: /en-us/products-solutions/technology-solutions/precision-agriculture-technology-solutions/equipment-mobile-application-rvfvsvbnru5utu9csuxfmde
        - generic [ref=f12e112]:
          - link "Download app from Apple App Store Opens In a New Tab" [ref=f12e113] [cursor=pointer]:
            - /url: https://apps.apple.com/us/app/equipment-mobile/id1594839117?platform=iphone
            - text: Download app from Apple App Store
          - link "Download app from Google Play Opens In a New Tab" [ref=f12e117] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.deere.runapp
            - text: Download app from Google Play
    - generic [ref=f12e122]:
      - img "Icon for myFinancial" [ref=f12e124]
      - generic [ref=f12e126]:
        - heading "MyFinancial" [level=2] [ref=f12e128]
        - paragraph [ref=f12e130]: Manage your John Deere Financial Accounts anytime, from anywhere
      - link "Sign in to MyFinancial" [ref=f12e135] [cursor=pointer]:
        - /url: https://myfinancialaccounts.deere.com/
  - generic [ref=f12e137]:
    - generic [ref=f12e140]:
      - group "1 / 10" [ref=f12e141]:
        - link [ref=f12e142] [cursor=pointer]:
          - /url: https://apps.apple.com/us/app/john-deere-app-center/id940151246?see-all=developer-other-apps
          - img "Mobile app icon" [ref=f12e144]
          - heading "iOS Mobile Apps" [level=2] [ref=f12e147]
      - group "2 / 10" [ref=f12e151]:
        - link [ref=f12e152] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/developer?id=John+Deere
          - img "Mobile app icon" [ref=f12e154]
          - heading "Android Mobile Apps" [level=2] [ref=f12e157]
      - group "3 / 10" [ref=f12e161]:
        - link [ref=f12e162] [cursor=pointer]:
          - /url: /en-us/parts-owner-support/stellarsupport/gnss-starfire-status
          - img "Mobile app icon for GNSS & StarFire Tools" [ref=f12e164]
          - heading "GNSS & StarFire Tools" [level=2] [ref=f12e167]
      - group "4 / 10" [ref=f12e171]:
        - link [ref=f12e172] [cursor=pointer]:
          - /url: https://johndeeretraining.deere.com/
          - img "Mobile app icon for John Deere University" [ref=f12e174]
          - heading "John Deere University" [level=2] [ref=f12e177]
      - group "5 / 10" [ref=f12e181]:
        - link [ref=f12e182] [cursor=pointer]:
          - /url: https://stellarsupport.deere.com/app/my-software
          - img "Mobile app icon for Product Activation & Management (StellarSupport[TM])" [ref=f12e184]
          - heading "Product Activation & Management (StellarSupport)" [level=2] [ref=f12e187]
      - group "6 / 10" [ref=f12e191]:
        - link [ref=f12e192] [cursor=pointer]:
          - /url: /en-us/rewards
          - img "Mobile app icon for John Deere Rewards" [ref=f12e194]
          - heading "John Deere Rewards" [level=2] [ref=f12e197]
      - group "7 / 10" [ref=f12e201]:
        - link [ref=f12e202] [cursor=pointer]:
          - /url: http://displaysimulator.deere.com/
          - img "Display and Command Arm Simulator mobile icon" [ref=f12e204]
          - heading "Display & Command Arm Simulator" [level=2] [ref=f12e207]
      - group "8 / 10" [ref=f12e211]:
        - link [ref=f12e212] [cursor=pointer]:
          - /url: https://Timbermanager.deere.com
          - img "Mobile app icon for Timber Manager[TM]" [ref=f12e214]
          - heading "TimberManager" [level=2] [ref=f12e217]
      - group "9 / 10" [ref=f12e221]:
        - link [ref=f12e222] [cursor=pointer]:
          - /url: https://smartgraderemotesupport.topcon.com/orgs
          - img "Mobile app icon for SmartGrade Remote Support" [ref=f12e224]
          - heading "SmartGrade Remote Support" [level=2] [ref=f12e227]
      - group "10 / 10" [ref=f12e231]:
        - link [ref=f12e232] [cursor=pointer]:
          - /url: https://serviceadvisor.deere.com/WebSA/
          - img "Customer Service ADVISOR Icon" [ref=f12e234]
          - heading "Customer Service ADVISOR" [level=2] [ref=f12e237]
    - generic [ref=f12e241]:
      - button "Previous slide" [disabled] [ref=f12e242] [cursor=pointer]:
        - generic [ref=f12e243]: keyboard_arrow_left
      - generic [ref=f12e245]:
        - button "1" [ref=f12e246] [cursor=pointer]
        - button "2" [ref=f12e247] [cursor=pointer]
        - button "3" [ref=f12e248] [cursor=pointer]
        - button "4" [ref=f12e249] [cursor=pointer]
      - button "Next slide" [ref=f12e250] [cursor=pointer]:
        - generic [ref=f12e251]: keyboard_arrow_right
  - generic [ref=f12e253]:
    - paragraph [ref=f12e255]: Images of equipment models may be digitally or AI generated, are for illustration purposes only, and are subject to change. Equipment models shown are typically base models and may not reflect all features, options, or attachments. Equipment availability may be limited. See your John Deere dealer for additional information. Features and specifications are based on published information at the time of publication and are subject to change without notice. See your dealer for available models, options, attachments, and pricing. Product options and accessories may not be available in all regions. Equipment, models, features, options, attachments, and prices may vary by dealer. John Deere reserves the right to change specifications, model features, design, and price of the products described here without notice.
    - generic [ref=f12e256]:
      - generic [ref=f12e257]:
        - heading "Subscribe for more" [level=4] [ref=f12e258]
        - generic [ref=f12e259]: Receive e-mail news & offers from John Deere
        - link "Subscribe Now" [ref=f12e260] [cursor=pointer]:
          - /url: /en-us/marketing-preference-center
      - generic [ref=f12e261]:
        - paragraph [ref=f12e262]: Have any thoughts?
        - link "Take Survey" [ref=f12e263] [cursor=pointer]:
          - /url: https://7i0rrw0hh.optimalworkshop.com/questions/373dc768381896090e7e3118e0cf7f92
    - generic [ref=f12e264]:
      - generic [ref=f12e265]:
        - heading "Products & Support" [level=4] [ref=f12e266]
        - list [ref=f12e267]:
          - listitem [ref=f12e268]:
            - link "Buy Parts" [ref=f12e269] [cursor=pointer]:
              - /url: https://shop.deere.com/us
          - listitem [ref=f12e270]:
            - button "Find a Dealer" [ref=f12e273] [cursor=pointer]
      - generic [ref=f12e275]:
        - heading "Company Information" [level=4] [ref=f12e276]
        - list [ref=f12e277]:
          - listitem [ref=f12e278]:
            - link "Careers" [ref=f12e279] [cursor=pointer]:
              - /url: /en-us/our-company/careers
          - listitem [ref=f12e280]:
            - link "Ethics & Compliance" [ref=f12e281] [cursor=pointer]:
              - /url: /en-us/our-company/explore-john-deere/ethics-compliance
          - listitem [ref=f12e282]:
            - link "Governance" [ref=f12e283] [cursor=pointer]:
              - /url: https://investor.deere.com/governance/
      - generic [ref=f12e284]:
        - heading "News & Publications" [level=4] [ref=f12e285]
        - list [ref=f12e286]:
          - listitem [ref=f12e287]:
            - link "Newsroom" [ref=f12e288] [cursor=pointer]:
              - /url: /en-us/our-company/newsroom
          - listitem [ref=f12e289]:
            - link "Content Library" [ref=f12e290] [cursor=pointer]:
              - /url: /en-us/content-library
          - listitem [ref=f12e291]:
            - link "The Furrow" [ref=f12e292] [cursor=pointer]:
              - /url: /en-us/publications/the-furrow
          - listitem [ref=f12e293]:
            - link "The Dirt" [ref=f12e294] [cursor=pointer]:
              - /url: /en-us/publications/the-dirt
          - listitem [ref=f12e295]:
            - link "The Landing" [ref=f12e296] [cursor=pointer]:
              - /url: /en-us/publications/the-landing
          - listitem [ref=f12e297]:
            - link "Power Connect" [ref=f12e298] [cursor=pointer]:
              - /url: /en-us/publications/power-connect
      - generic [ref=f12e299]:
        - heading "Connect with John Deere" [level=4] [ref=f12e300]
        - list [ref=f12e301]:
          - listitem [ref=f12e302]:
            - link "Visit Us" [ref=f12e303] [cursor=pointer]:
              - /url: /en-us/our-company/explore-john-deere/visit-us
          - listitem [ref=f12e304]:
            - link "Buy Merchandise" [ref=f12e305] [cursor=pointer]:
              - /url: https://shop.deere.com/us
          - listitem [ref=f12e306]:
            - link "John Deere Kids" [ref=f12e307] [cursor=pointer]:
              - /url: /en-us/our-company/explore-john-deere/john-deere-kids
          - listitem [ref=f12e308]:
            - link "John Deere Rewards" [ref=f12e309] [cursor=pointer]:
              - /url: /en-us/rewards
    - generic [ref=f12e310]:
      - generic [ref=f12e312]:
        - button "instagram" [ref=f12e313] [cursor=pointer]
        - button "facebook" [ref=f12e316] [cursor=pointer]
        - button "twitter" [ref=f12e319] [cursor=pointer]
        - button "linkedin" [ref=f12e322] [cursor=pointer]
        - button "youtube" [ref=f12e325] [cursor=pointer]
      - generic [ref=f12e328]:
        - link "Privacy & Data" [ref=f12e329] [cursor=pointer]:
          - /url: /en-us/privacy-data
        - link "Accessibility" [ref=f12e330] [cursor=pointer]:
          - /url: /en-us/privacy-data/accessibility
        - link "Terms of Use" [ref=f12e331] [cursor=pointer]:
          - /url: /en-us/privacy-data/terms-of-use
        - link "Cookie Statement" [ref=f12e332] [cursor=pointer]:
          - /url: /en-us/privacy-data/cookie-statement
        - link "Contact Us" [ref=f12e333] [cursor=pointer]:
          - /url: /en-us/our-company/contact-us
        - button "Cookie Preferences" [ref=f12e334] [cursor=pointer]
      - link "United States Opens In a New Tab" [ref=f12e336] [cursor=pointer]:
        - /url: https://www.deere.com/en-us/global-country-selector
        - generic [ref=f12e337]: language
        - text: United States
    - paragraph [ref=f12e344]: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  4   | import { FinalFlowPage } from '../pages/FinalFlowPage';
  5   | import testData from '../Fixtures/testData.json';
  6   | 
  7   | test('Edit Profile, Mobile Number and Change Password', async ({
  8   |   page,
  9   | }) => {
  10  |   test.setTimeout(180000);
  11  | 
  12  |   const loginPage = new LoginPage(page);
  13  |   const profilePage = new ProfilePage(page);
  14  |   const finalFlowPage = new FinalFlowPage(page);
  15  | 
  16  |   // Login
  17  |   //wait loginPage.navigate();
  18  |   await loginPage.navigate(
  19  |   testData.Url
  20  | );
  21  | 
  22  | 
  23  |   await loginPage.login(
  24  |     testData.email,
  25  |     testData.currentPassword
  26  |   );
  27  | 
  28  |   // Verify Profile Loaded
  29  |   await profilePage.verifyProfileLoaded();
  30  | 
  31  |   // Update First Name
  32  |   await profilePage.updateFirstName(
  33  |     testData.firstName
  34  |   );
  35  | 
  36  |   // First Name Success Validation
  37  |   await page
  38  |     .getByText('Your personal information is saved.')
  39  |     .waitFor({
  40  |       state: 'visible',
  41  |       timeout: 15000,
  42  |     });
  43  | 
  44  |   // Update Mobile Number
  45  |   await finalFlowPage.updateMobileNumber(
  46  |     testData.mobileNumber
  47  |   );
  48  | 
  49  |   // Open Change Password
  50  |   await finalFlowPage.openChangePassword();
  51  | 
  52  |   // Handle Optional Popup
  53  |   await finalFlowPage.handlePopup();
  54  | 
  55  |   // Enter Password Details
  56  |   await finalFlowPage.enterPasswords(
  57  |     testData.currentPassword,
  58  |     testData.newPassword,
  59  |     testData.confirmPassword
  60  |   );
  61  | 
  62  |   // Verify Password Guidelines
  63  |   await finalFlowPage.verifyGuidelinesDisplayed();
  64  | 
  65  |   // Save Password
  66  |   await finalFlowPage.savePassword();
  67  | 
  68  |   // Verify Password Changed Message
  69  |   await finalFlowPage.verifyPasswordChangedMessage();
  70  | 
  71  |   // Logout
  72  |   await profilePage.logout();
  73  | 
  74  |   // Login Again With New Password
  75  | //   await loginPage.navigate();
  76  | 
  77  | //   await loginPage.login(
  78  | //     testData.email,
  79  | //     testData.newPassword
  80  | //   );
  81  | // Logout
  82  | // Logout
  83  | // await profilePage.logout();
  84  | 
  85  | // ==========================================
  86  | // OPEN OPERATIONS CENTER IN NEW TAB
  87  | // ==========================================
  88  | 
  89  | // Logout
  90  | 
  91  | 
  92  | await page.waitForLoadState('networkidle');
  93  | 
  94  | const page2 = await page.context().newPage();
  95  | 
  96  | const loginPage2 = new LoginPage(page2);
  97  | 
  98  | await loginPage2.navigate(
  99  |   testData.operationsCenterUrl
  100 | );
  101 | 
  102 | console.log('URL:', page2.url());
  103 | 
> 104 | await page2.waitForSelector('#input28', {
      |             ^ TimeoutError: page.waitForSelector: Timeout 60000ms exceeded.
  105 |   timeout: 60000
  106 | });
  107 | 
  108 | await loginPage2.login(
  109 |   testData.email,
  110 |   testData.newPassword
  111 | );
  112 | 
  113 | const finalFlowPage2 = new FinalFlowPage(page2);
  114 | 
  115 | await finalFlowPage2.clickOperationsCenterButton();
  116 | 
  117 | // Verify Login Success
  118 | await profilePage.verifyProfileLoaded();
  119 | 
  120 | await profilePage.verifyProfileLoaded();
  121 | 
  122 | 
  123 |   console.log(
  124 |     'First Name Updated, Mobile Number Updated, Password Changed and Login Successful'
  125 |   );
  126 | });
```