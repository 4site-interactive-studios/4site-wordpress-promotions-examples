
## How to Run A/B Tests with the 4Site Promo Plugin

This guide walks you through how to set up an A/B test in the 4Site Promo Plugin so you can test two different promo experiences (for example, a multistep lightbox versus a full-screen splash version), plus a fallback for visitors who block scripts or promos.

The structure we are aiming for is when setting up an A/B test:

- Version A: Control experience

- Version B: Test experience

- Ad Blocker Version: Fallback shown to visitors who block promos

- Raw “Test Controller” Promo: JavaScript that randomly assigns visitors to A or B and handles the ad blocker fallback

4Site will provide or review the [JavaScript](/4site-promo-guides_documentation/OG-promo-test-controller-logic.js) for the Test Controller promo. 

This guide's main focus is on setting up the Engaging Networks forms and the three promo variations.

Please see [RAW "Test Controller" guide](/4site-promo-guides_documentation/RAW-test-controller-guide.md) to review how to edit the javascript that enables the test.

---

## 1. Decide What You Are Testing

Before you start, confirm:

- **What is the Control/Variation A?**
  Example: FWW is testing One-Col vs Multistep.
  Variation A would be one-col, since it has been used before, can be referred to as Control as well
  

- **What is the Test Variant/Variation B?**
  Example: The multistep donation lightbox.

- **What should Ad Blocker users see?**
  In most cases, we recommend giving them **the Control experience**, but important to create a seperate donation form so the data does not interfere with the test.

Have those decisions made before you build anything.

---

## 2. Create the Engaging Networks Forms / Pages

You will need a separate Engaging Networks page for each variation. This keeps reporting clean and lets us compare performance.

1. Create three Engaging Networks pages:

   - **Form A – Control Variant** - One-Col Donation form

   - **Form B – Test Variant** - Multistep donation form

   - **Form A – AdBlocker** One-Col Donation AdBlocker form (a copy of the Control, but clearly labeled as the ad blocker version)

2. Update:

   - Page titles and internal names so you can tell them apart later in reporting.

   - Any copy or visual elements that differ between Control and Variant.

   - Any GA4 / tracking fields that are required for your setup (we recommend keeping tracking consistent across the three pages).

**You should now have three distinct EN URLs, one for each version.**

---

## 3. Create the Promo Boxes in the 4Site Promo Plugin

Next, you will create four promos in WordPress that correspond to the three EN forms.

You will create:

- Promo A: Control/Variant A - One Col Variant 

- Promo B: Test/Variant B - Multistep Varian

- Promo C: Ad Blocker - One Col Adblocker Variant

- Promo D: RAW Test Logic - Controls the test logic

### 3.1 Promo A: One Col Variant 

1. In WordPress, go to **Promotions** and create a new promo.

2. Configure it as you normally would for your standard One-Col Promo:

   1. Choose visibility “Turned On” to start

   2. Select EN Lightbox Promo-Type and update all the relevant fields. 

      - Naming Recommendation: Title should follow easy to follow naming conventions

        - **[Year] - OneVsMultistep - Promo Variant A - 1 of 3**

      - Set the correct display rules: Target the correct pages, audiences, and conditions
      
      - Regularly "Save" your updates by saving your Draft/Publishing /or Updating the Promo. 
      
      -To make sure the Promo is not yet visible, change the visibility under the Title of the Promo. Select "Turned Off" 

      - Please note, when making any updates to the Promo, you must save your work reguarlary by ensuring that you are "updateing" the promo. If you have not updated the promo your changes will not take place. 

      - To see and test your Promo, it must be "Turned on" and "Publised" 
      

3. Save and **note the Post ID** for this promo.

   - This is the numeric ID in the URL or in the admin (4Site will use this in the controller code).

   - This can be found in two different places. In the URL of the Promo edit screen

   - The Promotion Dashboard - Look for the colomn "Promo" and save the ID with which varation it is associated with. 

### 3.2 Promo B: Variant

1. Create a second promo, similar to the Control.

2. Configure it as the Variant:

   - Example: one-col layout, different hero image, different introductory copy, etc.

   - Engaging Networks embed URL: paste the URL for **Form B – Variant**

3. Match the same display rules as the Control so both are eligible to show to the same audience.

4. Save and **note the Post ID** for this promo as well.

## Specific Steps for FWW - One-Col Variant

1. Create a second promo, instead of selecting “Multistep”

