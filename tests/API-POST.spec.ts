import { test, expect } from '@playwright/test';

test('POST API Test', async ({ request }) => {

  const token = 'eyJraWQiOiIwSEpmd0haYlA2T0twTTdJUXViNlc3bFQzanRnYUdwWlR5VFVOdkNCa0Y4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkg5WmRFaFBLSXpaYmJBaXR5NnVldTRUbFlnNXhzWm9Lc3AzNEpoWnlzb2siLCJpc3MiOiJodHRwczovL3NpZ25pbi5qb2huZGVlcmUuY29tL29hdXRoMi9hdXNhYnp6Z2E4NkVJZVI0bDF0NyIsImF1ZCI6ImV4dGVybmFsIiwiaWF0IjoxNzg4NTI2MzczLCJleHAiOjE3ODg1Mjk5NzMsImNpZCI6IjBvYTR0YmNtc3JKbFBDNDdTNWQ3IiwidWlkIjoiMDB1d2phb3FhZXdHVVcxTVk1ZDciLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJhdXRoX3RpbWUiOjE3ODg1MjYzNjUsInN1YiI6InN1bmlsLnlhZGF2QHlvcG1haWwuY29tIiwiZmlyc3ROYW1lIjoiU3VuaWxzIiwibGFzdE5hbWUiOiJZYWRhdiIsImNvdW50cnkiOiJJTiIsImpkTWVtYmVyIjpbXSwidXNlclR5cGUiOiJDdXN0b21lciIsInVzZXJJRCI6InN1bmlsLnlhZGF2QHlvcG1haWwuY29tIn0.fwgVMk6hYIhVdjBvf_dFjEUFonFO-TvwiaD-XzX_oKweNwOg5iPYmBWTb_VzFNK2ei5BYHMT4S0KLKXm-SiPp9YLWnAafIA-47o34NPSGMpFtRDMYxvUXGv7toxThOX20pT1nmDFRTZJaPbh1UKhaeb-eclQH1GBkB8V_hu87CUY_vLPsPmNLKqW5h1xqtuaGxOpGn-Pv-e8rc5tqPXkS-nD-XYQl8zhAS1HeFxiG9QEXNK9yphJ4G0F2-FP-n8LQOW9YdCjDelmN9BGX5Q5zAWcaNBKrK0H5SUYz9hrwqeWiikpd_SrFT_RdDi4dekT8UNUx68_Zt59j9LwfcJniA';
  const response = await request.post(
    'https://browser-intake-datadoghq.com/api/v2/rum?ddsource=browser&ddtags=sdk_version%3A5.35.1%2Capi%3Afetch%2Cenv%3Aprod%2Cservice%3Acustomerprofilemanagement%2Cversion%3Agit%3A1.0.0&dd-api-key=pub42eced28c312d8aa94f664b40b6f9d01&dd-evp-origin-version=5.35.1&dd-evp-origin=browser&dd-request-id=6f4a4722-ca10-4cbd-b70a-97e2f89abdb2&batch_time=1788511965521',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },

      data: {
        "userName":"sunil.yadav@yopmail.com","firstName":"Elena","lastName":"Smith","emailId":"sunil.yadav@yopmail.com","mobilePhoneCountryCode":"IN","mobilePhoneNumber":"9876543229","workPhoneCountryCode":null,"workPhoneNumber":null,"homePhoneCountryCode":null,"homePhoneNumber":null,"addressElements":[{"elementKey":1,"elementValue":"350 5TH AVE # 10118 NEW YORK NY"},{"elementKey":3,"elementValue":"New York"},{"elementKey":4,"elementValue":"NY"},{"elementKey":5,"elementValue":"10118"}],"addressCountryCode":"US","systemSuggestedAddressPresent":"yes"
      }
    }
  );

  console.log('Status:', response.status());
  console.log('Response:', await response.text());
});