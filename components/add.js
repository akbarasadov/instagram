export function add(place) {
    let videos = document.createElement("div")
    let head = document.createElement("div")
    let left = document.createElement("div")
    let img = document.createElement("img")
    let nickname_city = document.createElement("nickname_city")
    let nickname_city_p1 = document.createElement("p")
    let nickname_city_p2 = document.createElement("p")
    let head_img = document.createElement("img")
    let background = document.createElement("img")
    let reposivities_body = document.createElement("div")
    let flex = document.createElement("flex")
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    let img3 = document.createElement("img")
    let reposivities_body_img = document.createElement("img")
    let likes = document.createElement("div")
    let p = document.createElement("p")
    let description = document.createElement("description")
    let foot = document.createElement("div")
    let foot_left = document.createElement("div")
    let foot_left_img = document.createElement("img")
    let input = document.createElement("input")
    let a = document.createElement("a")

    videos.classList.add("videos")
    head.classList.add("head")
    left.classList.add("left")
    img.classList.add("img")
    nickname_city.classList.add("nickname_city")
    background.classList.add("background")
    reposivities_body.classList.add("reposivities_body")
    flex.classList.add("flex")
    likes.classList.add("likes")
    description.classList.add("description")
    foot.classList.add("foot")
    foot_left.classList.add("foot_left")

    head_img.setAttribute("src", "./img/information.png")
    img1.setAttribute("src", "./img/love.png")
    img2.setAttribute("src", "./img/comments.png")
    img3.setAttribute("src", "./img/share.png")
    reposivities_body_img.setAttribute("src", "./img/save.png")
    nickname_city_p2.textContent = "city"
    p.textContent = Math.floor(Math.random() * 20000) + " likies"
    description.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque autem a velitnemo impedit maxime odit omnis! Molestiae repellendus illo eos, assumenda harum voluptates saepenisi aliquam totam unde aut!"
    foot_left_img.setAttribute("src", "./img/smile.png")
    input.setAttribute("placeholder", "Add a comment...")
    a.href = "#"
    a.textContent = "Post"

    function users(arr) {
        arr.forEach((item,idx) => {
            
            nickname_city_p1.textContent = item.name
            nickname_city_p2.textContent = item.address.city
        });
    }

    function photos(arr) {
        arr.forEach((item,idx) => {
            console.log(item.url);
            
            background.setAttribute("src", item.url)
        });
    }


    place.append(videos)
    videos.append(head, background, reposivities_body, likes)
    head.append(left, head_img)
    left.append(img, nickname_city)
    nickname_city.append(nickname_city_p1, nickname_city_p2)
    reposivities_body.append(flex, reposivities_body_img)
    flex.append(img1, img2, img3)
    likes.append(p, description, foot)
    foot.append(foot_left, a)
    foot_left.append(foot_left_img, input)



    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => users(json))

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => response.json())
        .then(json => photos(json))

    return videos

}