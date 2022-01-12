

const buttons = document.querySelectorAll('.delete-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const postId = e.target.id;
        const res = await fetch(`/posts/${postId}`, { method: 'DELETE'})
        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`post-container-${postId}`)
            
        }
    })
})
