function change_size(e) {
    let dom = document.getElementById(e.domid)
    let addid = document.getElementById(e.addid)
    let minusid = document.getElementById(e.minusid)
    const type = e.type
    let img = document.getElementById(e.imgid)
    const min = e.min
    const max = e.max
    const step = e.step
    if (!dom) {
        click_btn(addid, minusid, img, min, max, step)
        return
    }
    if (type == "wheel") {
        wheel_zoom(dom, img, min, max, step)
    }
    switch (type) {
        case "number":
            change_img(dom, img, min, max, step)
            break;

        case "range":
            change_img(dom, img, min, max, step)
            break;

        default:
            console.log("default")
    }
}

function set_data(dom, min, max, step) {
    dom.min = min
    dom.max = max
    dom.step = step
}

function change_img(dom, img, min, max, step) {
    set_data(dom, min, max, step)
    dom.addEventListener("change", function (e){
        let value = dom.value
        img.width = value
        console.log("value", value)
        if (value <= min){
            img.width = min
        }
        if (value >= max) {
            img.width = max
        }
        
    })
}

function typing(e){
    let value = e.target.value
}

function click_btn(addid, minusid, img, min, max, step) {
    addid.addEventListener("click", function () {
        let width = img.width
        img.width = width + step
        if (img.width >= max) {
            img.width = max
        }
    })

    minusid.onclick = function () {
        let width = img.width
        img.width = width - step
        if (img.width <= min) {
            img.width = min
        }
    }
}

function wheel_zoom(dom, img, min, max, step) {
    dom.addEventListener('wheel', function (event) {
        let width = img.width
        if (event.deltaY < 0) {
            img.width = width + step
            if (img.width >= max) {
                img.width = max
            }
        } else if (event.deltaY > 0) {
            img.width = width - step
            if (img.width <= min) {
                img.width = min
            }
        }
    })
}