// Insert After
export default function insertAfter(el,ref){
	if (ref.nextSibling) {
		ref.parentNode.insertBefore(el, ref.nextSibling);
	}
	else {
		ref.parentNode.appendChild(el);
	}
}
