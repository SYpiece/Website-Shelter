window.onload = () => {
    let start = document.getElementById("start")!
    let startElement = document.getElementsByName("start")[0]
    let game = document.getElementById("game")!
    let gameElement = document.getElementsByName("game")[0]
    let tool = document.getElementById("tool")!
    let toolElement = document.getElementsByName("tool")[0]
    let resource = document.getElementById("resource")!
    let resourceElement = document.getElementsByName("resource")[0]

    start.onclick = () => {
        if (hidden(startElement)) {
            show(startElement)
        } else {    
            hide(startElement)
            hide(gameElement)
            hide(toolElement)
            hide(resourceElement)
        }
    };
    
    game.onclick = () => {
        if (hidden(gameElement)) {
            hide(toolElement)
            hide(resourceElement)
            show(gameElement)
        } else {    
            hide(gameElement)
        }
    };
    
    tool.onclick = () => {
        if (hidden(toolElement)) {
            hide(gameElement)
            hide(resourceElement)
            show(toolElement)
        } else {    
            hide(toolElement)
        }
    }
    
    resource.onclick = () => {
        if (hidden(resourceElement)) {
            hide(gameElement)
            hide(toolElement)
            show(resourceElement)
        } else {    
            hide(resourceElement)
        }
    }
}

function hidden(element: HTMLElement): boolean {
    return element.classList.contains("hidden")
}

function hide(element: HTMLElement) {
    element.classList.add("hidden")
}

function show(element: HTMLElement) {
    element.classList.remove("hidden")
}

function link(link: string) {
    window.open(link, "_blank");
}