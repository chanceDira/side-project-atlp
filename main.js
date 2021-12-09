const dbRef = db.ref();
const charatacters = [
    {
        "id": 0,
        "name": "kigali desire",
        "status": "alive",
        "age": 67,
        "isSmart": true
    },
    {
        "id": 1,
        "name": "Rwanda desire",
        "status": "alive",
        "age": 17,
        "isSmart": false
    },
    {
        "id": 0,
        "name": "kigali desire",
        "status": "alive",
        "age": 67,
        "isSmart": true
    },
    {
        "id": 1,
        "name": "Rwanda desire",
        "status": "alive",
        "age": 17,
        "isSmart": false
    },
    {
        "id": 1,
        "name": "Rwanda desire",
        "status": "alive",
        "age": 17,
        "isSmart": false
    }
]

// Create aka write to the db
dbRef.child('characters').set(charatacters);

// Read data

dbRef.child("characters").get().then(snapshot => {
    if(snapshot.exists()) {
        console.log(snapshot.val())
        //Do some DOM manupilation, list your characters in ul
    } else {
        console.log("No characters available!")
    }
}).catch(err => console.err(err))


//Get data from a form
const newCharacter = {
    id: 6,
    name: "Bird Person",
    status: "dead"
}

// Add a character
dbRef.child("characters").update({1: {
    id: 2,
    name: "bird person"
}

})