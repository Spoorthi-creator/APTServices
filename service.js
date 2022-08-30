const firebaseConfig = {
    apiKey: "AIzaSyByzUT0x6GNkCD9ESwBpFixcqTZR3-ugAQ",
    authDomain: "apt-services-525c7.firebaseapp.com",
    databaseURL: "https://apt-services-525c7-default-rtdb.firebaseio.com",
    projectId: "apt-services-525c7",
    storageBucket: "apt-services-525c7.appspot.com",
    messagingSenderId: "738290879254",
    appId: "1:738290879254:web:af09cb88c4feec4ecc1e37"
};

firebase.initializeApp(firebaseConfig);

function delete_record(row_id) {

    firebase.database().ref('nameOfApt/' + row_id).remove().then(
        function () {
            alert("Record deleted!! Click on Show Users to view the users again");
            window.location.reload();
        });

}