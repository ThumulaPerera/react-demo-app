export const performGet = (url) => {
    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error("API returned an error. Status: " + response.status);
            }
            return response.text();
        })
        .then(body => {
            console.log("Response fetched:");
            console.log(body);
            return body;
        })
        .catch(error => {
            console.log("Error fetching API:");
            console.log(error);
            throw error; // Re-throw the error to propagate it
        });
}
