import { CiSearch } from 'react-icons/ci';
import { FiSend } from 'react-icons/fi';

const Posts = () => {
    let posts = require('../data/posts.json');
    let comments = require('../data/comments.json');
    let data = [];
    for (let i = 1; (i - 1) < posts.length; i++) {
        let answers = [];
        for (let j = 0; j < comments.length; j++) {
            if(comments[j].postId === posts[i].id) {
                answers.push(comments[j]);
            }
        }
        let obj = {
            post: posts[i],
            comments: answers
        };
        data.push(obj);

        if(i === 15) break;
    }
    return (
        <div className="posts_page">
            <div className="posts_container">
                <div className="posts_header">
                    <h1>User posts from all over the world</h1>
                    <div>
                        <input type="text" className="form-control" autoFocus placeholder="Keyword..." />
                        <button className="btn btn-secondary"><CiSearch /></button>
                    </div>
                </div>
                <div className="posts_list">
                    {
                        data.map(data => {
                            return (
                                <div className="post">
                                    <h2>{data.post.title}</h2>
                                    <p>{data.post.body}</p>
                                    <div className="bottom">
                                        <div>
                                            <input type="text" placeholder='Reply...' />
                                            <button className='btn'><FiSend /></button>
                                        </div>
                                        <button className="btn btn-primary">Answers</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts;