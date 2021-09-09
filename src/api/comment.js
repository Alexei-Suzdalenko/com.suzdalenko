import firebase from "firebase";


async function saveThisComment (id, name, com){
    return firebase.database().ref('comment/' + id).push().set({'name': name, 'com': com});
};

async function getMeThisList (id){
    let result = [];
    return firebase.database().ref('comment/' + id).get().then(res => {
        res.forEach(function (childSnapshot) {
            let objectData = {};
            objectData.name = childSnapshot.val().name;
            objectData.com = childSnapshot.val().com;
            result.push(objectData);
        });
        return result;
    }); 
};

export default{
    saveThisComment, getMeThisList
}