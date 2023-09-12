function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("Learn Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const name = $("#name")
    const email = $("#email")
    const subject = $("#subject")
    const pesan = $("#pesan")

    if (!$(name).val()) {
        alert("Name is required")
    } else if(!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(pesan).val()) {
        alert("Message is required")
    } else {
        $(name).val("")
        $(email).val("")
        $(subject).val("")
        $(pesan).val("")
    }
}