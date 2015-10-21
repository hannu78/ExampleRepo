//JSON = JavaScript Object Notation

var hannu = {
	id:0,
	name: "Hannu Lisko",
	address: "Katukatu 10",
	age: 10,
	kissa: "Miuku",
	array: [1,2,3,4,5,6],
	embedded_olio: {
		yksi: 1,
		kaksi: 2,
	},
	genre: "Heavy",
	callback: function(){return "hello world"},
};

hannu.callback();
hannu.embedded_olio.yksi = 12;

 //db.person.insert({name:"Markus Veijola",address:"Jokukatu 1",age:20});
 // var person_tmp = {
//.. name: "Juha Keskinen",
// .. address: "Keskisentie 2",
//.. age: 50};
// db.person.insert(person_tmp);

/*
> db.person.find().pretty();
{
        "_id" : ObjectId("56262c2e8bddcd3f86ffea40"
        "name" : "Markus Veijola",
        "address" : "Jokukatu 1",
        "age" : 20
}
{
        "_id" : ObjectId("56262e948bddcd3f86ffea41"
        "name" : "Juha Keskinen",
        "address" : "Keskisentie 2",
        "age" : 50
}
/*
