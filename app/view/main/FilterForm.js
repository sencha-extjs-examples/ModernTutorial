Ext.define('MyApp.view.main.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'filterform',        // the alias used by the List and its Container
    // configuration options set in the defaults config will be applied
    // to all child components in the items array below (unless a config is 
    // overridden explicitly in an item's config)
    defaults: {
        xtype: 'checkboxfield',
        labelWidth: 100,
        // we'll go ahead and point to a checkbox change handler method that
        // we'll author later in the guide for filtering the developer List
        listeners: {
            change: 'onFilterChange'
        }
    },
    cls: 'filter-form',
    bodyPadding: 8,
    items: [
     {
        xtype: 'titlebar',
        title: 'Filter By',
        docked: 'top',
        platformConfig: {
            '!phone': {
                hidden: true
            }
        },
        items: {
            xtype: 'button',
            iconCls: 'md-icon-close',
            align: 'right',
            listeners: {
                tap: 'onFilterMenuCloseButtonTap'
            }
        }
    },
    {
        // each checkboxfield has a form field label corresponding to the 
        // skill it will filter by.  Additionally, we'll set up the data 
        // binding to point to a data value on the main View Model we'll
        // describe a bit later in the tutorial
        label: 'Ext JS',
        bind: {
            checked: '{extjs}'
        }
    }, {
        label: 'Touch',
        bind: {
            checked: '{touch}'
        }
    }, {
        label: 'Architect',
        bind: {
            checked: '{architect}'
        }
    }, {
        label: 'Themer',
        bind: {
            checked: '{themer}'
        }
    }, {
        label: 'Inspector',
        bind: {
            checked: '{inspector}'
        }
    }]
});