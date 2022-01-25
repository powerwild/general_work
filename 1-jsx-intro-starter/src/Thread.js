// create thread component to nest inside Div

const Thread = ({ firstName }) => {
    return (
        <div className='thread'>
            <h1>Thread Component</h1>
            <h2>My name is {firstName}</h2>
        </div>
    )
}

export default Thread;
