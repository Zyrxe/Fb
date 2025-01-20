curl -i -X POST ^
  https://graph.facebook.com/v21.0/<PHONE_NUMBER_ID>/messages ^
  -H "Authorization: Bearer %WHATSAPP_TOKEN%" ^
  -H "Content-Type: application/json" ^
  -d "{
    \"messaging_product\": \"whatsapp\",
    \"to\": \"6282258003821\",
    \"type\": \"template\",
    \"template\": {
      \"name\": \"hello_world\",
      \"language\": {
        \"code\": \"en_US\"
      }
    }
  }"
