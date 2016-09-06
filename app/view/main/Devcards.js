Ext.define('MyApp.view.main.Devcards', {
    extend: 'Ext.container.Container',
    xtype: 'devcards',

    // list the classes required by this class
    requires: ['MyApp.view.main.FilterForm'],

    // the card layout displays one view at a time from the items array.  Think of a tab 
    // panel where the views are shown programmatically -vs- using tabs in a tab bar
    layout: {
        type: 'card',
        animation: 'slide'
    },
    // we'll set a reference config for easy access to this container from within our
    // view controller logic we'll define further on in the guide
    reference: 'devcards',
    items: [{
        // a container to horizontally lay out the developers list and filter 
        // form in landscape mode and just the list (with its child filter form)
        // when oriented in portrait
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'titlebar',
            title: 'Developers',
            docked: 'top',
            items: {
                iconCls: 'md-icon-filter-list',
                align: 'right',
                platformConfig: {
                    '!phone': {
                        hidden: true
                    }
                },
                listeners: {
                    tap: 'onFilterMenuButtonTap'
                }
            }
        }, {
            // 'filterform' is the xtype of a custom component we'll 
            // define in the next part of the guide
            xtype: 'filterform',
            reference: 'filters',
            platformConfig: {
                phone: {
                    floated: true,
                    width: '100%',
                    height: '100%',
                    showAnimation: {
                        type: 'slide',
                        direction: 'down'
                    },
                    hideAnimation: {
                        type: 'slideOut',
                        direction: 'up'
                    }
                },
                '!phone': {
                    width: 150,
                    cls: 'filter-form-left'
                }
            }
        }, {
            // List components are great ways to show a column of data using a
            // user-define HTML template
            xtype: 'list',
            reference: 'devslist',
            striped: true, // striped to tint every other row
            disableSelection: true, // disable row selection for this app
            flex: 1, // take up available horizontal space
            minWidth: 300,
            itemTpl: '<div class="list-item-dev">' +
                '<img class="list-item-image" src="{picture.thumbnail}"/>' +
                '<div class="list-item-details">' +
                '<div class="list-item-name">{name.first:capitalize} {name.last:capitalize}</div>' +
                '<tpl for="skills">' +
                '<div class="list-item-skill-tag">{.}</div>' +
                '</tpl>' +
                '</div>' +
                '</div>',
            // we'll get the data Store for the List component from the 
            // ancestor container's View Model.  We'll set that up a bit 
            // later in the guide.
            bind: {
                store: '{devs}'
            },
            // When we set up the tap event handler logic this listener 
            // will cause tapping on a developer to show its details view
            listeners: {
                itemtap: 'onDevTap'
            }
        }]
    }, {
        xtype: 'container',
        // vertically lay out all child items and center them
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [{
            xtype: 'toolbar',
            // docked positions a component above or below all other items
            docked: 'top',
            items: [{
                // button to navigate back to the developers list
                // note that toolbars’ default child item type is button
                // so we didn’t have to specify the xtype
                text: 'Dev List',
                handler: 'showDevList'
            }]
        }, {
            // a larger developer avatar image
            xtype: 'component',
            bind: {
                html: '<img class="dev-card-image" src="{dev.picture.large}" />'
            },
            margin: 20
        }, {
            // the developer's full name
            xtype: 'component',
            bind: {
                html: '<div class="dev-card-name">{dev.name.first:capitalize} {dev.name.last:capitalize}</div>'
            },
            margin: '0 0 20 0'
        }, {
            // a Tab Panel displaying:
            // 1) a developer bio and Sencha skills
            // 2) contact information
            xtype: 'tabpanel',
            width: '100%', // take up all available width
            flex: 1,
            items: [{
                // the developer bio and skills tab
                title: 'Info',
                scrollable: 'vertical',
                padding: 20,
                cls: 'dev-card-info',
                defaults: {
                    xtype: 'component',
                    margin: '0 0 10 0'
                },
                items: [{
                    html: '<b>Registered since:</b> July 12, 2013',
                    margin: '0 0 29 0'
                }, {
                    // dummy bio
                    html: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><br><p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><br><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p><br><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to</p>'
                }, {
                    bind: {
                        data: '{dev.skills}'
                    },
                    tpl: '<div class="dev-card-skills-ct"><tpl for="."><span class="dev-card-skill-tag">{.}</span></tpl></div>'
                }]
            }, {
                // the contact tab using data from the developer record
                title: 'Contact',
                padding: 20,
                scrollable: 'vertical',
                cls: 'dev-card-contact',
                bind: {
                    html: '<b>e-mail:</b> {dev.email}<br><br><b>phone:</b> {dev.cell}<br><br><b>Loc:</b> {dev.location.city:capitalize}, {dev.location.state:capitalize} &nbsp;&nbsp;<b><i>{dev.nat:uppercase}</i></b>'
                }
            }]
        }]
    }]
});
