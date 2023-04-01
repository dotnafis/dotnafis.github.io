ellipsis={'value':['&nbsp;','.','..','...'],'count':0,'run':false,'timer':null,'element':'.loading','start':function(){var t=this;this.run=true;this.timer=setInterval(function(){if(t.run){$(t.element).html(t.value[t.count%t.value.length]).text();t.count++;}},250);},'stop':function(){this.run=false;clearInterval(this.timer);this.count=0;}}
ellipsis.start();$(document).ready(function(){$('.indentation-container').on('click','.indentation.indentation-toggle',function(){$(this).closest('.indentation-container').addClass('collapsed');});$('.indentation-container').on('click','.indentation-ellipsis.indentation-toggle',function(){$(this).closest('.indentation-container').removeClass('collapsed');});});


/** Custom Cursor */
const cursor = document.querySelector(".cursor");
let anchors  = document.querySelectorAll("a");

document.addEventListener("mousemove", (e) => {
	cursor.style.top = e.pageY + "px";
	cursor.style.left = e.pageX + "px";
});

/** Hover Effect */
anchors.forEach(function (item) {
	item.addEventListener("mouseenter", linkEnterHandler);
	item.addEventListener("mouseleave", linkLeaveHandler);
});

function linkEnterHandler() {
	cursor.classList.add("hover");
}

function linkLeaveHandler() {
	cursor.classList.remove("hover");
}

/** Click Effect */
window.addEventListener("mousedown", () => {
	cursor.classList.add("click");
});

window.addEventListener("mouseup", () => {
	cursor.classList.remove("click");
});
