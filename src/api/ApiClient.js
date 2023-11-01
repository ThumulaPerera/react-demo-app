class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const performGetWithRetry = async (url) => {

    try {
        // call api
        return await performGet(url);
    } catch (error) {
        if (error instanceof HttpError && error.status === 401) {
            // We got 401 Unauthorized response from API GW. Our access token maybe expired.

            // Try to refresh the token
            const refreshResponse = await fetch("/auth/refresh", { method: "POST" })

            const status = refreshResponse.status;
            if (status === 401) {
                // Session has expired (i.e Refresh token has also expired). 
                // Redirect to login page
                window.location.href = "/auth/login";
            }
            if (status !== 204) {
                // we can't refresh token due to some error on app gateway side. 
                console.log ("Failed to refresh token. Status: " + status);
                
                // Hence just throw the 401 error from API Gateway. 
                throw error;
            }
            // Token refresh successful. Retry the API call.
            return await performGet(url);
        } else {
            throw error;
        }
    }
}

const performGet = (url) => {
    return fetch(url)
        .then(response => {
            const status = response.status;
            if (!response.ok) {
                throw new HttpError("Error fetching API. Status: " + status, status);
            }
            return response.text();
        })
        .then(body => {
            console.log("Response fetched:");
            console.log(body);
            return body;
        })
        .catch(error => {
            console.log(error);
            throw error; // Re-throw the error to propagate it
        });
}
