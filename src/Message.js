import React,{ forwardRef } from 'react'
import { Card ,CardContent, Typography } from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({message , username} , ref) => {
const isUser = username === message.username;
    
    return (
            <Card ref={ref} className={{'message':'true' , 'message_user':isUser  }}>
                <CardContent className={{'message_userCard':isUser ,"message_guestCard":!isUser} } >
                    <Typography 
                        color ="white"
                        variant="h5"
                        component="h2">
                            
                            {!isUser && message.username} {message.text}
                        
                    </Typography>

                </CardContent>
            </Card>              

        
            
        
    )
})

export default Message
