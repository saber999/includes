// demo.js
var template = `
	<button>+</button><span>1</span>
	<style>
		span{color:red;}
		*{font-size:2rem;}
	</style>
`
class SpinButton extends HTMLElement{
	constructor(){
		super()
		var shadow = this.attachShadow({mode:'open'})
		var temp = document.createElement('template')
        temp.innerHTML = template
        shadow.appendChild(temp.content.cloneNode(true))

        var add = shadow.querySelector('button')
        var val = shadow.querySelector('span')
        add.onclick = function() {
            val.innerHTML = Number(val.innerHTML) + 1
        }
        
	}
}
customElements.define('demo-button',SpinButton)
