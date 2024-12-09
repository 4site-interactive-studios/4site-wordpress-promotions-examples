<script>

function checkForAdblocker() {
  // Create an element that mimics an ad and inject it into the page
  document.body.insertAdjacentHTML(
    "beforeend",
    '<ins data-adBlockTest class="adsbygoogle ad-zone ad-space ad-unit textads banner-ads banner_ads" style="display: block !important; width:1px !important; height: 1px !important; visibility: hidden !important;"></ins>'
  );
  const testAd = document.querySelector("[data-adBlockTest]");

  // Check to see if the visitor is running an Ad Blocker
  if (testAd) {
    const testAdWidth = testAd.offsetWidth;
    if (testAdWidth == "1") {
      console.log("########################################");
      console.log(
        "No adblocker detected, will run Control Promotion"
      );
      triggerPromotions();
    } else if (testAdWidth == "0") {
      console.log("########################################");
      console.log(
        "Adblocker detected, won't run any of the Multivariate Promotions"
      );
      console.log(
        "Triggering Promotion #109321: 2024 - Multistep Lightbox - Countdown - CONTROL_ADBLOCKER "
      );
      console.log("########################################");
      window.triggerPromotion(109321);
    }
  }
}

function triggerPromotions() {
  // Define the promotions to pick from
  const gtPromotions = ["multistep", "spinner",];

  // Randomly pick and run one promotion
  if (gtPromotions) {
    const myPromotion =
      gtPromotions[Math.floor(Math.random() * gtPromotions.length)];
    if (myPromotion == "multistep") {
      console.log(
        "Triggering Promotion #109319: 2024 - Multistep Lightbox - Countdown - CONTROL"
      );
      console.log("########################################");
      window.triggerPromotion(109319);
      window.dataLayer.push({
        event: "promotion_seen",
        promotionName:
          "Promotion #109319: 2024 - Multistep Lightbox - Countdown - CONTROL",
      });
    } else if (myPromotion == "spinner") {
      console.log(
        "Triggering Promotion #108611: 2024 - Multistep Lightbox - Countdown - TEST"
      );
      window.triggerPromotion(108611);
    }  else {
      console.log(
        "The promotion chosen is outside the array and nothing was triggered"
      );
      console.log("########################################");
    }
  }
}

checkForAdblocker();



</script>
