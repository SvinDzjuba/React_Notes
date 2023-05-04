import React from 'react'
import { useParams } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import { AiFillLike } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

export default function Post() {
    let posts = require('../data/posts.json');
    let comments = require('../data/comments.json');
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    comments = comments.filter(comment => comment.postId === Number(id));
    return (
        <div className="post_page">
            <a href='/' className="btn btn-outline-secondary position-absolute top-0 m-3">Back to posts</a>
            <div className="post_container">
                <div className="post">
                    <div className="top d-flex justify-content-between">
                        <h2>{post.title}</h2>
                        <div>
                            <input type="checkbox" name='reaction' id='reaction' />
                            <button id="reactionBtn" className="btn btn-outline-primary mb-2"><AiFillLike /></button>
                        </div>
                    </div>
                    <div className="tags w-100 d-flex justify-content-end my-2">
                        {
                            post.tags.map(tag => {
                                return (
                                    <span key={tag} className="tag text-capitalize mx-1 text-warning">{tag}</span>
                                )
                            })
                        }
                    </div>
                    <p>{post.body}</p>
                    <div className="bottom d-flex justify-content-end">
                        <div className='w-50'>
                            <input type="text" placeholder='Reply...' />
                            <button className='btn'><FiSend /></button>
                        </div>
                    </div>
                    <div className="comments_container my-3 border-top border-2 pt-2">
                        <h3 className='text-center mb-3 mt-2'>Comments</h3>
                        <p className='text-center mb-0'>{comments.length === 0 ? 'There are no comments yet!' : ''}</p>
                        {
                            comments.map(comment => {
                                return (
                                    <div key={comment.id} className="comment bg-body-secondary px-2 d-flex mb-2">
                                        <div className="profile_img d-flex align-items-center justify-content-center">
                                            <CgProfile />
                                        </div>
                                        <div className='py-2'>
                                            <h5 className="w-100">{comment.user.username}</h5>
                                            <p className="w-100 mb-0">{comment.body}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
