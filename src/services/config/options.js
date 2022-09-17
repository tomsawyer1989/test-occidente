const headers = () => {
    return {
        'Content-Type': 'application/json'
    }
}

export const optionsGET = () => ({
    method: 'GET',
    headers: headers(),
});