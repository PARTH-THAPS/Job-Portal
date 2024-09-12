var usersInfo=[];


export default class Users
{
    constructor(id,name,email,password)
    { 
      this.id=id;
      this.name=name;
      this.email=email;
      this.password=password;
    }
    static add(name,email,password)
    {
     let newUsers= new Users(usersInfo.length+1,name,email,password);
     usersInfo.push(newUsers);
    }

    static Validate(email,password)
    {
      const result=usersInfo.find((u)=>{u.email===email && u.password===password});
    }
}