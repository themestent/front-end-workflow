// # Application js
// JavaScript events for Front-End Workflow demo page

jQuery(function($){
  // Using FitText on mega type
  $('.mega-type').fitText(1.2, { minFontSize: '18px', maxFontSize: '72px' });
  Echo.init({
    offset:100,
    throttle:250
  });
});
