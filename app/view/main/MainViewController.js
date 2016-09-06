Ext.define('MyApp.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onFilterMenuButtonTap: function() {
        var filtersMenu = this.lookup('filters');
        filtersMenu.show();
    },

    onFilterMenuCloseButtonTap: function() {
        var filtersMenu = this.lookup('filters');
        filtersMenu.hide();
    },

    onGetStarted: function() {
        this.getView().setActiveItem(1);
    },

    // when a developer item is tapped in the developer List
    // 1) set the record of the developer tapped on the View Model
    // 2) show the developer details view
    onDevTap: function(list, i, el, rec) {
        this.getViewModel().set('dev', rec);
        var active = this.lookup('devcards').animateActiveItem(1, 'slide');
        if (active.rec !== rec) {
            active.down('tabpanel').setActiveItem(0);
        }
        active.rec = rec;
    },
    
    // return to the developers list from the details view
    showDevList: function () {
        this.lookup('devcards').animateActiveItem(0, {type: 'slide', direction: 'right'});
    },

    // any change to the filter checkboxes will update the filtering
    // applied to the developers List store using the checked skills
    // we've used the Ext.function.createBuffered method to handle
    // rapidly fired checkbox change events in a controlled manner
    // - a byproduct of having two filter forms operating in sync
    onFilterChange: Ext.Function.createBuffered(function() {
        var devsStore = this.lookup('devslist').getStore(),
            vm = this.getViewModel(),
            allFilters = ['extjs', 'touch', 'architect', 'themer', 'inspector'],
            filters = [];

        // collect up an array of checked checkboxes
        Ext.each(allFilters, function(item) {
            if (vm.get(item)) {
                filters.push(item);
            }
        });

        // clear any filtering on the Store
        devsStore.clearFilter();
        // if there are any checkboxes checked
        if (filters.length) {
            // filter the developers Store using only the checked filters
            devsStore.filterBy(function(rec) {
                var skills = Ext.Array.map(rec.get('skills'), function(item) {
                    return item.toLowerCase().replace(/ /g, '');
                });

                return Ext.Array.intersect(filters, skills).length;
            });
        }
    }, 10),

    // when the developers Store loads update the 'devsCount' value on the
    // View Model in order to update the developers count on the Hero page
    onDevsLoad: function(store) {
        this.getViewModel().set('devsCount', store.getCount());
    }
});