### 3.3 Promo C: Ad Blocker Version

1. Create a third promo by duplicating either the Control or Variant, depending on what you want ad blocker users to see. Most often this will be the Control.

2. Update:

   - Title: something like “Control – AdBlocker” so it is obvious in reporting.

   - Engaging Networks embed URL: paste the URL for **Form A – AdBlocker**.

3. Match the same display rules as the other promos.

4. Save and **note the Post ID** for this Ad Blocker promo.

At this point, you should have three promos, each with its own Post ID and EN form URL.

---

## 4. Create the Raw “Controller” Promo

The Raw promo is where the A/B logic lives. This promo does not show content directly; instead, it runs JavaScript that decides which promo to display and handles the fallback for ad blocker users.

### 4.1 Create the Raw Promo

1. In **Promotions**, create a new promo.

2. Set the type to something like **Raw** (4Site may have a custom label for this; we will confirm).

3. Leave any visual content fields empty. This promo does not show a visual.

### 4.2 Add the JavaScript Controller Code

4Site will provide you with a JavaScript snippet that looks roughly like:

- A function that randomly picks between Promo A and Promo B.

- A fallback that shows the Ad Blocker promo when scripts or promos are blocked.

- Optional console log statements for debugging.

Your steps:

1. Paste the full JavaScript snippet into the Raw promo’s code area.

2. Inside that snippet, update the promo IDs to match your three promos:

   - Control promo ID

   - Variant promo ID

   - Ad Blocker promo ID

If 4Site is handling this part for you, you may simply need to confirm the final ID list with them.

### 4.3 Set the Trigger to “Immediately”

This is important.

- In the Raw promo settings, set its **Trigger** to **Immediate** (or the equivalent in your setup).

- Do **not** set this one to “Trigger by JavaScript” or a delayed trigger.

- The controller promo must run as soon as the page loads so it can decide which promo to show.

For the three visual promos (Control, Variant, Ad Blocker), you will typically keep them set to be triggered by JavaScript (the controller code).

---

## 5. Turn On and Launch the Test

Once all four promos exist and the IDs are wired into the controller, you are ready to launch.

1. Ensure:

   - Raw controller promo is **Published** and **Active**.

   - Control, Variant, and Ad Blocker promos are **Published** and **Active**.

2. Confirm:

   - All are set to show on the correct page(s).

   - Targeting rules match across Control and Variant.

   - The Raw promo trigger is Immediate.

You can safely have the Raw promo active even while you are still editing the other three promos. The logic will not show anything until valid promo IDs are available and active.

---

## 6. QA: Test the A/B Setup

Before going live to your full audience, run through a quick QA pass.

### 6.1 Basic Behavior

- Open the page in a normal browser window:

  - Confirm that sometimes you see the Control and other times the Variant.

  - You may need to refresh a few times to see both experiences, since the selection is randomized.

### 6.2 Check the Correct Forms

- When each promo appears, confirm that:

  - Control loads the **Form A – Control** EN page.

  - Variant loads the **Form B – Variant** EN page.

  - Ad Blocker version (when triggered) loads **Form A – AdBlocker**.

### 6.3 Test with Ad Blockers Enabled

- Enable a common ad blocker in your browser.

- Reload the page.

- Confirm that the Ad Blocker promo is shown instead of Control or Variant.

If you have the browser console open, you may also see the console logs that indicate which promotion is being chosen. These are mainly for 4Site’s developers and can help with troubleshooting if something is not behaving as expected.

---

## 7. Reporting and Analysis

Once the test is running and collecting data:

- In Engaging Networks:

  - Use the separate form names (Control, Variant, AdBlocker) to compare performance.

- In GA4:

  - You can segment by page path or event parameters to see which version drives higher completion and revenue.

- In your internal dashboards:

  - Treat each EN form as its own “variant” so you can calculate lift between Control and Variant.

4Site can help you interpret these results and recommend next steps (for example, rolling out the winning variation as the new default).

---

## 8. When to Loop in 4Site

We recommend looping us in for:

- The first time you set up an A/B test with this structure.

- Any time you want to modify the JavaScript logic (for example, changing from a 50/50 split to a 70/30 split), or if there is any other need for the code

  - Update the copy based on the time/date of the campaign automatically

- Any time the test involves a more complex condition, such as different behavior on mobile versus desktop.

If you share the promo IDs and Engaging Networks URLs, we can quickly double check the configuration and make sure everything is wired correctly.
