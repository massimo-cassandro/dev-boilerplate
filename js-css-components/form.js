import './form.css';

(() => {

  document.querySelectorAll('form').forEach( form => {

    form.querySelectorAll('[type="submit"]').forEach(btn =>{
      btn.addEventListener('click', () => {
        form.classList.add('was-validated');
      }, false);
    });

    form.addEventListener('submit', e => {

      form.classList.add('was-validated');

      if(!form.checkValidity()) {
        e.preventDefault();

      } else {
        if(!form.hasAttribute('data-no-disabling')) {
          form.querySelectorAll('[type="submit"]').forEach(btn => {
            btn.disabled = true;
          });
        }
      }
    }, false);
  });

})();
