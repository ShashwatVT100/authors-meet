import { Link } from "react-router-dom";
function Users(){
    const users=[
        {id:1,name:'Harper Lee',book:'How to kill a Mockingbird'},
        {id:2,name:'George Loom',book:'1984'},
        {id:3,name:'Jane Austen',book:'Pride and Prejudice'},
        {id:4,name:'Scott Orwell',book:'The Great Gatsby'}
    ];
    return(
        <div className="users-page">
            <h1>Our Authors Collection</h1>
            <div className="users-list">
                {users.map(user=>(
                    <Link to={`/profiles/${user.id}`} key={user.id} className="user-item-link">
                        <div className="user-item">
                            <h3>{user.name}</h3><p>Book:- {user.book}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Users;