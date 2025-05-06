function start() {
    document.getElementById("menu-container")!.classList.add("start-animation")
}

let kinds = ["game", "tool", "resource"]
let items: { [key: string]: Element[] } = {}
let itemContainer: Element

window.onload = () => {
    itemContainer = document.getElementById("item-container")!
    for (let kind of kinds) {
        items[kind] = []
    }

    for (var i = 0; i < itemContainer.children.length; i++) {
        let child = itemContainer.children[i]
        if (child.classList.contains("item")) {
            for (let kind of kinds) {
                if (child.classList.contains(kind)) {
                    items[kind].push(child)
                    itemContainer.removeChild(child)
                    i--
                    break
                }
            }
        }
    }
}

let animationCount = 0;
function kind(kind: string) {
    if (animationCount > 0) {
        return
    }
    let exsists: Element[] = []
    let length = itemContainer.children.length
    for (var i = length - 1; i >= 0; i--) {
        let element = itemContainer.children[i]
        if (element.classList.contains("item")) {
            if (element.classList.contains(kind)) {
                exsists.push(element)
            } else {
                animationCount++
                setTimeout(() => {
                    element.classList.add("element-remove")
                    element.addEventListener("animationend", () => {
                        itemContainer.removeChild(element)
                        element.classList.remove("element-remove")
                        animationCount--
                    }, {once: true})
                }, (length - i - 1) * 100)
            }
        }
    }
    for (var i = 0; i < items[kind].length; i++) {
        let element = items[kind][i];
        if (!exsists.includes(element)) {
            animationCount++
            setTimeout(() => {
                element.classList.add("element-add")
                itemContainer.appendChild(element)
                element.addEventListener("animationend", () => {
                    element.classList.remove("element-add")
                    animationCount--
                }, {once: true})
            }, (i + length + 1) * 100)
        }
    }
}

function link(url: string) {
    window.open(url, "_blank")
}