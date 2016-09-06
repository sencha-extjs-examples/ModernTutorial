Ext.define('MyApp.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',    // the alias for this view model

    // the initial values for our views' data bindings
    data: {
        extjs: true,
        touch: true,
        architect: true,
        themer: true,
        inspector: true,
        devsCount: 0
    },
    stores: {
        // the 'devs' store is described here and
        // used via binding by our developers List
        devs: {
            autoLoad: true, // load the data immediately
            proxy: {
                type: 'ajax',
                // the URL for our remote data
                url: 'resources/devs.json',
                reader: {
                    type: 'json',
                    // the root property from which all of our data is read
                    rootProperty: 'results'
                }
            },
            // a load event listener used to communicate
            // how many records were read in
            listeners: {
                load: 'onDevsLoad'
            }
        }
    }
});