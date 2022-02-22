import React from 'react'
import './index.scss'

function Comment(props: any) {
  const { userIcon, info } = props
  return (
    <div className='comment'>
      <img className='comment-user-logo' src={userIcon} alt='' />
      <div>
        <div className='comment-user-info'>{info}</div>
        <div className='comment-message'>{props.children}</div>
      </div>
    </div>
  )
}

function CommentList(props: any) {
  const { children, ...rest } = props
  return (
    <div className='rh-comment-list' {...rest}>
      {children}
    </div>
  )
}

CommentList.Comment = Comment

export default CommentList
