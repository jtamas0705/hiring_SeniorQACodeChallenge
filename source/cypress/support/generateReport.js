const report = require('multiple-cucumber-html-reporter')
const moment = require('moment')

const executionStartTime = moment().format('MMMM Do YYYY, h:mm:ss A');
const executionEndTime = moment().add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss A');

report.generate({
 jsonDir: 'reports/cucumber-json',// Path of cucumber json file
 reportPath: 'reports/cucumber-html',//path of required report
    reportTitle: 'Latest Execution',
    overwrite: true,
 metadata:{
        browser: {
            name: 'chrome',
            version: '134'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
})