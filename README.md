## Cities and Communes of Algeria API Documentation

This API provides information about cities and communes in Algeria.

General Information:

All responses are in `JSON` format.
All endpoints support `GET` requests.

### Endpoints:

**1. /cities:**

Description: Retrieves all cities in Algeria without their associated communes.

- **Request:** `GET /cities`

- **Response:**
  A JSON array containing objects representing cities, with the following properties:
- **id:** `(integer)` Unique identifier of the city.
- **name_latin:** `(string)` Name of the city in Latin script.
- **name_arabic:** `(string)` Name of the city in Arabic script.

**2. /cities/:id:**

Description: Retrieves a specific city by its ID, including its name but not its associated communes.

- **Request:** GET /cities/:id

1. **Parameters:**

- **:`id`** `(required, integer)`: Unique identifier of the city.

**Response:**

- If the city is found:
  A JSON object representing the city with the same properties as in the /cities response.
- If the city is not found:
  A JSON object message indicating the city was not found `{message: 'Not Found'}`.

**3. /communes:**

Description: Retrieves all communes in Algeria.

- **Request:** `GET /communes`
- **Response:**
  A JSON array containing objects representing communes, with the following properties:
- **id:** `(integer)` Unique identifier of the commune.
- **name_latin:** (string) Name of the commune in Latin script.
- **name_arabic:** (string) Name of the commune in Arabic script.

(city_id: (integer) Foreign key referencing the city the commune belongs to.) [ **NOT Available Yet** ]

**4. /communes/:communeName:**

Description: Retrieves a specific commune by typing its name in English or Arabic.

- **Request:** `GET /communes/:communeName`

1. **Parameters:**

- **:communeName** `(required, string):` Name of the commune to search for (case-insensitive).
- **Response:**

* If the commune is found:
  A JSON object representing the commune with the same properties as in the `/communes` response.
* If the commune is not found:
  A 404 Not Found status code with a message indicating the commune was not found.
  Notes:

The API does not currently provide information about the specific location (latitude, longitude) of cities or communes.
This documentation is subject to change and may not reflect the latest implementation details.
