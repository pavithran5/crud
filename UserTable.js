const UserTable = (props) =>(
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
               props.users.map((user,index)=>(
             <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                    <button style={{backgroundColor:'blue'}}>edit</button>
                    <button style={{backgroundColor:'red'}}>delete</button>

                </td>
            </tr>

                ))
            ):(
                <tr>
                    <td colSpan={4}> no users</td>
                </tr>
            )
            }
            

        </tbody>
    </table>

)
export default UserTable;