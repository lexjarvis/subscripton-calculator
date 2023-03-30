const toggler = document.querySelector('.toggler');
const hipaaPrice = document.querySelector('#hipaa-price');
const bundlePrice = document.querySelector('#bundle-price');
const oshaPrice = document.querySelector('#osha-price');

toggler.addEventListener('click', () => {
  if (toggler.checked) {
    hipaaPrice.textContent = '$1,584 / year';
    bundlePrice.textContent = '$2,583.60 / year';
    oshaPrice.textContent = '$1,584 / year';
  } else {
    hipaaPrice.textContent = '$132 / month';
    bundlePrice.textContent = '$237.60 / month';
    oshaPrice.textContent = '$132 / month';
  }
});
