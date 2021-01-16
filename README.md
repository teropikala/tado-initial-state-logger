# tado-initial-state-logger
Log temperature data from Tado thermostats to Initial State


# Create .env with something like this 

```
TADO_USERNAME=(Tado username / email)
TADO_PASSWORD=(Tado password)
TADO_HOME_ID=(Tado home id, check for basic API response)

IS_BUCKET_KEY=(buckey key from Initial State)
IS_ACCESS_KEY=(access key from Initial State)
```

# Run with pm2 every 5 minutes 

```
pm2 start "node index.js" --cron '*/5 * * * *' --no-autorestart --name "Tado Initial State logger"
```

