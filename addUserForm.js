import { useState } from "react";

const AddUserForm = (props) =>{

    const initialFormState = {
        id:null,
        name:'',
        email:'',
        password:''
    }

  const [user,setUser] = useState(initialFormState);
  const handleInputChange = (e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})

  }
    return(
        <form onSubmit={
          e=>{
            e.preventDefault();
            if(!user.name||!user.email||!user.password) 
              return;
            props.addUser(user);
            setUser(initialFormState);

          }
        }>
            <label>name</label>
            <input type='text' onChange={handleInputChange} name='name' value={user.name} /><br/>
            <label>email</label>
            <input type='text' onChange={handleInputChange} name='email' value={user.email} /><br/>
            <label>password</label>
            <input type='text'  onChange={handleInputChange} name='password' value={user.password} /><br/>
            <button >add new user</button>
        </form>
    )


}
export default AddUserForm;