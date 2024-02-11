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

    function loadDescription(button) {
        // Retrieve job details from the current card
        var card = button.closest('.card');
        var jobTitle = card.querySelector('.job-heading').textContent;
        var jobLocation = card.querySelector('.job-desc-loc').textContent;
        var jobDescription = card.querySelector('.job-desc').textContent;
        con
        // Populate the job details in the new HTML section
        var listingSection = document.querySelector('.listings');
        var newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
            <h2 class="job-heading">${jobTitle}</h2>
            <p class="job-desc-loc">${jobLocation}</p>
            <p class="job-desc">${jobDescription}</p>
        `;
        listingSection.appendChild(newCard);
    }




  