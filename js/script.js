var users = [
    {
        name: 'Angela',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Lisa',
        gender: 'F',
        hobby: 'music',
        avatar: 'avatar2.png'
    },
    {
        name: 'Victor',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Emmanuel',
        gender: 'M',
        hobby: 'photography',
        avatar: 'avatar4.png'
    },
    {
        name: 'Diana',
        gender: 'F',
        hobby: 'coding',
        avatar: 'avatar5.png'
    },
    {
        name: 'Daniel',
        gender: 'M',
        hobby: 'eatingg',
        avatar: 'avatar6.png'
    },
    {
        name: 'Robertson',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var ageField = document.getElementById('age');
        // var 

        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});