function ul_collapsible() {
    let icon_open = " 📂 ";
    let icon_closed = " 📁 ";
    let icon_file = " 📄 "
    Array.from(document.querySelectorAll("ul.collapsible, ol.collapsible")).forEach(el => {
        if (el.tagName === "UL") {
            el.style["list-style"] = "none";
        }
        Array.from(el.querySelectorAll("li")).forEach(li => {
	    let uls = li.children;
            if (uls) {
                uls = Array.from(uls).filter((elem) => ["UL", "OL"].includes(elem.tagName));
            }
            if (uls.length) {
                start = true;
                let ul_child_last = uls[0];
                uls.forEach(ul_child => {
                    if (ul_child.tagName === "UL") {
                        ul_child.style["list-style"] = "none";
                    }
                    let icon = document.createElement("span");
                    let icon_content = document.createTextNode(icon_open);
                    icon.appendChild(icon_content);
                    if (start) {
                        li.prepend(icon);
                        start = false;
                    } else {
                        li.insertBefore(icon, ul_child_last.nextSibling);
                        li.insertBefore(document.createElement("br"), ul_child_last.nextSibling);
                    }
                    if (!ul_child.classList.contains("open")) {
                        icon_content.nodeValue = icon_closed;
                        ul_child.style["display"] = "none";
                    }
                    icon.addEventListener("click", function () {
                        if (ul_child.style["display"] === "none") {
                            ul_child.style["display"] = "";
                            icon_content.nodeValue = icon_open;
                        } else {
                            ul_child.style["display"] = "none";
                            icon_content.nodeValue = icon_closed;
                        }
                    });
                    ul_child_last = ul_child;
                });
            } else {
		let icon = document.createElement("span");
                let icon_content = document.createTextNode(icon_file);
                icon.appendChild(icon_content);
                li.prepend(icon);
            }
        });
    });
}

   
