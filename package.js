Package.describe({
  summary: 'Reusable ClinicalFramework graphs.',
  version: '0.0.2',
  name: 'clinical:graphs',
  git: 'http://github.com/awatson1978/clinical-nvd3.git'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0');

  api.use('clinical:nvd3@0.0.3');
  api.use('clinical:auto-resizing@0.0.1');
  api.use('less');


  api.export('ClinicalGraphs');

  api.addFiles('dataLineGraph.js', 'client');
});
