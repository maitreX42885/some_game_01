const user_config = ["System32", "null", "0"]

const ip1 = Math.floor(Math.random() * 192) + 1;
const ip2 = Math.floor(Math.random() * 192) + 1;
const ip3 = Math.floor(Math.random() * 192) + 1;
const ip4 = Math.floor(Math.random() * 192) + 1;

const ip = `${ip1}.${ip2}.${ip3}.${ip4}`

const gmail_ran = Math.random().toString(36).slice(2, 8);
const gmail = `${gmail_ran}@gmail.com`

const password_branch1 = Math.floor(Math.random() * 987755) + 241495;

const ls_command = [
    {
        name : 'branch1',
        subName : 'what is the ip?',
        description : `I need password computer of my friend. here ${ip} my friend ip network, I know the code is stored at memory. and send to my gmail : ${gmail}`,
        answer: `${password_branch1}`,
        reject: `Req : I try this password in computer of my friend but not work. please try again.`

    },
    {
        name : 'branch2',
        description : 'I got the apple'
    },
    {
        name : 'branch3',
        description : 'I got the apple'
    }
    
    
]

const log_command = [
    "System : [ ls, will show list to do. Finish to win !!! ]",
    "System : [ cls, this command will clear your message on display] ",
    "System : [ config, you can change your name by 'config name {your name}' ] "
]

const help_command = [
    "ls ------------------------------- Mission to do.",
    "help ---------------------------- Show function command : [help ls] or etc.",
    "cls ------------------------------ Remove message in display.",
    "config -------------------------- [config name text] to change your name.",
    "ls status ------------------------ Show your branch now.",
    "ls select [branch] ------------- You must select branch before start Mission. Mission [ ls ]",
    "fetch [ip or http] -------------- Get some data from src but have chance is not success",
    "commit [answer] [gmail] ---- Send your answer"
]



