import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


window.addEventListener('DOMContentLoaded', (event)=> {
    console.log('DOM loaded');

    //submit event listener added to form
    document.querySelector('form').addEventListener('submit', handleSubmit);
});

export {
 checkForName,
 handleSubmit
}
