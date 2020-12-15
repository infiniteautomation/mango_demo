import angular from 'angular';

import displayValuesPage from './pages/displayValues/displayValues';

// Components
import valueIndicator from './components/valueIndicator/valueIndicator';
import expansionPanel from './components/expansionPanel/expansionPanel';


const oilGasModule = angular.module('oilGasModule', ['maUiApp'])
    .component('exDisplayValuesPage', displayValuesPage)

    .component('exValueIndicator', valueIndicator)
    .component('exExpansionPanel', expansionPanel)

oilGasModule.config(['maUiMenuProvider', maUiMenuProvider => {
    maUiMenuProvider.registerMenuItems([
        {
            url: '/ui-examples',
            name: 'ui.uiExamples',
            menuIcon: 'fiber_manual_record',
            menuText: 'UI Examples',
            template: '<div flex="noshrink" layout="column" ui-view></div>',
            abstract: true,
            weight: 900,
        },
        {
            name: 'ui.uiExamples.displayValues',
            url: '/overview',
            template: '<ex-display-values-page></ex-display-values-page>',
            weight: 100,
            menuText: 'Display Values',
            menuIcon: 'public',
            params: {
                hideFooter: true,
                dateBar: {
                    rollupControls: true
                }
            }
        },
    ]);
}])

export default oilGasModule;
