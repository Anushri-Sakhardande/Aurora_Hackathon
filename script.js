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

    function loadDescription() {
        // Get the URL of the description.html file from the clicked button's parent anchor tag
        var descriptionUrl = event.currentTarget.parentNode.getAttribute('href');
        
        // Fetch the description from the URL
        fetch(descriptionUrl)
            .then(response => response.text())
            .then(data => {
                // Extract the description content
                var tempElement = document.createElement('div');
                tempElement.innerHTML = data;
                var descriptionContent = tempElement.querySelector('.desc').innerHTML;

                // Update the description in the current card
                event.currentTarget.parentNode.querySelector('.desc').innerHTML = descriptionContent;
            });
    }

  