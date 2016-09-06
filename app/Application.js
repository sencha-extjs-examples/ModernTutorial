Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    namespace: 'MyApp',

    requires: [
        'MyApp.*'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'MyApp.view.main.Main'
});
