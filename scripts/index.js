$(() => {
  /************/
  /*  UD 1.2  */
  /************/

  // Horizontal
  $('div#container ul#selected-plays > li').addClass('horizontal');

  // Sub-level
  $('div#container ul#selected-plays ul').addClass('sub-level');

  // Big-letter
  $('div#container > ul > li').addClass('big-letter');

  // Mailto
  $('a[href^="mailto"]').addClass('mailto');

  // Pdflink
  $('a[href$=".pdf"]').addClass('pdflink');

  // Henrylink
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  // Odd rows (we can't use tr:odd for this exercise because is a 0-based indexing selector, so in the first table it would start counting at second element instead of first one)
  $('table > tbody > tr:nth-child(odd)').addClass('alt'); // nth-child its a 1-based indexing so first element will have index = 1

  // Highlight
  /* Plays referred to Henry (elements that contains 'Henry' but don't have children, so the selector only selects the plays instead of all parents elements) */
  $('table:first *:contains(Henry):not(:has(*))').addClass('highlight');

  /************/
  /*  UD 1.3  */
  /************/
  // Highlight (history td's)
  $('.highlight').next('td').addClass('highlight');

  // Highlight (cols after first one containing 'et', just from the first table)
  $('table')
    .first() // First table
    .find('tr') // Get rows
    .has(':contains(et)') // Filter to only get rows that contains 'et'
    .find('td') // Get td of these rows
    .not(':nth-child(1)') // But not the first cell (of every row)
    .addClass('highlight'); // Add highlight class to the rest
});
