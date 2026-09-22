import { test, expect } from '@playwright/test';

test('POST API Test', async ({ request }) => {

  const token = 'eyJraWQiOiIwSEpmd0haYlA2T0twTTdJUXViNlc3bFQzanRnYUdwWlR5VFVOdkNCa0Y4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk42dkJfMEl6YThXOFFKVEtpMTdkV0FjcnRIQkNFb3EySG9vdS1WTnQwOW8iLCJpc3MiOiJodHRwczovL3NpZ25pbi5qb2huZGVlcmUuY29tL29hdXRoMi9hdXNhYnp6Z2E4NkVJZVI0bDF0NyIsImF1ZCI6ImV4dGVybmFsIiwiaWF0IjoxNzg4NTA0Mzg5LCJleHAiOjE3ODg1MDc5ODksImNpZCI6IjBvYTR0YmNtc3JKbFBDNDdTNWQ3IiwidWlkIjoiMDB1d2phb3FhZXdHVVcxTVk1ZDciLCJzY3AiOlsicHJvZmlsZSIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE3ODg0MzIyODMsInN1YiI6InN1bmlsLnlhZGF2QHlvcG1haWwuY29tIiwiZmlyc3ROYW1lIjoiU3VuaWwiLCJsYXN0TmFtZSI6IllhZGF2IiwiY291bnRyeSI6IklOIiwiamRNZW1iZXIiOltdLCJ1c2VyVHlwZSI6IkN1c3RvbWVyIiwidXNlcklEIjoic3VuaWwueWFkYXZAeW9wbWFpbC5jb20ifQ.E40xNRhwVOMeComhC_sH5ubaWjL8N3MN1B7PU-RobjsI4g3nTtcdKFlV3KvBFFPbLfxaHwbgRt935rOtsR6JN-uUm9SrlNb0gqTrjmJKx-GjGygGVwLfOMMCYNYM2OIaxbJiP0dYTNEKEDD1R2J_8OtFQa9MF1tw6897UWq1c4grAEkmtkxaA7O_kpCrPUPRkTAkHLg1_9Z9xppMUDEk4g6cggf4x2XFVXZ2Dyjq4-d7vNCan0PBSx2yO5ZJrls6Wlk2x985-HWC908eUxNdCTGpzWh9lr2Kii4PBkc3CJNBfm0d5D3LAR2DO7K6Zy_LPyfhb3GQMMr876By-qlgiA';

  const response = await request.patch(
    'https://account.deere.com/api/v1/profileservice/admin/getCustomer?locale=en_US&userName=sunil.yadav@yopmail.com&TARGET=https://map.deere.com/',
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