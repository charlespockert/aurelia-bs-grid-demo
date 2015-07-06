System.register(['aurelia-http-client', 'aurelia-framework'], function (_export) {
    'use strict';

    var HttpClient, inject, LocalData;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            LocalData = (function () {
                function LocalData(httpClient) {
                    _classCallCheck(this, _LocalData);

                    this.httpClient = httpClient;
                }

                var _LocalData = LocalData;

                _createClass(_LocalData, [{
                    key: 'getLocalData',
                    value: function getLocalData(gridOptions) {
                        var data = [];
                        var names = ['charles', 'john', 'oliver', 'fred', 'apple', 'peach', 'banana', 'pear', 'kiwi', 'dog', 'cat', 'mouse', 'turtle', 'high', 'low', 'jacks', 'aces', 'kings', 'queens'];

                        for (var i = 0; i < 1000; i++) {

                            var n = names[Math.floor(Math.random() * names.length)];
                            data.push({
                                id: i,
                                name: n
                            });
                        };

                        return new Promise(function (resolve, reject) {
                            resolve({
                                data: data,
                                count: data.length
                            });
                        });
                    }
                }]);

                LocalData = inject(HttpClient)(LocalData) || LocalData;
                return LocalData;
            })();

            _export('LocalData', LocalData);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFNBQVM7Ozs7Ozs7OzRDQUpkLFVBQVU7O3VDQUNWLE1BQU07OztBQUdELHFCQUFTO0FBRVAseUJBRkYsU0FBUyxDQUVOLFVBQVUsRUFBRTs7O0FBQ3BCLHdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7O2lDQUpRLFNBQVM7Ozs7MkJBTU4sc0JBQUMsV0FBVyxFQUFFO0FBRXRCLDRCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCw0QkFBSSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFbEwsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRzlCLGdDQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0NBQUksQ0FBQyxJQUFJLENBQUM7QUFDTixrQ0FBRSxFQUFFLENBQUM7QUFDTCxvQ0FBSSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUFDO3lCQUNOLENBQUM7O0FBRUYsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLG1DQUFPLENBQUM7QUFDSixvQ0FBSSxFQUFFLElBQUk7QUFDVixxQ0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNOzZCQUNyQixDQUFDLENBQUM7eUJBQ04sQ0FBQyxDQUFDO3FCQUVOOzs7QUE1QlEseUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVM7OztpQ0FBVCxTQUFTIiwiZmlsZSI6ImxvY2FsLWRhdGEuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9