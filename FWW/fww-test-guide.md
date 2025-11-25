
# How to Run A/B Tests with the 4Site Promo Plugin

This guide walks you through how to set up an A/B test in the 4Site Promo Plugin so you can test two different promo experiences (for example, a multistep lightbox versus a full-screen splash version), plus a fallback for visitors who block scripts or promos.

The structure we are aiming for is when setting up an A/B test within the Promotions Plugin:

- **Variant A:** Control experience

- **Variant B:** Test experience

- **Varainat C AdBlocker:** Fallback shown to visitors who block promos

- **Raw “Test Controller” Promo:** JavaScript that randomly assigns visitors to A or B and handles the ad blocker fallback

4Site will provide or review the [JavaScript](/4site-promo-guides_documentation/OG-promo-test-controller-logic.js) for the Test Controller promo. 

This guide's main focus is on setting up the Engaging Networks forms and the three promo variations.

Please see [RAW "Test Controller" guide](/4site-promo-guides_documentation/RAW-test-controller-guide.md) to review how to edit the javascript that enables the test.


---


## Create the Engaging Networks Forms using ENgrid Framework

You will need a separate Engaging Networks page for each variation. This keeps reporting clean and lets us compare performance.

1. Create **three** Engaging Networks pages:

   - **Form A** - One-Col Donation form

   - **Form B** - Multistep Donation form

   - **Form C AdBlocker** One-Col Donation AdBlocker form (duplicate of your control, but clearly labeled as the ad blocker version - recommend to use seperate source code as well)

2. Log into your Engaging Networks account, head over to **Pages > Manage Pages** and search for folder `Q1. 4Site Live - Reference Pages for Duplication`

3. Create **Form A: One-Col Variant** Donation Form
   
  - Duplicate `ENgrid Reference - Donation Page - Default Monthly (Test CC, Test PayPal, Test Digital Wallets)`
   - https://give.foodandwaterwatch.org/page/75612/donate/1

4. Create **Form B: Multistep Variant** Donation Form - use either the:
  - `ENgrid Reference - Multistep Donation Page - Default Monthly (Live CC, Live PayPal, Live Digital Wallets)`
  - https://give.foodandwaterwatch.org/page/90241/donate/1

5. To create the final form, **Form C – AdBlocker** - duplicate your newly created **Form A - One-Col** Donation Form.
  - update source/orgin codes if helpful, but not mandatory. 

**You should now have three distinct EN URLs, one for each version.**


6. Best Practices when creating these forms:
 
- The name of your forms will be the most helpful update your can make. We recommend following these naming conventions to illmenate any confusion.
 
- [Org] - [Year] – [Campaign/Theme] – [TestName] – Form A [Variant] -[PaymentGatewayStatus]
- [Org] - [Year] – [Campaign/Theme] – [TestName] – Form B [Variant] -[PaymentGatewayStatus]
- [Org] - [Year] – [Campaign/Theme] – [TestName] – Form C AdBlocker - -[PaymentGatewayStatus]

***Examples EN Form Names for this test:***

- `FWW - 2025 - OneCol vs Multistep - Promo Test - Form A - OneCol [Live]`

- `FWW - 2025 - OneCol vs Multistep - Promo Test - Form B  - Multistep [TEST]`

- `FWW - 2025 - OneCol vs Multistep - Promo Test - Form C - AdBlocker [Live]`

- Ensure you are using the correct ENgrid Refernce form
- Double check your payment gateway - turn to live after fully testing.

---

## Create the Promo Boxes in the 4Site Promo Plugin

Next, you will create four promos in the WordPress Promotions plugin that correspond to the three EN forms, plus the promo that will "hold" the test logic.

You will create:

- **Promo A** - One Col Variant 

- **Promo B** - Multistep Varian

- **Promo C Ad Blocker** - One Col Adblocker Variant

- **Promo - RAW Test Logic** - Controls the test logic

Recommended Promo Naming conventions:

 1. `FWW 2025 - OneCol vs Multistep - Promo Variant A - OneCol (1 of 3)`
  
 2. `FWW 2025 - OneCol vs Multistep - Promo Variant B - Multistep (2 of 3)`
 
  3. `FWW 2025 - OneCol vs Multistep - Promo Variant C - AdBlocker (3 of 3)`

  4. `FWW 2025 - OneCol vs Multistep - RAW Test Logic`


## Promo #1: Promo A - The One-Col Variant 

1. In WordPress, go to **Promotions** and create a new promo.

2. Update name of promo and "Save Draft". Naming of promos is just as important as naming the forms - please use recommended names above.


#### Visibility Settings

1. While you are creating your Promo, we recommend leaving "Turned On" selected so that you can see your Promo on a test page.
2. To see you promo, you must "Publish" the promo as well as select "Turned On" or be within the configured "Scheduling" option.
3. Do not publish until you have assigned your promo to a test Page or Post under the "Display Settings" tab. Until then continue to "Save Draft" regularly as you are working through the promo build.
  - Please note, when making any edits to the Promo,even setting the schedule, you must save your work after by selecting "update" or "Pusblish". If you have not taken this step, your changes will not take place and edits lost.   


#### Content & Styles

