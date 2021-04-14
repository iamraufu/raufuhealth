import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div className="col-md-4 mb-5">

            <div className="card shadow-sm  p-5">
                <div className="card-header d-flex  align-items-center">
                    <img className="mx-3" style={{ borderRadius: '50%' }} src={authorImg} alt="" width="60" />
                    <div>
                        <h6 className='text-brand'>{author}</h6>
                        <p className="m-0 text-secondary">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text blog-post-text text-secondary mt-4">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;