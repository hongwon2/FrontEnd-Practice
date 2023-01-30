function load() {
  chart = function () {
    this.chartId;
    this.data;

    this.init = function (_chartId, _data) {
      this.chartId = _chartId;
      this.data = _data;
    };
    this.crateChart = function () {
      Plotly.newPlot(this.chartId, this.data);
    };
  };

  var trace1 = {
    x: [5, 2, 5, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    type: "scatter",
  };

  var data = [trace1];
  var p1 = new chart();
  p1.init("ch1", data);

  p1.crateChart();
}
