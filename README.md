[ ![Download](https://api.bintray.com/packages/humanteq/hqm-sdk/hqm-core/images/download.svg) ](https://bintray.com/humanteq/hqm-sdk/hqm-core/_latestVersion)

## HQMonitor React Native Sample App (Android-only).


#### Integration instructions:

  1. Install SDK: `npm install react-native-hqm --save`
  2. Initialize SDK:
  ```javascript
   // Initialize SDK
   hqm.initSdk(
    {
      sdkKey: 'test_key',
      isDebug: true,
    },
    (result) => {
      // OK
      console.log(result);
    },
    (error) => {
      // Failure
      console.error(error);
    }
  );

  // Start SDK
  hqm.start();
  
  // Send event
  hqm.log('test_event', 'test_value');

  // Send target segments to AppsFlyer/Firebase. 
  hqm.trackSegments(true, hqm.HQMTrackers.AppsFlyer);
  ```
  
  3. Run app: `npm run android` 

<br>
#### GDPR compliance.
To comply with GDPR, we provide following user data management methods:
1. Request for user data. 
A report with current user data will be sent to the provided email.
```javascript
            hqm.requestUserData("some@email.org");
```

2. User data deletion request. All current user data will be deleted from Humanteq servers.
```javascript
            hqm.deleteUserData();
```