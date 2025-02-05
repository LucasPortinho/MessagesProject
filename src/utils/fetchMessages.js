export const fetchMessages = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonResponse = await response.json()
    return jsonResponse
}
