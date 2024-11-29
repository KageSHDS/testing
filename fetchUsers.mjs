const url = 'https://jsonplaceholder.typicode.com/users'


export async function fetchUser() {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw response.error;
        }
        const users = await response.json();
        // console.log(users)
        return users;
    }catch (error) {
        console.error("Error fetching users:", error);
        return undefined;
    }
}
fetchUser()

export async function fetchPrint() {
    return fetch(url)
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        });
        return users;
    })    
    .catch(error => console.error('Error fetching users', error));
}