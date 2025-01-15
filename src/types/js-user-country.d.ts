// src/types/js-user-country.d.ts
declare module 'js-user-country' {
    interface CountryInfo {
      name: string;
      code: string;
    }
  
    function getUserCountry(): CountryInfo;
    export default getUserCountry;
  }
  