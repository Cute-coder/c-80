friends=[];
function submit(){
        var display_friends=[];
        for (var j=1;j<=3;j++){
            var friend_name=document.getElementById("friend"+j).value;
            console.log(friend_name);
            friends.push(friend_name);
        }
        console.log(friends);
        var length_of_array=friends.length;
        console.log(length_of_array);
        for (var k=0;k<=length_of_array;k++){
            display_friends.push("name- "+friends[k]);
            console.log(display_friends);
        }
            console.log(display_friends);
            document.getElementById("display_name").innerHTML=display_friends;
            var remove_commas=display_friends.join("");
            console.log(remove_commas);
            


    /*var name1= document.getElementById("friend1").value;
    var name2= document.getElementById("friend2").value;
    var name3= document.getElementById("friend3").value;
    friends.push(name1);
    friends.push(name2);
    friends.push(name3);
    console.log(friends);
    document.getElementById("display_name").innerHTML=friends;*/
    

}
function sort(){
    friends.sort();
    console.log(friends);
    document.getElementById("display_name").innerHTML=friends;
}
