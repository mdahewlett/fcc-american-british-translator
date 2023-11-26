const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite( 'Translate Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'Mangoes are my favorite fruit.');
           assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
           done();
    });
    
    test('Translate I ate yogurt for breakfast. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'I ate yogurt for breakfast.');
           assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
           done();
         });

    test('Translate We had a party at my friend\'s condo. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'We had a party at my friend\'s condo.');
           assert.equal(translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
           done();
         });

    test('Translate Can you toss this in the trashcan for me? to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'Can you toss this in the trashcan for me?');
           assert.equal(translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
           done();
         });

    test('Translate The parking lot was full. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'The parking lot was full.');
           assert.equal(translation, 'The <span class="highlight">car park</span> was full.');
           done();
         });

    test('Translate Like a high tech Rube Goldberg machine. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'Like a high tech Rube Goldberg machine.');
           assert.equal(translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
           done();
         });

    test('Translate To play hooky means to skip class or work. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'To play hooky means to skip class or work.');
           assert.equal(translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
           done();
         });

    test('Translate No Mr. Bond, I expect you to die. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'No Mr. Bond, I expect you to die.');
           assert.equal(translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');  
           done();
         });

    test('Translate Dr. Grosh will see you now. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'Dr. Grosh will see you now.');
           assert.equal(translation, '<span class="highlight">Dr</span> Grosh will see you now.');
           done();
         });

    test('Translate Lunch is at 12:15 today. to British English',
         (done) => {
           let translation = translator.americanToBritish(
             'Lunch is at 12:15 today.');
           assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
           done();
         });

    test('Translate We watched the footie match for a while. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'We watched the footie match for a while.');
           assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
           done();
         });

    test('Translate Paracetamol takes up to an hour to work. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'Paracetamol takes up to an hour to work.');
           assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
           done();
         });

    test('Translate First, caramelise the onions. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'First, caramelise the onions.');
           assert.equal(translation, 'First, <span class="highlight">caramelize</span> the onions.');
           done();
         });

    test('Translate I spent the bank holiday at the funfair. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'I spent the bank holiday at the funfair.');
           assert.equal(translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
           done();
         });

    test('Translate I had a bicky then went to the chippy. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'I had a bicky then went to the chippy.');
           assert.equal(translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
           done();
         });

    test('Translate I\'ve just got bits and bobs in my bum bag. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'I\'ve just got bits and bobs in my bum bag.');
           assert.equal(translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
           done();
         });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'The car boot sale at Boxted Airfield was called off.');
           assert.equal(translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
           done();
         });

    test('Translate Have you met Mrs Kalyani? to American English',
    (done) => {
      let translation = translator.britishToAmerican(
        'Have you met Mrs Kalyani?');
      assert.equal(translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
      done();
    });

    test('Translate Prof Joyner of King\'s College, London. to American English',
      (done) => {
        let translation = translator.britishToAmerican(
          'Prof Joyner of King\'s College, London.');
        assert.equal(translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
        done();
      });

    test('Translate Tea time is usually around 4 or 4.30. to American English',
         (done) => {
           let translation = translator.britishToAmerican(
             'Tea time is usually around 4 or 4.30.');
           assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
           done();
         });

    test('Highlight translation in Mangoes are my favorite fruit.',
         (done) => {
           let translation = translator.americanToBritish(
             'Mangoes are my favorite fruit.');
           assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
           done();
         });

    test(
      'Highlight translation in I ate yogurt for breakfast.',
      (done) => {
        let translation = translator.americanToBritish(
          'I ate yogurt for breakfast.');
        assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();
      });

    test('Highlight translation in We watched the footie match for a while.',
         (done) => {
           let translation = translator.britishToAmerican(
             'We watched the footie match for a while.');
           assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
           done();
         });

    test('Highlight translation in Paracetamol takes up to an hour to work.',
         (done) => {
           let translation = translator.britishToAmerican(
             'Paracetamol takes up to an hour to work.');
           assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
           done();
         });
  
  });

});
