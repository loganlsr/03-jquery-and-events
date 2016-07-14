// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      console.log($(this).val());
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn(500);
      /* Done: If the select box changes to an option that has a value,
      we should:
      1. Hide all the articles,
      2. Fade in only the articles that match based on the author
        that was selected. Use an "attribute selector" to find
        those articles that match the value, and fade them in
        for the reader. */
    } else {
      $('article').not('.template').fadeIn(500);
      /* Done: Otherwise, we should:
      1. Show all the articles.
      2. Except the one article we are using as a template. */
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      console.log($(this).val());
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn(500);
    } else {
      $('article').not('.template').fadeIn(500);
    }
    $('#author-filter').val('');
  });
  /* Done: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
};

articleView.handleMainNav = function () {

  /* Done: Complete the delegated event handler below to help
  power the tabs feature.
  Clicking any .tab element should:
  1. Hide all the .tab-content sections.
  2. Fade in the single .tab-content section that is associated withthe clicked
  .tab element's data-content attribute. */
  $('#home_tab').on('click', function() {
    $('#about').hide();
    $('#articles').show();
    $('article').not('.template').fadeIn(500);
    $('#author-filter').val('');
    $('#category-filter').val('');
  });

  $('#about_tab').on('click', function() {
    $('#articles').hide();
    $('#about').fadeIn(500);
  });
  // $('.main-nav').on(/* CODE GOES HERE */);
  //
  // $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  /* Hide any elements after the first 2 (<p> Tags in case)
  in any article body: */
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    if($(this).text() === 'Show Less') {
      $(this).prev().children('*:nth-of-type(n+2)').hide();
      $(this).text('Read More');
    } else {
      event.preventDefault();
      event.stopPropagation();
      $(this).prev().children().show();
      $(this).text('Show Less');
    }
  });
  /* Done: Add a delegated event handler to reveal the remaining
  paragraph.  When a .read-on link is clicked, we can:
  1. Prevent the default action of a link.
  2. Reveal everything in that particular article now.
  3. Hide that read-on link! */
  // STRETCH GOAL!:  change the 'Read On' link to display 'Show Less'
};

// Done: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
