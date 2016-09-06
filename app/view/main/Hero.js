Ext.define('MyApp.view.main.Hero', {
    extend: 'Ext.container.Container',
    // the component reference name used when instantiating our hero component in the top-level carousel
    xtype: 'hero',

    // not needed out of the box, but helpful when it comes to styling the hero component
    cls: 'hero-card',
    // vertical / centered container layout for all child items
    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [{
        // a transparent container used to help with layout allowing the user Login button 
        // to float to the right of the app while the remaining content is centered
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        padding: '12 16',
        items: [{
            // in an hbox layout the flex: 1 configuration forces additional components 
            // to the right by taking up all available space
            xtype: 'component',
            flex: 1
        }, {
            // our button used for login
            xtype: 'button',
            // here we'll set the data binding for the button text and icon 
            // (covered later in the guide)
            bind: {
                text: '{loginText}',
                iconCls: '{userCls}'
            },
            // a CSS class used for custom styling of the button
            cls: 'clear-white',
            // we'll go ahead and set a handler on the button for when it's tapped.  The logic 
            // used to handle the button tap will come later when we set up the main view's View Controller
            handler: 'onLoginPress'
        }]
    }, {
        // in a vbox layout the flex: 1 configuration forces additional components 
        // down by taking up all available space
        xtype: 'component',
        flex: 1
    }, {
        // our hero page title
        xtype: 'component',
        html: 'Sencha Devs',
        cls: 'hero-card-title'
    }, {
        // our hero page description / tagline
        xtype: 'component',
        html: 'Worldwide Sencha developers database.  Find <b><i>your</i></b> developer here.',
        padding: 10,
        cls: 'hero-card-sub-title'
    }, {
        // the button used to navigate to the developers list
        xtype: 'button',
        text: 'Get Started',
        iconCls: 'x-fa fa-arrow-circle-o-down',
        cls: 'get-started',
        margin: '60 0 0 0',
        handler: 'onGetStarted'
    }, {
        xtype: 'component',
        flex: 1
    }, {
        // display a count of all available developers.  We'll set up the logic that 
        // displays this count further in the guide
        xtype: 'component',
        bind: {
            html: '<span class="dev-count-label">Devs:</span> <b>{devsCount}<b>'
        },
        cls: 'dev-count',
        padding: 12
    }]
});