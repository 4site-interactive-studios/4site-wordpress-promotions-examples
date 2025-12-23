/* test video to use: https://stupski.org/wp-content/uploads/2025/12/2025-12-23_11-03-55.mp4 */

/*javascript for Static Promo Lightbox for CONTROL */

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
