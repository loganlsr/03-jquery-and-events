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
    } else {
      $('article').not('.template').fadeIn(500);

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
};

articleView.handleMainNav = function () {
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
};

articleView.setTeasers = function() {
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

};

articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
