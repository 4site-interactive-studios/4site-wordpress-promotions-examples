//CONTROL Preorder Banner - OG - before Button Added 

[https://stupski.org/wp-admin/post.php?post=6570&action=edit](https://stupski.org/wp-admin/post.php?post=6570&action=edit)

# Javascript

```javascript
<script>
	window.floating_substack_signup_settings = {
		id: 'control-preorder',
		bg_color: '#1F3245',
		fg_color: '#FFFFFF',
		title: 'CONTROL',
		paragraph: `Dive into an insider view exposing the most urgent issue in U.S. philanthropy. Preorder your copy today.`,
		button_label: 'Preorder',
		button_link: 'https://stupski.org/control/',
		cookie_name: 'HideFloatingSubstackSignup',
		cookie_hours: 96
	};
</script>
<script src="/wp-content/uploads/stupski-promo.js?v=8"></script>

```


> [!NOTE]
> 	No HTML needed for this banner	!!!

# CSS
``` css
@import url("https://use.typekit.net/gaw2uvu.css");

[promotion-id="control-preorder"].fes-container {
	right: 2%;
	left: 2%;
}
[promotion-id="control-preorder"] .fes-container__inner {
	align-items: stretch;
	padding: 12px;
}
[promotion-id="control-preorder"] .fes-container__inner__button__wrapper {
	display: flex;
	align-items: center;
}
[promotion-id="control-preorder"] .fes-container__inner__close__wrapper {
	height: 100%;
	display: flex;
	align-items: flex-start;
	padding-left: 30px;
}
[promotion-id="control-preorder"] .fes-content__inner__button {
	    width: fit-content;
    text-align: center;
    padding: 0 5px 0;
    color: #ffffff;
    margin: 0 auto;
    font-family: apotek-variable, sans-serif !important;
    background: unset;
    border: none;
    font-size: clamp(38px, 5vw, 48px);
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
    font-variation-settings: "wdth" 50, "wght" 760 !important;
    letter-spacing: 1px;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 9px;
    margin-top: -6px;

}
[promotion-id="control-preorder"] .fes-content__inner__button:hover {
	text-decoration: none;
	transform: unset;
	background-color: unset;	
}
[promotion-id="control-preorder"] .fes-container__inner__text {
	width: unset;
	flex-direction: row;
	align-items: center;
}
[promotion-id="control-preorder"] .fes-container__inner__text__title {
color: #B6E97F;
font-family: apotek-variable, sans-serif !important;
font-style: italic;
font-weight: 900;
line-height: 92%; /* 82.8px */
text-transform: uppercase;
font-variation-settings: "wdth" 50, "wght" 900 !important;
font-size: clamp(60px, 5vw, 82px);
    padding-right: 32px;
}
[promotion-id="control-preorder"] .fes-container__inner__text__content {
    font-family: Poppins;
    font-size: clamp(14px, 1vw + 6px, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    padding: 0 32px 0 0;
}

@media (max-width: 1200px) {
	[promotion-id="control-preorder"] .fes-container__inner__text {
		flex-direction: column;
		align-items: flex-start;
	}
}
@media (max-width: 600px) {
	[promotion-id="control-preorder"].fes-container {
		right: 10px;
		left: 10px;
	}
	[promotion-id="control-preorder"] .fes-container__inner__text {
		width: 100%;
		max-width: unset;
		margin-bottom: 10px;
	}
	[promotion-id="control-preorder"] .fes-container__inner__text {
		flex-direction: column;
		align-items: center;
	}
	[promotion-id="control-preorder"] .fes-container__inner__text {
    align-self: center;
}
[promotion-id="control-preorder"] .fes-container__inner__text__content {
    padding: 0 24px 10px;
    text-align: center;
}
[promotion-id="control-preorder"] .fes-container__inner__text__title {
    padding-right: 0;
}
[promotion-id="control-preorder"] .fes-content__inner__button {
    padding-bottom: 16px;
}
}

```

```css 2
/* --- Stef Added from the Countdown Promo - Control Styled CTA Button (ORIGINAL BANNER 1 STYLE) --- */

.fs-promotion.fs-promotion--pushdown-countdown .fs-promotion__inner__cta {
    flex-shrink: 0;
}

.fs-promotion.fs-promotion--pushdown-countdown .fs-promotion__inner__cta__link {
    font-weight: 500;
    font-style: italic;
    font-size: 17px;
    line-height: 1;
    padding: 17px 24px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    white-space: nowrap;
    /* Original Colors */
    background-color: #b6e97f;
    color: #1f3245;
}

.fs-promotion.fs-promotion--pushdown-countdown .fs-promotion__inner__cta__link:hover {
    text-decoration: none;
    color: #1f3245 !important;
}

/* Original Media Queries for CTA sizing */
@media (max-width: 720px) {
    .fs-promotion.fs-promotion--pushdown-countdown .fs-promotion__inner__cta__link {
        font-size: 15px;
        padding: 12px 18px;
    }
}
@media (max-width: 510px) {
    .fs-promotion.fs-promotion--pushdown-countdown .fs-promotion__inner__cta__link {
        font-size: 14px;
        padding: 8px 14px;
    }
}


/* --- Mobile Specific Text --- */
.fs-promotion.fs-promotion--pushdown-countdown .mobile-text {
    position: absolute;
    top: 0.25rem;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0.625rem;
    font-weight: 700;
    color: var(--cyber-accent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

@media (min-width: 768px) {
    .fs-promotion.fs-promotion--pushdown-countdown .mobile-text {
        display: none;
    }
}

```
