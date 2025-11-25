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
| `4C4C4C` | AdBlocker fallback | AdBlocker Promo ID |
| `4A4A4A` | Variation A (Control) | Control Promo ID |
| `4B4B4B` | Variation B (Test) | Test Promo ID |

No other code changes are required.

---

## 1. Prerequisites

Before updating the script, ensure you have created:

- **AdBlocker Promo**
- **Variation A (Control) Promo**
- **Variation B (Test) Promo**

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

Record the IDs:

```
AdBlocker Promo ID = XXXXX
Variation A Promo ID = YYYYY
Variation B Promo ID = ZZZZZ
```

---

## 3. Open the RAW Promo Script

In WordPress → Promotions:

1. Open the promo labeled **REFERENCE - TESTING RAW Logic** or find the [template](promo-ab-test-logic.js) here to update
2. If in Promo - scroll down to the JavaScript inside:

Near the top, you will see the placeholders:

```js
// ADBLOCKER = Replace 4C4C4C
// Variation A (CONTROL) = Replace 4A4A4A
// Variation B (TEST) = Replace 4B4B4B
```

---

## 4. Replace the AdBlocker Placeholder (`4C4C4C`)

Search for:

```
4C4C4C
```

Replace **every instance** with your **AdBlocker Promo ID**.

Example:

```diff
- window.triggerPromotion(4C4C4C);
+ window.triggerPromotion(67890);
```

> **Important:** Use numbers only — no quotes.

---

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

- **AdBlocker** = `67890`
- **Variation A (Control)** = `12345`
- **Variation B (Test)** = `23456`

```html
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

## 8. QA Checklist

### A. Normal Browser Testing
- [ ] Control appears  
- [ ] Test appears  
- [ ] Correct EN forms load  
- [ ] No console errors  

### B. With Ad Blocker Enabled
- [ ] AdBlocker version displays  

### C. Environment
- [ ] RAW promo set to **Trigger Immediately**  
- [ ] All promos published and active  
- [ ] EN pages live and loading correctly  

---

## 9. Troubleshooting

### Issue: Only one promo ever loads
- RAW promo may not be set to Immediate  
- Variation promos may not be active  
- IDs may be incorrect  

### Issue: AdBlocker fallback never appears
- Browser is not blocking test element  
- AdBlocker ID incorrect  
- Try incognito or another browser  

### Issue: “undefined” or “NaN” in console
- IDs contain quotes or invalid characters  

Correct format:

```js
window.triggerPromotion(12345);   // ✔️ correct
window.triggerPromotion("12345"); // ❌ incorrect
```

### Issue: Both promos appear at once
- Another promo is targeting the same pages  

---

## 10. Contact

If you need help validating promo IDs or troubleshooting, contact the 4Site team.  
We can review:
- Raw JS setup  
- Promo IDs  
- EN URLs  
- GA4 tracking  
- Debug logs  
