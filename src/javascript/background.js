/*global chrome*/
/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function () {
    'use strict';
    chrome.app.window.create(
        'web/index.html',
        {
            id: 'mainWindow',
            bounds: { width: 1024, height: 768 }
        }
    );
});
