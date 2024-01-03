/* global jQuery */
var tpj = jQuery;

tpj(function () {
  // Fixing revapi1 section
  if (tpj("#rev_slider_1_1").revolution == undefined) {
    // revslider_showDoubleJqueryError("#rev_slider_1_1"); // Commenting out as it's not defined
  } else {
    tpj("#rev_slider_1_1").show().revolution({
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,992,480",
      gridwidth: "1240,1240,880,520",
      gridheight: "690,690,450,350",
      minHeight: "",
      spinner: "spinner0",
      editorheight: "690,690,450,350",
      responsiveLevels: "1240,1024,992,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        onHoverStop: false,
        touch: {
          touchenabled: true,
        },
        arrows: {
          enable: true,
          style: "uranus",
          hide_onmobile: true,
          hide_under: 768,
          hide_onleave: true,
          left: {},
          right: {},
        },
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  }

  // Fixing revapi2 section
  if (tpj("#rev_slider_2_1").revolution == undefined) {
    // revslider_showDoubleJqueryError("#rev_slider_2_1"); // Commenting out as it's not defined
  } else {
    tpj("#rev_slider_2_1").show().revolution({
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,992,480",
      gridwidth: "1240,1240,880,520",
      gridheight: "795,795,450,350",
      minHeight: "",
      spinner: "spinner0",
      editorheight: "795,768,880,350",
      responsiveLevels: "1240,1024,992,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        onHoverStop: false,
        touch: {
          touchenabled: true,
        },
        arrows: {
          enable: true,
          style: "uranus",
          hide_onmobile: true,
          hide_under: 768,
          hide_onleave: true,
          left: {},
          right: {},
        },
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  }

  // Fixing revapi3 section
  if (tpj("#rev_slider_3_1").revolution == undefined) {
    // revslider_showDoubleJqueryError("#rev_slider_3_1"); // Commenting out as it's not defined
  } else {
    tpj("#rev_slider_3_1").show().revolution({
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1240,778,480",
      gridwidth: "1240,1240,778,480",
      gridheight: "705,705,450,350",
      minHeight: "",
      spinner: "spinner0",
      editorheight: "705,768,450,350",
      responsiveLevels: "1240,1240,778,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        onHoverStop: false,
        touch: {
          touchenabled: true,
        },
        arrows: {
          enable: true,
          style: "custom",
          hide_onmobile: true,
          hide_under: 768,
          hide_onleave: true,
          left: {},
          right: {},
        },
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  }
});
