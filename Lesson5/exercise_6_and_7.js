fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=WQRO3UTVDDY4WC86')
    .then(response => response.json())
    .then(data => {
        annualEarnings = data["annualEarnings"]
        for(let i = 0; i < annualEarnings.length; i++) {
            if (annualEarnings[i]["fiscalDateEnding"].includes("2020")) {
                console.log(annualEarnings[i]["reportedEPS"])
                return
            }
        }
    })
    