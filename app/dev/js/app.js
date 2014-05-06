// # Application js
// JavaScript events for Front-End Workflow demo page

jQuery(function($){
  // Using FitText on mega type
  $('.title-sub').fitText(1.5, { minFontSize: '16px', maxFontSize: '24px' });
  $('.title-header').fitText(1.2, { minFontSize: '24px', maxFontSize: '60px' });
  Echo.init({
    offset:100,
    throttle:250
  });

  window.prettyPrint && prettyPrint();
});
