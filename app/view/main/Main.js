Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    controller: 'main',
    viewModel: 'main',
    
    // list the classes required by the Main class so that
    // Cmd loads them ahead of this class when building the app
    requires: [
        'MyApp.view.main.Hero',
        'MyApp.view.main.Devcards',
        'MyApp.view.main.MainViewController',
        'MyApp.view.main.MainViewModel'
    ],

    layout: {
        type: 'card',
        animation: {
            type: 'slide',
            direction: 'up'
        }
    },
    
    items: [{
        // our hero (landing) page that we’ll define later
        xtype: 'hero'
    }, {
        // our developer list / details cards that we’ll define later
        xtype: 'devcards'
    }]
});