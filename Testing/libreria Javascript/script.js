createAndAppendSingleElement('main', 'body', 'start', 'main');
createAndAppendSingleElement('nav', 'body', 'start', 'nav');
createAndAppendSingleElement('aside', 'body', 'end', 'aside');
createAndAppendSingleElement('footer', 'body', 'end', 'footer');

createAndAppendMultiElements('section', 4, 'main', 'start', 'mySections');
createAndAppendMultiElements('article', 3, 'aside', 'start', 'myArticles')