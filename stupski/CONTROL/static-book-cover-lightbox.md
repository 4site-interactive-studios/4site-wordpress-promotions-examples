// This file will eventually be expanded to handle multiple files, but for now all lightbox-related code resides in this single file

Promo: https://stupski.org/wp-admin/post.php?post=6509&action=edit

# Javascript:
```js
<script>
    const template = document.querySelector('template.auto-open');
    if(template) {
        stupski_open_promo_modal(template);
    }

    const templates = document.querySelectorAll('template.stupski-promo');
    templates.forEach((template) => {
        // Render each modal so that its ready to display, but keep it hidden until triggered
        stupski_render_promo_modal(template);

        // Add click listeners to triggers. The triggers should have a class: trigger-<template ID>
        const trigger_selector = template.id ? `.trigger-${template.id}` : null;
        if(trigger_selector) {
            const triggers = document.querySelectorAll(trigger_selector);
            triggers.forEach((trigger) => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    stupski_open_promo_modal(template);
                });
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.stupski-promo-modal.stupski-modal-open');
            if(modal) {
                stupski_hide_promo_modal(modal);
            }
        }
    });




// Opens the modal by adding the stupski-modal-open class; creates the modal if it doesn't already exist
function stupski_open_promo_modal(template) {
    const modal_id = `stupski-promo-modal-${template.id}`;
    let modal = document.getElementById(modal_id);
    if(!modal) {
        stupski_render_promo_modal(template);
        modal = document.getElementById(modal_id);
    }
    stupski_show_promo_modal(modal);
}

function stupski_show_promo_modal(modal) {
    if(modal) {
        modal.classList.add('stupski-modal-open');
        setTimeout(() => {
            modal.classList.add('stupski-modal-show');
        }, 100);
    }    
}

function stupski_hide_promo_modal(modal) {
    if(modal) {
        modal.classList.remove('stupski-modal-show');
        setTimeout(() => {
            modal.classList.remove('stupski-modal-open');
        }, 600);
    }
}

// Renders the modal HTML from the template and appends it to the body; hidden by default until stupski-modal-open class is added
function stupski_render_promo_modal(template) {
    const modal = document.createElement('div');
    modal.classList.add('stupski-promo-modal');
    modal.id = `stupski-promo-modal-${template.id}`;

    const close_button = document.createElement('div');
    close_button.classList.add('stupski-promo-modal__close');
    close_button.innerHTML = `<img src="/wp-content/uploads/stupski-promo-modal/close-button.svg">`;
    modal.appendChild(close_button);

    for (const element of template.content.childNodes) {
        modal.appendChild(element.cloneNode(true));
    }

    document.body.appendChild(modal);

    modal.querySelector('.stupski-promo-modal__close').addEventListener('click', () => {
        stupski_hide_promo_modal(modal);
    });
}

// Used to trigger the modal from outside this script, e.g., GTM
function stupski_trigger_promo_modal(template_id) {
    let template = document.getElementById(template_id);

    // Fallback to stupski-promo-<template_id> if not found
    if(!template) {
        template_id = 'stupski-promo-' + template_id;
        template = document.getElementById(template_id);
    }

    if(template) {
        stupski_open_promo_modal(template);
    }
}
</script>
```
--------------------------------------------------
# HTML
```html
<template id='control-book' class ='auto-open' class='stupski-promo'>
<div class="stupski-control-book">
    <div class="stupski-control-book__title"><img src="/wp-content/uploads/stupski-control-book-2/main-title.svg" alt="Control book title" /></div>
    <div class="stupski-control-book__main">
        <div class="stupski-control-book__main__left">Preorder Control Now</div>
        <img class="stupski-control-book__main__img" src="/wp-content/uploads/2026/01/book-mockup-v3-top-view-scaled.png">
        <div class="stupski-control-book__main__right">Available March 17</div>
    </div>
    
    <a class="stupski-control-book__button" href="https://www.amazon.com/Control-Glen-Galaich/dp/1394352425" target="_blank" rel="noopener noreferrer">
        Preorder CONTROL now
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C13.5923 0 14.3886 0.000173969 15.0569 0.0881696C19.6723 0.695853 23.3041 4.32761 23.9119 8.94309C23.9998 9.61147 24 10.4077 24 12C24 13.5923 23.9998 14.3886 23.9119 15.0569C23.3041 19.6723 19.6723 23.3041 15.0569 23.9119C14.3886 23.9998 13.5923 24 12 24C10.4077 24 9.61147 23.9998 8.94309 23.9119C4.32761 23.3041 0.695853 19.6723 0.0881696 15.0569C0.000173969 14.3886 0 13.5923 0 12C0 10.4077 0.000173969 9.61147 0.0881696 8.94309C0.695853 4.32761 4.32761 0.695853 8.94309 0.0881696C9.61147 0.000173969 10.4077 0 12 0ZM7.46206 8.56361L14.221 8.5692L6.85714 15.933L8.06696 17.1429L15.4309 9.77902V16.5435L17.1429 16.5379V6.85714H7.46206V8.56361Z" fill="#1F3245"/>
        </svg>
    </a>
</div>
</template>

```
--------------------------------------------------
# CSS
```css
/* CSS Specific to the outer promo wrapper */
.stupski-promo-modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    z-index: -9999;
}
.stupski-promo-modal.stupski-modal-open {
    display: block;
    z-index: 99999;
}
.stupski-promo-modal.stupski-modal-show {
    opacity: 1;
}
.stupski-promo-modal__close {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 99999;
}



/* CSS Specific to the promo contents */
.stupski-control-book {
    background-color: rgba(12, 32, 51, 0.95);
    color: white;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
        backdrop-filter: blur(6px);
}
.stupski-control-book__main {
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: calc(100vh - 170px);
    max-height: 600px;
}
.stupski-control-book__main:before {
    position: absolute;
    display: block;
    content: "";
    z-index: -1;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 20px;
    width: 100%;
    height: 100%;
   /* background-image: url(/wp-content/uploads/2026/01/bg-icon.png); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.5;
}
.stupski-control-book__main__img {
    width: auto;
    height: 100%;        
max-width: 560px;
}
.stupski-control-book__main__left,
.stupski-control-book__main__right {
    max-width: 120px;
}
.stupski-control-book__main__left,
.stupski-control-book__main__right,
.stupski-control-book__title {
    font-weight: 900;
    font-style: normal;
    font-size: 40px;                
    text-transform: uppercase;
    color: #B6E97F !important;
    text-align: center;
    line-height: 1;
    font-family: apotek-variable, sans-serif !important;
    font-variation-settings: "wdth" 50, "wght" 900 !important;
}
.stupski-control-book__title {
    font-size: 70px;
    font-style: italic;
    font-variation-settings: "wdth" 80, "wght" 900 !important;
}
.stupski-control-book__button {
    background-color: #B6E97F;
    color: #1F3245;
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
    transition: transform 0.6s ease-in-out;
    font-family: 'Poppins', sans-serif;
}
.stupski-control-book__button:hover {
    color: #1F3245;
    text-decoration: none;
    transform: translateY(-5px);
}
.stupski-control-book__button {
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
}

@media (max-width: 1024px) {
    .stupski-control-book__main {
        gap: 0;
    }
    .stupski-control-book__main__img {
        max-width: 400px;
    }
    .stupski-control-book__main__left,
    .stupski-control-book__main__right {
        font-size: 32px;
    }        
}
@media (max-width: 768px) {
    .stupski-control-book__main__left {
        display: none;
    }
    .stupski-control-book__main {
        flex-direction: column;
        gap: 0;
        height: unset;
        margin-bottom: 40px;
    }
    .stupski-control-book__main__img {
        height: auto;
        width: 80%;
    }
    .stupski-control-book__main__left,
    .stupski-control-book__main__right {
        max-width: 60%;
        font-size: 32px;
    }
}
```


```
