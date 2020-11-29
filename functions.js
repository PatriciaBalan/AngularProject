function renderUserHTML() {
    var user_items_html = '';

    users.forEach(function (user_item) {
        user_items_html = user_items_html + '<div class="user-item">' +
                                            '<span>' + user_item.id + '. ' +
                                            user_item.name + '</span>' + 
                                            '<button>x</button>' + 
                                            '</div>';      
    });

    // console.log(user_items_html);
    // console.log(user_item.name);
    // cu.name cand stim exact ce afisam
    //se poate si cu [name_property] cu un var name_property, 
    //doar cand nu stim ce afisam exact

    document.querySelector('.users').innerHTML = user_items_html
}

function addUser(){
    //get input value
    var input_value = document.querySelector('.add-user input').value;
    
    //prepare user object
    var new_user = {
        name: input_value
    };
    
    //send new user to server
    fetch(url, {
        method: 'post',
        body: JSON.stringify(new_user)
    }).then(function (response) {
        return response.json();
    }).then(function (result) {
        new_user.id = result.id;
        users.push(new_user);
        //rerender html
        renderUserHTML();
    });
}