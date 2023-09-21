// Get elements from the DOM
const blogForm = document.getElementById('blogForm');
const postsContainer = document.getElementById('postsContainer');

// Function to add a new blog post
function addPost(title, content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    postsContainer.appendChild(postDiv);
}

// Event listener for the form submission
blogForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        addPost(title, content);
        titleInput.value = '';
        contentInput.value = '';
    }
});
