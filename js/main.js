const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(event) {
    removeBorder();
    removeActive();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('active');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeActive() {
    tabContentItems.forEach(item => item.classList.remove('active'));
    tabContentItems.forEach(item => console.log(item))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));