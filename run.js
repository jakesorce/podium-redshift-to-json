var fs = require('fs');
var PapaParse = require('papaparse');
var _ = require('lodash');

// id: 'api-Kz2NgWk5rCP1OlGH3WLA62vdFT75FGHi',
// received_at: '2018-04-27 16:08:38.347',
// uuid: '975',
// uuid_ts: '2018-04-27 20:54:14',
// context_library_version: 'unknown',
// original_timestamp: '2018-04-27 16:08:38.343126',
// timestamp: '2018-04-27 16:08:38.343',
// event: 'website_widget_call',
// event_text: 'website-widget-call',
// sent_at: '2018-04-27 16:08:38',
// anonymous_id: 'podium-website-widget-user-id-24d15550-4729-11e8-ac84-99b1f3f9034b',
// context_library_name: 'unknown',
// device: 'mobile',
// token: '90914d69d005df1eba26288f0683db79',
// session_id: 'session-id-22178910-4a35-11e8-a6f1-07b9d2b0922b',
// url: ''

var files = [
  'website_widget_call',
  'website_widget_chat',
  'website_widget_close',
  'website_widget_invalid',
  'website_widget_open',
  'website_widget_prompt_clicked',
  'website_widget_prompt_dismissed',
  'website_widget_prompt_show',
  'website_widget_prompt_suppressed',
  'website_widget_sending',
  'website_widget_sent',
  'website_widget_server_error',
  'website_widget_text',
  'website_widget_valid',
  'website_widget_widget_load_failed',
  'website_widget_widget_loaded'
];

files.forEach(file => {
  var stream = fs.createReadStream('../' + file + '.csv', 'utf8');
  var papaStream = PapaParse.parse(PapaParse.NODE_STREAM_INPUT, {
    header: true
  });
  var writeStream = fs.createWriteStream('../' + file + '.big.json');

  stream.pipe(papaStream).pipe(writeStream);

  // var cleanParsed = parsed.data.map(row => {
  //   return JSON.stringify(
  //     _.omit(row, [
  //       'received_at',
  //       'uuid',
  //       'uuid_ts',
  //       'context_library_version',
  //       'original_timestamp',
  //       'event_text',
  //       'sent_at',
  //       'context_library_name'
  //     ])
  //   );
  // });
});
