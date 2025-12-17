import { useParams,useNavigate } from "react-router-dom";
function UserDetail(){
    const {id} =useParams();
    const navigate=useNavigate();
    const users=[
        {id:1,name:'Harper Lee',book:'How to kill a Mockingbird',year:1960,description:'A gripping tale of a racial injustive and childhood innocence in the American South'},
        {id:2,name:'George Loom',book:'1984',year:1949,description:'A dystopian novel totalitarianism and surveillance in a future society'},
        {id:3,name:'Jane Austen',book:'Pride and Prejudice',year:1813,description:'A romantic novel about manners, marriage and society in Georgia, England'},
        {id:4,name:'Scott Orwell',book:'The Great Gatsby',year:1925,description:'A tale of wealth, love and the American Dream in the Jazz Age'}
    ];
    const user=users.find(b=>b.id===parseInt(id));
    if(!user){
        return(
            <div className="book-detail">
                <h2>User Not found!</h2>
                <p>Sorry, we couldn't find the user you're looking for.</p>
                <button onClick={()=>navigate('/profiles')} className="back-button">Back to Users</button>
            </div>
        );
    }
    return(
        <div className="user-detail">
            <button onClick={()=>navigate('/profiles')} className="back-button">Back to Users</button>
            <h1>{user.name}</h1>
            <div className="user-meta">
                <p className="book">Book:- {user.book}</p>
                <p className="year">Published: {user.year}</p>
            </div>
            <div className="user-description">
                <h3>Description</h3>
                <p>{user.description}</p>
            </div>
        </div>
    );
}
export default UserDetail;