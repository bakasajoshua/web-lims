/*jslint node: true, white: true */
'use strict';
var HighchartsConfig = {
		version: [{highcharts: '3.0.7'},{Highstock: '1.3.7.'}],
		parts: {
			/* CORE */
			Intro: {name: 'Intro', component: 'Core', group: 'Core', baseUrl:  'parts'},
			Globals:	{name: 'Globals', component: 'Core', group: "Core", baseUrl: 'parts'},
			Utilities:	{name: 'Utilities', component: 'Core', group: "Core", baseUrl: 'parts'},
			PathAnimation: {name: 'PathAnimation', component: 'Core', group: "Core", baseUrl: 'parts'},
			JQueryAdapter:	{name: 'JQueryAdapter', component: 'Core', group: "Core", baseUrl: 'parts'},
			Adapters:	{name: 'Adapters', component: 'Core', group: "Core", baseUrl: 'parts'},
			Options:	{name: 'Options', component: 'Core', group: "Core", baseUrl: 'parts'},
			Color:	{name: 'Color', component: 'Core', group: "Core", baseUrl: 'parts'},
			SvgRenderer:	{name: 'SvgRenderer', component: 'Core', group: "Core", baseUrl: 'parts'},
			Html: { name: 'Html', component: 'Html', group: 'Features', baseUrl: 'parts', depends: {component: ['Core']}},
			VmlRenderer:	{name: 'VmlRenderer', component: 'VMLRenderer', group: "Renderers", depends: {component: ['Html']}, baseUrl: 'parts'},
			CanVGRenderer:	{name: 'CanVGRenderer', component: 'CanVGRenderer', group: "Renderers", depends: {component: ['Core']}, baseUrl: 'parts'},
			Tick:	{name: 'Tick', component: 'Core', group: "Core", baseUrl: 'parts'},
			StackItem:	{name: 'StackItem', component: 'Core', group: "Core", baseUrl: 'parts'},
			PlotLineOrBand:	{name: 'PlotLineOrBand', component: 'PlotLineOrBand', group: 'Features', depends: {component: ['Core']}, baseUrl: 'parts'},
			Axis:	{name: 'Axis', component: 'Core', group: "Core", baseUrl: 'parts', depends: {name: ['StackItem']}},
			DateTimeAxis:	{name: 'DateTimeAxis', component: 'DateTimeAxis', group: 'Features', depends: { component: ['Core']}, baseUrl: 'parts'},
			LogarithmicAxis:	{name: 'LogarithmicAxis', component: 'LogarithmicAxis', group: 'Features', depends: {component: ['Core']}, baseUrl: 'parts'},
			Tooltip:	{name: 'Tooltip', component: 'Core', group: "Core", baseUrl: 'parts'},
			Pointer:	{name: 'Pointer', component: 'Core', group: "Core", baseUrl: 'parts'},
			Legend:	{name: 'Legend', component: 'Core', group: "Core", baseUrl: 'parts'},
			Chart:	{name: 'Chart', component: 'Core', group: "Core", baseUrl: 'parts'},
			CenteredSeriesMixin: {name: 'CenteredSeriesMixin', component: 'CenteredSeriesMixin', baseUrl: 'parts'},
			Point:	{name: 'Point', component: 'Core', group: 'Core', baseUrl: 'parts'},
			Series:	{name: 'Series', component: 'Core', group: "Core", baseUrl: 'parts'},
			Dynamics: {name: 'Dynamics', component: 'Dynamics', group: 'Features', depends: {component: ['Core']}},
			LineSeries:	{name: 'LineSeries', component: 'LineSeries', group: "SerieTypes", depends: {component: ['Core']}, baseUrl: 'parts'},
			AreaSeries:	{name: 'AreaSeries', component: 'AreaSeries', group: "SerieTypes", depends: {component: ['Core']}, baseUrl: 'parts'},
			SplineSeries:	{name: 'SplineSeries', component: 'SplineSeries', group: "SerieTypes", depends: {component: ['Core']}, baseUrl: 'parts'},
			AreaSplineSeries:	{name: 'AreaSplineSeries', component: 'AreaSplineSeries', group: "SerieTypes", depends: {component: ['Core', 'AreaSeries','SplineSeries']}, baseUrl: 'parts'},
			ColumnSeries:	{name: 'ColumnSeries', component: 'ColumnSeries', group: "SerieTypes", depends: {component: ['Core']}, baseUrl: 'parts'},
			BarSeries:	{name: 'BarSeries', component: 'BarSeries', group: "SerieTypes", depends: {component: ['Core','ColumnSeries']}, baseUrl: 'parts'},
			ScatterSeries:	{name: 'ScatterSeries', component: 'ScatterSeries', group: "SerieTypes", depends: {component: ['Core','ColumnSeries']}, baseUrl: 'parts'},
			PieSeries:	{name: 'PieSeries', component: 'PieSeries', group: "SerieTypes", depends: {component: ['Core'], name: ['CenteredSeriesMixin']}, baseUrl: 'parts'},
			DataLabels:	{name: 'DataLabels', component: 'DataLabels', group: 'Features', depends: {component: ['Core']}, baseUrl: 'parts'},

			/* STOCK */
			OrdinalAxis:	{name: 'OrdinalAxis', component: 'Stock', group: 'Stock', depends: {component: ['Core']}, baseUrl: 'parts'},
			DataGrouping:	{name: 'DataGrouping', component: 'Stock', group: 'Stock', depends: {component: ['Core']}, baseUrl: 'parts'},
			OHLCSeries:	{name: 'OHLCSeries', component: 'OHLC', group: 'Stock', depends: {component: ['Stock', 'ColumnSeries']}, baseUrl: 'parts'},
			CandlestickSeries:	{name: 'CandlestickSeries', component: 'Candlestick', group: 'Stock', depends: {component: ['Stock','OHLC', 'ColumnSeries']}, baseUrl: 'parts'},
			FlagsSeries:	{name: 'FlagsSeries', component: 'Flags', group: 'Stock', depends: {component: ['Stock','ColumnSeries']}, baseUrl: 'parts'},
			Scroller:	{name: 'Scroller', component: 'Stock', group: 'Stock', depends: {component: ['Core','LineSeries']}, baseUrl: 'parts'},
			RangeSelector:	{name: 'RangeSelector', component: 'Stock', group: 'Stock', depends: {component: ['Core']}, baseUrl: 'parts'},
			StockNavigation:	{name: 'StockNavigation', component: 'Stock', group: 'Stock', depends: {component: ['Core']}, baseUrl: 'parts'},
			StockChart:	{name: 'StockChart', component: 'Stock', group: 'Stock', depends: {component: ['Core']}, baseUrl: 'parts'},

			/* PARTS-MORE */
			Pane:	{name: 'Pane', baseUrl: 'parts-more'},
			RadialAxis:	{name: 'RadialAxis', depends: {name: ['CenteredSeriesMixin']}, baseUrl: 'parts-more'},
			AreaRangeSeries:	{name: 'AreaRangeSeries', component: 'AreaRangeSeries', group: "Extra\'s", depends: {component: ['ColumnSeries', 'AreaSeries']}, baseUrl: 'parts-more'},
			AreaSplineRangeSeries:	{name: 'AreaSplineRangeSeries', component: 'AreaSplineRangeSeries', group: "Extra\'s", depends: {component: ['AreaRangeSeries', 'SplineSeries']}, baseUrl: 'parts-more'},
			ColumnRangeSeries:	{name: 'ColumnRangeSeries', component: 'ColumnRangeSeries', group: 'SerieTypes', depends: {component: ['Core', 'ColumnSeries', 'AreaRangeSeries']}, baseUrl: 'parts-more'},
			GaugeSeries:	{name: 'GaugeSeries', component: 'Gauge', group: 'Extra\'s', depends: {component: ['Core','LineSeries'], name: ['RadialAxis', 'Pane', 'PlotLineOrBand']}, baseUrl: 'parts-more'},
			BoxPlotSeries:	{name: 'BoxPlotSeries', component: 'BoxPlotSeries', group: "Extra\'s", depends: {component: ['ColumnSeries']}, baseUrl: 'parts-more'},
			ErrorBarSeries:	{name: 'ErrorBarSeries', component: 'ErrorBarSeries', group: "Extra\'s", depends: {component: ['BoxPlotSeries']}, baseUrl: 'parts-more'},
			WaterfallSeries:	{name: 'WaterfallSeries', component: 'WaterfallSeries', group: "Extra\'s", depends: {component: ['ColumnSeries']}, baseUrl: 'parts-more'},
			BubbleSeries:	{name: 'BubbleSeries', component: 'BubbleSeries', group: "Extra\'s", depends: {component: ['Core', 'ScatterSeries' ]}, baseUrl: 'parts-more'},
			Polar:	{name: 'Polar', component: 'Polar', group: 'Extra\'s', depends: {component: ['Core'], name: ['RadialAxis', 'Pane', 'ColumnSeries', 'AreaSeries']}, baseUrl: 'parts-more'},
			Facade:	{name: 'Facade', component: 'Core', group: "Core", baseUrl: 'parts'},
			Outro: {name: 'Outro', component: 'Core', group: 'Core', baseUrl:  'parts'},
			/* MODULES */
			'funnel.src':	{name: 'funnel.src', component: 'Funnel', group: "Modules", depends: {component: ['Core']}, baseUrl: 'modules'}
		},

		groups: {
			'Core': { description: 'This is the description for Core group', depends: {component: ['LineSeries']}},
			'Stock': { description: 'This is the description for Stock'},
			'SerieTypes': { description: 'This is the description for SerieTypes group'},
			'Extra\'s': { description: 'This is the description for Extra\'s group'},
			'Features': { description: 'This is the description for the Features group'},
			'Renderers': { description: 'This is the description for the Renderers group'},
			'Modules':  { description: 'This is the description for the Modules group'}
		},

		components: {
			'Core': { description: 'This is the description for Core'},
			'Stock': { description: 'This is the description for Stock'},
			'Stock serieTypes': { description:  'This is the description for Stock SerieTypes'},
			'SerieTypes': { description:  'This is the description for SerieTypes'},
			'Gauge': { description:  'This is a components description'},
			'Polar': { description:  'This is a components description'},
			'LineSeries': { description:  'CORE .. This is a components description'},
			'AreaSeries': { description:  'This is a components description'},
			'SplineSeries': { description:  'This is a components description'},
			'ColumnSeries': { description:  'This is a components description'},
			'BarSeries': { description:  'This is a components description'},
			'ScatterSeries': { description:  'This is a components description'},
			'PieSeries': { description:  'This is a components description'},
			'AreaRangeSeries': { description:  'This is a components description'},
			'AreaSplineSeries': { description:  'This is a components description'},
			'ColumnRangeSeries': { description:  'This is a components description'},
			'Funnel': {description: 'DEPS NOT TESTED ...This is a description for Funnel'}
		}
	};
