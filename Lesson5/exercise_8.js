fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
            ticker: 'APPL',
            name: 'Apple Inc',
            price: 171.48
        })
    }
)
.then(response => response.json())
.then(output => console.log(output))