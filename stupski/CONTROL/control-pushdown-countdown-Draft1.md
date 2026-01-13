//CONTROL Book Pushdown - Mike's Draft - Not used in Production

# Javascript

```javascript
<script src="/wp-content/uploads/stupski-control-book-pushdown/pushdown-countdown.js"></script>
```
--------------------------------------------------


# HTML

```html
<template id="fs-pushdown-countdown">
  <div class="fs-promotion fs-promotion--pushdown-countdown">
    <div class="fs-promotion__inner">
      <div class="fs-promotion__inner__countdown" data-target-datetime="2026-03-10 00:00:01">
        <div class="fs-promotion__inner__countdown__element js-countdown-days"><div class="value" title="days"></div><div class="unit">DAY</div></div>
        <div class="fs-promotion__inner__countdown__element js-countdown-hours"><div class="value" title="hours"></div><div class="unit">HR</div></div>
        <div class="fs-promotion__inner__countdown__element js-countdown-minutes"><div class="value" title="minutes"></div><div class="unit">MIN</div></div>
        <div class="fs-promotion__inner__countdown__element js-countdown-seconds"><div class="value" title="seconds"></div><div class="unit">SEC</div></div>
      </div> <!-- /countdown -->
      <div class="fs-promotion__inner__copy">Ready to gain back <span class="highlight">control</span> ?</div>
      <div class="fs-promotion__inner__cta">
        <a
          href="https://www.amazon.com/Control-Glen-Galaich/dp/1394352425" 
          target="_blank" 
          class="fs-promotion__inner__cta__link"
        >Preorder CONTROL Now <img src="/wp-content/uploads/stupski-control-book-pushdown/control-book-icon.svg" /></a>
      </div>
    </div><!-- /inner -->
  </div><!-- /outer -->
</template>
```

--------------------------------------------------

# CSS

```css
@import "/wp-content/uploads/stupski-control-book-pushdown/pushdown-countdown.css";

/***  Colors & Font Family set here for ease of override  ***/
.fs-promotion.fs-promotion--pushdown-countdown {
  font-family: 'Poppins', sans-serif;
  background-color: rgba(12,32,51,1);
   color: #b6e97f;
}
.fs-promotion__inner__copy {
  color: inherit;
}
.fs-promotion__inner__cta__link {
    background-color: #b6e97f;
    color: #1f3245;
}
.fs-promotion__inner__cta__link:hover {
  color: #1f3245!important;
}
.fs-promotion__inner__countdown {
    border-color: inherit;
}
.fs-promotion__inner__countdown__element .value {
      color: #D1FAE5;
}
.fs-promotion__inner__countdown__element.unit {
    color: inherit;
}

```