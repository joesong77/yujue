// Load the data from the HTML table and tag it with an upper case name used for joining
var data = [];
    // Get the map data
const Highcharts = null ;

const mapData = Highcharts.geojson(Highcharts.maps['countries/tw/tw-all']);

Highcharts.data({
    table: document.getElementById('data'),
    startRow: 1, // 开始行
    endRow: 22,   // 结束行
    startColumn: 0, // 开始列
    endColumn: 1, // 结束列为 1， 即标识第 3 列数据不解析
    firstRowAsNames: false,
    complete: function (options) {
        options.series[0].data.forEach(function (p) {
            data.push({
                name: p[0],
                value: p[1]
            });
        });
    }
});

// Process mapdata
mapData.forEach(function (p) {
    var path = p.path,
        copy = {
            path: path
        };

});

// Initiate the chart
Highcharts.mapChart('map-chart', {

    chart: {
        map: "countries/tw/tw-all",
        height: "100%",
        spacingBottom: 0,
        style: {
            color: "#000000",
            fontWeight: "normal",
            fontFamily: "Noto Sans TC",
            fontSize: "12px"
        }
    },

    credits: {
        enabled: false
    },

    title: {
        text: '確診縣市地圖'
    },

    subtitle: {
        text:
            '副標題可套用格式<b>粗體</b>, <i>斜體</i>, <span style="color: red">顏色</span>, <a href="http://example.com">超連結</a> and <br/>換行.'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: "bottom"
        }
    },

    caption: {
        text:
            "備註：為境外移入與本土加總數。<br>因疾管署更新時間差，故數字與確診總數有時會有所落差。",
        y: 10
    },

    legend: {
        title: {
            text: "確診人數",
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || "black"
            }
        },
        align: "right",
        verticalAlign: "bottom",
        floating: true,
        layout: "vertical",
        valueDecimals: 0,
        backgroundColor:
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            "rgba(255, 255, 255, 0)",
        symbolRadius: 0,
        symbolHeight: 14
    },

    colorAxis: {
        tickPositions: [0, 1],
        dataClasses: [
            {
                to: 0,
                color: "#B2B2B2"
            },
            {
                from: 1,
                to: 5,
                color: "#D9C5BC"
            },
            {
                from: 5,
                to: 10,
                color: "#D79982"
            },
            {
                from: 10,
                to: 50,
                color: "#D66249"
            },
            {
                from: 50,
                to: 100,
                color: "#aa2c19"
            },
            {
                from: 100,
                color: "#92191D"
            }
        ]
    },

    plotOptions: {
        map: {
            cursor: "pointer",
            states: {
                hover: {
                    color: "#ededed"
                }
            }
        }
    },

    series: [{
        mapData: mapData,
        data: data,
        joinBy: 'name',
        name: "確診人數",
        borderColor: "#FFFFFF",
        states: {
            hover: {
                color: '#a4edba'
            }
        },
        dataLabels: {
            enabled: true,
            allowOverlap: true,
            formatter: function () {
                return this.point.properties['name'];
            },
            style: {
                fontSize: "12px",
                fontWeight: "600",
                color: "#000000"
            }
        }

    }, {
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/tw/tw-all'], 'mapline'),
        // color: 'silver'
    }],


    tooltip: {
        enabled: true,
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        shadow: false,
        shape: 'callout',
        shared: 'true',
        padding: 10,
        y: 30,
        useHTML: true,
        valueSuffix: "人",
        headerFormat:
            '<span style="text-align:center;font-size:1.5em;color:#000000;"> {point.key} </span><br/><span style="text-align:center;font-size:1.5em;color:#000000;">確診人數</span><br/><table>',
        pointFormat:
            '<span style="text-align:center;font-size:2.5em;color:#e50027;"> {point.value} </span>',
        footerFormat: "</table>",
        style: {
            color: '#FFFFFF',
        }
    },

    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        title: {
                            text: ""
                        }
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    }
                    // tooltip: {
                    //   enabled: true,
                    //   shadow: false,
                    //   valueSuffix: "人"
                    // }
                }
            }
        ]
    }

});

//Tool tip pointed arrow pie highchart

(function (Highcharts) {
    Highcharts.Renderer.prototype.symbols.callout = function (x, y, w, h, options) {
        var arrowLength = 12,
            halfDistance = 12,
            r = Math.min((options && options.r) || 0, w, h),
            safeDistance = r + halfDistance,
            anchorX = options && options.anchorX,
            anchorY = options && options.anchorY,
            path;

        path = [
            'M', x + r, y,
            'L', x + w - r, y, // top side
            'C', x + w, y, x + w, y, x + w, y + r, // top-right corner
            'L', x + w, y + h - r, // right side
            'C', x + w, y + h, x + w, y + h, x + w - r, y + h, // bottom-right corner
            'L', x + r, y + h, // bottom side
            'C', x, y + h, x, y + h, x, y + h - r, // bottom-left corner
            'L', x, y + r, // left side
            'C', x, y, x, y, x + r, y // top-right corner
        ];

        path.splice(23, 3,
            'L', w / 2 + halfDistance, y + h,
            w / 2, y + h + arrowLength,
            w / 2 - halfDistance, y + h,
            x + r, y + h
        );

        return path;
    };
}(Highcharts));