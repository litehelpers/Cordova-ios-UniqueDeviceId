# Simple Cordova iOS Unique Device ID Plugin

There has been some discussion that Apple is no longer supporting the iOS UDID. There is a solution in
[gekitz / UIDevice-with-UniqueIdentifier-for-iOS-5](https://github.com/gekitz/UIDevice-with-UniqueIdentifier-for-iOS-5)
to get a unique device ID based on the MAC address of the device combined with the application bundle id.
This plugin is just a little bit of code to help use this solution in Cordova/PhoneGap 1.5.
There is also a possibility to get a globally unique device ID based only on the MAC address
but *please* do not abuse it.

**NOTES:**

 - MIT license
 - Apparently there will be a solution in Cordova 1.6 so this plugin may be very short-lived.
 - So far I only needed this plugin for Cordova/PhoneGap 1.5 but it should be possible to adapt for an earlier version.

## Usage

This plugin provides two functions:

 - `plugins.uniqueDeviceId.getUniqueDeviceId(callback)` get a unique identifier for a single app
 - `plugins.uniqueDeviceId.getUniqueGlobalDeviceId(callback)` get the unique global identifier based only on the MAC address

where `callback` is a callback function that receives a single argument with the device ID string.

Here is an example:

    function onDeviceReady()
    {
        plugins.uniqueDeviceId.getUniqueDeviceId(function(val) {
            console.log("got unique device id: " + val); 
        });

        plugins.uniqueDeviceId.getUniqueGlobalDeviceId(function(val) {
            console.log("got unique global device id: " + val); 
        });
    }

## Dependencies

This plugin depends on the library code in [gekitz / UIDevice-with-UniqueIdentifier-for-iOS-5 / Classes](https://github.com/gekitz/UIDevice-with-UniqueIdentifier-for-iOS-5/tree/master/Classes). It may be easiest to simply include the Objective-C headers and module files in the Classes folder in your Xcode project.

## Installation

Given an Xcode iOS project, include the dependencies from [gekitz / UIDevice-with-UniqueIdentifier-for-iOS-5 / Classes](https://github.com/gekitz/UIDevice-with-UniqueIdentifier-for-iOS-5/tree/master/Classes), add the plugin code `UniqueDeviceId.[hm]` to your project, and include `UniqueDeviceId.js` in `index.html`. I believe that for Xcode 4 only, you have to include the plugin information in `Cordova.plist`.


**Disclaimers:**

 - I am new to Objective-C and this is my first github project and my first significant Cordova/PhoneGap plugin.
 - Using callback functions may not have been the best choice here, it should be very easy to have these
   values ready by the time of the `onDeviceReady()` callback.

