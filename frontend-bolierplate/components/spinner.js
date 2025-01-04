import './spinner.css';

export function spinner(container) {
  const spinnerMarkup = '<div class="loader-wrapper"><div class="loader">Loading...</div></div>';

  if(container != null) {
    container.insertAdjacentHTML('beforeend', spinnerMarkup);
  } else {
    return spinnerMarkup;
  }
}

export function removeSpinner(container) {
  container.querySelector('.loader-wrapper')?.remove();

}
