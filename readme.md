## clinical-nvd3

Adds reactive NVD3 graphs to your application.  Part of the realtime analytics pipeline for Meteor.
[http://nvd3.org/](http://nvd3.org/)  


======================================
#### Installation

````
meteor add clinical:graphs
````


======================================
#### Line Graph  

````html
<div id="dataLineChartPanel" class="panel panel-success">
  <div id="dataLineChartTitle" class="panel-heading">
    Data Collection
  </div>
  <div class="d3chart" id="dataLineChart">
    <svg id="dataLineChartCanvas"></svg>
  </div>
</div>
````

````js
Router.route('/', {
  action:function(){
    this.render('dashboardPage');
  },
  onAfterAction: function() {
    ClinicalGraphs.reactiveLineGraph('#dataLineChart', '#dataLineChartPanel', AnalyticsData);
  }
});
Template.dashboardPage.helpers({
  resized: function() {
    // this functions get run as side effects
    ClinicalGraphs.reactiveLineGraph('#dataLineChart', '#dataLineChartPanel', AnalyticsData);

    // the resized helper function gets rerun when the reactive
    // resize variable gets updated
    return Session.get('resize');
  }
});
````

======================================
#### Todo  

- Line Chart
- Scatterplot
- Stream Chart
- Bar Chart
- Horizontal Bar Chart
- Cumulative Line
- Pie Chart
- Bullet Chart
