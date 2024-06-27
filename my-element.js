import {LitElement, html, css} from 'lit';
export class MyElement extends LitElement {
  static get styles() {
    return css`
    /* Écrire ici comme dans un .css ! */
      :host { /* :host sélectionne l'intégralité du composant */
        display: block;
        border: solid 1px gray;
        border-radius:25px;
        padding: 16px;
        max-width: 800px;
        margin:auto;
        text-align:left;
      }
    `;
  }

  render() {
    return html`
    <!-- Écrire ici comme dans un .html ! -->
      <h1>Composant !</h1>
      <p>texte du composant</p>
      <p>slots :</p>
      <slot></slot> <!-- slot = endroit où l'html mis dans le composant sera affiché -->
    `;
  }

}

// relie l'élément décrit ci dessus à un composant custom. 
// Le premier paramètre sera le nom du composant html
window.customElements.define('my-element', MyElement);
