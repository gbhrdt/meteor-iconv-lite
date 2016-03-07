Package.describe({
  summary: "iconv-lite - pure javascript character encoding conversion (npm integrated for meteor)",
  version: "1.0.3",
  git: "https://github.com/gbhrdt/meteor-iconv-lite.git",
  name: 'gbhrdt:meteor-iconv-lite'
});

Npm.depends({
  "iconv-lite": "~0.4.13"
});

Package.on_use(function (api) {
  api.add_files('iconv-lite.js', 'server');
  api.export('iconv', 'server');

  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});
