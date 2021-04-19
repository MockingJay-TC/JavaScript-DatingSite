var users = [{
        name: 'Angela',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age: 21
    },
    {
        name: 'Lisa',
        gender: 'F',
        hobby: 'music',
        avatar: 'avatar2.png',
        age: 25
    },
    {
        name: 'Victor',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png',
        age: 24
    },
    {
        name: 'Emmanuel',
        gender: 'M',
        hobby: 'photography',
        avatar: 'avatar4.png',
        age: 26
    },
    {
        name: 'Diana',
        gender: 'F',
        hobby: 'coding',
        avatar: 'avatar5.png',
        age: 25
    },
    {
        name: 'Daniel',
        gender: 'M',
        hobby: 'eatingg',
        avatar: 'avatar6.png',
        age: 28
    },
    {
        name: 'Robertson',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png',
        age: 26
    },
    {
        name: 'Elliot',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar7.png',
        age: 31
    },
];

window.addEventListener('load', function () {

    var results = document.getElementById('results');

    function search() {

        //get hobby
        let hobbyField = document.getElementById('hobby');
        let hobby = hobbyField.value;

        //get gender
        let genderField = document.getElementById('gender');
        let s = genderField.selectedIndex;
        let gender = genderField.options[s].value;

        let min = document.getElementById('minAge').value;
        let max = document.getElementById('maxAge').value;
        // var 


        let resultsHtml = '';
        let usersLength = users.length;


        // **********************************************************************************
        for (var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    if (min === '' || max === '' || (min <= users[i].age && max >= users[i].age)) {
                        resultsHtml +=
                            '<div class="person-row">\
                        <img src="images/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' + users[i].name + '</div>\
                        <div>' + users[i].hobby + '</div>\
                        <div>' + users[i].age + '</div></div>\
                        <button>Add as friend</button></div>';
                    }

                }
            }
        }

        // ***********************************************************************************************************************
        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});