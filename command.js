const input = document.getElementById('box_command')
const content = document.getElementById('content')



function reply_command_user(...user_command) {
    const uu = user_command[0]
    const hr = document.createElement('hr')
    
    const li = document.createElement("li")
    li.innerHTML = `${user_config[0]} : ${uu.join(" ")}`
    content.append(li, hr)
    clear()
}

function createLi(name, user_command ,list) {
    const hr2 = document.createElement('hr')

    const lii = document.createElement('li')
    lii.innerHTML = `${name} : ${user_command}`
    
    content.append(lii, hr2)
    
    for (const x of list) {
        if (x !== "null") {
            const li = document.createElement('li')
            li.innerHTML = `${x.name} : ${x.subName}`
            content.append(li)
        }
        
    }
   const hr = document.createElement('hr')
   content.append(hr)
   clear()
}

function helpp(name, user_command ,list) {
    const hr2 = document.createElement('hr')

    const lii = document.createElement('li')
    lii.innerHTML = `${name} : ${user_command}`
    
    content.append(lii, hr2)
    for (const x of list) {
        const li = document.createElement('li')
        li.innerHTML = `${x}`
        content.append(li)
   }
   const hr = document.createElement('hr')
   content.append(hr)
   clear()
}

function __config_user__(name, user_command, new_data) {
    const hr = document.createElement('hr')
    const li = document.createElement("li")
    li.innerHTML = `${name} : ${user_command.join(" ")} ${new_data}`
    content.append(li, hr)
    user_config[0] = new_data
    clear()
}

function clear() {
    input.value = ''
    content.scrollTop = content.scrollHeight; 
}


function cls() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild)
    }
    clear()
}
 
function __lsLog__(...user_command) {
    // console.log(user_command)
    const hr = document.createElement('hr')
    const hr2 = document.createElement('hr')
    const li = document.createElement("li")
    li.innerHTML = `${user_config[0]} : ${user_command[0]} ${user_command[1]}`
    content.append(li, hr)

    const li2 = document.createElement("li")
    li2.innerHTML = log_command[0]
    content.append(li2, hr2)
    clear()
}

function __clsLog__(...user_command) {
    // console.log(user_command)
    const hr = document.createElement('hr')
    const hr2 = document.createElement('hr')
    const li = document.createElement("li")
    li.innerHTML = `${user_config[0]} : ${user_command[0]} ${user_command[1]}`
    content.append(li, hr)

    const li2 = document.createElement("li")
    li2.innerHTML = log_command[1]
    content.append(li2, hr2)
    clear()
}

function __configLog__(...user_command) {
    // console.log(user_command)
    const hr = document.createElement('hr')
    const hr2 = document.createElement('hr')
    const li = document.createElement("li")
    li.innerHTML = `${user_config[0]} : ${user_command[0]} ${user_command[1]}`
    content.append(li, hr)

    const li2 = document.createElement("li")
    li2.innerHTML = log_command[2]
    content.append(li2, hr2)
    clear()
}

function __ls_select__(...user_command) {
    const user_command_ = user_command[0]
    // console.log(user_command_)
    if (user_command_ === "branch1") {
        if (ls_command[0] === "null") {
            const hr = document.createElement('hr')
            const li = document.createElement("li")
            input.disabled = true
            setTimeout(()=>{
                li.innerHTML = `System : You finished this branch!`
                content.append(li, hr)
                input.disabled = false
                content.scrollTop = content.scrollHeight; 
            }, 2500)
        }else {
            user_config[1] = 'branch1'
        }
    }else if (user_command_ === "branch2") {
        user_config[1] = 'branch2'
    }
    else {
        const hr = document.createElement('hr')
    
        const li = document.createElement("li")
        li.innerHTML = `System : please type, ls select branch1, ls select branch2 or etc.`
        content.append(li, hr)
    }
    clear()
}

function __ls_status__() {
    if ((user_config[1] !== "null")) {
        if (ls_command[0] === "null") {
            const hr = document.createElement('hr')
            const li = document.createElement('li')
            li.innerHTML = `now : *${user_config[1]}`
            content.append(li, hr)
        }else {
            if (user_config[1] === "branch1") {
                const hr = document.createElement('hr')
                const li = document.createElement('li')
                li.innerHTML = `now : *${user_config[1]}.   |   Req! : ${ls_command[0].description}`
                content.append(li, hr)
                clear()
            }
        }
        
    }else {
        const hr = document.createElement('hr')
        const li = document.createElement('li')
        li.innerHTML = `now : *${user_config[1]}`
        content.append(li, hr)
        clear()
    }
     
}

