var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var creditCardPattern = new StringMask('00/00');

module.exports = maskFactory({
    clearValue: function(rawValue) {
        return rawValue.replace(/[^\d]/g, '');
    },
    format: function(cleanValue) {
        return (creditCardPattern.apply(cleanValue) || '').trim().replace(/[^0-9]$/, '');
    },
    getModelValue: function(formattedValue) {
        return formattedValue;
    }
});
