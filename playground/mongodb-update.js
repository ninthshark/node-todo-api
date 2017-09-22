//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59c4f153471bfd8a8c325a9f')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c4ed13471bfd8a8c325937')
    },{
        $set: {
            name: 'Kiattisak'
        },
        $inc: {
            age: 1

        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});