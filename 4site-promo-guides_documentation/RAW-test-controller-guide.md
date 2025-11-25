# Updating the RAW JavaScript Template for A/B Tests
_4Site Promo Plugin — A/B Testing Documentation_

This guide explains how to update the RAW JavaScript A/B testing template used in the 4Site Promo Plugin.  
You will replace placeholder values in the script with your real Promo IDs so the test can:

- Detect ad blockers  
- Randomly run **Variation A (Control)** or **Variation B (Test)**  
- Load an **AdBlocker fallback experience**  

Only **three placeholder values** must be replaced:

| Placeholder | Meaning | Replace With |
|------------|----------|-----------------------------|
| `4A4A4A` | Variation A (Control) | Control Promo ID |
| `4B4B4B` | Variation B (Test) | Test Promo ID |
| `4C4C4C` | Variation C AdBlocker fallback | AdBlocker Promo ID |

No other code changes are required.

---

## 1. Prerequisites

Before updating the script, ensure you have created:
- **Variation A (Control) Promo**
- **Variation B (Test) Promo**
 **Variation C AdBlocker Promo**

Each promo has a unique **Promo ID** in WordPress.

---

## 2. How to Find Promo IDs

1. Go to:  
   **WordPress Admin → Promotions → Edit Promo**
2. Look at the URL:

```
/wp-admin/post.php?post=12345&action=edit
```

The number after `post=` is the **Promo ID**.

Record the IDs (update the ##### with your real Promo IDs)

```
Variation A Promo ID = #####
Variation B Promo ID = #####
Variation C AdBlocker Promo ID = #####
```

---

## 3. Open the RAW Promo Script

In WordPress → Promotions:

1. Open the promo labeled **REFERENCE - TESTING RAW Logic** or find the [template](/4site-promo-guides_documentation/OG-promo-test-controller-logic.js) here copy and paste into a code editor like VSCode or a plain text editor to update.
2. If in Promo - scroll down to the JavaScript inside:

Near the top, you will see the placeholders:

```js
// Variation A (CONTROL) = Replace 4A4A4A
// Variation B (TEST) = Replace 4B4B4B
// Variation C ADBLOCKER = Replace 4C4C4C

```

---

## 4. Replace the AdBlocker Placeholder (`4C4C4C`)

In the text initiate a search and replace. Search for:

```
4C4C4C
```

Replace **every instance** with your actual **AdBlocker Promo ID**.

Example:

```diff
- window.triggerPromotion(4C4C4C);
+ window.triggerPromotion(67890);
```

> **Important:** Update with the exact number from the Promo ID, use numbers only no quotes, no spaces or special charaters. 

You should not need to update any code manually.

---
Repeat for all the varations

## 5. Replace Variation A (Control) Placeholder (`4A4A4A`)

Search for:

```
4A4A4A
```

Replace **every instance** with the Control Promo ID.

---

## 6. Replace Variation B (Test) Placeholder (`4B4B4B`)

Search for:

```
4B4B4B
```

Replace **every instance** with the Test Promo ID.

---

## 7. Example of Correctly Updated Code

Using sample IDs:

- **Variation A (Control)** = `12345`
- **Variation B (Test)** = `23456`
- **AdBlocker** = `67890`


Search and replace Key: 
Variation A (CONTROL) Replace =  4A4A4A
Variation B (TEST) Replace  =  4B4B4B
ADBLOCKER Replace = 4C4C4C


```javascript
<script>
  function checkForAdblocker() {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<ins data-adBlockTest class="adsbygoogle ad-zone ad-space ad-unit textads banner-ads banner_ads" style="display:block!important;width:1px!important;height:1px!important;visibility:hidden!important;"></ins>'
    );

    const testAd = document.querySelector("[data-adBlockTest]");

    if (testAd) {
      const testAdWidth = testAd.offsetWidth;

      if (testAdWidth == "1") {
        console.log("No adblocker detected");
        triggerPromotions();
      } else if (testAdWidth == "0") {
        console.log("Adblocker detected - triggering fallback");
        window.triggerPromotion(67890); // AdBlocker ID
      }
    }
  }

  function triggerPromotions() {
    const gtPromotions = ["multistep", "spinner"];
    const myPromotion =
      gtPromotions[Math.floor(Math.random() * gtPromotions.length)];

    if (myPromotion == "multistep") {
      console.log("Triggering Promotion #12345");
      window.triggerPromotion(12345);
      window.dataLayer.push({
        event: "promotion_seen",
        promotionName: "Promotion #12345",
      });
    } else if (myPromotion == "spinner") {
      console.log("Triggering Promotion #23456");
      window.triggerPromotion(23456);
    }
  }

  checkForAdblocker();
</script>
```

---
## 8. Once your new text has been updated save a version for yourself to keep. Return to the [How to Run A/B Tests with the 4Site Promo Plugin](/FWW/fww-test-guide.md) to finish the last steps of configure the promo and test. 

Important to note: when copying and pasting the code from the file. Make sure you include the openeing <script> and closing </script> and that no lines of the comments are missing. 


