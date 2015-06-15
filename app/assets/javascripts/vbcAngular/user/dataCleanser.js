app.factory('dataCleanser', [function(){
  'use strict';

  var dc = {};

  var cleanLocation = function(data) {
    if (_.isUndefined(data.location)) {
      var mockLoc = {
        'location': {
          'name': null,
          'country': {
            'code': null
          }
        }
      }
      _.merge(data, mockLoc);
    } else if (_.isUndefined(data.location.country)) {
      var mockCountry = {
          'country': {
            'code': null
          }
        }
      _.merge(data.location, mockCountry);
    }
    return data;
  };

  var cleanPositions = function(data) {
    if (_.isUndefined(data.positions)) {
      var mockPos = {
        'positions': {
          'values': [
            {
              'company': {
                'name': null
              },
              'title': null,
              'summary': null
            }
          ]
        }
      }
      _.merge(data, mockPos);
    } else if (_.isUndefined(data.positions.values)) {
      var mockVal = {
        'values': [
          {
            'company': {
              'name': null
            },
            'title': null,
            'summary': null
          }
        ]
      }
      _.merge(data.positions, mockVal);
    } else if (_.isUndefined(data.positions.values[0].company)) {
      var mockComp = {
        'company': {
          'name': null
        }
      }
      data.positions.values[0].push(mockComp);
    }
    return data;
  };

  dc.clean = function(data) {
    var cleanedLocation = cleanLocation(data);
    var clean = cleanPositions(cleanedLocation);

    return clean;
  };

  return dc;
}]);