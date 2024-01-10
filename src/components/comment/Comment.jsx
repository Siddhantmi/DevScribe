import React from 'react'
import { useSession } from 'next-auth/react'
import { format } from 'timeago.js'

import { BsTrash } from 'react-icons/bs'
import classes from './comment.module.css'
import Image from 'next/image'

const Comment = ({ comment, setComments }) => {
  const baseURL = process.env.NEXTAUTH_URL
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  const handleDeleteComment = async () => {
    try {
      await fetch(`https://devscribe.me/api/comment/${comment?._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: "DELETE"
      })

      setComments(prev => {
        return [...prev].filter((c) => c?._id !== comment?._id)
      })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image className={classes.userimg} src="/user.png" width='45' height='45' alt="" />
        <div className={classes.userDetails}>

          <div className={classes.usernameTime}>

            <div className={classes.usernamewithtime}>
              <h4 className={classes.username}>{comment?.authorId?.username}</h4>
              <span className={classes.timeago}>{format(comment?.createdAt)}</span>
            </div>
          </div>

          <div className={classes.commentText}>{comment?.text}</div>
          <div className={classes.actions}>
            <div>

            </div>
            <div className={classes.likeDislike}>
              <div className={classes.actionButton}>
                Like 12
              </div>
              <div className={classes.actionButton}>Dislike 2</div>
              <div className={classes.actionButton}>Reply</div>
            </div>
            {session?.user?._id === comment?.authorId?._id && (
              <div className={classes.trashIcon} onClick={handleDeleteComment}>
                <BsTrash />
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );



}

export default Comment