1. UIWebView (ios 5.1.1)
- Set localstorage X

2.  WKWebView plugin (ios 5.1.1) 
- Could not access UIWebview’s local storage 
- Set new localstorage Y

3. Upgrade to ios 6 (remove WkWebView plugin)
- Can access WKWebView’s localstorage Y
- Can not access UIWebView’s local storage X

4. Ios 6 + custom Scheme
```
<preference name="scheme" value="app" />
<preference name="hostname" value="localhost" />
```
- Could not access any local storages

5. Ios 6 + custom scheme + cordova-plugin-migrate-localstorage plugin
- The data is moved to application (app) scheme’s local storage from UIWebView’s local storage (version 1)
- Add more data Z (for testing purpose for the next test)

6. Change custom Scheme to other values
```
<preference name="scheme" value="app2" />
<preference name="hostname" value="localhost2" />
```
- The data is moved to the application (app2) scheme’s local storage from UIWebView’s local storage (version 1)
- The data is different from the previous case (app scheme’s localStorage). For example it doesn’t have the new added or modified Z data.