function __fetch__(user_command) {
    // console.log(user_command)
    let chance = Math.floor(Math.random() * 192) + 1;
    if (user_command === `${ip}`) {
        if (chance <= 30) {
            const hr = document.createElement('hr')
            const li = document.createElement("li")
            input.disabled = true
            setTimeout(()=>{
                li.innerHTML = `fetch : ${num_to_hex(password_branch1)}`
                content.append(li, hr)
                input.disabled = false
                content.scrollTop = content.scrollHeight; 
            }, 2500)
            
        }else {
            const hr = document.createElement('hr')
            const li = document.createElement("li")
            input.disabled = true
            setTimeout(()=>{
                li.innerHTML = `fetch : please try again. Due to blocked from OS defender`
                content.append(li, hr)
                input.disabled = false
                content.scrollTop = content.scrollHeight; 
            }, 2500)
            
        }
    }else {
        const hr = document.createElement('hr')
        const li = document.createElement("li")
        input.disabled = true
        setTimeout(()=>{
            li.innerHTML = `*Ip not valid!`
            content.append(li, hr)
            input.disabled = false
            content.scrollTop = content.scrollHeight; 
        }, 2500)
        
    }
    clear()
}

function num_to_binary(number) {
    const num = parseInt(number)
    console.log(num.toString(2))
}

function num_to_hex(number) {
    const num = parseInt(number)
    clear()
    return num.toString(16)
}

function commit(ans, gmail_) {
    if (gmail_ === gmail) {
        if (ans === ls_command[0].answer) {
            const hr = document.createElement('hr')
            const li = document.createElement("li")
            input.disabled = true
            setTimeout(()=>{
                li.innerHTML = `Req : thx for my help!`
                content.append(li, hr)
                input.disabled = false
                content.scrollTop = content.scrollHeight; 
            }, 2500)
            ls_command[0] = "null"
            user_config[1] = "null"
            
        }else {
            if (user_config[1] === 'branch1') {
                const hr = document.createElement('hr')
                const li = document.createElement("li")
                input.disabled = true
                setTimeout(()=>{
                    li.innerHTML = `${ls_command[0].reject}`
                    content.append(li, hr)
                    input.disabled = false
                    content.scrollTop = content.scrollHeight; 
                }, 2500)
            }
        }
    }else {
        const hr = document.createElement('hr')
        const li = document.createElement("li")
        input.disabled = true
        setTimeout(()=>{
            li.innerHTML = `System : this gmail is not valid`
            content.append(li, hr)
            input.disabled = false
            content.scrollTop = content.scrollHeight; 
        }, 2500)
    }
    clear()
}

function notFound(name, user_command) {
    const hr = document.createElement('hr')
    const li = document.createElement('li')
    li.innerHTML = `System : I'm apologize ${name}, can't analyze  ' ${user_command.join(" ")} '  !!!`
    content.append(li, hr)
    // console.log(name, user_command.join(" "))
    clear()
}

input.addEventListener('keypress', (event)=>{
    content.scrollTop = content.scrollHeight;
    if (event.key === "Enter") {
        
        const uu = input.value.toLowerCase()
        const value_user = uu.split(" ")
        // console.log(value_user)
        if (value_user[0] === "help" && value_user.length == 1) {
            helpp(user_config[0], value_user[0], help_command)
            clear()
        }else if (value_user[0] === "cls" && value_user.length == 1) {
            cls()
        }else if (value_user[0] === "ls" && value_user.length == 1) {
            createLi(user_config[0], value_user[0], ls_command)
        }else if (value_user[0] === "help" && value_user[1] === "ls" && value_user.length == 2) {
            __lsLog__(...value_user)
        }else if (value_user[0] === "help" && value_user[1] === "cls" && value_user.length == 2) {
            __clsLog__(...value_user)
        }else if (value_user[0] === "help" && value_user[1] === "config" && value_user.length == 2) {
            __configLog__(...value_user)
        }else if (value_user[0] === "ls" && value_user[1] === "select" && value_user.length == 3) {
            reply_command_user(value_user)
            __ls_select__(value_user[2])
        }else if (value_user[0] === "ls" && value_user[1] === "status" && value_user.length == 2) {
            reply_command_user(value_user)
            __ls_status__()
        }else if (value_user[0] === "fetch" && value_user.length == 2) {
            reply_command_user(value_user)
            __fetch__(value_user[1])
        }else if (value_user[0] === "commit" && value_user.length == 3) {
            reply_command_user(value_user)
            commit(value_user[1], value_user[2])
        }
        else if (value_user[0] === "config" && value_user[1] === "name" && value_user.length == 3) {
            __config_user__(user_config[0], [value_user[0], value_user[1]], value_user[2])
        }else if (value_user[0] === "bn" && value_user.length == 2) {
            num_to_binary(value_user[1])
        }else if (value_user[0] === "hex" && value_user.length == 2) {
            num_to_hex(value_user[1])
        }
        else {
            notFound(user_config[0], [...value_user])
            clear()
        }
        content.scrollTop = content.scrollHeight; 
    }
})