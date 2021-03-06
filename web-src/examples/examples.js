import angular from 'angular';

import displayValuesPage from './pages/displayValues/displayValues';
import chartsPage from './pages/charts/charts';
import tablesPage from './pages/tables/tables';

// Components
import valueIndicator from './components/valueIndicator/valueIndicator';
import expansionPanel from './components/expansionPanel/expansionPanel';
import pointGroups from './components/pointGroups/pointGroups';
import pointsGroup from './components/pointGroups/pointsGroup/pointsGroup';
import statisticsChart from './components/statisticsChart/statisticsChart';
import overallHealth from './components/overallHealth/overallHealth';
import donutChart from './components/donutChart/donutChart';
import alarmStats from './components/alarmStats/alarmStats';
import sitesTable from './components/sitesTable/sitesTable';
import activeAlarms from './components/activeAlarms/activeAlarms';

// Directives
import intersectionObserver from './directives/intersectionObserver';
import intersectionListener from './directives/intersectionListener';

// Services
import site from './services/site';

const examplesModule = angular.module('examplesModule', ['maUiApp'])
    .component('exDisplayValuesPage', displayValuesPage)
    .component('exChartsPage', chartsPage)
    .component('exTablesPage', tablesPage)

    .component('exValueIndicator', valueIndicator)
    .component('exExpansionPanel', expansionPanel)
    .component('exPointGroups', pointGroups)
    .component('exPointsGroup', pointsGroup)
    .component('exStatisticsChart', statisticsChart)
    .component('exOverallHealth', overallHealth)
    .component('exDonutChart', donutChart)
    .component('exAlarmStats', alarmStats)
    .component('exSitesTable', sitesTable)
    .component('exActiveAlarms', activeAlarms)

    // Directives
    .directive('exIntersectionObserver', intersectionObserver)
    .directive('exIntersectionListener', intersectionListener)

    .factory('exSite', site);

examplesModule.config(['maUiMenuProvider', maUiMenuProvider => {
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
            url: '/display-values',
            template: '<ex-display-values-page></ex-display-values-page>',
            weight: 100,
            menuText: 'Display Values',
            menuIcon: 'font_download',
            params: {
                hideFooter: true,
                dateBar: {
                    rollupControls: true
                }
            }
        },
        {
            name: 'ui.uiExamples.charts',
            url: '/charts',
            template: '<ex-charts-page></ex-charts-page>',
            weight: 200,
            menuText: 'Charts',
            menuIcon: 'timeline',
            params: {
                hideFooter: true,
                dateBar: {
                    rollupControls: true
                }
            }
        },
        {
            name: 'ui.uiExamples.tables',
            url: '/tables',
            template: '<ex-tables-page></ex-tables-page>',
            weight: 300,
            menuText: 'Tables',
            menuIcon: 'table_chart',
            params: {
                hideFooter: true,
                dateBar: {
                    rollupControls: true
                }
            }
        },
    ]);
}])

export default examplesModule;
