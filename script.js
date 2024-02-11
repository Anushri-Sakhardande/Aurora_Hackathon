document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown element
    var fontSizeSelector = document.getElementById('fontSizeSelector');
  
    // Add event listener for change in font size
    fontSizeSelector.addEventListener('change', function () {
      // Get the selected font size value
      var selectedFontSize = fontSizeSelector.value;
  
      // Update the font size for all elements
      document.querySelectorAll('*').forEach(function (el) {
        el.style.fontSize = selectedFontSize + 'px';
      });
    });
  });

  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}






  