1. Select the **"EN Lightbox"** promo type for the One-Col promo-type  and update all the relevant fields that display below. 

    - Select "One - Column" under Layout
    - Set Max Width to "500px"
    - Add your **Form A - One Col** in the "Multistep" (please disregard that it says multistep)
    -`FWW - 2025 - OneCol vs Multistep - Promo Test - Form A - OneCol [Live]`
    - You may select the toggle that is preferred under query string and chain - we do recommend leaving on as it allows tracking and URL customization to pass through. 
    - Please add your custom CSS:

``` css
    @media (max-width: 839px) {
    .fs-signup-lightbox.one-col .fs-signup-container {
        max-height: unset;
    }
}

/* No need to scale this modal, force it to be full size */
@media screen and (max-height: 510px) {
    .fs-signup-lightbox-content {
        transform: scale(1);
    }
}

@media screen and (min-height: 461px) and (max-height: 700px) {
    .fs-signup-lightbox-content {
        transform: scale(1);
    }
}

```
2. Regularly "Save" your updates by saving your Draft/Publishing /or Updating the Promo. 


#### Display Settings

  3. Important: for the 3 main promos that will be tested the "Trigger" must be **"javascript trigger"** update this field in all but the RAW code variant. Also update the number of hours from 0 to 24 or more, this is how many hours will pass until a visitor can see the promo again. When testing you want to set this at 0 so you can see it again and again. Final cleanup when launced is to update back to 24.

  4. Set the correct display rules: Target the correct pages, audiences, and conditions 
  

## Save and **note the Post ID** for this and all the promos being created.

  1. This is the numeric ID in the URL or in the admin (The promo IDs are what will be used this in the Test Logic code).
  2. The ID can be  found in two different places. In the URL of the Promo edit screen:
  3. Example: https://www.foodandwaterwatch.org/wp-admin/post.php?post=11718&action=edit
  4. The Post ID/Promo Id = 11718 
  5. You can also find this quicky in the Promotion Dashboard - Look for the colomn "Promo" and save the ID with which varation it is associated with. See image here: https://cln.sh/53S2kdDK



## Promo #2: Promo B - MultiStep Variant

1. Once Variant A has been finished and approved. Create a new promo via the Promotions plugin. Varation will be your Multistep.
  - `FWW - 2025 - OneCol vs Multistep - Promo Test - Form C - AdBlocker [Live]`

2. Biggest difference from the One-col is changing the promo-type:

   - Instead of selecting "EN Lightbox" select "EN Multistep Lightbox" as your promo-type.

3. Review this [Demo Multistep](https://www.foodandwaterwatch.org/wp-admin/post.php?post=12948&action=edit) as a good base for what should be configured for the multistep version. 

4. Match the same display rules as the Control so both will to show to the same audience.

5. Publish and select "Turned On" to test.

6. Save and **note the Post ID** for this promo as well.


## Promo #3: Promo C  AdBlocker Variant

1. Create a third promo by duplicating/replicating your promo created for the One-Col Variant **"Promo #1: Promo A - The One-Col Variant"**.

2. Update:

   - The title: Again keeing with the same naming convenstions to make editing and reporting easy
    -`FWW 2025 - OneCol vs Multistep - Promo Variant C - AdBlocker (3 of 3)`
   - Do not forget to update the Engaging Networks Form for the AdBlocker
    - `FWW - 2025 - OneCol vs Multistep - Promo Test - Form C - AdBlocker [Live]`
3. Make sure the same display rules match the other promos.

4. Last but not least save and **note the Post ID** for this Ad Blocker promo.

**At this point, you should have three promos, each with its own Post ID and EN form URL.**

---

## Promo #4: Create the Raw “Controller” Logic Promo

The Raw promo is where the A/B logic lives. This promo does not show content directly; instead, it runs JavaScript that decides which promo to display and handles the fallback for ad blocker users.

### Create the Raw Promo

1. In **Promotions**, create a new promo. Update the title to "`FWW 2025 - OneCol vs Multistep - RAW Test Logic`", or whichever matches your chosen naming conventions. 

2. Set the post-type to **Raw Code**.

### Add the JavaScript Controller Code

- Here is the RAW Javascript Template: [JavaScript](/4site-promo-guides_documentation/OG-promo-test-controller-logic.js)

Your steps:

1. Copy and paste this javascript and edit following these steps carefully. [RAW "Test Controller" guide](/4site-promo-guides_documentation/RAW-test-controller-guide.md)

2. Once you have made those updates to the code you can past it into the "Javascript" promo field. 

### Set the Trigger to “Immediately”

This is its own section because it is very important - this will be the only Promo out of the 4 the NEEDS to be set to immediately.

- Do **not** set this one to “Trigger by JavaScript” or a delayed trigger.

- The controller promo must run as soon as the page loads so it can decide which promo to show.

For the three visual promos (Variant A, Variant B, Ad Blocker), you will keep them set to be "triggered by JavaScript", which is the controller code.

3. Publish the promo and make sure it is turned on. 


---

# Turn On and Launch the Test

Once all four promos exist and the IDs are updated into the controller logic, you are ready to launch.

1. Make sure:

   - Raw controller promo is **Published** and **Turned On**.

   - Control, Variant, and Ad Blocker promos are **Published** and **Turned On** of **scheduled to run at the same time**

2. Confirm:

   - All are set to show on the correct page(s).

   - Targeting rules match across Promos. 

   - The Raw promo trigger is "Immediate", the other 3 is "Javascript Trigger"

You can safely have the Raw promo active even while you are still editing the other three promos. The logic will not show anything until valid promo IDs are available and active.

---