import React from 'react'
import Comment from './Comment'

const commentData= [
    {
        name: "Test User",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
    },
    {
        name: "Test User",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
    },
    {
        name: "Test User",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
            {
                name: "Test User",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: []
            },
            {
                name: "Test User",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [
                    {
                        name: "Test User",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        replies: [
                            {
                                name: "Test User",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const CommentsList =({comments}) => {
    return comments.map((comment, index)=>(
        <div key={index}>
            <Comment className  data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>

    ))
};
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer
