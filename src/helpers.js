export const Validate = (title, description, body) => {
    if (title.length < 1) {
        return alert('Please enter title for the blog')
    }

    else if (description.length < 5) {
        return alert('Please enter a valid description for the blog')
    }

    else if (body.length < 5) {
        return alert('Please enter a valid body for the blog')
    }
    return true;
}
