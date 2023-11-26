'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;
      let translatedText;

      if (text === '') {
        return res.json({ error: "No text to translate" });

      } else if (!locale || !text) {
        return res.json({ error: "Required field(s) missing" });

      } else if (locale === 'british-to-american') {
        translatedText = translator.britishToAmerican(text);

      } else if (locale === 'american-to-british') {
        translatedText = translator.americanToBritish(text);

      } else {
        return res.send({ error: 'Invalid value for locale field' });
      };

      if (translatedText === text) {
        translatedText = "Everything looks good to me!"
      }

      res.json({ text: text, translation: translatedText });
      return;

    });
};
