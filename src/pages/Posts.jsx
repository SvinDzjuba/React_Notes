import { CiSearch } from 'react-icons/ci';

const Posts = () => {
    return (
        <div className="posts_page">
            <div className="posts_container">
                <div className="posts_header">
                    <h1>Posts List</h1>
                    <input type="text" autoFocus placeholder="Keyword..." />
                    <button className="btn"><CiSearch /></button>
                </div>
                
            </div>
        </div>
    )
}

export default Posts