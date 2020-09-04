import React from 'react'

const message = 'You got this!'

// This react pattern allow us to predictably load data dynamic data into our react components
const Encouragment = ({render}) => (
    <div>
        {render({pepTalk: message})}
    </div>
)

const DisplayEncouragment = () => (
<Encouragment render={ ({pepTalk}) => <h1>{pepTalk}</h1>}/>
)

export default DisplayEncouragment
