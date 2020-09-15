let users = [
    {
    firstName: 'Joe',
    lastName:'Orin',
    car: 'Porsche',
    dog:'Shitzu',
    },
    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },
    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },
    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
    ];
 users.map(user => console.log(user.firstName, user.lastName))
 const userss = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
    ];
userss.reduce((result,user)=>{
    const indi = {};
    indi[user.name] = user.likes;
    indi.age = user.name.length*10;
    result.push(indi);
    return result;   
},[]);





