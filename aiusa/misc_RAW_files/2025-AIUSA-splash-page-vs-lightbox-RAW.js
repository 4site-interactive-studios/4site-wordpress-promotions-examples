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
        "Triggering Promotion #148113: 2025 – AD BLOCKER – GT – Evergreen: Multistep Lightbox – Secure Payment Header"
      );
      console.log("########################################");
      window.triggerPromotion(148113);
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
        "Triggering Promotion #147971: 2025 – CONTROL – GT – Evergreen: Multistep Lightbox – Secure Payment Header"
      );
      console.log("########################################");
      window.triggerPromotion(147971);
      window.dataLayer.push({
        event: "promotion_seen",
        promotionName:
          "Promotion #147971: 2025 – CONTROL – GT – Evergreen: Multistep Lightbox – Secure Payment Header",
      });
    } else if (myPromotion == "spinner") {
      console.log(
       "Triggering Promotion #146038: 2025 – TEST – GT – Splash Page"
      );
      window.triggerPromotion(146038);
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
